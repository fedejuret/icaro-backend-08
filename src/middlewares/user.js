
const validateSession = (req, res, next) => {

    if (!req.session.userData) {
        return res.redirect('/login');
    }

    next();
}

const validateNoSession = (req, res, next) => {

    if (req.session.userData) {
        return res.redirect('/welcome');
    }

    next();
}

module.exports = {
    validateSession,
    validateNoSession
}