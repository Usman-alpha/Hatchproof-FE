Cypress.Commands.add('hold', ()=>{
    cy.wait(2000);
});

//Team Admin Login
Cypress.Commands.add('login', (email, password) => {
    cy.session('loginState', () => {
        const url= 'https://uat.hatchproof.com/login'
        cy.visit(url);
        cy.hold()
        cy.get("input[name='loginEmail']", {timeout: 3000}).should('be.visible')
            .type(email)
            cy.hold()
        cy.get("input[placeholder^='Enter']")
            .type(password)
            cy.hold()
        cy.get("button[type='submit']")
            .click();

                const loginState = {
                    email,
                    password,
                };
                Cypress.env('loginState', loginState);
    });
});
