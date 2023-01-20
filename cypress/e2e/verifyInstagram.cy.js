describe("Test Instagram Webapplication", () => {
  
  before("Login", () => {
    //pass the url
    cy.visit("https://www.instagram.com/");
    //click on login
    cy.get(":nth-child(1) > .x1i10hfl > ._acan").click();
    cy.wait(5000);
    //pass the input into mobile number and password text field,login to the application
    cy.loginApp("suparna9919@gmail.com", "Suparna@890");
  });

  it("end to end testing of instagram", () => {
    cy.wait(2000);
    //go to home page
    cy.get(
      ".x1iyjqo2 > :nth-child(1) > :nth-child(1) > .x1n2onr6 > .x1i10hfl"
    ).click();
    cy.wait(5000);
    //click on pop up
    cy.get("._a9_1").click();
    //click on ...
    cy.get(
      ":nth-child(1) > ._ab99._ab9h > ._aasi > ._ab9i > ._aasm > ._abl-"
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
      ":nth-child(2) > ._abm4 > .x1i10hfl > ._ab9_ > ._abbj > ._ab8w > .xnz67gz > .x6umtig"
    ).click();
    cy.wait(2000);
    //verify the post is sent.
    cy.get(":nth-child(3) > ._ac72 > .x78zum5").should("be.visible");
  });
});
