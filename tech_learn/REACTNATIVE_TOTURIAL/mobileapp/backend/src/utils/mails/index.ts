
import nodemailer, { SendMailOptions } from 'nodemailer'
import config from 'config';
import log from '../logger';
import { IInputEmailOption } from '../interfaces';
// async function createTestCreds() {
//     const creds = await nodemailer.createTestAccount();
//     console.log({ creds });

// }

// createTestCreds();

// async function sendEmail() {

// }

export const stmp = config.get<{
    user: string,
    pass: string
}>('stmp');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: stmp.user,
        pass: stmp.pass
    }
});


export const mailOptions = (payload: IInputEmailOption): SendMailOptions => {
    return {
        from: payload.senderEmail,
        to: payload.receiveEmail,
        subject: payload.subjectEmail,
        html: payload.htmlContent
    }
};


async function sendEmail(payload: SendMailOptions) {

    
    transporter.sendMail(payload, function (error: any, info: any) {
        if (error) {
            log.error(error, 'Error sending email');
            return
        } else {
            log.info('Email sent: ' + info.response);
        }
        log.info(`Preview URL: ${nodemailer.getTestMessageUrl(info)}`);
    });
};



export default sendEmail;