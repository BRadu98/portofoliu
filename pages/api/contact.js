import { createTransport, getTestMessageUrl } from "nodemailer";
import "dotenv/config";

const transport = createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: true, //!SSL
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

function makeANiceEmail(text) {
  return `
    <div style="
      border: 1px solid black;
      padding: 20px;
      font-family: sans-serif;
      line-height: 2;
      font-size: 20px;
      color: #650AA9;
      ">
        <p>${text}</p>
      </div>
  `;
}

async function sendContactEmail(from,message,name) {
  const info = (await transport.sendMail({
    to: process.env.MAIL_RECIPIENT,
    from: process.env.MAIL_USER,
    subject: `Mesaj PORTOFOLIU de la: ${name}`,
    html: makeANiceEmail(`
      Email: ${from} <br>
      Mesaj: ${message} <br>
    `),
  }))
  if (process.env.MAIL_USER.includes("ethereal.email")) {
    // get this nice link in terminal if using mailblocker to dev
    console.log(`💌 Message sent! Preview it at ${getTestMessageUrl(info)}`);
  }
}

export default function contact(req, res) {
  try {
    const data = req.body
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Cache-Control', 'max-age=180000');
    sendContactEmail(data.email, data.message, data.name)
    res.status(200).end(JSON.stringify(data));
  } catch (error) {
    res.json(error);
    res.status(405).end();
  }
}

