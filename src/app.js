const express = require('express');
const session = require('express-session');
const cookie = require('cookie-parser');
const bodyParser = require('body-parser')

const app = express();

app.use(session({
    secret: '123456789', // Pueden poner cualquier cosa
    cookie: {
        expires: false
    },
    saveUninitialized: true,
    resave: false
}));
app.use(cookie());
app.use(bodyParser.urlencoded({ extended: false }))

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(require('./routes/user'));
app.use(require('./routes/helpers'));

app.listen(3000, () => console.log('Servidor en el puerto 3000'));
