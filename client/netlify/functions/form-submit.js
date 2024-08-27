const nodemailer = require('nodemailer');
const Busboy = require('busboy');

exports.handler = async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({}),
    };
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ message: 'Method Not Allowed' }),
    };
  }

  const busboy = Busboy({ headers: event.headers });
  const formData = {};

  return new Promise((resolve, reject) => {
    busboy.on('field', (fieldname, value) => {
      formData[fieldname] = value;
    });

    busboy.on('finish', async () => {
      try {
        console.log("FormData Received:", formData);

        const transporter = nodemailer.createTransport({
          service: 'Gmail',
          auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_PASS,
          },
        });

        const mailOptions = {
          from: formData.email,
          to: process.env.GMAIL_USER,
          subject: 'Nouvelle Inscription Reçue',
          html: `
            <!DOCTYPE html>
            <html lang="fr">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        color: #333;
                        margin: 0;
                        padding: 0;
                    }
                    .container {
                        width: 100%;
                        max-width: 600px;
                        margin: 0 auto;
                        padding: 20px;
                        background-color: #f9f9f9;
                        border: 1px solid #ddd;
                        border-radius: 5px;
                    }
                    .header {
                        background-color: #24345a;
                        color: #ffffff;
                        padding: 10px;
                        text-align: center;
                        border-radius: 5px 5px 0 0;
                    }
                    .content {
                        padding: 20px;
                    }
                    .content h2 {
                        color: #24345a;
                        margin-top: 0;
                    }
                    .content p {
                        margin: 0;
                        padding: 10px 0;
                    }
                    .footer {
                        text-align: center;
                        padding: 10px;
                        font-size: 0.8em;
                        color: #666666;
                        border-top: 1px solid #ddd;
                        margin-top: 20px;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        <h1>Nouvelle Inscription Reçue</h1>
                    </div>
                    <div class="content">
                        <h2>Détails de l'inscription</h2>
                        <p><strong>Nom de l'élève :</strong> ${formData.lastName}</p>
                        <p><strong>Prénom de l'élève :</strong> ${formData.firstName}</p>
                        <p><strong>Email :</strong> ${formData.email}</p>
                        <p><strong>Date de naissance :</strong> ${formData.dob}</p>
                        <p><strong>Niveau scolaire :</strong> ${formData.schoolLevel}</p>
                        <p><strong>Matières à étudier :</strong> ${formData.subjects}</p>
                        <p><strong>Programme choisi :</strong> ${formData.program}</p>
                        <p><strong>Numéro de téléphone du parent 1 :</strong> ${formData.parent1Phone}</p>
                        <p><strong>Numéro de téléphone du parent 2 :</strong> ${formData.parent2Phone}</p>
                    </div>
                    <div class="footer">
                        <p>Cross Knowledge</p>
                    </div>
                </div>
            </body>
            </html>
          `,
        };

        await transporter.sendMail(mailOptions);

        resolve({
          statusCode: 200,
          headers,
          body: JSON.stringify({ message: 'Success' }),
        });
      } catch (error) {
        console.error("Error occurred:", error);
        reject({
          statusCode: 500,
          headers,
          body: JSON.stringify({ message: 'Error sending email', error: error.message }),
        });
      }
    });

    busboy.end(Buffer.from(event.body, 'base64'));
  });
};
