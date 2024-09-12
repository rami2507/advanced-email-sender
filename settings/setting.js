const singMail = require("./sendSingleEmail");
const fs = require("fs");
const path = require("path");
const util = require("util");
const readFileAsync = util.promisify(fs.readFile);

const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

exports.sendEmails = async () => {
  try {
    const filePath = path.resolve(__dirname, "../maillist/emails.txt");
    const emailsContent = await fs.readFileSync(filePath, "utf-8");
    const emails = emailsContent.split("\n").map((email) => email.trim());
    let letter = await readFileAsync("./letter/letter.html", "utf-8");

    console.log("-----> SENDING ....!<-----");

    // Set the maximum number of concurrent email sends
    const maxConcurrentSends = 5;
    let concurrentSends = 0;

    // Iterate through emails and send them sequentially with a delay
    for (const email of emails) {
      // Check if the maximum concurrent sends limit is reached
      if (concurrentSends >= maxConcurrentSends) {
        // Reset the counter and wait for the next iteration
        concurrentSends = 0;
        await sleep(5000); // Adjust the delay as needed
      }

      // Send a single email and increment the counter
      const personalizedLetter = letter.replace("##email##", email);
      singMail.sendSingleEmail(email, personalizedLetter, emails.length);
      concurrentSends++;

      // Add a delay between email sends
      await sleep(4000);
    }
  } catch (err) {
    console.error("Error reading the file:", err);
  }
};
