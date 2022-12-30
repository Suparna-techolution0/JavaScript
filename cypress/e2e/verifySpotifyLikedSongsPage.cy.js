describe("Test Spotify Webapplication", () => {
  
  it("Verify Search Page", () => {
    //pass the url
    cy.visit("https://open.spotify.com/");
    //click on login
    cy.get('[data-testid="login-button"] > .ButtonInner-sc-14ud5tc-0').click();
    //pass the input into mobile number and password text field and login
    cy.loginApp("suparna9919@gmail.com", "Suparna@123");
    cy.wait(5000);
    //click on search
    cy.clickLink("Search");
    // search for a song
    cy.get('[data-testid="search-input"]').type("shape of you").type("{enter}");
    //rightclick on the song
    cy.get('[data-testid="herocard-click-handler"]').rightclick();
    //verify Save to your Liked Songs is visible and then click
    cy.get(
      ":nth-child(5) > .wC9sIed7pfp47wZbmU6m > .Type__TypeElement-sc-goli3j-0"
    )
      .should("be.visible")
      .click();
    //click on Liked Songs Page.
    cy.clickLink("Liked Songs");
    //Verify the song is present in Liked Songs page.
    cy.get(
      '[data-testid="internal-track-link"] > .Type__TypeElement-sc-goli3j-0'
    ).should("have.text", "Shape of You");
  });
});
