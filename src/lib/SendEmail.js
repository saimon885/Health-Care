import nodemailer from "nodemailer";

export const sendEmail = async ({
  to,
  subject,
  html,
  Service_Name,
  duration,
  totalCost,
}) => {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const info = await transporter.sendMail({
      from: `"Care.xyz" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html,
      text: `Booking Confirmed
             Service: ${Service_Name}
             Duration: ${duration}
             Total Cost: ${totalCost} Tk`,
    });

    console.log("Email sent:", info.messageId);
  } catch (error) {
    console.log("Email error:", error);
  }
};
