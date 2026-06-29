import express from "express"
import contactValidator from "../middlewares/contactValidator.js"
import { sendMessage } from "../controllers/contactController.js"

const router = express.Router()

router.post("/", contactValidator, sendMessage);

export default router;