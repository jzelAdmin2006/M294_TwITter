describe('B1', () => {
  it('Max Mustermann wird nicht mehr überall als Autor angezeigt', () => {
    cy.visit('/')
    cy.contains('.tweet__author', 'Max Mustermann').should('not.exist')
  })
})
