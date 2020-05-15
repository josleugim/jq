'use strict';

const { deleteDuplicates } = require('../helpers/filters');

const findBiggest = (req, res) => {
    if (!req.body.inputArray) { return res.status(400).json({ success: false, message: 'Missing inputArray' }) }
    const inputArray = req.body.inputArray

    const newArray = inputArray.filter((item, index) => inputArray[index] > inputArray[index - 1]);

    return res.status(200).json({ success: true, data: newArray})
};

module.exports = {
    findBiggest: findBiggest
};