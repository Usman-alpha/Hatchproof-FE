import { SignUp } from "./pages/signup";

const SignUpObj= new SignUp()
describe('Hatchproof UAT signup test suite.', () => {
    beforeEach(() => {
        const baseUrl= 'https://uat.hatchproof.com/register'
        // const signupUrl = `${baseUrl}register`;
        cy.visit(baseUrl);
        cy.wait(4000);
        cy.viewport(1320, 768);
    });
    // it('Navigate to signup page.', () => {
    //     SignUpObj.gotoSignup()
    // })
    it('Check validations.', () => {
        SignUpObj.submitRequest()
        cy.hold()
        SignUpObj.fullname()
        SignUpObj.submitRequest()
        cy.hold()
        SignUpObj.email()
        SignUpObj.submitRequest()
        cy.hold()
        const pwdVall= "Art@12345"
        SignUpObj.pwd(pwdVall)
        SignUpObj.submitRequest()
        cy.wait(3000)

    })
    it('Enter valid credentials and submit regestration.', () => {
        SignUpObj.fullname()
        SignUpObj.email()
        const pwdVal= "Art@12345"
        SignUpObj.pwd(pwdVal)
        SignUpObj.submitRequest()
    })
})