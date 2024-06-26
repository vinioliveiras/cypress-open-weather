const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: false,
    json: true,
  },
  
  e2e: {
    URL: 'https://api.openweathermap.org/data/2.5/',
    API_KEY: '3c393043ff7d2626cbdf9fde0fb674f5',
    WRONG_API_KEY: 'abcdefghijklm123456789',
    CITY: 'Lisbon',
    LAT: '38.71',
    LON: '-9.13',
    WRONG_LAT: '-3.2139',
    WRONG_LON: '-198.98328',
  },
});
