// require('babel-polyfill');
const mailer = require('./src/server/mailer');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const publicPath = path.join(__dirname, '..', 'public');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(publicPath));

// app.get('*', (req, res) => {
//     res.send('Server is working.');
// });

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.post('/send', (req, res) => {
    const {email, name, mssg} = req.body;

    mailer({email, name, text: mssg})
        .then(() => {
            console.log(`Sent the message "${mssg}" from <${name}> ${email}.`);
            res.redirect('/#success');
        })
        .catch((error) => {
            console.log(error.message);
            res.redirect('/#error');
        });
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
});