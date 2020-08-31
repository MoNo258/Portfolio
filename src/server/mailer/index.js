const nodemailer = require('nodemailer');

// // this part is problematic for heroku due to lack of file with secret on GitHub
// const config = require('./config/index');
// let transporter = nodemailer.createTransport({
//     host: 'smtp.gmail.com',
//     port: 465,
//     secure: true,
//     auth: {
//         type: 'OAuth2',
//         user: process.env.REACT_APP_USER || config.user,
//         clientId: process.env.REACT_APP_CLIENTID || config.clientId,
//         clientSecret: process.env.REACT_APP_CLIENTSECRET || config.clientSecret,
//         refreshToken: process.env.REACT_APP_REFRESHTOKEN || config.refreshToken,
//         accessToken: process.env.REACT_APP_ACCESSTOKEN || config.accessToken,
//         expires: 1484314697598
//     },
//     tls: {
//         rejectUnauthorized: false
//     }
// });
// // end of problematic part for heroku

// this is for heroku deploy:
let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        type: 'OAuth2',
        user: process.env.REACT_APP_USER,
        clientId: process.env.REACT_APP_CLIENTID,
        clientSecret: process.env.REACT_APP_CLIENTSECRET,
        refreshToken: process.env.REACT_APP_REFRESHTOKEN,
        accessToken: process.env.REACT_APP_ACCESSTOKEN,
        expires: 1484314697598
    },
    tls: {
        rejectUnauthorized: false
    }
});
//end of part for heroku deploy

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