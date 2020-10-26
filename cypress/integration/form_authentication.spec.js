/// <reference types="cypress" />

context('BVoyten Edify Form Authentication', () => {

    beforeEach(() => {
        cy.visit('http://the-internet.herokuapp.com/login')
      })

    it('logs in with valid credentials', () => {
        cy.get('#username').type('tomsmith')
        cy.get('#password').type('SuperSecretPassword!')
        cy.get('.radius').click()
        cy.get('#flash').should('contain', 'You logged into a secure area!')
    })

    it('logs in with valid credentials and logs out', () => {
        cy.get('#username').type('tomsmith')
        cy.get('#password').type('SuperSecretPassword!')
        cy.get('.radius').click()
        cy.get('#flash').should('contain', 'You logged into a secure area!')
        cy.get('.button').click()
        cy.get('#flash').should('contain', 'You logged out of the secure area!')
    })

    it('logs in with invalid username', () => {
        cy.get('#username').type('tomjones')
        cy.get('#password').type('SuperSecretPassword!')
        cy.get('.radius').click()
        cy.get('#flash').should('contain', 'Your username is invalid!')
    })

    it('logs in with valid username but invalid password', () => {
        cy.get('#username').type('tomsmith')
        cy.get('#password').type('ItsNotUnusual!')
        cy.get('.radius').click()
        cy.get('#flash').should('contain', 'Your password is invalid!')
    })
  })
  