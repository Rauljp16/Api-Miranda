import { Router, Request, Response, NextFunction } from "express";
import { allRooms, roomById, createRoom, updateRoom, deleteRoom } from "../services/roomServices";

const router = Router();


router.get("/", (_req: Request, res: Response, _next: NextFunction) => {
    const rooms = allRooms();
    return res.json({ rooms });
});

router.post("/", (req: Request, res: Response, next: NextFunction) => {
    try {
        const body = req.body;
        const newRoom = createRoom(body);
        return res.json(newRoom);
    } catch (e) {
        next(e);
        return;
    }
});

router.get('/:id', (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id;

        const room = roomById(id);

        return res.json(room);
    } catch (e) {
        next(e);
        return;
    }
});

router.patch("/:id", (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const update = updateRoom(id, body)
        return res.json(update);
    } catch (e) {
        next(e);
        return;
    }
});

router.delete("/:id", (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id;
        const deleteOne = deleteRoom(id)
        return res.json(deleteOne);
    } catch (e) {
        next(e);
        return;
    }
});

export default router;
