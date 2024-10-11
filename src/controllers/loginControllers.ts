import { Router, Request, Response, NextFunction } from "express";
import { generateAccessToken } from "../services/loginServices";

const router = Router();

router.post("/", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { username, password } = req.body;

        console.log("Datos recibidos del frontend:", { username, password });

        // Usamos el servicio para generar el token y obtener el usuario
        const result = await generateAccessToken(username, password);

        // Aseguramos que tanto el token como el usuario sean enviados de vuelta al front
        return res.json({ token: result.token, user: result.user });

    } catch (e) {
        // Manejo de errores
        next(e);
        return res.status(401).json({ message: "Invalid credentials" });
    }
});

export default router;
