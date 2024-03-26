import express from "express";
import { createPlayer, deletePlayer, getOnePlayer, getPlayers, updatePlayer } from "../controllers/playersController.js";


const playerRouter = express.Router();

// Crear Player
playerRouter.post('/', createPlayer)
playerRouter.get('/', getPlayers)
playerRouter.get('/:id', getOnePlayer)
playerRouter.delete('/:id', deletePlayer)
playerRouter.put('/:id', updatePlayer)


export default playerRouter;