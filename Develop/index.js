// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const questions = require("./questions.js");
const licensesContent = require("./licenses.js");
const badgesSymbol = require("./badges.js")
let badge;

const genReadMe = (answers) =>
`# ${answers.title}

# Table of Contents:
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
* [License](#license)

# Description

${answers.description}

# Installation

${answers.installation}

# Usage

${answers.use}

# Contributing

${answers.contributing}

# Tests

${answers.testing}

# Questions

If you have any questions, you can reach out using either option from below:
* @ My GitHub page ${answers.gitHubUrl}
* Or send an Email to ${answers.email}

# License

${badge} ${answers.license}
`;

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

    fs.writeFile(filename, genReadMe(data), (err) =>
        err ? console.log(err) : console.log('Success!')
    );
});
// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();

