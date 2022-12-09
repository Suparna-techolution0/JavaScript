describe("Test YouTube Webapplication", () => {
  it("end to end testing of YouTube", () => {
    //pass the url
    cy.visit("https://accounts.google.com/ServiceLogin/signinchooser");
    cy.get("#identifierId").type("suparna9919@gmail.com");
    cy.get(
      "#identifierNext > .VfPpkd-dgl2Hf-ppHlrf-sM5MNb > .VfPpkd-LgbsSe > .VfPpkd-vQzf8d"
    ).click();
    /*cy.get("input[name='search_query']").type("javascript").type("{enter}");
    cy.get("span[title='JavaScript Tutorials for Beginners in Hindi']").click();*/
  });
});
