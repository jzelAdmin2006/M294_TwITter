describe('F1', () => {
    it('Die Composer Komponente wird bei ungültiger Session nicht angezeigt, die LoginInfo schon', () => {
        cy
            .intercept('GET', '/twitter/tweets', {
                statusCode: 200, body: {
                    data: []
                }
            })

        cy
            .intercept('GET', '/twitter/auth', {
                statusCode: 401,
            })
            .as('authCheck')

        cy.visit('/')

        cy.wait('@authCheck')

        cy.get('.composer').should('not.exist')
        cy.get('.login-info').should('exist')
    })

    it('Die Composer Komponente wird bei gültiger Session angezeigt, die LoginInfo nicht', () => {
        cy
            .intercept('GET', '/twitter/tweets', {
                statusCode: 200, body: {
                    data: []
                }
            })

        cy
            .intercept('GET', '/twitter/auth', {
                statusCode: 200, body: {
                    user: { id: 1 },
                    token: 'xyz',
                }
            })
            .as('authCheck')

        cy.visit('/')

        cy.wait('@authCheck')

        cy.get('.composer').should('exist')
        cy.get('.login-info').should('not.exist')
    })
})
