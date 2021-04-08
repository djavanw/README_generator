// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![license](https://img.shields.io/badge/license-${license}-blue.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `![license](https://img.shields.io/badge/license-${license}-blue.svg)`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Table of Contents:
  1.  [Description](#description)
  2.  [Installation](#installation)
  3.  [Usage](#usage)
  4.  [License](#license)
  5.  [Contributions](#contributions)
  6.  [Tests](#tests)
  7.  [GitHub](#github)
  8.  [Contact Info](#email)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}
  ${renderLicenseSection(data.license)}

  ## Contributions
  The contributors for this project are: ${data.contributions}

  ## Tests
  ${data.tests}

  ## GitHub
  The GitHub address for this project is: ${data.github}

  ## Questions
  If there are any questions, the contributor can be reached at: ${data.email}

`;
}

module.exports = generateMarkdown;
