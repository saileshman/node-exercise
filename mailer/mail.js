const mailer = require("nodemailer");

const transporter = mailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "saileshmankunwar2021@gmail.com",
    pass: "wrruensdsebzdwsm",
  },
});

async function main() {
  const info = await transporter.sendMail({
    from: '"saileshmankunwar2021@gmail.com" <saileshmankunwar2021@gmail.com>',
    to: '"saileshmankunwar2021@gmail.com" <saileshmankunwar2021@gmail.com>',
    subject: "Hello ✔",
    text: "Hello world?",
    html: "<b>Hello world? this is me</b>",
  });

  console.log("Message sent: %s", info.messageId);
}

main().catch(console.error);
