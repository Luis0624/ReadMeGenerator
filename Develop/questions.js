module.exports = [
    {
      type: "input",
      name: "Title",
      message: "What is the title for your project?",
    },

    {
      type: "input",
      name: "Description",
      message: "What is the description for your project?",
    },

    {
      type: "input",
      name: "Installation",
      message: "What are your installation instructions?",
    },

    {
      type: "input",
      name: "Use",
      message: "What are your instructions for using your project?",
    },

    {
        type: "input",
        name: "Testing",
        message: "What are your testing instructions?",
    },

    {
      type: "input",
      name: "Contributing",
      message: "Are there any guidelines for contributing t oyour project?",
    },

    {
      type: "list",
      name: "License",
      message: "Which license would you like to cover your project?",
      choices: ["MIT", "Apache", "GNU GPLv3", "ISC", "none"],
    },

    {
      type: "input",
      name: "GitHub URL",
      message: "Add your GitHub url?",
    },

    {
      type: "input",
      name: "Email",
      message: "Add your email address?",
    },
  ];