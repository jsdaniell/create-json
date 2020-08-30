const core = require('@actions/core');
const fs = require('fs');
const path = require("path");

const fileName = core.getInput('name');
const jsonString = core.getInput('json-string');
const dir = core.getInput('dir');
const fullPath = path.join(process.env.GITHUB_WORKSPACE, dir || "", fileName);

const fileContent = jsonString;

console.log('Running action')

fs.writeFile(fullPath, fileContent, function (error) {

    if (error) {
        console.log('ERROR')
        core.setFailed(error.message);
    }

    core.setOutput("success", "Successfully created json file.");
});