/// <reference types="cypress" />

context('BVoyten Edify Dynamic Controls', () => {

    beforeEach(() => {
        cy.visit('http://the-internet.herokuapp.com/dynamic_controls')
    })

    it('checks the checkbox', () => {
        cy.get('#checkbox > input').check()
        cy.get('#checkbox > input').should('be.checked')
        cy.get('#checkbox > input').uncheck()
        cy.get('#checkbox > input').should('not.be.checked')
    })

     it('removes the checkbox', () => {
         cy.get('#checkbox-example > button').click()
         cy.get('#checkbox').should('not.exist')
         cy.get('#message').should('contain', 'It\'s gone!')
     })

    it('enables the text box', () => {
        cy.get('#input-example > button').click()
        cy.get('#input-example > input').should('be.enabled')
        cy.get('#input-example > input').type('Text box enabled')
        cy.get('#input-example > input').should('have.value', 'Text box enabled')
        cy.get('#message').should('exist')
    })

    it('disables the checkbox', () => {
        cy.get('#input-example > button').click()
        cy.get('#input-example > input').should('be.enabled')
        cy.get('#input-example > input').type('Text box enabled')
        cy.get('#input-example > input').should('have.value', 'Text box enabled')
        cy.get('#message').should('exist').and('contain', 'It\'s enabled!')
        cy.get('#input-example > button').click()
        cy.get('#input-example > input').should('be.disabled')
        cy.get('#message').should('exist').and('contain', 'It\'s disabled!')
    })
})