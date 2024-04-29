const mongoose = require("mongoose");

const dbConnection = (async () => {
  await mongoose.connect(process.env.URI);
  console.log("database connected successfully.");
})();

module.exports = dbConnection;
