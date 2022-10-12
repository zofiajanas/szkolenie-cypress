const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    specPattern: `src/cypress/e2e/*.{js,jsx,ts,tsx}`,
    // supportFile: 'src/cypress/support/index.ts',
    // baseUrl: '...',  URL API
    setupNodeEvents(on, config) {
      console.log(process.env.CYPRESS_E2E_URL);
      // if (process.env.CYPRESS_E2E_URL)
      // config.baseUrl = process.env.CYPRESS_E2E_URL;
    },
  },
});
