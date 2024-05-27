const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "excludeSpecPattern": ['**/1-getting-started/*','**/2-advanced-examples/*'],
    "chromeWebSecurity": false,
    "browser": "chrome",
    "watchForFileChanges": false,
    "exprimentalSessionSupport": true,
    testIsolation: false,
    "compilerOptions": {
      "types": ["Cypress"]
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
