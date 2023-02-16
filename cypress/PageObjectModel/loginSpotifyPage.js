class Login {
  txtUserName = "#login-username";
  txtPassword = "#login-password";
  btnLogin = "#login-button";
  lblVerify = "(//span[@data-encore-id='type'])[1]";

  setUserName(username) {
    cy.get(this.txtUserName).type(username);
  }
  setPassword(password) {
    cy.get(this.txtPassword).type(password);
  }
  clickLogin() {
    cy.get(this.btnLogin).click();
  }
  verification() {
    cy.xpath(this.lblVerify).should("have.text", "supi");
  }
}

export default Login;
