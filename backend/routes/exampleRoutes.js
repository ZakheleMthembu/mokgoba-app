import express from "express";
const router = express.Router();

// Test API route (frontend will fetch this)
router.get("/test", (req, res) => {
  res.json({
    status: "success",
    message: "Backend API working!"
  });
});

export default router;
