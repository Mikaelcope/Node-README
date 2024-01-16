function generateLicense(data) {
  if (data.license === 'Apache 2.0 License') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  }
  else if (data.license === 'The MIT License') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  }
  else if (data.license === 'Boost Software License 1.0') {
    return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
  }
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} '             '  ${generateLicense(data)}
  
## Discription
${data.discription}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
${generateLicense(data.license)}
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

### Installation
${data.installation}

### Usage
${data.usageInfo}

### Contribution
${data.contribution}

### Test Instructions
${data.testInstruct}

### Questions
Have any questions or want to get in touch. Email me on ${data.email}

To find more of my work, click on the link below:
${data.gitHub}



### License
This application is cover under the ${generateLicense(data)} 
`;
}

module.exports = generateMarkdown;
