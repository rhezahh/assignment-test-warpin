import { Given, And, Then } from 'cypress-cucumber-preprocessor/steps'

const ebayPage = require('../../../support/ebay/ebay_po')

const object = new ebayPage()

Given(`Go to www.ebay.com`, () => {
    cy.visit('https://www.ebay.com')
})

And(`Type any search string in the search bar. For example: {string}`, keyword => {
    cy.get(object.searchbar).type(keyword)
})

And(`Change the Search category. For example: {string} and click search`, keyword => {
    cy.get(object.category).select(keyword).wait(1000)
    cy.get(object.searchButton).click()
})

Then(`Verify that the page loads completely`, () => {
    cy.get('.srp-river').should('be.visible')
})

Then(`Verify that the first result name matches with the {string}`, keyword => {
    cy.get(object.result).eq(0).contains(keyword)
    cy.get(object.result).eq(0).should(($object) => {
        expect($object.first()).contain(keyword)
    })
})