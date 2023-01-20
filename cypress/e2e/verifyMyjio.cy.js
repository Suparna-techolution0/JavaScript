describe("Test MyJio Webapplication", () => {
  
  beforeEach("Login", () => {
    //pass the url
    cy.visit("https://www.jio.com/jcms/apps/myjio/");
    //click on login icon.
    cy.get(
      ".j-avatar.j-avatar-kind__default.j-avatar-size__small.j-avatar__is-clickable"
    ).click();
    //verify "Log in to unlock a world of digital experiences" text is present after clicking.
    cy.get(".j-heading.j-text-body-xs").should(
      "have.text",
      "Log in to unlock a world of digital experiences."
    );
    //pass the input into mobile number text field.
    cy.get("#inputField").type("7001171516");
    //click on generate otp button.
    cy.get("button[aria-label='button Generate OTP']").click();
    cy.wait(30000);
    //verify "Verify phone number" text is present after clicking.
    cy.get(".j-text.j-text-heading-xs").should(
      "have.text",
      "Verify phone number"
    );
    //click on otp text field.
    cy.get("#basic-input-testInput-code-block-0").click();
    //click on submit button.
    cy.get("button[aria-label='button Submit']").click();
    cy.wait(20000);
    //verify the login icon contain "SM" text.
    cy.get("#loggedin-content").should("contain", "SM");
  });

  afterEach("Logout", () => {
    //mouseover on login icon.
    cy.get("#loggedin-content").trigger("mouseover");
    //click on sign out.
    cy.clickLink("Sign out");
    //verify "Log in to unlock a world of digital experiences" text is present after clicking.
    cy.get(".j-heading.j-text-body-xs").should(
      "have.text",
      "Log in to unlock a world of digital experiences."
    );
  });

  it("Verify Recharge Page", () => {
    //click on recharge.
    cy.xpath(
      "//span[@class='panelHeadingText'][normalize-space()='Recharge']"
    ).click();
    //verify "Top Trending Plans" text is present after clicking.
    cy.get("button[id='0'] span[class='css-g88c3e']").should(
      "have.text",
      "Top Trending Plans"
    );
    //click on view details.
    cy.get(
      "div[id='panel_0'] div:nth-child(3) div:nth-child(2) div:nth-child(2) button:nth-child(1)"
    ).click();
    //verify "Pack validity" text is present after clicking.
    cy.xpath("//div[normalize-space()='Pack validity']").should(
      "have.text",
      "Pack validity"
    );
    //click on close button.
    cy.get("button[aria-label='Close']").click();
    //click on buy.
    cy.xpath("(//button[@type='button'][normalize-space()='Buy'])[3]").click();
    //verify "Payments" text is present after clicking on buy.
    cy.get(".css-4cddmn").should("have.text", "Payments").go("back");
    cy.wait(20000);
    //go back of the current page.
    cy.go("back");
    //verify the login icon contain "SM" text.
    cy.get("#loggedin-content").should("contain", "SM");
  });

  it("Verify Get Jio SIM Page", () => {
    //click on get jio sim link.
    cy.clickLink("Get Jio SIM");
    //verify "Get a Jio connection" text is present after clicking.
    cy.get(".txt-align--center.j-text.j-text-heading-xs").should(
      "have.text",
      "Get a Jio connection"
    );
    //click on prepaid.
    cy.get("span[aria-label='Prepaid']").click();
    //click on continue button.
    cy.get("div[aria-label='button Continue']").click();
    //verify "Delivery address" text is present after clicking.
    cy.get(".j-text.j-text-heading-xs").should("have.text", "Delivery address");
    //pass the input into address text area.
    cy.get("textarea[name='Address']")
      .type("Bijur,Purba Bardhaman")
      .type("{enter}");
    //pass the input into flat no/house text field.
    cy.get(".input-text > input").type("Modak House");
    //verify Book SIM Delivery button is visible.
    cy.get("button[aria-label='button Book SIM Delivery'] ").should(
      "be.visible"
    );
  });
});
