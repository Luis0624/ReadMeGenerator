module.exports = [
    {
      type: "input",
      name: "title",
      message: "What is the title for your project?",
    },

    {
      type: "input",
      name: "description",
      message: "What is the description for your project?",
    },

    {
      type: "input",
      name: "installation",
      message: "What are your installation instructions?",
    },

    {
      type: "input",
      name: "use",
      message: "What are your instructions for using your project?",
    },

    {
        type: "input",
        name: "testing",
        message: "What are your testing instructions?",
    },

    {
      type: "input",
      name: "contributing",
      message: "Are there any guidelines for contributing to your project?",
    },

    {
      type: "list",
      name: "license",
      message: "Which license would you like to cover your project?",
      choices: ["MIT", "Apache", "GNU GPLv3", "ISC", "none"],
    },

    {
      type: "input",
      name: "gitHubUrl",
      message: "Add your GitHub url?",
    },

    {
      type: "input",
      name: "email",
      message: "Add your email address?",
    },
  ];