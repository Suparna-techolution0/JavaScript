describe("Verify google maps", () => {
  //open url
  beforeEach(() => {
    //pass the url
    cy.visit("https://www.google.com/maps/");
  });

  it("verify direction page ", () => {
    //click on direction
    cy.get(".eYqqWd.vF7Cdb").click();
    cy.wait(10000);
    //verify starting point text field present and pass the input
    cy.get("input[placeholder='Choose starting point, or click on the map...']")
      .should("be.visible")
      .type("Kolkata, West Bengal")
      .type("{enter}");
    //verify Choose destination text field present and pass the input
    cy.get("input[placeholder='Choose destination, or click on the map...']")
      .should("be.visible")
      .type("Bangalore, Karnataka")
      .type("{enter}");
    cy.wait(5000);
    //verify Send directions to your phone is present
    cy.get(".qS6JSb.fontTitleSmall.XbJon").should(
      "have.text",
      "Send directions to your phone"
    );
    //click on options
    cy.xpath("//span[normalize-space()='Options']").click({ force: true });
    //verify Route options text is visible
    cy.get(".pWr6ic").should("have.text", " Route options ");
    cy.wait(7000);
    //click on train option
    cy.get("label[for='transit-vehicle-prefer-2'] span:nth-child(3)").click({
      force: true,
    });
    //click on close
    cy.xpath("//span[normalize-space()='Close']").click({ force: true });
    //verify train image is visible
    cy.get("#section-directions-trip-travel-mode-0").should("be.visible");
    //click on Flights
    cy.get("img[aria-label='Flights']").click();
    //verify Kolkata—Bengaluru flights text is present
    cy.get(".VuCHmb.fontHeadlineSmall").should(
      "have.text",
      "Kolkata—Bengaluru"
    );
  });

  it("verify search page", () => {
    //pass the input into search text field
    cy.get("#searchboxinput").type("Kolkata, West Bengal").type("{enter}");
    cy.wait(7000);
    //verify Kolkata text is present
    cy.xpath("//span[normalize-space()='Kolkata']").should(
      "contain",
      "Kolkata"
    );
  });

  it("verify language page", () => {
    //click on menu
    cy.get(".bDDiq").click({ force: true });
    cy.wait(20000);
    //verify google maps image is visible
    cy.get(".lmygoc").should("be.visible");
    //click on language
    cy.get(".aAaxGf > span").click({ force: true });
    //verify Select language text is present
    cy.get(".yb2Rh").should("have.text", " Select language ");
    cy.wait(10000);
    //click on bengali language
    cy.get('.qMgSKe > [jsinstance="1"] > [jsinstance="0"] > a ').click();
    //verify সাইন-ইন করুন text is present
    cy.get("#gb_70").should("contain", "সাইন-ইন করুন");
  });
});
