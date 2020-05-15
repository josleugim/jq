'use strict';

const { findBiggest } = require('../controllers/kadanesCtrl');

module.exports = app => {
    app.post('/kadanes', (req, res) => findBiggest(req, res))
};