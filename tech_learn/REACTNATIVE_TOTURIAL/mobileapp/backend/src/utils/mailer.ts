
// import nodemailer, { SendMailOptions } from 'nodemailer'
// import config from 'config';
// import log from './logger';
// // async function createTestCreds() {
// //     const creds = await nodemailer.createTestAccount();
// //     console.log({ creds });

// // }

// // createTestCreds();

// // async function sendEmail() {

// // }

// const stmp = config.get<{
//     user: string,
//     pass: string
// }>('stmp');

// var transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: stmp.user,
//         pass: stmp.pass
//     }
// });

// const mailOptions = (email: string,subjectEmail: string, ): any => {
//     return {
//         from: stmp.user,
//         to: email,
//         subject: 'VerifyEmail',
//         html: 'You are not verify email <strong>Click here to verify</strong>'
//     }
// };

// async function sendEmail(payload: SendMailOptions) {
//     transporter.sendMail(payload, function (error: any, info: any) {
//         if (error) {
//             log.error(error, 'Error sending email');
//             return
//         } else {
//             log.info('Email sent: ' + info.response);
//         }
//         log.info(`Preview URL: ${nodemailer.getTestMessageUrl(info)}`);
//     });
// };



// export default sendEmail;