import mongoose from "mongoose"


const connectDB = async () => {
    console.log(process.env.MONGO_URI)
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI)
        console.log( "connect db"+ connect.connection.host)
    } catch (error){
        console.log("❌ connect db fault:" + error.message)
    }
}

export default connectDB