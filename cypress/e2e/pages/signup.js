import { faker } from '@faker-js/faker'

export class SignUp{
    //Locators
    signup_link= 'a > span'
    fullname_locator= ':nth-child(1) > .process_input'
    email_locator= ':nth-child(2) > .process_input'
    passowrd_locator= '.input-group-merge > .form-control'
    pwd_show_hide_locator= '.cursor-pointer'
    submitBtn_locator= '.process-btn'

    //Functions
    // gotoSignup(){
    //     cy.get(this.signup_link).click()
    //     cy.hold()
    // }
    fullname(){
        const fakeFullName= faker.person.fullName()
        cy.get(this.fullname_locator, { timeout: 10000 }).should('be.visible')
            .type(fakeFullName)
        cy.hold()
    }
    email(){
        const fakeEmail= faker.internet.email()
        cy.get(this.email_locator)
            .type(fakeEmail)
        cy.hold()
    }
    pwd(pwdValue){
        cy.get(this.passowrd_locator)
        .type(pwdValue)
        cy.hold()
    }
    submitRequest(){
        cy.get(this.submitBtn_locator).click()
    }

}