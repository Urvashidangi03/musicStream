import app from './src/app.js';
import connectToDatabase from './src/db/db.js';
import dotenv from 'dotenv';
import express from "express"
dotenv.config(); // Load .env variables

// Connect to MongoDB
connectToDatabase();

const app = express();                // Create express app

app.use(express.static('public'));

app.get("*name",(req,res) => {
  res.sendFile(__dirname + "/public/index.html");
})

// Use the Render-provided port or fallback to 3000
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`✅ Server is running on http://localhost:${PORT}`);
});
