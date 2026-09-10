import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';
import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, { cypressDir: 'src' }),
    fileServerFolder: '.',
    fixturesFolder: './src/fixtures',
    specPattern: 'src/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: './src/support/e2e.ts',
    modifyObstructiveCode: false,
    video: true,
    videosFolder: '../../dist/cypress/apps/graphular-e2e/videos',
    screenshotsFolder: '../../dist/cypress/apps/graphular-e2e/screenshots',
    chromeWebSecurity: false,
  },
});
