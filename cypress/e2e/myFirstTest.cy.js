describe("My First Test", () => {
  
  it("test1", () => {
    cy.visit("https://www.amazon.in/");
    cy.title().should(
      "eq",
      "Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in"
    );
  });
  it("test2", () => {
    cy.visit("https://www.amazon.in/");
    cy.title().should(
      "not.be.visible",
      "Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in"
    );
  });
});
