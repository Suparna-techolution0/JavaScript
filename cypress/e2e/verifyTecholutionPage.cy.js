describe("Verify the page", () => {
  it("verify home page", () => {
    //pass the url
    cy.visit("https://techolution.com/");
    //verify the text is present
    cy.get(".main_home_page_logo").should("be.visible");
    //click on Product Innovation link
    cy.clickLink("Product Innovation");
    //verify the WHY PRODUCT INNOVATION? text is present
    cy.xpath("(//p)[1]").should("have.text", "WHY PRODUCT INNOVATION?");
  });

  it("verify contact us page", () => {
    //click on Menu
    cy.get("#react-burger-menu-btn").click();
    cy.wait(5000);
    //click on Contact Us link
    cy.clickLink("Contact Us");
    //verify the Let's Connect text is present
    cy.get("[class='connectSideBar-module--sideBarTitle--ifyH+']").should(
      "have.text",
      "Let's Connect"
    );
    //pass input into Full Name* text field
    cy.get("input[name='name']").type("Trisha");
    //pass input into Email Address* text field
    cy.get("input[name='email']").type("tech012@gmail.com");
    //click on How can we help?
    cy.get("#react-select-20-placeholder").click();
    //select product innovation option
    cy.get("#react-select-2-option-1 > label").click();
    cy.get(".multi_select__value-container").click();
    //pass input into Contact Number text field
    cy.get("input[name='phone']").type("9635699219");
    //pass input into What can we solve for you? text field
    cy.get("textarea[name='other']").type("product innovation");
    cy.wait(5000);
    //click on submit
    cy.get("button[type='submit'] div:nth-child(1)").click();
    //verify the Help us connect you with the right innovation specialist text is present
    cy.get(".connectSideBar-module--formSectionTitle--9HA7z").should(
      "have.text",
      "Help us connect you with the right innovation specialist"
    );
  });
});
