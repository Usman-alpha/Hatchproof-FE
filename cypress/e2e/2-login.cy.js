
describe('Hatchproof UAT login test suite.', () => {
    beforeEach(() => {
        cy.viewport(1320, 768)
    })
    it('Simple login test', () => {
        cy.login(' usman.mlk1996@gmail.com', 'Root@12345')
        cy.hold()
        const loginSt= Cypress.env('loginState')
        cy.wait(3000)
    })
})