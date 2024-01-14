const fs = require('fs');
const path = require('node:path');
const inquirer = require('inquirer');
const generateMarkdown = require("./generateMarkdown.js");
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);
// array of questions for user
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'discription',
      message: 'What is a discription of your project?',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are your installation instructions?',
    },
    {
      type: 'input',
      name: 'usageInfo',
      message: 'What is your usage information?',
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'What are your contribution guidelines?',
    },
    {
      type: 'input',
      name: 'testInstruct',
      message: 'What are your test instructions?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Which license would you like to select?',
      choices: ['Apache 2.0 License', 'Boost Software License 1.0', 'The MIT License'],
    },
    {
      type: 'input',
      name: 'gitHub',
      message: 'What is your github username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
];

// // function to write README file
// function writeToFile(fileName, data) {
// }

// function to initialize program
function init() {
 inquirer.prompt(questions)
 .then((answers) => writeFileAsync('readme.md', generateMarkdown(answers)))
  .then(() => console.log('Successfully wrote to readme.md'))
  .catch((err) => console.error(err));
}

// function call to initialize program
init();
