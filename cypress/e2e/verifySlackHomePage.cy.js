describe('Verify slack Home page', () =>{
    it ('Verify page', () =>{

        cy.visit("https://techolution.slack.com/")
        cy.get("#email").type("suparna.modak@techolution.com")
        cy.get("#password").type("Suparna@12")
        cy.wait(2000)
 
        cy.get("#signin_btn").click()
        cy.xpath("//span[.='Techolution']").should('exist')
        cy.get(".p-top_nav__search__text").type("Shreya Shetty")
        cy.xpath("(//strong[.='Shreya Shetty'])[1]").click()

        cy.get("div[aria-label='Message to Shreya Shetty']").should('be.visible')
    })
})