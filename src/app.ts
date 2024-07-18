import express, { Request, Response, NextFunction } from "express";
import roomControllers from "./controllers/roomControllers";
import bookingControllers from "./controllers/bookingControllers";
import userControllers from "./controllers/userControllers";
import contactControllers from "./controllers/contactControllers";
import loginControllers from "./controllers/loginControllers";
import authMiddleware from "./middleware/auth";

export const app = express();

app.use(express.json());

app.get("/", (_req: Request, res: Response) => {
    const htmlResponse = `
        <style>
            body {
                font-family: system-ui;
                text-align: center;
                background-color: #f0f0f0;
                color: #333;
                margin: 10%;
                padding: 0;
            }
            h1 {
                color: #1a237e;
                font-size: 3em;
            }
            p {
                color: #666;
                font-size: 1.2em;
            }
            footer {
                font-size: 1.5em;
              p{  color: #4d7ac5}
            }
        </style>
    </head>
    <body>
        <h1>API HOTEL MIRANDA</h1>
        <h2>Lista de endpoints publicos</h2>
        <li>http://localhost:3000/</li>

        <h2>Lista de endpoints privados</h2>
        <li>http://localhost:3000/rooms</li>
        <li>http://localhost:3000/bookings</li>
        <li>http://localhost:3000/users</li>
        <li>http://localhost:3000/contact</li>
        <h2>Gracias por tu visita...</h2>
        <footer>
            <p>© 2024 - Derechos reservados Raúl Jerez Pagán. 😉</p>
        </footer>
    </body>
`;
    res.send(htmlResponse);
});

app.use("/login", loginControllers);
app.use(authMiddleware);
app.use("/rooms", roomControllers);
app.use("/bookings", bookingControllers);
app.use("/users", userControllers);
app.use("/contact", contactControllers);

app.use((err: Error, _req: Request, res: Response, _Next: NextFunction) => {
    console.error(err);
    return res.status(401).json({ error: true, message: "Aplications error" });
});