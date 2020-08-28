// import 'babel-polyfill';
// import express from 'express';
// import bodyParser from 'body-parser';
// import mailer from './mailer/index';
require('babel-polyfill');
const mailer = require('./mailer/index');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('*', (req, res) => {
    res.send('Server is working.');
});

app.post('/send', (req, res) => {
    // const {email = '', name = '', mssg = ''} = req.body;
    const {email, name, mssg} = req.body;

    mailer({email, name, text: mssg}).then(() => {
        console.log(`Sent the message "${mssg}" from <${name}> ${email}.`);
        // res.redirect({msg:'Email has been sent'}, '#contact');
        res.redirect('/#success');
    }).catch((error) => {
        // console.log(`Failed to send the message "${message}" from <${name}> ${email} with the error ${error && error.message}`);
        console.log(error.message);
        // res.redirect('#aboutMe', {msg:`Ooops, error occured ${error.message}`});
        res.redirect('/#error');
    });
});





const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});