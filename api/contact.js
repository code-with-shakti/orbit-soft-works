import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ status: 'error', message: 'Method Not Allowed' });
  }

  const { fullName, company, email, phone, service, budget, brief } = req.body;

  if (!fullName || !email || !brief) {
    return res.status(400).json({ status: 'error', message: 'Missing required fields (fullName, email, brief)' });
  }

  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASS;
  const emailReceiver = process.env.EMAIL_RECEIVER || 'subhamswain277@gmail.com';

  if (!emailUser || !emailPass) {
    return res.status(500).json({ status: 'error', message: 'Server mail credentials not configured.' });
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
}
