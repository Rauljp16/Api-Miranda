"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const contactServices_1 = require("../services/contactServices");
const router = (0, express_1.Router)();
router.get("/", (_req, res, _next) => {
    const contact = (0, contactServices_1.allContact)();
    return res.json({ contact });
});
router.post("/", (req, res, next) => {
    try {
        const body = req.body;
        const newContact = (0, contactServices_1.createContact)(body);
        return res.json(newContact);
    }
    catch (e) {
        next(e);
        return;
    }
});
router.get('/:id', (req, res, next) => {
    try {
        const id = req.params.id;
        const contact = (0, contactServices_1.contactById)(id);
        return res.json(contact);
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
        const update = (0, contactServices_1.updateContact)(id, body);
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
        const deleteOne = (0, contactServices_1.deleteContact)(id);
        return res.json(deleteOne);
    }
    catch (e) {
        next(e);
        return;
    }
});
exports.default = router;
