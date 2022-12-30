describe("Test Spotify Webapplication", () => {
  
  it("Verify Search Page", () => {
    //pass the url
    cy.visit("https://open.spotify.com/");
    //click on login
    cy.get('[data-testid="login-button"] > .ButtonInner-sc-14ud5tc-0').click();
    //verify the To continue, log in to Spotify text is present
    cy.get("#login-to-continue").should(
      "have.text",
      "To continue, log in to Spotify."
    );
    //pass the input into mobile number and password text field and login
    cy.loginApp("suparna9919@gmail.com", "Suparna@123");
    cy.wait(5000);
    //click on search
    cy.clickLink("Search");
    // search for a song
    cy.get('[data-testid="search-input"]')
      .should("be.visible")
      .type("shape of you")
      .type("{enter}");
    //Verify the song is Present
    cy.get(
      ".sm7ZnbOO1Zfg9cupYgPN > .Nqa6Cw3RkDMV8QnYreTr > .Type__TypeElement-sc-goli3j-0"
    ).should("have.text", "Shape of You");
  });
});
