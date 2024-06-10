import { Profile } from "./pages/hiveProfile"

const ProfileObj= new Profile()
describe('Hive profile module', () => {
    before(() => {
        cy.login(' cystage@blondmail.com', 'Art@12345')
        cy.hold()
        const loginSt= Cypress.env('loginState')
        cy.wait(1000);
        cy.viewport(1320, 768);
    });
    it('assessment click checks.', () => {
        cy.scrollTo('center')
    })
})