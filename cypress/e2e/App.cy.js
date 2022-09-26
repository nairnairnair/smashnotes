beforeEach(() => {
  cy.visit('http://localhost:3000')
})

describe('App', () => {
  it('should be able to visit the homepage and see the logo and character selection form', () => {
    cy.get('.logo')
    .get('select[name="character-select"]')
    .get('button[name="char-select-button"]')
    .should('contain', 'Go!')
    .get('p[name="home-notes-message"]')
    .should('contain', 'Choose a character to add notes on them!')
  })

  it('should be able to select a character and navigate to its page', () => {
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
    .get('h1[name="char-name"]')
    .should('contain', 'Peach')
    .get('img[name="char-image"]')
    .get('p[name="traits"]')
    .should('contain', `Traits: Peach is one of the most unique floaty characters in the game because of her float mechanics. By using a technique called 'float cancelling' Peach is able to suspend herself in mid air and move horizontally, using any aerial attack. Landing lag after float cancelling is reduced, making her have one of the fastest recovery times on attacks`)
    .get('p[name="tier"]')
    .should('contain', 'Tier Position: 6')
    .get('p[name="fall-speed"]')
    .should('contain', 'Fall Speed: 22nd-23rd fastest')
    .get('p[name="weight"]')
    .should('contain', 'Weight: 12th-14th heaviest')
    .get('p[name="walljump"]')
    .should('contain', 'Can Walljump: No')
  })


})