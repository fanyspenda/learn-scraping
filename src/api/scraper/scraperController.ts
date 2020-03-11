import { Request, Response } from "express";
import { Builder, By, Key } from "selenium-webdriver";

const scraper = async () => {
  let counter = 0;
  let linkItem = [];
  let driver = await new Builder().forBrowser("chrome").build();
  try {
    await driver.get("https://blossomzones.com/product-category/mouse/");

    // await driver.findElement(By.id("wc_ps_search_keyword_2")).clear();

    // await driver
    //   .findElement(By.id("wc_ps_search_keyword_2"))
    //   .sendKeys("sades", Key.RETURN);

    while (counter < 5) {
      await driver.sleep(2000);
      await driver.wait(driver.executeScript("window.scrollBy(0, 700)"));
      counter += 1;
    }

    counter = 0;

    let linkWebElements = await driver.findElements(
      By.className(
        "woocommerce-LoopProduct-link woocommerce-loop-product__link"
      )
    );

    while (counter < linkWebElements.length) {
      linkItem.push(await linkWebElements[counter].getAttribute("href"));
      counter += 1;
    }

    counter = 0;
    while (counter < 8) {
      await driver.executeScript(`window.open("${linkItem[counter]}")`);
      await driver.sleep(1000);
      counter += 1;
    }

    const windowHandler = await driver.getAllWindowHandles();
    counter = 0;
    while (counter < 8) {
      await driver.switchTo().window(windowHandler[counter]);
      await driver.close();
      await driver.sleep(1000);
      counter += 1;
    }
    // rawNewProducts = await driver.findElements(
    //   By.className(`woocommerce-loop-product__title`)
    // );

    // rawNewProducts.map(async (rawNewProduct, index) => {
    //   let name = await rawNewProduct.getText();
    //   newProducts.push(name);
    //   return newProducts;
    // });
    return linkItem;
  } catch (cError) {
    return cError;
  } finally {
    await driver.quit();
  }
};

const bsScraper = {
  store: async (req: Request, res: Response) => {
    let data = await scraper();
    res.send(data);
  }
};

export default bsScraper;
