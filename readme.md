
# 📋 Prerequisites

Before running the tests, ensure that the following prerequisites are met:

- Install [Node.js](https://nodejs.org/) installed on your machine
- Install [Visual Studio Code](https://code.visualstudio.com/download) or another Code IDE
- Install [Git](https://git-scm.com/downloads)

## ⚙️ Setup

1. Clone this repository to your local machine and open path:

   - open Terminal and Type: 
                git clone https://github.com/yumaruy/cypress-open-weather


   - Type on terminal: 
                cd cypress-open-weather

2. Install Cypress:

   - open Terminal and Type: 
                npm install cypress --save-dev
   

## 🎢 Run Tests

1. Open Cypress Dashboard:

   - open Terminal and Type:   
                npx cypress open

   - choose E2E Testing option and Select some test script to run

2. Run Headless Test:

   - open Terminal and Type: 
                npx cypress run validade-open-weather-api.cy.js




## ⛔ Defects

    1 - The platform is not allowing you to change the number of items in the cart because the component used to demonstrate the number of products is a Tooltip

    2 -  You can checkout without any items in your cart

    3 -  In the Sauce Labs Backpack item, a function is displayed as a string in the product description

    4 - The last item in the list has a function in its name "Test.allTheThings() T-Shirt (Red)"
