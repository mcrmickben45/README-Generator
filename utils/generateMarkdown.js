// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;

function generateMarkdown(data) {
  let output = `
![License Badge](https://img.shields.io/badge/License-${data.license}-green.svg)

#### GitHub Username: ${data.github}

#### GitHub Email Address: ${data.email}


# ${data.title}

## Description
${data.description}

## Table of Contents
* [Languages](#languages)
* [Installation](#installation)
* [Usage](#usage)
* [Contributors](#contributors)
* [Website](#website)
* [Tests](#tests)
* [Questions](#questions)
* [License](#license)`;

  // Use a map to join the languages array
  const formattedLanguages = data.languages.map(language => `* ${language}`).join('\n');

  output += `
## Built With:
${formattedLanguages}

## Installation
- ${data.installation}

## Usage
${data.usage}

## Contributors
- ${data.contributing}

## Website
${data.website}

## Tests
- ${data.test}

## Questions
For additional questions and or information, please refer to [here](https://github.com/${data.github}/)
or contact us via ${data.email}.

## License
Copyright &copy; ${new Date().getFullYear()} by ${data.contributing}.
Licensed under the ${data.license} license.
`;

  return output;
}

module.exports = generateMarkdown;