import express from "express";
import cors from "cors"
import dotenv from "dotenv"
import db from "./database/db.js"
import securityMiddleware from "./middlewares/index.js";
import contactRoutes from "./routes/contactRoute.js"


dotenv.config()

const app = express();
const PORT = 4000;

app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
}));

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

securityMiddleware(app);

app.use("/api/contact", contactRoutes);


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);

})