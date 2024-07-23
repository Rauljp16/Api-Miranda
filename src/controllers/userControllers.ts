import { Router, Request, Response, NextFunction } from "express";
import { allUsers, userById, createUser, updateUser, deleteUser } from "../services/userServices";

const router = Router();


router.get("/", async (_req: Request, res: Response, _next: NextFunction) => {
    const users = allUsers();
    return res.json({ users });
});

router.post("/", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const body = req.body;
        const newUser = createUser(body);
        return res.json(newUser);
    } catch (e) {
        next(e);
        return;
    }
});


router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id;

        const user = userById(id);

        return res.json(user);
    } catch (e) {
        next(e);
        return;
    }
});

router.patch("/:id", (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id;
        const body = req.body;
        const update = updateUser(id, body)
        return res.json(update);
    } catch (e) {
        next(e);
        return;
    }
});

router.delete("/:id", (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id;
        const deleteOne = deleteUser(id)
        return res.json(deleteOne);
    } catch (e) {
        next(e);
        return;
    }
});


export default router;