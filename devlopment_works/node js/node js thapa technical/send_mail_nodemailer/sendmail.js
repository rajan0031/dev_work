const nodemailer = require("nodemailer");

const sendmail = async (req, res) => {
  //let testAccount = await nodemailer.createTestAccount();

  let transporter = await nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,

    auth: {
      user: "belle69@ethereal.email",
      pass: "7aHmN8UE1EGygP5TJV",
    },
  });

  let info = await transporter.sendMail({
    from: '"Rajan kushwaha 👻" <rajan@gmail.com>', // sender address
    to: "rayykushwaha0031@gmail.com", // list of receivers
    subject: "Hello rajan kushwaha ji how are you ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);

  res.json(info);
};

module.exports = sendmail;
