const transporter = require("./../transporter");
let i = 1;

exports.sendSingleEmail = async (email, letter, totalEmails) => {
  const mailOptions = {
    from: {
      name: "FROM_NAME",
      address: "MAIL_FROM",
    },
    to: email,
    subject: "SUBJECT",
    html: letter,
  };

  try {
    await transporter.transport.sendMail(mailOptions);
    console.log(`[${i}/${totalEmails}] ${email} -->  SENT!`);
    i++;
  } catch (error) {
    console.error(`Error sending email to ${email}:`, error);
  }
};
