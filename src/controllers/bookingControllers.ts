import { Router, Request, Response, NextFunction } from "express";
import { allBookings, bookingById } from "../services/bookingServices";

const router = Router();

router.get("/", (_req: Request, res: Response, _next: NextFunction) => {
    const bookings = allBookings();
    return res.json({ bookings });
});

router.post("/", (_req: Request, _res: Response, _next: NextFunction) => {
    //     const input = req.body;
    //create booking
    //    return res.json({booking{}});
});

router.get("/:id", (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id;
        const booking = bookingById(id);

        return res.json(booking);
    } catch (e) {
        next(e);
        return;
    }
});

router.patch("/:id", (_req: Request, _res: Response, _next: NextFunction) => {
    // try {
    //     const id = req.params.id;
    //     const booking = bookingById(id);

    // update booking here
    //     return res.json(booking);
    // } catch (e) {
    //     next(e);
    //     return;
    // }
});

router.delete("/:id", (_req: Request, _res: Response, _next: NextFunction) => {
    //     try {
    //         const id = req.params.id;
    //         const booking = bookingById(id);

    // delete booking here
    //         return res.json({success: true});
    //     } catch (e) {
    //         next(e);
    //         return;
    //     }
});

export default router;
