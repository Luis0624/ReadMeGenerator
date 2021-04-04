// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const questions = require("./questions.js");
const licensesContent = require("./licenses.js");
const badgesSymbol = require("./badges.js")
let badge;

// TODO: Create an array of questions for user input
// const questions = [];

// switch statement for using license answer to get the corresponding badge
inquirer.prompt(questions).then((data) => {
    
    switch (data.license){
        case "Apache":
            data.license = licensesContent.apache;
            badge = badgesSymbol.apache;
            break;
        case "ISC":
            data.license = licensesContent.isc;
            badge = badgesSymbol.isc;
            break;
        case "MIT":
            data.license = licensesContent.mit;
            badge = badgesSymbol.mit;
            break;
        case "GNU GPLv3":
            data.license = licensesContent.gnu;
            badge = badgesSymbol.gnu;
            break;
        case "none":
            data.license = "";
            badge = "";
        
    }   
    const filename = "Generated-README.md";

    fs.writeFile(filename, generateHTML(data), (err) =>
        err ? console.log(err) : console.log('Success!')
    );
});
// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();

