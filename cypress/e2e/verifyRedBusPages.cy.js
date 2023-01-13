describe("Verify redBus Pages", () => {
  
  it("Login", () => {
    //pass the url
    cy.visit("https://www.redbus.in/", {
      headers: {
        "Accept-Encoding": "gzip, deflate",
      },
    });
    //click on profile icon
    cy.get("#i-icon-profile").click({ force: true });
    //click on signin
    cy.get("#signInLink").click({ force: true });
    //verify the iframe contain Sign in to avail exciting discounts and cashbacks!! text
    cy.iframe(".modalIframe")
      .find(".new-signin-header.m-l-44")
      .should("contain", "Sign in to avail exciting discounts and cashbacks!!");
    //pass input into mobile number text field
    cy.iframe(".modalIframe").find("#mobileNoInp").type("7001171516");
    //verify the captcha is visible and then click.
    cy.frameLoaded(".modalIframe")
      .iframeCustom()
      .find("iframe[title='reCAPTCHA']")
      .first()
      .iframeCustom()
      .should("be.visible")
      .click();
    cy.wait(10000);
    //click on generate otp.
    cy.iframe(".modalIframe").find("#otp-container").click({ force: true });
    //verify To continue, please enter OTP sent to verify mobile number text is present.
    cy.iframe(".modalIframe")
      .find(".server-error.server-error-otp.server-error-active.success")
      .should(
        "have.text",
        "To continue, please enter OTP sent to verify mobile number"
      );
    //verify enter otp text field is present and then click
    cy.iframe(".modalIframe").find("#otp").should("be.visible").click();
    cy.wait(30000);
    //click on verify otp.
    cy.iframe(".modalIframe").find("#verifyUser").click();
    cy.wait(7000);
    //click on close.
    cy.get(".modalCloseSmall > .icon-close").click();
    //verify the title should be contain redBus.
    cy.title().should("contain", "redBus");
  });
});
