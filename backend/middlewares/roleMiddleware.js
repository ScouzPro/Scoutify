import { User } from "../models/authModel.js"

export const verifyRole = async (req, res, next) => {
    if (req.user.role !== "admin") {
        return res.status(401).json({ message: "No tienes permisos para acceder a esta función." });
    }
    next();
};
