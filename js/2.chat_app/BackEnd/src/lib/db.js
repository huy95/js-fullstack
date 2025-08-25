import mongoose from "mongoose"
export const connectDB = async () => {
    try {
        console.log(process.env.MONGO_URI);
        const con = await mongoose.connect(process.env.MONGO_URI)
    } catch (error) {
        console.log("mongodb connect error:" , error);
    }
}