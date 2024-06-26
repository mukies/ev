const express = require("express");
const app = express();
const { v2 } = require("cloudinary");
const cors = require("cors");
const productRoute = require("./routes/product");
const adminRoute = require("./routes/admin");
const userRoute = require("./routes/users");
const inquiryRoute = require("./routes/inquiry");
const cookie = require("cookie-parser");
require("dotenv").config();
require("./db/db.config");
const path = require("path");
const job = require("./cron/cron");

job.start();

//mmiddlewares
app.use(express.json({ limit: "50mb" }));
app.use(cors());
app.use(cookie());
app.use(express.urlencoded({ extended: true }));

//cloudinery
v2.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

//routes
app.use("/api/product", productRoute);
app.use("/api/admin", adminRoute);
app.use("/api/user", userRoute);
app.use("/api/inquiry", inquiryRoute);

if (process.env.NODE_ENV == "prod") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  // react app
  app.get("*", (req, res) => {
    // res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"));
    res.sendFile(path.resolve(__dirname, "../frontend/dist/index.html"));
  });
}

const port = process.env.PORT || 8080;

app.listen(8080, () => {
  console.log(`server started on ${port}.`);
});
