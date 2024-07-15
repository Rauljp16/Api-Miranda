import { Router, Request, Response, NextFunction } from "express";
import { allRooms, roomById } from "../services/roomServices";

const router = Router();


router.get("/", (_req: Request, res: Response, _next: NextFunction) => {
    const rooms = allRooms();
    res.json(rooms);
});


router.get('/:id', (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id;
        if (!id) {
            return res.status(400).json({ message: 'ID is required' });
        }

        const room = roomById(id);

        if (!room) {
            return res.status(404).json({ message: 'Room not found' });
        }

        return res.json(room);
    } catch (e) {
        next(e);
        return;
    }
});

export default router;
