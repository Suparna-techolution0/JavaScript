describe("Test Instagram Webapplication", () => {
  it("end to end testing of instagram", () => {
    //pass the url
    cy.visit("https://www.instagram.com/");
    //click on login
    cy.get(":nth-child(1) > .x1i10hfl > ._acan").click();
    cy.wait(5000);
    //pass the input into mobile number and password text field,login to the application
    cy.loginApp("suparna9919@gmail.com", "Suparna@890");
    cy.wait(2000);
    //go to home page
    cy.get(
      "body > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)"
    ).click();
    cy.wait(5000);
    //click on pop up
    cy.get("._a9_1").click();
    //click on ...
    cy.get(
      "body > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > section:nth-child(2) > main:nth-child(2) > div:nth-child(1) > section:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > article:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > button:nth-child(1) > div:nth-child(1) > div:nth-child(1)"
    ).click();
    //click on Share to
    cy.get("._a9-z > :nth-child(5)").click();
    //click on Share to Direct
    cy.get("._abdy").first().click();
    //search for a friend
    cy.get("._aa2u").type("Debobrata");
    //share the post
    cy.xpath("//div[contains(text(),'modakdebobrata')]").click();
    //select the friend's profile
    cy.get("button[class='_acan _acap _acaq _acas _aj1-']").click();
    cy.wait(2000);
    //click on Massages
    cy.get(".xwmz7sl").click();
    //go to friend's profile
    cy.get(
      "body > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > section:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > a:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1)"
    ).click();
    cy.wait(2000);
    //verify the post is sent.
    cy.get(":nth-child(5) > ._ac72 > .x78zum5").should("be.visible");
  });
});
