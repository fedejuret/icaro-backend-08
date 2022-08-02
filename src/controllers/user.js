// modulos nativos -> node

// modulos de terceros
const bcrypt = require('bcrypt');

// modulos propios
const users = require('../models/user');


const renderLoginView = (req, res) => {

    return res.render('login');

}

const login = (req, res) => {

    const { usernameOrEmail, password } = req.body;

    const user = users.filter(u => u.email === usernameOrEmail || u.username === usernameOrEmail);

    if (user.length == 0) {
        return res.send('Usuario incorrecto');
    }

    const userData = user[0];

    const isValidPassword = bcrypt.compareSync(password, userData.password);

    if (!isValidPassword) {
        return res.send('Contraseña incorrecta');
    }

    delete userData.password; // Eliminamos la contraseña de los datos del usuario

    req.session.userData = userData; // creamos la sesion con los datos del usuario

    return res.redirect('/welcome');

}

const welcome = (req, res) => {

    const { name } = req.session.userData;

    return res.render('welcome', {
        name
    });

}

const logout = (req, res) => {

    req.session.destroy();

    return res.redirect('login');
}

module.exports = {
    renderLoginView,
    login,
    welcome,
    logout
};