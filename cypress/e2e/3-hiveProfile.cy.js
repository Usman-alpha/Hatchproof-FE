import { Profile } from "./pages/hiveProfile"

const ProfileObj= new Profile()
describe('Hive profile module', () => {
    before(() => {
        cy.login(' cystage@blondmail.com', 'Art@12345')
        cy.hold()
        const loginSt= Cypress.env('loginState')
        cy.wait(1000)
        cy.viewport(1320, 768)
        cy.wait(5000)
    })
    it('Scroll to assessment result on P-VEMS section.', () => {
        cy.scrollTo('center')
    })
    it('Click on each P-VEMS item one by one.', () => {
        cy.get("ul[class='mb-2 nav nav-pills']").should('be.visible')
        cy.get("ul[class='mb-2 nav nav-pills'] li[class='nav-item']").each(($el, index, $list) => {
            cy.wrap($el).click()
            cy.log(`Clicked on nav item ${index + 1}`)
            cy.wait(500)
        })
    })
    it('Go to Team', ()=> {
        cy.get("a[class='nav-menu-main menu-toggle hidden-xs is-active nav-link']").click()
        cy.hold()
        ProfileObj.team()
    })
    it('Check if table is populated or not.', ()=> {
    cy.get("div[role='table']").then($table => {
        const rowCount = $table.find('tbody tr').length;
        if (rowCount === 0) {
            cy.log('Table is empty');
            // cy.get('#team-members-table tbody tr').should('have.length', 0);
        } else {
            cy.log('Table not empty');
            // cy.get('#team-members-table tbody tr').should('have.length.greaterThan', 0);
        }
    })
})
})