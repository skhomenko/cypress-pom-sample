const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://the-internet.herokuapp.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    supportFile: false, // Disable the support file if not needed
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}', // Pattern for test files
    viewportWidth: 1280, // Default viewport width
    viewportHeight: 720, // Default viewport height
    chromeWebSecurity: false, // Disable Chrome Web Security for cross-origin testing
    retries: {
      runMode: 2,
      openMode: 0,
    }, // Configure retries
    env: {
      username: 'tomsmith',
      password: 'SuperSecretPassword!',
    }, // Manage environment variables
    defaultCommandTimeout: 10000, // Increase default command timeout
  },
});
