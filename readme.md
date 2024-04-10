
# 📋 Prerequisites

Before running the tests, ensure that the following prerequisites are met:

- Install [Node.js](https://nodejs.org/) installed on your machine
- Install [Visual Studio Code](https://code.visualstudio.com/download) or another Code IDE
- Install [Git](https://git-scm.com/downloads)

## ⚙️ Setup

1. Clone this repository to your local machine:

   - Open Terminal and Run this command to Install Cypress:

               git clone https://github.com/vinioliveiras/cypress-open-weather

2. Open the project on your favorite Code IDE:

             
3. Install Cypress:

   - Open Terminal and Run this command to Install Cypress:

               npm install cypress --save-dev

4. Install Report Library:

   - Open Terminal and Run this command to Install Report Library:

               npm install mochawesome mochawesome-merge mochawesome-report-generator --save-dev
                
   

## 🎢 Run Tests

1. Run Test in Cypress UI Mode:

   - Open Cypress UI :

               npx cypress open

   - Select E2E module and select "validate-open-weather-api.cy.js" test script

2. Run Test in Headless Mode:

   - Run without report:

               npx cypress run e2e/api/validate-open-weather-api.cy.js

   - Run with report: 

               npx cypress run e2e/api/validate-open-weather-api.cy.js --reporter mochawesome

## 🚁 Tips/Help

1. Your test reports are allocated on Results path in root directory:




