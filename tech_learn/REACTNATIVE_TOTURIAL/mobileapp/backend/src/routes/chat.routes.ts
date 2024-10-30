import express from "express";
import { sendChat } from "../controllers/chat.controller";



const router = express.Router();

router.post(
    "/api/chat",
    sendChat
);

export default router;
