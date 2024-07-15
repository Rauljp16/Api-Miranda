import { Router, Request, Response, NextFunction } from "express";
import { allUsers, userById } from "../services/userServices";

const router = Router();


router.get("/", (_req: Request, res: Response, _next: NextFunction) => {
    const users = allUsers();
    res.json(users);
});


router.get('/:id', (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id;
        if (!id) {
            return res.status(400).json({ message: 'ID is required' });
        }

        const user = userById(id);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        return res.json(user);
    } catch (e) {
        next(e);
        return;
    }
});

export default router;