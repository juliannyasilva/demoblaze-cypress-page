const { defineConfig } = require("cypress");
const {faker} = require("@faker-js/faker");

module.exports = defineConfig({
  e2e: {
    env: {
      username: faker.internet.userName(),
      password: faker.internet.password()
    },
    baseUrl: 'https://www.demoblaze.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
