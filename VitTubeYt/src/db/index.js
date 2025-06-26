import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";

const connectDB = async () => {
    try {
        const connctionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`Database Connected - DB Host : ${connctionInstance.connection.host}`)
    } catch (error) {
        console.error("MONGODB Connection Error: ", error)
        process.exit(1)
    }
}

export default connectDB    