require('dotenv').config()
const express = require('express')
const cors = require('cors')
const multer = require('multer')
const path = require('path')
const fs = require('fs')
const nodemailer = require('nodemailer')
const fetch = (...args) => import('node-fetch').then(({default:fn}) => fn(...args))

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const uploadDir = path.join(__dirname, 'uploads')
if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir)

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
})
const upload = multer({ storage })

function getTransporter(){
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS }
  })
}

app.post('/api/contact', async (req, res) => {
  try{
    const { name, email, message } = req.body
    const transporter = getTransporter()
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'ithembalokwakha@gmail.com, bizhubmkg@gmail.com',
      subject: `Website Contact: ${name || 'No name'}`,
      text: `From: ${name} <${email}>\n\n${message}`
    })
    res.json({ message: 'Message sent' })
  }catch(e){ console.error(e); res.status(500).json({error:'failed to send'}) }
})

app.post('/api/upload-payment', upload.single('proof'), (req, res) => {
  const { name, amount } = req.body
  const file = req.file
  res.json({ message: 'Proof uploaded', file: file ? file.filename : null })
})

app.post('/api/quote', (req, res) => {
  const quote = { id: 'Q-' + Date.now(), amount: 2500, expires: new Date(Date.now()+7*24*3600).toISOString() }
  res.json({ quote })
})

app.post('/api/receipt', (req, res) => {
  const { name, amount } = req.body
  const receipt = { id: 'R-' + Date.now(), name, amount, issued: new Date().toISOString() }
  res.json({ receipt })
})

app.post('/api/chat', async (req, res) => {
  try{
    const { message } = req.body
    if(!process.env.OPENAI_API_KEY) return res.status(500).json({ error: 'OpenAI key not set' })

    const systemPrompt = `You are Mokgoba Business & Print Hub assistant. Company offers printing, clothing branding, business admin, registrations. Provide concise helpful answers, include how to request quote, payment methods, delivery time guidance.`
    const resp = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${process.env.OPENAI_API_KEY}` },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: message }
        ],
        max_tokens: 400
      })
    })
    const data = await resp.json()
    const reply = data?.choices?.[0]?.message?.content || 'Sorry, no reply from provider.'
    res.json({ reply })
  }catch(e){ console.error(e); res.status(500).json({ error: 'chat failed' }) }
})

const PORT = process.env.PORT || 4000
app.listen(PORT, ()=>console.log(`Backend running on ${PORT}`))
