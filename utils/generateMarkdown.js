function generateLicense(data) {
  if (data.license === 'Apache 2.0 License') {
    return 'Apache'
    // return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  }
  else if (data.license === 'The MIT License') {
    return 'mit'
    // return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  }
  else if (data.license === 'Boost Software License 1.0') {
    return 'Boost'
    // return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
  }
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${generateLicense}
  
# Bootstrap-Portfolio
Creating a portfolio to showcase my web developments skills as well as previous work.

## Discription
${data.discription}

### Installation
${data.installation}

### Usage
${data.usageInfo}

### Contribution
${data.contribution}

### Test Instructions
${data.testInstruct}

### GitHub User Information
${data.gitHub}

### Get in Touch
${data.email}

### License
This application is cover under the ${generateLicense} 
`;
}

module.exports = generateMarkdown;
