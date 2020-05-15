'use strict';

const { isCorrect } = require('../controllers/bracketCtrl');

module.exports = app => {
    app.post('/validate-bracket', (req, res) => isCorrect(req, res))
};