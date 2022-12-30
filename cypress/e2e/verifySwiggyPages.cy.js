describe("Test Swiggy.com", () => {
  
  //Login
  before(() => {
    //pass the url
    cy.visit("https://www.swiggy.com/");
    //click on login
    cy.get(".x4bK8").click();
    //verify Login text is present
    cy.get("._1Tg1D").should("have.text", "Login");
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
    //verify restaurants text is present
    cy.get(".BZR3j").should("contain", "restaurants");
  });

  //Logout
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
      .should("be.visible")
      .type("pizza")
      .type("{enter}");
    //click on restaurant
    cy.get(
      "span[data-testid='RESTAURANT-nav-tab-pl'] span[role='button'] span"
    ).click();
    //click on one restaurant
    cy.xpath("(//div[contains(text(),'Pizza ')])[1]")
      .should("be.visible")
      .click();
    cy.wait(5000);
    //select only veg option
    cy.get("._1KYwd").click();
    cy.wait(5000);
    cy.xpath("//h3[normalize-space()='Margherita']").should(
      "contain",
      "Margherita"
    );
    //click on add
    cy.xpath("(//div[contains(text(),'ADD')])[2]").scrollIntoView().click();
    //verify the food is added
    cy.get("div[class='_3L1X9 F8dpS'] div[class='_2zAXs']").should(
      "be.visible"
    );
    cy.wait(5000);
    //go back of the page
    cy.go("back");
    //go to cart page
    cy.xpath("//span[normalize-space()='Cart']").scrollIntoView().click();
    cy.wait(5000);
    //verify the desire text is present
    cy.get("._33KRy").should("contain", "Margherita");
    //go back of the current page
    cy.go("back");
  });

  it("Verify Offers Page", () => {
    //click on offers
    cy.xpath("(//span)[11]").click();
    //verify Offers for you text is present
    cy.get(".D-teR").should("contain", "Offers for you");
    //go back of the current page
    cy.go("back");
  });
});
