// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  
  ${data.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Credits](#credits)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ## License
  
  This project is licensed under the ${data.license} license.
  
  ## Contributing
  
  ${data.contributing}
  
  ## Credits
  
  ${data.credits}

  ## Tests
  
  ${data.tests}
  
  ## Questions
  
  GitHub: [${data.username}](https://github.com/${data.username})
  
  For additional questions, contact me via email: ${data.email}
  `;
}

module.exports = generateMarkdown;
