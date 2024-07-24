import mongoose from "mongoose";
import { app } from "./app"

const port = process.env.PORT ?? 3000
const mongoUri = process.env.MONGO_URI


const start = async () => {
    try {
        await mongoose.connect(mongoUri as string);
        app.listen(port, () => {
            console.log(`app listening on port ${port}`)
        }
        )
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

start();