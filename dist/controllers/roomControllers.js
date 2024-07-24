"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const roomServices_1 = require("../services/roomServices");
const router = (0, express_1.Router)();
router.get("/", (_req, res, _next) => {
    const rooms = (0, roomServices_1.allRooms)();
    return res.json({ rooms });
});
router.post("/", (req, res, next) => {
    try {
        const body = req.body;
        const newRoom = (0, roomServices_1.createRoom)(body);
        return res.json(newRoom);
    }
    catch (e) {
        next(e);
        return;
    }
});
router.get('/:id', (req, res, next) => {
    try {
        const id = req.params.id;
        const room = (0, roomServices_1.roomById)(id);
        return res.json(room);
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
        const update = (0, roomServices_1.updateRoom)(id, body);
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
        const deleteOne = (0, roomServices_1.deleteRoom)(id);
        return res.json(deleteOne);
    }
    catch (e) {
        next(e);
        return;
    }
});
exports.default = router;
