describe("Verify Amazon Pages", () => {
  
  beforeEach("Login", () => {
    //pass the url
    cy.visit("https://www.amazon.in/");
    //click on sign in
    cy.get("#nav-link-accountList-nav-line-1").click();
    //verify Sign in text is present
    cy.get(".a-padding-extra-large > .a-spacing-small").should(
      "contain",
      "Sign in"
    );
    //pass input to Email or mobile phone number text field
    cy.get("#ap_email").type("8145988527");
    //click on continue
    cy.get("span[id='continue']").click();
    //verify Password text is present
    cy.get(".a-span5 > .a-form-label").should("contain", "Password");
    cy.get("#ap_password").type("Suparna@1234");
    //click on sign in button
    cy.get("#signInSubmit").click();
    cy.wait(5000);
    //verify Hello, suparna text is present
    cy.get("#nav-link-accountList-nav-line-1").should(
      "have.text",
      "Hello, suparna"
    );
  });

  afterEach("Logout", () => {
    //mouseover on account & Lists
    cy.get("#nav-link-accountList").trigger("mouseover");
    //click on sign Out button
    cy.xpath("//span[normalize-space()='Sign Out']").click();
    //verify Sign in text is present
    cy.get(".a-padding-extra-large > .a-spacing-small").should(
      "contain",
      "Sign in"
    );
  });

  it("Verify Proceed to Buy Page", () => {
    //search for smart watch
    cy.get("#twotabsearchtextbox").type("smart watch").type("{enter}");
    //click on Fire-Boltt checkbox
    cy.xpath("(//span[normalize-space()='Fire-Boltt'])[2]")
      .scrollIntoView()
      .click();
    cy.wait(10000);
    //click on one product
    cy.xpath(
      "(//a[@class='a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal'])[1]"
    )
      .invoke("removeAttr", "target")
      .click();
    cy.wait(5000);
    //verify Fire-Boltt text is present
    cy.get("#title > #productTitle").should("contain", "Fire-Boltt");
    cy.wait(5000);
    //click on add-to-cart-button
    cy.get("#add-to-cart-button").click();
    //verify Added to Cart text is present
    cy.get(".a-size-medium-plus.a-color-base.sw-atc-text.a-text-bold").should(
      "contain",
      "Added to Cart"
    );
    //click on cart
    cy.get(".nav-cart-icon").click({ force: true });
    //verify Fire-Boltt text is present
    cy.get(".a-color-base > .a-truncate > .a-truncate-cut").should(
      "contain",
      "Fire-Boltt"
    );
    //click on Proceed to Buy button
    cy.get("#sc-buy-box-ptc-button").click();
    //verify Checkout text is present
    cy.get("div[class='a-column a-span8'] h1").should("contain", "Checkout");
    //verify Select a delivery address text is present
    cy.get(".a-color-state").should("contain", "Select a delivery address");
    //select one address
    cy.get(
      "div[class='a-row address-row'] span[class='a-label a-radio-label']"
    ).click();
    //click on use this address button
    cy.get(
      "span[id='shipToThisAddressButton'] span[class='a-button-inner']"
    ).click();
    cy.wait(6000)
    //verify Select a payment method text is present
    cy.xpath("(//div[@class='a-column a-span10'])[1]").should(
      "contain",
      "Select a payment method"
    );
    //click on Net Banking dropdown
    cy.get(".a-dropdown-prompt").click();
    //click on ICICI Bank
    cy.xpath("(//a[normalize-space()='ICICI Bank'])[1]").click();
    //click on use this payment method button
    cy.get(
      "#orderSummaryPrimaryActionBtn > .a-button-inner > .a-button-input"
    ).click();
    //verify place your order and pay button is visible
    cy.get(".a-row.continue-buttons.place-order-button").should("be.visible");
    //verify Order Total: text is present
    cy.get(":nth-child(6) > :nth-child(1) > .break-word").should(
      "contain",
      "Order Total:"
    );
    //go back of the current page
    cy.go(-3);
  });

  it("Verify Fresh Page", () => {
    //click on Fresh
    cy.clickLink("Fresh");
    //verify Fresh Logo is visible
    cy.get("a[aria-label='Amazon Fresh Logo']").should("be.visible");
    //click on Chocolates & Icecreams
    cy.get(
      "a[aria-label='Choclates & Desserts'] span[class='nav-a-content']"
    ).click();
    //verify Choclates & Desserts text is present
    cy.get("div[class='fmc-local-page-header'] h1").should(
      "have.text",
      "Choclates & Desserts"
    );
  });

  it("Verify Your Account", () => {
    //mouseover on account & Lists
    cy.get("#nav-link-accountList").trigger("mouseover");
    //click on Your Account
    cy.xpath("//span[normalize-space()='Your Account']").click();
    //verify Your Account text is present
    cy.get("div[class='a-row a-spacing-base'] h1").should(
      "contain",
      "Your Account"
    );
    //click on Prime
    cy.get("div[data-card-identifier='Prime'] div[class='a-row']").click();
    //verify You are currently not a member of Amazon Prime text is present
    cy.get(".a-box-inner.a-alert-container").should(
      "contain",
      "You are currently not a member of Amazon Prime. "
    );
  });
});
