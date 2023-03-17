const nodemailer = require('nodemailer');

function sendEmail(from, to, subject, text, html) {
  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your-email@gmail.com',
      pass: 'your-password'
    }
  });

  // setup email data with unicode symbols
  const mailOptions = {
    from: from,
    to: to,
    subject: subject,
    text: text,
    html: html
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}

// send a test email
sendEmail('your-email@gmail.com', 'student-email@example.com', 'Test Email', 'Hello, this is a test email!', '<p>Hello,<br>This is a test email!</p>');
