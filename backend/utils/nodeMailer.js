const nodemailer = require("nodemailer");

exports.sendMail = async (name, email, location, phone, detail, res) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      port: 465,
      secure: true,
      auth: {
        user: process.env.NODE_MAILER_EMAIL_ID,
        pass: process.env.NODE_MAILER_AUTH_PASS,
      },
    });

    let mailOptions = {
      from: process.env.NODE_MAILER_EMAIL_ID,
      to: "muk.yess@gmail.com",
      subject: "Inquiry for EV Product",
      //   text: "sHi from your nodemailer project",
      html: `<div style=''> <span>You have new Inquiry for Product</span> <div style='border: 2px solid gray, padding:5px'><p style=''>Name: ${name}</p><p style=''>Email: ${email}</p><p style=''>Phone: ${phone}</p></div>  </div>`,
    };

    transporter.sendMail(mailOptions, function (err, data) {
      if (err) {
        console.log("Error " + err);
      } else {
        console.log("Email sent successfully");
      }
    });
  } catch (error) {
    res.json({ success: false, message: "Error while sending inquiry mail." });
  }
};
