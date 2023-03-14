describe('D1', () => {

  const login = () => {
    cy
        .intercept('GET', '/twitter/auth', {
          statusCode: 200, body: {
            user: { id: 1 },
            token: 'xyz',
          }
        })
        .as('authCheck')
  }

  it('Die Textlänge wird dynamisch berechnet', () => {
    login()

    cy.visit('/')
    cy.get('.composer__textarea').type('Hallo Welt')
    cy.get('.stats__counter').should('have.text', '10')
  })

  it('Der Tweet veröffentlichen Button ist bis 5 Zeichen disabled', () => {
    login()

    cy.visit('/')
    cy.get('.composer__textarea').type('1234')
    cy.get('.composer .btn').should('have.attr', 'disabled')

    cy.get('.composer__textarea').type('5')
    cy.get('.composer .btn').should('not.have.attr', 'disabled')
  })
})
