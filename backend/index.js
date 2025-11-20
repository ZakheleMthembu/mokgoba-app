import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import exampleRoutes from "./routes/exampleRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ROOT TEST ROUTE
app.get("/", (req, res) => {
  res.send("Mokgoba Backend is Running...");
});

// API ROUTES
app.use("/api", exampleRoutes);

// PORT FOR RENDER
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
