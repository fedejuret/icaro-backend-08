const express = require('express');
const bcrypt = require('bcrypt');

const router = express.Router();

router.get('/sessions', (req, res) => {

    return res.json({
        sessions: req.session
    })

});

router.get('/hash-password', (req, res) => {

    const { password } = req.query;

    const passwordHashed = bcrypt.hashSync(password, 10);

    return res.send(passwordHashed);

});


module.exports = router;