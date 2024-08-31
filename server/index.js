require("dotenv").config(); // Load environment variables from .env file
const express = require("express");
const multer = require("multer");
const nodemailer = require("nodemailer");
const path = require("path");
const fs = require("fs");
const cors = require("cors"); // Import CORS

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS
app.use(cors()); 

// Create upload directory if it doesn't exist
const uploadDir = path.join(__dirname, 'public', 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Multer configuration for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir); 
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname); 
  },
});

const upload = multer({ storage });

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Nodemailer transporter configuration
const transporter = nodemailer.createTransport({
  host: 'smtp.office365.com', // SMTP server
  port: 587, // TLS port
  secure: false, // Use TLS
  auth: {
    user: process.env.OUTLOOK_USER, 
    pass: process.env.OUTLOOK_PASS,
  },
  tls: {
    ciphers: 'SSLv3',
  },
});

// Form submission route
app.post("/submit", upload.single("passport"), (req, res) => {
  const { firstName, lastName, email, dob, parent1Phone, parent2Phone, program, schoolLevel, subjects } = req.body;
  const passportFile = req.file;

  // Email content
  const mailOptions = {
    from: process.env.OUTLOOK_USER,
    to: email,
    subject: "Nouvelle Inscription Reçue",
    html: `<!DOCTYPE html>
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
            font-size: 1.2em;
            font-weight: bold;
        }
        .content p strong {
            font-weight: bold;
            font-size: 1.2em;
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
            <p><strong>Nom de l'élève :</strong> ${lastName}</p>
            <p><strong>Prénom de l'élève :</strong> ${firstName}</p>
            <p><strong>Email :</strong> ${email}</p>
            <p><strong>Date de naissance :</strong> ${dob}</p>
            <p><strong>Niveau scolaire :</strong> ${schoolLevel}</p>
            <p><strong>Matières à étudier :</strong> ${subjects}</p>
            <p><strong>Programme choisi :</strong> ${program}</p>
            <p><strong>Numéro de téléphone du parent 1 :</strong> ${parent1Phone}</p>
            <p><strong>Numéro de téléphone du parent 2 :</strong> ${parent2Phone}</p>
        </div>
        <div class="footer">
            <p>Cross Knowledge</p>
        </div>
    </div>
</body>
</html>
    `,
    attachments: passportFile
      ? [
          {
            filename: passportFile.originalname,
            path: passportFile.path,
          },
        ]
      : [],
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).send("An error occurred while sending the email.");
    } else {
      console.log("Email sent:", info.response);
      res.send("Form submitted successfully! Check your email for the details.");
    }
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
