describe('C1', () => {
  it('Die HomeView ist erreichbar', () => {
    cy.visit('/')
    cy.get('.logo').should('contain.text', 'TwITter')
  })

  it('Die LoginView ist erreichbar', () => {
    cy.visit('/login')
    cy.get('.login').should('contain.text', 'Login')
  })

  it('Das <IconSparkles> in der ".login-info" ist immer noch sichtbar', () => {
    cy.visit('/')
    cy.get('.sparkles-icon').should('be.visible')
  })
})
