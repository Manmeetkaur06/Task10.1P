require('dotenv').config();

const express = require('express');
const formData = require('form-data');
const Mailgun = require('mailgun.js');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());

const mailgun = new Mailgun(formData);
const mg = mailgun.client({
    username: 'api',
    key: process.env.MAILGUN_API_KEY,
});

app.post('/subscribe', (req, res) => {
    const { email } = req.body;

    if (!email) {
        return res.status(400).send('Email is required');
    }

    const messageData = {
        from: 'Dev@Deakin manmeet4792.be23@chitkara.edu.in', 
        to: email,
        subject: 'Welcome to Dev@Deakin',
        text: 'Thank you for subscribing to Dev@Deakin. We are excited to have you on board!',
    };

    mg.messages.create(process.env.MAILGUN_DOMAIN, messageData)
        .then(() => res.status(200).send('Welcome email sent successfully!'))
        .catch(error => {
            console.error('Mailgun error:', error);
            res.status(500).send('Error sending welcome email');
        });
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
