import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    supportFile: 'src/cypress/support/index.ts',
    specPattern: 'src/**/*.integration.{js,jsx,ts,tsx}',
    baseUrl: 'http://localhost:6006', //'https://tvgo.test/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
