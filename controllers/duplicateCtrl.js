'use strict';
const { deleteDuplicates } = require('../helpers/filters');

const filterDuplicates = (req, res) => {
    if (!req.body.inputArray) { return res.status(400).json({ success: false, message: 'Missing inputArray' }) }

    const inputArray = req.body.inputArray;

    const inputArrayFiltered = deleteDuplicates(inputArray);

    return res.status(200).json({ success: true, data: inputArrayFiltered})
};

module.exports = {
    filterDuplicates: filterDuplicates
};