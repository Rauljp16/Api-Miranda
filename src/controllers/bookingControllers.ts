import { Router, Request, Response, NextFunction } from "express";
import { allBookings, bookingById } from "../services/bookingServices";

const router = Router();


router.get("/", (_req: Request, res: Response, _next: NextFunction) => {
    const bookings = allBookings();
    res.json(bookings);
});


router.get('/:id', (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id;
        if (!id) {
            return res.status(400).json({ message: 'ID is required' });
        }

        const booking = bookingById(id);

        if (!booking) {
            return res.status(404).json({ message: 'Booking not found' });
        }

        return res.json(booking);
    } catch (e) {
        next(e);
        return;
    }
});

export default router;