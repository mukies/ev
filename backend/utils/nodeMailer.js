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
      to: "nepalevsat@gmail.com",
      subject: "Inquiry for EV Product",
      //   text: "sHi from your nodemailer project",
      html: `<div style=''>
      <p>Hello NEST,</p>
      <p>You've got a new product inquiry from ${name.toUpperCase()}:</p>
      <div style='padding: 12px; border-left: 4px solid #d0d0d0;font-style: italic; '>
      <p style='text-transform: capitalize;'>
      <b>Name:</b> ${name}
      </p>
      <p>
      <b>Email:</b> ${email}
      </p><p style='text-transform: capitalize;'>
       <b>Location:</b> ${location}
      </p><p>
      <b>Phone:</b> ${phone}
      </p><p>
       <b>Requirement:</b> ${detail}
      </p>
      </div>
      <p>
        Thank You !
      </p>
      </div>`,
    };

    transporter.sendMail(mailOptions, function (err, data) {
      if (err) {
        console.log("Error " + err);
      } else {
        console.log("Email sent successfully");
      }
    });
  } catch (error) {
    res.json({ success: false, message: "Error while sending inquiry email." });
  }
};
