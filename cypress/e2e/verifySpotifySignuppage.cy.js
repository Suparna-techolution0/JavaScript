describe('Verify Signup page', ()=>{
    it ('Verify Signup page', ()=>{
        //open the website
        cy.visit("https://www.spotify.com/in-en/signup")
        cy.wait(1000)
        //pass the input into What's your email? text field
        cy.get("#email").type("suparna9919@gmail.com")
        //pass the input into Confirm your email text field
        cy.get("#confirm").type("suparna9919@gmail.com")
        //pass the input into Create a password text field
        cy.get("#password").type("Suparna@123")
        //pass the input into What should we call you? text field
        cy.get("#displayname").type("supi")
        //pass the input in to Yeartext field
        cy.get("#year").type("1999")
        //select month
        cy.get("#month").select("February")
        //pass the input into day text field
        cy.get("#day").type("3")
        cy.wait(1000)
        //select gender
        cy.get('[type="radio"]').check('female',{force: true}).should('be.checked')
       //checked the checkbox
        cy.xpath("//input[@id='marketing-opt-checkbox']").first().check({force: true}).should('be.checked')
        cy.wait(1000)
       //click on captcha
       const iframe= cy.xpath("//iframe[@title='reCAPTCHA']").first()
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap);
        cy.wait(5000)
        iframe.click()
        cy.wait(5000)
        //click on submit
        cy.get("[type='submit']").click()
    })
    })
    