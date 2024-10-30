import { Request, Response } from "express";
import { CreateUserInput, ForgotPasswordInput, ResetPasswordInput, VerifyUserInput } from "../schemas/user.schema";
import { createUser, findUserByEmail, findUserById } from "../services/user.service";
import { createUserEmailOption, resetPasswordEmailOption } from "../utils/mails/user.mail";
import sendEmail from "../utils/mails";
import { SendMailOptions } from "nodemailer";
import log from "../utils/logger";
import { generateRandomString } from "../utils/functions";

export async function createUserHandle(
    req: Request<{}, {}, CreateUserInput>,
    res: Response
) {
    const body = req.body;
    try {

        const user = await createUser(body);

        const dataEmail: SendMailOptions = createUserEmailOption(user.email, user.firstName, user.id, user.verificationCode);
        await sendEmail(dataEmail);

        return res.send({ "message": "User successfully created" });
    } catch (error: any) {
        if (error.code === 11000) {
            return res.status(409).send('Account already exists');
        }
        console.log(error);

        return res.status(500).send(error);
    }
}

export async function verifyUserHandle(
    req: Request<VerifyUserInput>,
    res: Response
) {
    const id = req.params.id;
    const verificationCode = req.params.verificationCode;

    // find user by id 
    try {
        const user = await findUserById(id);

        if (!user) {
            return res.send('Could not verify user');
        }

        if (user.verified) {
            return res.send("User is already verified");
        }

        if (user.verificationCode === verificationCode) {
            user.verified = true;

            await user.save();
            return res.send("User successfully verified");
        }

        return res.send("Could not verify user");

    } catch (error) {
        console.log(error);
        return res.send("Could not verify user");
    }

}

export async function forgotPasswordHandle(
    req: Request<{}, {}, ForgotPasswordInput>,
    res: Response
) {

    const message = "error"

    const { email } = req.body;
    const user = await findUserByEmail(email);


    if (!user) {
        log.debug(`User with email ${email} does not exists`);
        return res.send(message);
    }

    if (!user.verified) {
        log.debug(`User with email ${email} have not verified`);
        return res.send(message);
    }

    const passwordResetCode = generateRandomString(10);

    user.passwordResetCode = passwordResetCode;

    await user.save();

    const dataEmail: SendMailOptions = resetPasswordEmailOption(user.email, user.firstName, user.passwordResetCode);

    await sendEmail(dataEmail);

    log.debug(`Password reset email sent to ${user.email}`);

    return res.send({ "message": "Send passwordResetCode successfully" });

}

export async function resetPasswordHandle(
    req: Request<ResetPasswordInput['params'], {}, ResetPasswordInput['body']>,
    res: Response
) {

    try {
        const { id, passwordResetCode } = req.params;
        const { password } = req.body;
        const user = await findUserById(id);

        if (
            !user ||
            !user.passwordResetCode ||
            user.passwordResetCode !== passwordResetCode
        ) {

            return res.status(400).send('Could not reset user password');
        }

        user.passwordResetCode = null;
        user.password = password;

        await user.save();

        return res.send("Successfully update password");
    } catch (error) {
        return res.send("Can not reset password");
    }

}

export async function getCurrentUserHandler(req: Request, res: Response) {
    return res.send(res.locals.user);
}
