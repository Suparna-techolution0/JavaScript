describe("Test Spotify Webapplication", () => {
  it("Verify Search Page", () => {
    //pass the url
    cy.visit("https://open.spotify.com/");
    //click on login
    cy.get('[data-testid="login-button"] > .ButtonInner-sc-14ud5tc-0').click();
    //pass the input into mobile number and password text field
    cy.loginApp("suparna9919@gmail.com", "Suparna@123");
    cy.wait(5000);
    //click on search
    cy.clickLogin("Search");
    // search for a song
    cy.get('[data-testid="search-input"]').type("shape of you").type("{enter}");
    //Verify the song is Present
    cy.get(
      ".sm7ZnbOO1Zfg9cupYgPN > .Nqa6Cw3RkDMV8QnYreTr > .Type__TypeElement-sc-goli3j-0"
    ).should("have.text", "Shape of You");
  });
});
