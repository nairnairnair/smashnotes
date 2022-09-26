beforeEach(() => {
  cy.visit('http://localhost:3000')
  cy.intercept('GET', 'https://fe-cors-proxy.herokuapp.com', {
    headers: {
      "Target-URL": `http://smashlounge.com/api/chars/18`},
      body: {
        "id": "18",
        "name": "Peach",
        "tierdata": "6",
        "weight": "12th-14th",
        "fallspeed": "22nd-23rd",
        "walljump": "0",
        "guide": "Peach is one of the most unique floaty characters in the game because of her float mechanics. By using a technique called 'float cancelling' Peach is able to suspend herself in mid air and move horizontally, using any aerial attack. Landing lag after float cancelling is reduced, making her have one of the fastest recovery times on attacks\n",
        "game": "0"
    },
  })
  cy.get('select[name="character-select"]')
  .select('Peach')
  .get('button[name="char-select-button"]')
  .click()
  .get('input[name="title"]')
  .type('Edgeguarding Peach')
  .get('textArea[name="body"]')
  .type('Meet her horizontally, she cannot afford to lose too much height')
  .get('button[name="note-submit"]')
  .click()
})

describe('CharacterPage', () => {
  it('should be able to add a note for a character', () => {
    cy.get('h3[name="title-card"]')
    .should('contain', 'Edgeguarding Peach')
    .get('p[name="body-card"]')
    .should('contain', 'Meet her horizontally, she cannot afford to lose too much height')
  })

  it('should be able to delete a note for a character', () => {
    cy.get('h3[name="title-card"]')
    .should('contain', 'Edgeguarding Peach')
    .get('p[name="body-card"]')
    .should('contain', 'Meet her horizontally, she cannot afford to lose too much height')
    .get('button[name="delete-button"]')
    .click()
    .get('div[name="note-card"]')
    .should('not.exist')
    .get('h3[name="title-card"]')
    .should('not.exist')
    .get('p[name="body-card"]')
    .should('not.exist')
  })

  it('should be able to return to the homepage', () => {
    cy.get('button[name="home-button"]')
    .should('contain', 'Home')
    .click()
    .get('.logo')
    .get('select[name="character-select"]')
    .get('button[name="char-select-button"]')
    .should('contain', 'Go!')
    .get('p[name="home-notes-message"]')
    .should('contain', 'Choose a character to add notes on them!')
  })

  it('should not be able to see notes on a particular character on a different character page', () => {
    cy.get('select[name="character-select"]')
    .select('Marth')
    .get('button[name="char-select-button"]')
    .click()
    .get('div[name="note-card"]')
    .should('not.exist')
    .get('h3[name="title-card"]')
    .should('not.exist')
    .get('p[name="body-card"]')
    .should('not.exist')
  })

  it('should be able to see notes again after returning to the character page', () => {
    cy.get('select[name="character-select"]')
    .select('Marth')
    .get('button[name="char-select-button"]')
    .click()
    .get('div[name="note-card"]')
    .should('not.exist')
    .get('h3[name="title-card"]')
    .should('not.exist')
    .get('p[name="body-card"]')
    .should('not.exist')
    .get('select[name="character-select"]')
    .select('Peach')
    .get('button[name="char-select-button"]')
    .click()
    .get('h3[name="title-card"]')
    .should('contain', 'Edgeguarding Peach')
    .get('p[name="body-card"]')
    .should('contain', 'Meet her horizontally, she cannot afford to lose too much height')
  })

})