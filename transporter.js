const nodemailer = require("nodemailer");

exports.transport = nodemailer.createTransport({
  host: "maravendas.fun",
  port: 587, // Correct port for SMTPS (SSL/TLS)
  secure: false, // Use SMTPS (SSL/TLS)
  auth: {
    user: "backing@maravendas.fun",
    pass: "u8Uq/?_jx%4^9",
  },
  tls: {
    // These options are usually not needed for SMTPS (SSL/TLS)
    minVersion: "TLSv1.2",
    rejectUnauthorized: false, // This can be set to false in some cases
  },
});
