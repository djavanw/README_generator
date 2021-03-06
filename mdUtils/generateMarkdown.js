//Pulling in Arrays of object with license content.
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
    break;
  
  case "GPLv3":
    insertURL = "gpl-3.0";
    break;

  case "AGPLv3":
    insertURL = "agpl-3.0";
    break;

  case "AFLv3":
    insertURL = "afl-3.0";
    break;

  case "CC":
    insertURL = "cc0-1.0";
    break;

  case "Unlicense":
    insertURL = "unlicense";
    break;

  case "WTFPL":
    insertURL = "wtfpl";
    break;

    case "ECLv2":
      insertURL = "ecl-2.0";
      break;
  
  default:
    break;
  }
    // currentLicense = licenseObject.find(element=>{
    // console.log(element.name)
    // return  element.name === license
    // })


  return `[${license} Full Documentation](https://choosealicense.com/licenses/${insertURL})`
  //(${currentLicense.url})
}

// A function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  currentLicense= licenseObject.find(element => {
    //console.log(element.name)
    return  element.name ===license
    })

    return currentLicense.content 
}


// A function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license, data.color)}

***

  ## Description:
  ${data.description}
  
***
  ## Table of Contents:
  1.  [Description](#description)
  2.  [Installation](#installation)
  3.  [Usage](#usage)
  4.  [License](#license)
  5.  [Contributing](#contributing)
  6.  [Tests](#tests)
  7.  [Questions](#questions)

***
  ## Installation:
  ${data.installation}

***
  ## Usage:
  ${data.usage}
   
***
  ## License:
  This project falls under the ${data.license} License.  The full documentation for this license can be found at ${renderLicenseLink(data.license)}.

  Below is an excerpt of the ${data.license} License.
  <br>
  ${renderLicenseSection(data.license)}

  ## Contributing:
  The contributors for this project are: ${data.contributors}.
  <br>
  ${data.contributing}.

***
  ## Tests:
  ${data.tests}

***
  ## Questions:
  - The GitHub profile for this project is ${data.questions}.
 
  - If there are any questions, the contributor can be reached at ${data.email}.

`
};

module.exports = generateMarkdown;
