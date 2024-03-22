import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
    const token = req.header("auth");

    if (!token) {
        return res.status(401).json({ message: "Acceso denegado. Token no proporcionado." });
    }

    try {
        const decoded = jwt.verify(token, "codesecret");
        // Agregar el rol del usuario al objeto decoded antes de asignarlo a req.user
        req.user = { ...decoded, role: "admin" }; // Aquí puedes establecer el rol según tus necesidades
        console.log(req.user); // Esto permite verificar que el objeto req.user ahora incluye el rol
        next();
    } catch (error) {
        return res.status(400).json({ message: "Token inválido." });
    }
};