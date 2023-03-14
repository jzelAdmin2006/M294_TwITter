describe('C2', () => {
  it('Der Menüpunkt «Stream» verweist auf /', () => {
    cy.visit('/')
    cy.get('.nav a:first-child').invoke('attr', 'href').should('equal', '/')
  })

  it('Der Menüpunkt «Login» verweist auf /login', () => {
    cy.visit('/')
    cy.get('.nav a:last-child').invoke('attr', 'href').should('equal', '/login')
  })

  it('Der Menüpunkt «Login» ist aktiv, wenn mann auf der /login Seite ist', () => {
    cy.visit('/login')
    cy.get('.nav a:last-child').should('have.class', 'router-link-active')
  })

  it('Es gibt nur einen aktiven Menüpunkt', () => {
    cy.visit('/login')
    cy.get('.nav a:last-child').should('have.class', 'router-link-active')
    cy.get('.nav a:first-child').should('not.have.class', 'router-link-active')
  })
})
