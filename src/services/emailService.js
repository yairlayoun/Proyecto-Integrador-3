// emailService.js
import nodemailer from 'nodemailer';
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "process.env.EMAIL_USER",  // Cambia por tu dirección de correo
    pass: 'process.env.EMAIL_PASSWORD',        // Cambia por tu contraseña
  },
});

export const sendPasswordResetEmail = (to, resetLink) => {
  const mailOptions = {
    from: "process.env.EMAIL_USER",  // Cambia por tu dirección de correo
    to,
    subject: 'Restablecimiento de contraseña',
    html: `<p>Haz clic en el siguiente enlace para restablecer tu contraseña: ${resetLink}</p>`,
  };

  return transporter.sendMail(mailOptions);
};
