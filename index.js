const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./mdUtils/generateMarkdown");

//Question validation, Ensures question is answered
const needAnswer = function (valueN) {
    if(valueN) {
        return true;
    } else {
        return "An answer is needed to move to the next question."
    }
};

//Array of questions for the user to answer.
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of the project?",
        validate: needAnswer,
    },
    {
        type: "input",
        name: "description",
        message: "What is the description of the project?",
        validate: needAnswer,
    },
    {
        type: "input",
        name: "toc",
        message: "List the Table of Contents?",
        default: "See the different sections."
    },
    {
        type: "input",
        name: "installation",
        message: "What are the installation instructions?",
        validate: needAnswer,
    },
    {
        type: "input",
        name: "usage",
        message: "Include instructions of how the applications is used?",
        validate: needAnswer,
    },
    {
        type: "list",
        name: "license",
        message: "What type of license is this project?",
        choices: ["MIT", "Apache", "GPLv2", "GPLv3", "AGPLv3", "AFLv3", "CC", "Unlicense", "WTFPL", "ECLv2"],
        default: "Unlicense",
    },
    {
        type: "list",
        name: "color",
        message: "What color would you like your license badge?",
        choices: ["blue", "green", "brightgreen", "yellowgreen", "yellow", "orange", "pink", "lightgrey"],
        default: "blue",
    },

    {
        type: "input",
        name: "contributions",
        message: "How do users contribute to this project?",
        validate: needAnswer,

    },
    {
        type: "input",
        name: "tests",
        message: "Are there any special testing procedures? If so, list the instructions.",
        validate: needAnswer,
    },
    {
        type: "input",
        name: "github",
        message: "What is the GitHub username for this project?",
        validate: needAnswer,
    },
    {
        type: "input",
        name: "email",
        message: "What email address will be used for this project?",
        validate: needAnswer,
    },
];

//Writing to markdown file
function writeToFile(fileName, data) {
    console.log(data.license);
    fs.writeFileSync(fileName, generateMarkdown(data))
}

//Function to initialize the application
function init() {
    inquirer.prompt(questions)
    .then((userResponses) =>
    // console.log(userResponses)
    writeToFile("README.md", userResponses)
    
    );
}

//Call to start up the application
init();