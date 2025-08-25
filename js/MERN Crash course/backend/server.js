import express from "express";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

import { connectDB } from "./config/db.js";
import productRoutes from "./router/product.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Fix chuẩn __dirname trong ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use(express.json());

// ✅ API route
// app.use("/api/products", productRoutes);

// ✅ Serve frontend trong production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend", "dist", "index.html"));
  });
}

app.listen(PORT, () => {
  connectDB();
  console.log("Server started at http://localhost:" + PORT);
});
