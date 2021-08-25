const { Builder, Capabilities, By } = require("selenium-webdriver");

const chromedriver = require("chromedriver");

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

beforeAll(async () => {
  await driver.get("http://localhost:5500/movieList/index.html");
});
afterAll(async () => {
  await driver.quit();
});

test("Add The Worst Horror Movie Ever to the Web List", async () => {
  let add_movie = await driver.findElement(
    By.xpath("/html/body/main/section/form/input")
  );
  let click_button = await driver.findElement(
    By.xpath("/html/body/main/section/form/button")
  );
  await add_movie.sendKeys("Wrestling Women VS the Aztec Mummy");
  await click_button.click();
  await driver.sleep(2000);
  // await add_movie.sendKeys("Wrestling Women VS the Aztec Mummy");
  // await click_button.click()
  // await add_movie.sendKeys("Wrestling Women VS the Aztec Mummy");
  // await click_button.click()
});
test("Cross off Worst Horror Movie Ever", async () => {
  //  (By.xpath('(/html/body/main/ul/li)[1]'))
  let cross_movie = await driver.findElement(By.xpath("/html/body/main/ul/li"));
  await cross_movie.click();
  await driver.sleep(1000);
});
test("Purge the Worst", async () => {
  // (By.xpath('//ul/li/button')
  let purge = await driver.findElement(
    By.xpath('//*[@id="WrestlingWomenVStheAztecMummy"]')
  );
  await purge.click();
  await driver.sleep(2000);
});
