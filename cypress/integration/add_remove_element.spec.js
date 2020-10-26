/// <reference types="cypress" />

context('BVoyten Edify Add/Remove', () => {

  beforeEach(() => {
    cy.visit('http://the-internet.herokuapp.com/add_remove_elements/')
  })

    it('adds element', () => {
      cy.get('button').click()
      cy.get('.added-manually').should('exist')
    })

    it('removes elements', () => {
      cy.get('button').click()
      cy.get('.added-manually').should('exist')
      cy.get('.added-manually').click()
      cy.get('.added-manually').should('not.exist')
    })
  })