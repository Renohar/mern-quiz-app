import dotenv from "dotenv";
import express from "express";
import cors from "cors"
import {PORT,MONGO_URL} from "./config.js"
import mongoose from "mongoose"
import userRouter from "./routes/userRouter.js"
import paymentRouter from "./routes/paymentRoutes.js"
import resultRouter from "./routes/resultRouter.js"


const app = express();
app.use(express.json());
app.use(cors())
dotenv.config();





mongoose.connect(MONGO_URL)
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
.catch((error) => {
    console.log({message: error.message})
})

app.use("/api",userRouter)
app.use("/api/payment",paymentRouter)
app.use("/api",resultRouter)


