const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "what is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Please provide a project description"
    },
    {
        type: "input",
        name: "usage",
        message: "Enter instruction on usage:"
    },
    {
        type: "input",
        name: "installation",
        message: "Please provide the installation instructions"
    },
    {
        type: "list",
        name: "license",
        message: "What license are you using?",
        choices: ["None","MIT","Apache","Mozilla", "GNU"],
    },
    {
        type: "input",
        name: "contributers",
        message: "Who contributed to this project?"
    },
    {
        type: "input",
        name: "tests",
        message: "Were any tests done on your project"
    },
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "Where should people contact you for questions?"
    }

];

// function to write README file
function writeToFile(fileName, data) {
      
     
     fs.writeFile(path.join(process.cwd() + "/output/" + fileName), data, (err) => err && console.error(err))
  
}

// function to initialize program
function init() {
    promptUser(questions);
}


const promptUser = (questions) => {
    inquirer.prompt(questions).then((data) => {
        
       const file=generateMarkdown(data);
       writeToFile("readme-gen.md",file);
    });
}
// function call to initialize program
init();
