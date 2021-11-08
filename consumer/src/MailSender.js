const nodemailer = require('nodemailer');
 
class MailSender {
  constructor() {
    this._transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAIL_ADDRESS,
        pass: process.env.MAIL_PASSWORD,
      },
    });
  }
 
  sendEmail(targetEmail, content) {
    const message = {
      from: 'Aplikasi Musik Dicoding',
      to: targetEmail,
      subject: 'Ekspor Lagu',
      text: 'Berikut lagi yang diekspor',
      attachments: [
        {
          filename: 'songs.json',
          content,
        },
      ],
    };
 
    return this._transporter.sendMail(message);
  }
}
 
module.exports = MailSender;
