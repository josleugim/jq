'use strict';
const { sum } = require('../controllers/incrementCtrl');

module.exports = app => {
    app.post('/increment', (req, res) => sum(req, res))
};