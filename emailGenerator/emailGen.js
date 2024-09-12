const fs = require("fs");

let email;

// YOU CAN ADJUST THE VALUE OF 'i' AS YOU WANT
for (i = 0; i <= 100; i++) {
  email = `example289${i}@aol.com`;
  fs.appendFileSync("randomEmails.txt", email + "\n");
}
