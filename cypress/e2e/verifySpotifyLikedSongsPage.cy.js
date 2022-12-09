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

    //click on songs
    cy.get(
      '[href="/search/shape%20of%20you/tracks"] > .Chip__ChipComponent-sc-ry3uox-0 > .ChipInner__ChipInnerComponent-sc-1ly6j4j-0'
    ).click();
    //rightclick on the song
    cy.get(
      '[aria-rowindex="2"] > [data-testid="tracklist-row"] > .NZAU7CsuZsMeMQB8zYUu > .VpYFchIiPg3tPhBGyynT > .Type__TypeElement-sc-goli3j-0'
    ).rightclick();
    //click on Save to your Liked Songs
    cy.get(
      ":nth-child(5) > .wC9sIed7pfp47wZbmU6m > .Type__TypeElement-sc-goli3j-0"
    ).click();
    //click on Liked Songs Page.
    cy.clickLogin("Liked Songs");

    //Verify the song is present in Liked Songs page.
    cy.get(
      '[data-testid="internal-track-link"] > .Type__TypeElement-sc-goli3j-0'
    ).should("have.text", "Shape of You");
  });
});
