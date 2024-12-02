const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Node event listeners can be implemented here
    },
    specPattern: "cypress/integration/examples/*.js", // Path to your test files
  },
});
