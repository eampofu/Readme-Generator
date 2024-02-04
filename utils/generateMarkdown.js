// function to generate markdown for README
function generateMarkdown(data) {
  const {title,description,usage,installation,license,contributers,email,tests,github}=data;

  return `# ${title}

  ## Description
  ${description}
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributers)
  - [Tests](#tests)
  - [Questions](#questions)
  ## Installation
  ${installation}
  ## Usage
  ${usage}
  ## License
  
  ${addBadge(license)}

  ## Contributing
  ${contributers}
  ## Tests
  ${tests}
  ## Questions
  If you have any questions or would like to find out more, you can reach me on: 
  - [GitHub](https://github.com/${github})
  - [Email](mailto:${email})
`;
}

//Adding the badge

function addBadge(license) {
  if (license === "Apache") {
    return `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
  } else if (license === "GNU") {
    return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
  } else if (license === "MIT") {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  } else if (license === "Boost") {
    return `![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)`;
  } else if (license === "Mozilla") {
    return `![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`;
  } else {
    return "";
  }
}
module.exports = generateMarkdown;
