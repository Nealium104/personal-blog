const sgMail = require('@sendgrid/mail');

exports.handler = async function (event, context) {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const { name, email, message } = JSON.parse(event.body);

  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const msg = {
    to: 'your-email@example.com',
    from: email,
    subject: 'New submission from your website',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  try {
    await sgMail.send(msg);
    return { statusCode: 200, body: 'Message sent' };
  } catch (error) {
    console.error(error);
    return { statusCode: 500, body: 'Error sending message' };
  }
};