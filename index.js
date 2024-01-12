const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Provide a short description of your project:",
  },
  {
    type: "input",
    name: "installation",
    message:
      "How do you install your project? Provide installation instructions:",
  },
  {
    type: "input",
    name: "usage",
    message: "How do you use your project? Provide usage information:",
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license for your project:",
    choices: ["MIT", "Apache", "GPL", "None"],
  },
  {
    type: "input",
    name: "contributing",
    message:
      "How can others contribute to your project? Provide contribution guidelines:",
  },
  {
    type: "input",
    name: "tests",
    message: "How do you run tests on your project? Provide test instructions:",
  },
  {
    type: "input",
    name: "username",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  const filePath = path.join(process.cwd(), fileName);
  fs.writeFile(filePath, data, (err) =>
    err
      ? console.error(err)
      : console.log(`${fileName} generated successfully!`)
  );
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((answers) => {
    const markdownContent = generateMarkdown(answers);
    writeToFile("README.md", markdownContent);
  });
}

// function call to initialize program
init();
