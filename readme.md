
# 📋 Prerequisites

Before running the tests, ensure that the following prerequisites are met:

- Install [Node.js](https://nodejs.org/) installed on your machine
- Install [Visual Studio Code](https://code.visualstudio.com/download) or another Code IDE
- Install [Git](https://git-scm.com/downloads)

## ⚙️ Setup

1. Clone this repository to your local machine and open path:

   - open Terminal and Type: 
                git clone https://github.com/vinioliveiras/cypress-open-weather


   - Type on terminal: 
                cd cypress-open-weather

2. Install Cypress:

   - open Terminal and Type to install Cypress: 
                npm install cypress --save-dev

   - open Terminal and Type to JSON Reports Lib: 
                npm install mochawesome mochawesome-merge mochawesome-report-generator --save-dev
                
   

## 🎢 Run Tests

1. Open Cypress Dashboard:

   - open Terminal and Type:   
                npx cypress open

   - choose E2E Testing option and Select some test script to run

2. Run Test in Headless Mode:

   - Run without report:

               npx cypress run e2e/api/validate-open-weather-api.cy.js

   - Run with report: 

               npx cypress run e2e/api/validate-open-weather-api.cy.js --reporter mochawesome

## 🚁 Tips/Help

1. Your test reports are allocated on Results path in root directory:   




