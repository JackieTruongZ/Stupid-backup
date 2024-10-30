import express from "express";
import { createSessionSchema } from "../schemas/auth.schema";
import { createSessionHandler, refreshAccessTokenHandler } from "../controllers/auth.controller";
import validateResource from "../middlewares/validateResource";


const router = express.Router();

router.post(
    "/api/sessions",
    validateResource(createSessionSchema),
    createSessionHandler
);

router.post("/api/sessions/refresh", refreshAccessTokenHandler);

export default router;
