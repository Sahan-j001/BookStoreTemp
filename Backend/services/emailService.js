const nodemailer = require("nodemailer");

const sendVerificationEmail = async (email, otp) => {
    console.log('EMAIL_USER:', process.env.EMAIL_USER);
    console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? '***' : 'MISSING');
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com', // or whatever SMTP server you're using
        port: 587,
        secure: false, // true for port 465, false for 587
        auth: {
            user: process.env.EMAIL_USER,  // ✅ Make sure this exists
            pass: process.env.EMAIL_PASS   // ✅ And this too
        }
    });

    const mailOptions = {
        from: `"YourApp" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: "Your OTP Code",
        text: `Your OTP code is: ${otp}. It will expire in 30 minutes.`
    };

    await transporter.sendMail(mailOptions);
};

module.exports = sendVerificationEmail;
