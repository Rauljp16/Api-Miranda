import express, {Request, Response, NextFunction } from "express";
import roomControllers from './controllers/roomControllers';
import bookingControllers from "./controllers/bookingControllers";
import userControllers from "./controllers/userControllers";
import contactControllers from "./controllers/contactControllers";
// import authMiddlewares from "./middlewares/auth"

export const app = express();

//app.use(authMiddlewares)
//app.use((req, res, next, error) => {});

app.use("/rooms", roomControllers);
app.use("/bookings", bookingControllers);
app.use("/users", userControllers);
app.use("/contact", contactControllers);

app.use((err: Error, _req: Request, res: Response, _Next: NextFunction)=>{
    console.error(err)
    return res.status(401).json({error:true, message: "Aplications error"})
})



app.get("/", (_req: Request, res: Response) => {
    res.send({
        data: "Hola mundo"
    })
})