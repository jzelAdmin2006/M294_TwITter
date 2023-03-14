describe('C3', () => {
  it('Der Login-Info Button verlinkt auf /', () => {
    cy.visit('/')
    cy.get('.login-info .btn').invoke('attr', 'href').should('equal', '/login')
  })

  it('Der Login-Info Button hat noch die .btn und .btn--transparent Klassen', () => {
    cy.visit('/')
    cy.get('.login-info a').invoke('attr', 'class').should('contain', 'btn').and('contain', 'btn--transparent')
  })
})
