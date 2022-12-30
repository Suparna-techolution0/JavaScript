// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

///<reference types= "cypress" />

/// <reference types= "cypress-xpath" />
Cypress.Commands.add("clickLink", (label) => {
  cy.get("a").contains(label).click({
    force: true,
  });
});
/*Cypress.Commands.add("loginApp", (email, Password) => {
  cy.get(":nth-child(1) > .x1npaq5j > ._aa48 > ._aa4b").type(email);
  cy.get(":nth-child(2) > .x1npaq5j > ._aa48 > ._aa4b").type(Password);
  cy.get("._abc2 > :nth-child(3)").click();
});*/
Cypress.Commands.add("loginApp", (email, Password) => {
  cy.get("#login-username").type(email);
  cy.get("#login-password").type(Password);
  cy.get("#login-button").click();
});
