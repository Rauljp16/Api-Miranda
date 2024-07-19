import { Router, Request, Response, NextFunction } from "express";
import { allContact, contactById } from "../services/contactServices";

const router = Router();


router.get("/", (_req: Request, res: Response, _next: NextFunction) => {
    const contact = allContact();
    return res.json({ contact });
});

router.post("/", (_req: Request, _res: Response, _next: NextFunction) => {
    //     const input = req.body;
    //create contact
    //    return res.json({contact{}});
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

router.patch("/:id", (_req: Request, _res: Response, _next: NextFunction) => {
    // try {
    //     const id = req.params.id;
    //     const contact = contactById(id);

    // update contact here
    //     return res.json(contact);
    // } catch (e) {
    //     next(e);
    //     return;
    // }
});

router.delete("/:id", (_req: Request, _res: Response, _next: NextFunction) => {
    //     try {
    //         const id = req.params.id;
    //         const contact = contactById(id);

    // delete contact here
    //         return res.json({success: true});
    //     } catch (e) {
    //         next(e);
    //         return;
    //     }
});


export default router;