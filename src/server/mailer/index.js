const config = require('./config/index');
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        type: 'OAuth2',
        user: config.user || process.env.REACT_APP_USER,
        clientId: config.clientId || process.env.REACT_APP_CLIENTID,
        clientSecret: config.clientSecret || process.env.REACT_APP_CLIENTSECRET,
        refreshToken: config.refreshToken || process.env.REACT_APP_REFRESHTOKEN,
        accessToken: config.accessToken || process.env.REACT_APP_ACCESSTOKEN,
        expires: 1484314697598
    },
    tls: {
        rejectUnauthorized: false
    }
});

const send = ({email, name, text}) => {
    const from = name && email ? `${name} <${email}>` : `${name || email}`;
    const output = `
    From: ${from}
    Subject: Message from --${from}-- at MoNo258 Portfolio Contact Form
    Message body: 
    ${text}
  `;
    const message = {
        from,
        to: 'mono258.dev@gmail.com',
        subject: `MoNo258 Portfolio Contact Form - message from: ${from}`,
        text: output,
        replyTo: from
    };

    return new Promise((resolve, reject) => {
        transporter.sendMail(message, (error, info) =>
            error ? reject(error) : resolve(info)
        )
    });
};

module.exports = send;