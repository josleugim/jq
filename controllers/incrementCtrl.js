'use strict';

const sum = (req, res) => {
    const {numberOne, numberTwo } = req.body;

    if (!numberOne || !numberTwo ) { return res.status(400).json({ success: false, message: 'Missing number one and two' }) }

    if (numberOne < 0 || numberTwo < 0) { return res.status(400).json({ success: false, message: 'Numbers should be positive values' }) }

    if (numberOne > numberTwo) { return res.status(400).json({ success: false, message: 'The first number is greater than the second one' }) }

    let result = 0;
    for (let i=numberOne; i <= numberTwo; i++) {
        result = result + i
    }

    return res.status(200).json({ success: true, data: result})
};

module.exports = {
    sum: sum
};