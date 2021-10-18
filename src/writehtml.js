const fs = require('fs');

const writeHtml = htmlContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', htmlContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok:true,
                message: 'HTML created!'
            });
            console.log("Your team profile has been created! Check it out in index.html");
        })
    });
};

module.exports = { writeHtml };