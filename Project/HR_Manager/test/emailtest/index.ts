import nodemailer from 'nodemailer';

// Create a transport for sending emails (replace with your email service's data)
const transporter = nodemailer.createTransport({
  service: 'Gmail', // Use your email service
  auth: {
    user: 'your_email@gmail.com', // Your email address
    pass: 'your_password', // Your password
  },
}); 

const mailOptions = {
    from: 'jackspa0709@gmail.com', // Sender
    to: 'datnguyentruongnn@gmail.com', // Recipient
    subject: 'Email Subject', // Email subject
    html: 'hello', // Email HTML content
  };
  
  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Email sending failed:', error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  }); 