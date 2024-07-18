import { Router, Request, Response, NextFunction } from "express";
import { generateAccessToken } from "../services/loginServices";

const router = Router()

router.post("/", (req: Request, res: Response, _next: NextFunction) => {
    const { username, password } = req.body;

    if (username === process.env.USER && password === process.env.PASSWORD) {
        const token = generateAccessToken(username);
        return res.json({ token })
    }
    return res.status(401).json({ message: "invalid credentials" })
})

export default router;