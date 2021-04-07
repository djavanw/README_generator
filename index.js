const inquirer = require("inquirer");
const fs = require("fs");

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

inquirer
    .prompt([
        {
            type: "input",
            name: "title",
            message: "What is the title of the project?",
        },
        {
            type: "input",
            name: "description",
            message: "What is the description of the project?",
        },
        {
            type: "input",
            name: "toc",
            message: "List the Table of Contents?",
        },
        {
            type: "input",
            name: "installation",
            message: "What are the installation instructions?",
        },
        {
            type: "input",
            name: "usage",
            message: "Include instructions of how the applications is used?",
        },
        {
            type: "input",
            name: "license",
            message: "What type of license is this project?",
        },
        {
            type: "input",
            name: "contributions",
            message: "How do users contribute to this project?",
        },
        {
            type: "input",
            name: "tests",
            message: "Are there any special testing procedures? If so, list the instructions.",
        },
        {
            type: "input",
            name: "github",
            message: "What is the GitHub username for this project?",
        },
        {
            type: "input",
            name: "email",
            message: "What email address will be used for this project?",
        },

    ])