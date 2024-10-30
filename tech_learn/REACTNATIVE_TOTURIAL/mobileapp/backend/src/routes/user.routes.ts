import express, { Request, Response } from 'express';
import validateResource from '../middlewares/validateResource';
import { createUserSchema, forgotPasswordSchema, resetPasswordSchema, verifyUserSchema } from '../schemas/user.schema';
import { createUserHandle, forgotPasswordHandle, getCurrentUserHandler, resetPasswordHandle, verifyUserHandle } from '../controllers/user.controller';
import requireUser from '../middlewares/requireUser';

const router = express.Router();


router.post("/api/users",
    validateResource(createUserSchema),
    createUserHandle);

router.post("/api/users/verify/:id/:verificationCode",
    validateResource(verifyUserSchema),
    verifyUserHandle);

router.post("/api/users/forgotpassword",
    validateResource(forgotPasswordSchema),
    forgotPasswordHandle);

router.post("/api/users/resetpassword/:id/:passwordResetCode",
    validateResource(resetPasswordSchema),
    resetPasswordHandle);

router.get("/api/users/me", requireUser, getCurrentUserHandler);

export default router;