import { Router, Request, Response, NextFunction } from "express";
import { allUsers, userById } from "../services/userServices";

const router = Router();


router.get("/", (_req: Request, res: Response, _next: NextFunction) => {
    const users = allUsers();
    return res.json(users);
});

router.post("/", (_req: Request, _res: Response, _next: NextFunction) => {
    //     const input = req.body;
    //create user
    //    return res.json({room{}});
});


router.get('/:id', (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id;

        const user = userById(id);

        return res.json(user);
    } catch (e) {
        next(e);
        return;
    }
});

router.patch("/:id", (_req: Request, _res: Response, _next: NextFunction) => {
    // try {
    //     const id = req.params.id;
    //     const user = userById(id);

    // update user here
    //     return res.json(user);
    // } catch (e) {
    //     next(e);
    //     return;
    // }
});

router.delete("/:id", (_req: Request, _res: Response, _next: NextFunction) => {
    //     try {
    //         const id = req.params.id;
    //         const user = userById(id);

    // delete user here
    //         return res.json({success: true});
    //     } catch (e) {
    //         next(e);
    //         return;
    //     }
});


export default router;