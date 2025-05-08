// tests/test-submit.js
const { Builder, By, until } = require('selenium-webdriver');

const USERNAME = 'SEU_USERNAME';
const ACCESS_KEY = 'SUA_ACCESS_KEY';
const GRID_URL = `https://${USERNAME}:${ACCESS_KEY}@hub.lambdatest.com/wd/hub`;

(async function testFormSubmission() {
  let capabilities = {
    browserName: 'Chrome',
    browserVersion: 'latest',
    platformName: 'Windows 10',
    'LT:Options': {
      build: "Landing Page Demo",
      name: "Teste 2 - Envia formulário",
      selenium_version: "4.0.0"
    }
  };

  let driver = await new Builder()
    .usingServer(GRID_URL)
    .withCapabilities(capabilities)
    .build();

  try {
    await driver.get("https://SEU_SERVIDOR/index.html");

    await driver.findElement(By.id("name")).sendKeys("Joana Teste");
    await driver.findElement(By.id("email")).sendKeys("joana@email.com");
    await driver.findElement(By.id("message")).sendKeys("Olá, isso é um teste!");

    await driver.findElement(By.css("button[type='submit']")).click();

    await driver.wait(until.elementLocated(By.id("successMsg")), 5000);
    let successMsg = await driver.findElement(By.id("successMsg")).getText();
    console.log("Mensagem:", successMsg);
  } finally {
    await driver.quit();
  }
})();
