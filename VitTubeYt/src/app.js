import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express()

app.use(cors({
   origin: process.env.CORS_ORIGIN,
   credentials: true 
}))

app.use(express.json({limit: "16kb"})) // agar data json format main aaye 
app.use(express.urlencoded({extended: true, limit: "16kb"})) // express ko batana hai ke idhar se bhi data aasakta hai 
app.use(express.static("public")) // file / folder aaye tou idhar save karlo 

app.use(express.cookieParser())

export { app }