describe("Verify Flipkart cart page", () => {
  it("Verify Cart Page", () => {
    //pass the url
    cy.visit("https://www.flipkart.com/");
    //click on login
    cy.clickLink("Login");
    //pass the input into mobile number and password text field
    cy.loginApp("8145988527", "Suparna@123");
    cy.wait(2000);
    //search for a product
    cy.get("input[placeholder='Search for products, brands and more']")
      .type("iphone 13 mini")
      .type("{enter}");
    //click on the first link
    cy.get(
      "body > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(1)"
    )
      .invoke("removeAttr", "target")
      .click();
    //scrolldown and check visibility enter delivery pincode text field
    cy.get("#pincodeInputId").scrollIntoView();
    cy.get("#pincodeInputId").should("be.visible");
    //enter pincode and check
    cy.get("#pincodeInputId").type("700135").type("{enter}");
    cy.wait(5000);
    //click on add to cart button
    cy.get(".row > :nth-child(1) > ._2KpZ6l").click({
      force: true,
    });
    cy.wait(5000);
    //verify product is present in the cart page.
    cy.get("._2Kn22P").should(
      "have.text",
      "APPLE iPhone 13 Mini (Starlight, 512 GB)"
    );
  });
});
