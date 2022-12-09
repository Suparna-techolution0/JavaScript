describe("Verify the page", () => {
  it("test1", () => {
    //pass the url
    cy.visit("https://www.google.co.in/");
    //search for techolution
    cy.get("[type= 'text']").type("techolution").type("{enter}");
    cy.wait(3000);
    //click on the link
    cy.xpath("//a[@href='https://techolution.com/']").click({ multiple: true });
    //verify the text is present
    cy.xpath(
      "//p[contains(text(),'Join us in building a better world for the next')]"
    )
      .scrollIntoView()
      .should(
        "have.text",
        "Join us in building a better world for the next \ngeneration, while boosting profits for the present."
      );
  });
});
