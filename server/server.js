import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Load env variables from root folder
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const app = express();
const PORT = process.env.PORT || 5001;

app.use(cors({ origin: '*' }));
app.use(express.json());

app.post('/api/contact', async (req, res) => {
  const { fullName, company, email, phone, service, budget, brief } = req.body;

  if (!fullName || !email || !brief) {
    return res.status(400).json({ status: 'error', message: 'Missing required fields (fullName, email, brief)' });
  }

  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASS;
  const emailReceiver = process.env.EMAIL_RECEIVER || 'subhamswain277@gmail.com';

  if (!emailUser || !emailPass) {
    return res.status(500).json({ status: 'error', message: 'SMTP credentials (EMAIL_USER, EMAIL_PASS) are not set in the .env file.' });
  }

  // Create transporter using Gmail SMTP
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: emailUser,
      pass: emailPass,
    },
  });

  const mailOptions = {
    from: `"${fullName}" <${emailUser}>`,
    replyTo: email,
    to: emailReceiver,
    subject: `New Project Brief from ${fullName}`,
    text: `New Project Brief received:\n\n` +
          `Full Name: ${fullName}\n` +
          `Company: ${company || 'Not specified'}\n` +
          `Email Address: ${email}\n` +
          `Phone Number: ${phone || 'Not specified'}\n` +
          `Service: ${service || 'Not specified'}\n` +
          `Budget: ${budget || 'Not specified'}\n\n` +
          `Project Brief:\n${brief}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ status: 'success', message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Nodemailer Error:', error);
    return res.status(500).json({ status: 'error', message: `Failed to send email: ${error.message}` });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server is running on port ${PORT}`);
});
