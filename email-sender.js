const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-password',
  },
});

const mailOptions = {
  from: 'your-email@gmail.com',
  to: 'recipient-email@gmail.com',
  subject: 'Test Email',
  text: 'This is a test email sent using nodemailer!',
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
