// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const questions = require("./questions.js");
const licensesContent = require("./licenses.js");
const badgesSymbol = require("./badges.js")
let badges;

// TODO: Create an array of questions for user input
// const questions = [];

// switch statement for using license answer to get the corresponding badge
inquirer.prompt(questions).then((data) => {
    const filename = `Sample-README.md`;
    switch (data.license){
        case "Apache":
            break;
        case "ISC":
            break;
        case "MIT":
            break;
        case "GNU GPLv3":
            break;
        case "none":
        
    }   
    
    fs.writeFile(filename, generateHTML(data), (err) =>
        err ? console.log(err) : console.log('Success!')
    );
});
// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

