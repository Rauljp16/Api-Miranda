import { Router, Request, Response, NextFunction } from "express";
import { allContact, contactById, createContact, updateContact, deleteContact } from "../services/contactServices";

const router = Router();


router.get("/", (_req: Request, res: Response, _next: NextFunction) => {
    const contact = allContact();
    return res.json({ contact });
});

router.post("/", (req: Request, res: Response, next: NextFunction) => {
    try {
        const body = req.body;
        const newContact = createContact(body);
        return res.json(newContact);
    } catch (e) {
        next(e);
        return;
    }
});


router.get('/:id', (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id;

        const contact = contactById(id);

        return res.json(contact);
    } catch (e) {
        next(e);
        return;
    }
});

router.patch("/:id", (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const update = updateContact(id, body)
        return res.json(update);
    } catch (e) {
        next(e);
        return;
    }
});

router.delete("/:id", (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id;
        const deleteOne = deleteContact(id)
        return res.json(deleteOne);
    } catch (e) {
        next(e);
        return;
    }
});


export default router;