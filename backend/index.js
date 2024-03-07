import express from "express";
import dotenv from "dotenv";
import { db } from "./database/database.js";
import reportRoutes from "./routes/reportRoutes.js";
import playerMetricsRouter from './routes/metricRoutes.js'

dotenv.config();

const app = express();
app.use(express.json());

db();

app.use('/api', reportRoutes);
app.use('/', playerMetricsRouter);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

