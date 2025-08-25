import express from "express"
import authRoutes from "./routes/auth.route.js"
import dotenv from "dotenv"
import { connectDB } from "./lib/db.js"
import cookieParser from "cookie-parser"
import messageRoutes from "./routes/message.route.js"

const app = express()

dotenv.config()
const PORT = process.env.PORT || 5001
app.use(cookieParser())
app.use(express.json())
app.use("/api/auth", authRoutes)
app.use("/api/message", messageRoutes)

app.listen(PORT, () => {
    console.log("server is running on port " + PORT)
    connectDB();
})