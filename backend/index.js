import express from "express";
import dotenv from "dotenv";
import cors from "cors"; 
import { db } from "./database/database.js";
import playerRouter from "./routes/playersRouter.js"
import reportRoutes from "./routes/reportRoutes.js";
import playerMetricsRouter from './routes/metricRoutes.js'
import authRoutes from './routes/authRoutes.js'
import seasonRoutes from './routes/seasonRoutes.js'
import { Path } from "mongoose";

dotenv.config();

const app = express();
app.use(express.json());

const _dirname = path.resolve()

//RUTAS DE USO
app.use(cors());
app.use('/', playerMetricsRouter);
app.use('/api', reportRoutes);
app.use("/player", playerRouter)
app.use("/season", seasonRoutes)
app.use("/auth", authRoutes);
app.use(express.static(path.join(_dirname, "/frontend/dist")));
app.get('*', (req, res) => {
    res.sendFile(path.join(_dirname, "frontend", "dist", "index.html"));
});

//PUERTO Y DB
db();
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

