Cypress.Commands.add('hold', ()=>{
    cy.wait(2000);
});

//Team Admin Login
Cypress.Commands.add('login', (email, password) => {
    cy.session('loginState', () => {
        const url= 'https://uat.hatchproof.com/login'
        cy.visit(url);
        cy.get('.process_input', { timeout: 10000 }).should('be.visible')
            .type(email)
            cy.hold()
        cy.get('.input-group-merge > .form-control')
            .type(password)
            cy.hold()
        cy.get('.process-btn')
            .click();

                const loginState = {
                    email,
                    password,
                };
                Cypress.env('loginState', loginState);
    });
});
