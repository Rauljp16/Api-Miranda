import { Router, Request, Response, NextFunction } from "express";
import { allBookings, bookingById, createBooking, updateBooking, deleteBooking } from "../services/bookingServices";

const router = Router();

router.get("/", (_req: Request, res: Response, _next: NextFunction) => {
    const bookings = allBookings();
    return res.json({ bookings });
});

router.post("/", (req: Request, res: Response, next: NextFunction) => {
    try {
        const body = req.body;
        const newBooking = createBooking(body);
        return res.json(newBooking);
    } catch (e) {
        next(e);
        return;
    }
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

router.patch("/:id", (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const update = updateBooking(id, body)
        return res.json(update);
    } catch (e) {
        next(e);
        return;
    }
});

router.delete("/:id", (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id;
        const deleteOne = deleteBooking(id)
        return res.json(deleteOne);
    } catch (e) {
        next(e);
        return;
    }
});


export default router;
