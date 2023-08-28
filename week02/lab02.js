const fs = require('fs');

const filePath = process.argv[2];

if (!filePath) {
    console.error("Please to provide path of file!");
    process.exit(1);
}

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error("An error occurred while reading the file", err);
        process.exit(1);
    }
    console.log("Content of file: ");
    console.log(data);
})