import express from "express";
import { createPlayer, deletePlayer, getOnePlayer, getPlayers, updatePlayer } from "../controllers/playersController.js";
import { verifyRole } from "../middlewares/roleMiddleware.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";

const playerRouter = express.Router();

// Crear Player
playerRouter.post('/', authMiddleware, verifyRole,createPlayer)
playerRouter.get('/', getPlayers)
playerRouter.get('/:id', getOnePlayer)
playerRouter.delete('/:id', deletePlayer)
playerRouter.put('/:id', updatePlayer)


export default playerRouter;