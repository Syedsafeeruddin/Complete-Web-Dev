import dotenv from "dotenv"
import { app } from "./app.js";
import connectDB from "./db/index.js";

dotenv.config({
    path: "./.env"
})

const PORT = process.env.PORT || 7001

connectDB()
.then(() => {
    app.listen(PORT, () => {
        console.log(`server is running on ${PORT}`)
    })
})
.catch((err) => {
    console.log("MongoDB connection error ", err);
})