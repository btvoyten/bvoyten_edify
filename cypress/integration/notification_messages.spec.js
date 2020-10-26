/// <reference types="cypress" />

context('BVoyten Edify Notification Messages', () => {

    it('verifies a valid notification message displays on click', () => {
      cy.visit('http://the-internet.herokuapp.com/notification_message_rendered')
      cy.get('p > a').click()
      cy.get('#flash').should('contain', 'Action successful')
    //"Action successful",
    //"Action unsuccessful, please try again"
    })
  })