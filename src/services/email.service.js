const nodemailer = require('nodemailer');

// email transport
const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

/**
 * Send message to email
 *
 * @param {string} to - user email
 * @param {string} text - text for sending
 * @param {string} html - text html tags
 */
const sendEmail = (to, text, html) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: to,
    subject: 'Footbalit',
    text,
    html,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    console.log(error);
    return !error;
  });
};

module.exports = sendEmail;
