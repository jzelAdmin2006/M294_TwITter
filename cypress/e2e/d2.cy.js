describe('D2', () => {
  it('Der Login-Button ist disabled, wenn keine Infos eingegeben wurden', () => {
    cy.visit('/login')

    cy.get('.login .btn').should('have.attr', 'disabled')

    cy.get('#email').type('user@example.com')
    cy.get('.login .btn').should('have.attr', 'disabled')

    cy.get('#password').type('pass')
    cy.get('.login .btn').should('not.have.attr', 'disabled')
  })
})
