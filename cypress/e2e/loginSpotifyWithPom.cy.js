import Login from "../PageObjectModel/loginSpotifyPage";

//Login Spotify using POM.
describe("POM", () => {
    
  it("Login Spotify Page", () => {
    //pass the url
    cy.visit("https://open.spotify.com/");
    //click on login
    cy.get('[data-testid="login-button"] > .ButtonInner-sc-14ud5tc-0').click();
    //create class object.
    const x = new Login();
    //pass username
    x.setUserName("suparna9919@gmail.com");
    //pass password.
    x.setPassword("Suparna@123");
    //click on login.
    x.clickLogin();
    //verify the desire text.
    x.verification();
  });
});
