const licenseObject = require ("./licenseObjects");
let currentLicense= {};

// Function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license, color) {
  currentLicense = licenseObject.find(element => {
    //console.log(element.name)
    return element.name === license
    })
  return `[![license](https://img.shields.io/badge/license-${license}-${color}.svg)](${currentLicense.url})`;
}

// Function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let insertURL;
  switch (license) {
    case "MIT":
      insertURL = "mit";
      break;
    
      case "GPLv2":
        insertURL = "gpl-2.0";
        break;
      
      case "Apache":
        insertURL = "apache-2.0";
        break
      
      case "GPLv3":
        insertURL = "gpl-3.0";
        break
      
      default:
        break;
  }
    // currentLicense = licenseObject.find(element=>{
    // console.log(element.name)
    // return  element.name === license
    // })


  return `[${license} Documentation](https://choosealicense.com/licenses/${insertURL})`
  //(${currentLicense.url})
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  currentLicense= licenseObject.find(element => {
    console.log(element.name)
    return  element.name ===license
    })

    return currentLicense.content 
}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license, data.color)}

***
  ## Table of Contents:
  1.  [Description](#description)
  2.  [Installation](#installation)
  3.  [Usage](#usage)
  4.  [License](#license)
  5.  [Contributions](#contributions)
  6.  [Tests](#tests)
  7.  [GitHub](#github)
  8.  [Questions](#email)

***

  ## Description:
  ${data.description}

  ## Installation:
  ${data.installation}

  ## Usage:
  ${data.usage}

  ## License:
  This project falls under the ${data.license}.  The documentation for this license is found at
  
  ${renderLicenseLink(data.license)}
  <br>
   ${renderLicenseSection(data.license)}

  ## Contributions:
  The contributors for this project are: ${data.contributions}

  ## Tests:
  ${data.tests}

***
  
  ## Questions:
  - The GitHub address for this project is ${data.github}.
 
  - If there are any questions, the contributor can be reached at ${data.email}.

`;
}

module.exports = generateMarkdown;
