import { Router, Request, Response, NextFunction } from "express";
import { allContact, contactById } from "../services/contactServices";

const router = Router();


router.get("/", (_req: Request, res: Response, _next: NextFunction) => {
    const contact = allContact();
    res.json(contact);
});


router.get('/:id', (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id;
        if (!id) {
            return res.status(400).json({ message: 'ID is required' });
        }

        const contact = contactById(id);

        if (!contact) {
            return res.status(404).json({ message: 'Contact not found' });
        }

        return res.json(contact);
    } catch (e) {
        next(e);
        return;
    }
});

export default router;