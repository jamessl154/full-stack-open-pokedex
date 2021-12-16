describe('Pokedex', function() {
  beforeEach(() => {
    cy.visit('http://localhost:5000')
  })

  it('front page can be opened', function() {
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })

  it('from the front page we can navigate to a single Pokemons page', () => { 
    cy.contains('blastoise').click()
    cy.contains('torrent')
    cy.contains('rain dish')
  })
})