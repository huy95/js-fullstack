import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRouter from "./router/product.route.js"


dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

console.log(process.env.MONGO_URI);
app.use(express.json());

app.use("/api/products", productRouter)

app.listen(port, () => {
  connectDB();
  console.log(`Example app listening on port ${port}`);
});
