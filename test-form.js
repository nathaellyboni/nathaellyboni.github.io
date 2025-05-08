// tests/test-form.js
const { Builder, By } = require('selenium-webdriver');

const USERNAME = 'SEU_USERNAME';
const ACCESS_KEY = 'SUA_ACCESS_KEY';
const GRID_URL = `https://${USERNAME}:${ACCESS_KEY}@hub.lambdatest.com/wd/hub`;

(async function testLandingPage() {
  let capabilities = {
    browserName: 'Chrome',
    browserVersion: 'latest',
    platformName: 'Windows 10',
    'LT:Options': {
      build: "Landing Page Demo",
      name: "Teste 1 - Verifica título",
      selenium_version: "4.0.0"
    }
  };

  let driver = await new Builder()
    .usingServer(GRID_URL)
    .withCapabilities(capabilities)
    .build();

  try {
    await driver.get("https://SEU_SERVIDOR/index.html"); // Ex: https://meusite.net/index.html
    let title = await driver.getTitle();
    console.log("Título:", title);
  } finally {
    await driver.quit();
  }
})();
