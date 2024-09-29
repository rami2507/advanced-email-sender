const nodemailer = require("nodemailer");

exports.transport = nodemailer.createTransport({
  host: "SMTP HOST",
  port: "SMTP PORT",
  secure: false,
  auth: {
    user: "SMTP USERNAME",
    pass: "SMTP PASSWORD",
  },
  tls: {
    minVersion: "TLSv1.2",
    rejectUnauthorized: false,
  },
});
