const nodemailer = require("nodemailer");
const moment = require("moment");
const fs = require("fs");

const today = moment().format("MMMM Do YYYY, h:mm:ss a");

const htmlReport = fs.readFileSync("./reports/html-reports/master-report.html");
const report = htmlReport.toString();

async function main() {
  // Use a different service like SendGrid or Elastic Email
  let transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
      user: "",
      pass: "",
    },
  });
  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Test Automation Report <no-reply@foo.com>', // sender address
    to: "recipient.foo@gmail.com", // list of receivers
    subject: `GoodRx Test Automation Result - ${today}`, // Subject line
    attachments: [
      {
        filename: "master-report.pdf",
        path: "./reports/master-report.pdf",
        contentType: "application/pdf",
      },
    ],
    html: report, // html body
  });
  console.log("Message sent: %s", info.messageId);
}
main().catch(console.error);
