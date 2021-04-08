const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./util/generateMarkdown");



//Question validation, Ensures question is answered
const needAnswer = function (valueN) {
    if(valueN) {
        return true;
    } else {
        return "An answer is needed to move to the next question."
    }
};

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
        choices: ["MIT", "GPLv2","Apache","GPLv3", "AGPLv3", "AFLv3", "CC","Unlicense", "WTFPL","ECLv2","Other"],
        default: "Other License",
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


// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, data, function(err){
//         if(err) {
//             return console.error(err)
//         } else {
//             console.log("Success!")
//         };
//     });
// };


// .then((answer) => {
//     const filename = `${answer.title.toLowerCase().split(" ").join(" ")}.json`;

//     fs.writeFile(filename, JSON.stringify(answer, null, '\t'), (err) =>
//     err ? console.log(err) :console.log("Success!")
//     );
// });

function writeToFile(fileName, data) {
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