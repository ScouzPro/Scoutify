import express from "express";
import dotenv from "dotenv";
import cors from "cors"; 
import { db } from "./database/database.js";
import playerRouter from "./routes/playersRouter.js"
import reportRoutes from "./routes/reportRoutes.js";
import playerMetricsRouter from './routes/metricRoutes.js'

dotenv.config();

const app = express();
app.use(express.json());

db();
app.use(cors());
app.use('/api', reportRoutes);
app.use('/', playerMetricsRouter);
app.use("/player", playerRouter)
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

