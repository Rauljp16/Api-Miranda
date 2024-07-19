import { Router, Request, Response, NextFunction } from "express";
import { allRooms, roomById } from "../services/roomServices";

const router = Router();


router.get("/", (_req: Request, res: Response, _next: NextFunction) => {
    const rooms = allRooms();
    return res.json({ rooms });
});

router.post("/", (_req: Request, _res: Response, _next: NextFunction) => {
    //     const input = req.body;
    //create room
    //    return res.json({room{}});
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

router.patch("/:id", (_req: Request, _res: Response, _next: NextFunction) => {
    // try {
    //     const id = req.params.id;
    //     const room = roomById(id);

    // update room here
    //     return res.json(room);
    // } catch (e) {
    //     next(e);
    //     return;
    // }
});

router.delete("/:id", (_req: Request, _res: Response, _next: NextFunction) => {
    //     try {
    //         const id = req.params.id;
    //         const room = roomById(id);

    // delete room here
    //         return res.json({success: true});
    //     } catch (e) {
    //         next(e);
    //         return;
    //     }
});

export default router;
