'use strict';

const isCorrect = (req, res) => {
    if (!req.body.inputString) { return res.status(400).json({ success: false, message: 'Missing inputString' }) }

    const inputString = req.body.inputString.split('');

    const result = !inputString.reduce((acc, currentChar) => {
        if (['(', '{', '['].indexOf(currentChar) > -1) {
            return ++acc;
        } else if ([')', '}', ']'].indexOf(currentChar) > -1) {
            return --acc;
        }

        return acc
    }, 0);

    return res.status(200).json({ success: true, data: result})
};

module.exports = {
    isCorrect: isCorrect
};