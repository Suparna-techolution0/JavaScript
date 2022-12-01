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
Cypress.Commands.add("clickLogin", (label) => {
  cy.get("a").contains(label).click();
});
Cypress.Commands.add("loginApp", (MobileNumber, Password) => {
  cy.get("input[class='_2IX_2- VJZDxU']").type(MobileNumber);
  cy.get("input[type='password']").type(Password);
  cy.get("button[class='_2KpZ6l _2HKlqd _3AWRsL']").click();
});
