const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Backend running ✔️');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
