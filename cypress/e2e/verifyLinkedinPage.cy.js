describe("Test Linkedin Page", () => {
  
  before("Login", () => {
    //pass the url.
    cy.visit("https://www.linkedin.com/login");
    //verify "Sign in" text is present on the page
    cy.get(".header__content__heading").should("have.text", "Sign in");
    //pass input into email , password text field and click on login.
    //used custom commands.
    cy.loginApp("suparna9919@gmail.com", "Supu@12345");
    //verify the page is contain "suparna Modak" text.
    cy.get("div[class='t-16 t-black t-bold']").should(
      "contain",
      "suparna Modak"
    );
  });

  after("Logout", () => {
    //click on me icon
    cy.get("#ember17").click();
    //click on sign out.
    cy.get('.global-nav__secondary-item--divider > .global-nav__secondary-link').click();
    //verify sign in button is visible.
    cy.get(".nav__button-secondary").should("be.visible");
  });

  it.skip("Verify Profile Page", () => {
    //click on my profile.
    cy.get("div[class='t-16 t-black t-bold']").click();
    //verify the page having "suparna Modak" text.
    cy.get(
      ".text-heading-xlarge.inline.t-24.v-align-middle.break-words"
    ).should("have.text", "suparna Modak");
    //click on Edit intro button.
    cy.get("button[aria-label='Edit intro']").click();
    //verify Edit intro text is present after clicking
    cy.get("#profile-edit-form-page-header").should("contain", "Edit intro");
    //click on Add new education.
    cy.xpath("//span[normalize-space()='Add new education']").click();
    //verify Add education text is present after clicking
    cy.get("#profile-edit-form-page-header").should("contain", "Add education");
    //pass input into School text field.
    cy.get("[placeholder$='Ex: Boston University']")
      .type("Saroj Mohan Institute of Technology - India")
      .type("{enter}");
    //pass input into Degree text field.
    cy.get('[placeholder$="Ex: Bachelor’s"]').type("B.TECH").type("{enter}");
    //click on save.
    cy.xpath("//span[normalize-space()='Save']").click();
    //click on dismiss.
    cy.xpath("(//button[@aria-label='Dismiss'])[1]").click();
    //click on No thanks.
    cy.xpath("//span[normalize-space()='No thanks']").click();
    cy.wait(6000);
    //click on save.
    cy.xpath("//span[normalize-space()='Save']").click();

    //verify the page is contain "Saroj Mohan Institute of Technology - India" text after clicking
    cy.xpath(
     "div[normalize-space()='Saroj Mohan Institute of Technology - India'] "
    ).should("contain", "Saroj Mohan Institute of Technology - India");
  });
});
