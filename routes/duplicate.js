'use strict';
const { filterDuplicates } = require('../controllers/duplicateCtrl');

module.exports = app => {
    app.post('/remove-duplicate', (req, res) => filterDuplicates(req, res))
};