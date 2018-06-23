const fs = require('fs');

/**
 * 
 * @param {Name of the file to be read} filename 
 */
var fetchData = (filename) => {
    try {
        var data = fs.readFileSync(filename);
        return JSON.parse(data);
    } catch(e) {
        console.log(e);
        return [];
    }
};

var saveData = (filename, data) => {
    fs.writeFileSync(filename, JSON.stringify(data));
};

module.exports = {
    fetchData,
    saveData
};