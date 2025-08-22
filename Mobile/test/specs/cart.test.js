import { expect } from "@wdio/globals";
import homePage from "../pageobjects/home.page.js";
import browsePage from "../pageobjects/browse.page.js";
import productPage from "../pageobjects/product.page.js";

describe("Catálogo de produtos", () => {

  it("Deve buscar produto existente", async () => {
    await homePage.openMenu("Browse");
    await homePage.search();
    await browsePage.searchInput.setValue("Tênis Esportivo");
    expect(productPage.getProductTitle("Tênis Esportivo")).toBeDisplayed();
  });

  it("Deve buscar produto inexistente", async () => {
    await homePage.openMenu("Browse");
    await homePage.search();
    await browsePage.searchInput.setValue("iPhone");
    expect(productPage.getNoProductFound("No products found")).toBeDisplayed();
  });
});
