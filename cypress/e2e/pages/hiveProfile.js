import { faker } from '@faker-js/faker'

export class Profile{
    // LOCATORS
    team_locator= "a[href='/dashboard/team']"

    // METHODS
    team(){
        cy.get(this.team_locator).click()
        cy.hold()
    }
}