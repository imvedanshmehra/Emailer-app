/* To send email using Gmail as a service from third-party apps like our nodejs app,
we have to enable 'Allow less secure apps' in Gmail.
Login in your Gmail account and navigate to "https://myaccount.google.com/lesssecureapps"
and enable the 'Allow less secure apps'. */

const nodeMailer = require("nodemailer");

const mailer = "youremail@example.com";
const toMailer = "recieveremail@gmail.com";
const subject = "Test";
const messageText = "Dummy text...";

const transporter = nodeMailer.createTransport({
  service: "gmail",
  auth: {
    user: "youremail@example.com",
    pass: "your-password",
  },
});

const mailOptions = {
  from: mailer,
  to: toMailer,
  subject,
  text: messageText,
};

transporter.sendMail(mailOptions, (error, res) => {
  if (error) {
    console.log(error);
  }
  console.log(res);
});
