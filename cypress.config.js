const { defineConfig } = require("cypress");
const {faker} = require("@faker-js/faker");

module.exports = defineConfig({
  projectId: 'rygz6y',
  e2e: {
    baseUrl: 'https://www.demoblaze.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
