describe('Verify the page', () =>{
it ('test1', () =>{
    cy.visit("https://www.google.co.in/")
    cy.get("[type= 'text']").type("techolution")
    cy.wait(3000)
})
    it ('test2', () =>{
    cy.xpath("//span[.='techolution india private limited']").click()
    cy.wait(3000)
    cy.xpath("//a[@href='https://techolution.com/']").click({ multiple: true })
    cy.xpath("(//div)[27]").contains("Accelerating Business for the New Digital Economy")
})
})
