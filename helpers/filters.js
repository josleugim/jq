const deleteDuplicates = array => {
    return array.filter((item, index) => array.indexOf(item) === index);
};

module.exports = {
    deleteDuplicates: deleteDuplicates
};