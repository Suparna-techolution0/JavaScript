describe("MyTestSuite", () => {
  
  //Test Instagram Login page for multiple data
  it("DataDrivenTest", () => {
    cy.fixture("Instagram").then((data) => {
      data.forEach((userdata) => {
        //visit the page
        cy.visit("https://www.instagram.com/");
        //click on Login
        cy.get(":nth-child(1) > .x1i10hfl > ._acan").click();
        cy.get("input[name='username']").type(userdata.username);
        cy.get("input[name='password']").type(userdata.password);
        cy.get("button[type='submit']").click();

        if (
          userdata.username == "suparna9919@gmail.com" &&
          userdata.password == "Suparna@890"
        ) {
          cy.get(
            ':nth-child(8) > :nth-child(1) > div.x1n2onr6 > .x1i10hfl > .x3nfvp2 > .x6s0dn4 > [style="width: 100%;"] > ._aacl'
          ).should("have.text", userdata.expected);
          //click on settings.
          cy.get("svg[aria-label='Settings']").click();
          //Logout
          cy.xpath("//div[contains(text(),'Log out')]").click();
          //click on Login
          cy.get(":nth-child(1) > .x1i10hfl > ._acan").click();
        }
        else {
          cy.get("._ab2z").should("have.text", userdata.expected);
        }
      });
    });
  });
});
