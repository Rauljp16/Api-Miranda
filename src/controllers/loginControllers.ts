import { Router, Request, Response, NextFunction } from "express";
import { generateAccessToken } from "../services/loginServices";

const router = Router()

router.post("/", (_req: Request, res: Response, _next: NextFunction) => {
    //const { username, password } = req.body;
    const username = "rauljp16@gmail.com"
    const password = "hotel miranda"

    if (username === "rauljp16@gmail.com" && password === "hotel miranda") {
        const token = generateAccessToken(username);
        return res.json({ token })
    }
    return res.status(401).json({ message: "invalid credentials" })
})

export default router;