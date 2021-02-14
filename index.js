// npm init -y, npm install inquirer
const inquirer = require('inquire');
const fs = require('fs');

// current year
let currentTime = new Date();
let currentYear = currentTime.getFullYear();

// create standing README.md
function makeREADME(userInput) {
    return `# ${userInput.title}

    **Deployed application URL**
    ${userInput.githubDeployed}
    
    **GitHub Repository URL**
    ${userInput.githubRepo}
    


    ## Badges
    
    * ${userInput.badges}
    * ![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)




    ## License
    
    ${userInput.license}
    


    ## Table of Contents
    
    * [Description](#description)
    * [Features](#features)
    * [Installation](#installation)
    * [Usage](#usage)
    * [Credits](#credits)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)
    
    
    
    ## Description 
    
    ### What needs are we meeting?
    - ${userInput.needs}
    

    ### What would be the foreseeable consequences if the needs are unmet?
    - ${userInput.needsUnmet}
    

    ### What were your goals?
    - ${userInput.goals}
    

    ### What have you done about it?
    - ${userInput.done}

    

    ## Installation
    
    ${userInput.installation}
    
    

    ## Features

    * ${userInput.features}



    ## Credits
    
    ${userInput.credits}


    
    ## Contributing
    
    [Contributor Covenant](https://www.contributor-covenant.org/version/2/0/code_of_conduct/code_of_conduct.md)
    
    

    ## Tests
    
    ${userInput.tests}



    ## Contact

    **GitHub: ${userInput.github}**
    **Email: ${userInput.email}**
    


    &copy; ${currentYear} ${userInput.name}`;
}

//SYNC way
// 1. ask for input
async function askUser() {
    const userInput = await inquirer.prompt([
        {
            type: 'input',
            message: 'Write the title of your project.',
            name: 'title'
        },
        {
            type: 'list',
            message: 'Which license woudld you like?',
            name: 'license',
            choices: ['Apache License 2.0', 'MIT License', 'GNU GPL']
        },

    ])
    // 2. generate the readme.md
    const readmeGenerated = makeREADME(userInput)
    // 3. writeFileSync
    fs.writeFileSync('README.md', readmeGenerated);
    // 4. console.log to user finish
    console.log( `\n* finished! Your markdown is: README.md`)
}
askUser();