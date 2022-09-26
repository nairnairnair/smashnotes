beforeEach(() => {
  cy.visit('http://localhost:3000')
})

describe('CharacterPage', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})