describe("Verify slack Home page", () => {
  
  it("Verify page", () => {
    //pass the url
    cy.visit("https://techolution.slack.com/");
    cy.clickLink("sign in with a password instead");
    //pass email id into EmailId text field
    cy.get("#email").type("suparna.modak@techolution.com");
    //pass email id into Password text field
    cy.get("#password").type("Suparna@12");
    cy.wait(2000);
    //click on sign in button
    cy.get("#signin_btn").click();
    //verify techolution text is exist
    cy.xpath("//span[.='Techolution']").should("exist");
    //search
    cy.get(".p-top_nav__search__text").type("Shreya Shetty");
    //click on profile
    cy.xpath("(//strong[.='Shreya Shetty'])[1]").click();
    //verify text is visible
    cy.get("div[aria-label='Message to Shreya Shetty']").should("be.visible");
  });
});
