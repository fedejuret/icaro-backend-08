const express = require('express');
const { renderLoginView, login, welcome, logout } = require('../controllers/user');
const { validateSession, validateNoSession } = require('../middlewares/user');
const router = express.Router();

router.get('/login', validateNoSession, renderLoginView);
router.post('/login', login);
router.get('/logout', logout);

router.get('/welcome', validateSession, welcome);

module.exports = router;