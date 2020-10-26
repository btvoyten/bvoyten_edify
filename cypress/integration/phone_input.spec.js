/// <reference types="cypress" />

context('BVoyten Edify Phone Input', () => {

    beforeEach(() => {
        cy.visit('https://catamphetamine.gitlab.io/react-phone-number-input/#without-country-select')
      })

    it('enters phone number into summary box', () => {
      cy.get(':nth-child(2) > form > input').type('14405551234')
      cy.get(':nth-child(3) > :nth-child(2) > :nth-child(5) > :nth-child(2)').should('contain', '+14405551234')
    })

    it('enters phone number into country = us box', () => {
        cy.get(':nth-child(3) > form > input').type('4405551234')
        cy.get(':nth-child(3) > :nth-child(3) > :nth-child(5) > :nth-child(2)').should('contain', '+14405551234')
    })

    it('enters phone number into country = us international box', () => {
        cy.get(':nth-child(4) > form > input').type('4405551234')
        cy.get(':nth-child(3) > :nth-child(4) > :nth-child(5) > :nth-child(2)').should('contain', '+14405551234')
    })

    it('enters phone number into withCountryCallingCode box', () => {
        cy.get(':nth-child(5) > form > input').type('4405551234')
        cy.get(':nth-child(5) > :nth-child(6) > :nth-child(2)').should('contain', '+14405551234')
    })

    it('enters phone number into default us box', () => {
        cy.get(':nth-child(6) > form > input').type('4405551234')
        cy.get(':nth-child(6) > :nth-child(5) > :nth-child(2)').should('contain', '+14405551234')
    })

    it('enters phone number into no country box', () => {
        cy.get(':nth-child(7) > form > input').type('14405551234')
        cy.get(':nth-child(7) > :nth-child(4) > :nth-child(2)').should('contain', '+14405551234')
    })

    it('selects country from drop down', () => {
        cy.get('form > select').select('United States +1')
        cy.get(':nth-child(3) > :nth-child(9) > :nth-child(6) > code').should('contain', 'US')
    })
  })