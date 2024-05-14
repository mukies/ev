const nodemailer = require("nodemailer");

exports.sendContactMail = async (name, email, message, res) => {
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
      subject: "Contact Message",
      //   text: "sHi from your nodemailer project",
      html: `<div style=''>
      <p>Hello NEST,</p>
      <p>You've got a new contact message from ${name.toUpperCase()}:</p>
      <div style='padding: 12px; border-left: 4px solid #d0d0d0;font-style: italic; '>
      <p style='text-transform: capitalize;'>
      <b>Name:</b> ${name}
      </p>
      <p>
      <b>Email:</b> ${email}
      </p><p>
       <b>Message:</b> ${message}
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
    res.json({ success: false, message: "Error while sending contact email." });
  }
};
