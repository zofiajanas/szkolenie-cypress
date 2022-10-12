const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    specPattern: `cypress/e2e/*.{js,jsx,ts,tsx}`,
    // supportFile: 'src/cypress/support/index.ts',
    baseUrl: 'http://localhost:1234',
    setupNodeEvents(on, config) {
      console.log(process.env.CYPRESS_E2E_URL);
      require('cypress-localstorage-commands/plugin')(on, config);
      return config;
      // if (process.env.CYPRESS_E2E_URL)
      // config.baseUrl = process.env.CYPRESS_E2E_URL;
    },
  },
});
