describe("Test Swiggy.com", () => {
  //login
  before(() => {
    //pass the url
    cy.visit("https://www.swiggy.com/");
    //click on login
    cy.get(".x4bK8").click();
    //pass input into mobile number text field
    cy.get("#mobile").type("7001171516");
    //click on login
    cy.get(".a-ayg").click();
    //check otp text field is visible and give otp manually
    cy.get("#otp").should("be.visible");
    cy.wait(20000);
    //click on verify otp button
    cy.get("._25qBi._2-hTu").click();
    cy.wait(5000);
    //click on find location
    cy.get(".icon-location-crosshair").click();
  });

  //logout
  after(() => {
    cy.xpath("//span[normalize-space()='Suparna Modak']").trigger("mouseover", {
      force: true,
    });
    cy.xpath("//a[normalize-space()='Logout']").click({ force: true });
  });

  it("Verify Cart Page", () => {
    //click on search
    cy.xpath("//span[.='Search']").click();
    //search for a food
    cy.get("input[placeholder='Search for restaurants and food']")
      .type("pizza")
      .type("{enter}");
    //click on restaurant
    cy.get(
      "span[data-testid='RESTAURANT-nav-tab-pl'] span[role='button'] span"
    ).click();
    //click on one restaurant
    cy.xpath(
      "//a[contains(@aria-label,'Restaurant name: Pizza Hut,')]//div[contains(@aria-hidden,'true')]//div//div[contains(@data-testid,'resturant-card-name')]"
    ).click();
    //select only veg option
    cy.xpath("//span[.='Veg Only']").click();
    cy.wait(5000);
    //click on add
    cy.xpath("(//div)[156]").scrollIntoView().click();
    //click on continue
    cy.xpath("//span[.='Continue']").click();
    //click on add item
    cy.xpath("//span[.='Add Item']").click();
    cy.wait(5000);
    //go to cart page
    cy.xpath("//span[normalize-space()='Cart']").scrollIntoView().click();
    cy.wait(5000);
    //verify the desire text is present
    cy.get("._33KRy").should(
      "have.text",
      "Margherita Pizza1 Free Delight for youSuper Value Deal : 2 Medium Veg Pizzas starting at Rs 649 (Save Upto 44%)Customize"
    );
    //go back
    cy.go("back", -3);
  });

  it("Verify Offers Page", () => {
    //click on offers
    cy.xpath("(//span)[11]").click();
    //verify Offers for you text is present
    cy.get(".D-teR").should("contain", "Offers for you");
    //go back
    cy.go("back");
  });
});
