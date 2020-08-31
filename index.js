const core = require('@actions/core');
const fs = require('fs');
const path = require("path");

const fileName = core.getInput('name');
const jsonString = core.getInput('object');
const dir = core.getInput('dir');
const fullPath = path.join(process.env.GITHUB_WORKSPACE, dir || "", fileName);

const fileContent = JSON.stringify(jsonString);

console.log('Running action')
console.log(fileContent)
console.log(fileName)
console.log(fullPath)

fs.writeFile(fullPath, fileContent, function (error) {


    if (error) {
        core.setFailed(error.message);
    }

    let obj;

    fs.readFile(fullPath,null,  handleFile)

    function handleFile(err, data) {
        if (err) throw err
        console.log("Text: ", data)
        obj = JSON.parse(data)
        console.log("Object: ", obj)

        console.log("Buffer: ", data.toString());
    }



    core.setOutput("success", "Successfully created json file.");
});

console.log('End')