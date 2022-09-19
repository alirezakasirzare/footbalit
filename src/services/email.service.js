const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const sendEmail = (to, text, html) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: to,
    subject: 'Footbalit',
    text,
    html,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    console.log(error, info);
    return !error;
  });
};

module.exports = sendEmail;
