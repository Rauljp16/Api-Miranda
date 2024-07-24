"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bookingServices_1 = require("../services/bookingServices");
const router = (0, express_1.Router)();
router.get("/", (_req, res, _next) => {
    const bookings = (0, bookingServices_1.allBookings)();
    return res.json({ bookings });
});
router.post("/", (req, res, next) => {
    try {
        const body = req.body;
        const newBooking = (0, bookingServices_1.createBooking)(body);
        return res.json(newBooking);
    }
    catch (e) {
        next(e);
        return;
    }
});
router.get("/:id", (req, res, next) => {
    try {
        const id = req.params.id;
        const booking = (0, bookingServices_1.bookingById)(id);
        return res.json(booking);
    }
    catch (e) {
        next(e);
        return;
    }
});
router.patch("/:id", (req, res, next) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const update = (0, bookingServices_1.updateBooking)(id, body);
        return res.json(update);
    }
    catch (e) {
        next(e);
        return;
    }
});
router.delete("/:id", (req, res, next) => {
    try {
        const id = req.params.id;
        const deleteOne = (0, bookingServices_1.deleteBooking)(id);
        return res.json(deleteOne);
    }
    catch (e) {
        next(e);
        return;
    }
});
exports.default = router;
