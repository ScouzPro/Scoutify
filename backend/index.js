import express from "express";
import dotenv from "dotenv"
import { db } from "./database/database.js";
import playerRouter from "./routes/playersRouter.js"

dotenv.config();

const app = express()
app.use(express.json())
app.use("/player", playerRouter)

db()

app.listen(3001, console.log("Conneted"))