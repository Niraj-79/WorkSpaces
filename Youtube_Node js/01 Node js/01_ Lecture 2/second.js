console.log("KG Codiing is the best");

const fs = require("fs");
fs.writeFile("second.txt", "Writing file", (err) => {
  if (err) console.log("Error occurred");
  else console.log("File Written Successfully");
});
