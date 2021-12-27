import express from "express";
import cors from "cors"
import Router from "./Routes/campers.js"

let app = express()

app.use(express.json())
app.use(cors());

app.use("/campers",Router)


export default app