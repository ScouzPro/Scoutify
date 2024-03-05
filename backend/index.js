import express from "express";
import dotenv from "dotenv"
import { db } from "./database/database.js";
import playerMetricsRouter from './pruebaController/controladorPrueba.js'

dotenv.config();

const app = express()
app.use(express.json())

app.listen(3001, console.log("Conneted"))
db()

app.use('/metricas', playerMetricsRouter);