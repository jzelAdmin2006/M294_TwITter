describe('F5', () => {
    it('Bei aktivem Login wird ein Logout Link angezeigt', () => {
        cy
            .intercept('GET', '/twitter/tweets', {
                statusCode: 200, body: { data: [] }
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

        cy.get('.logout-link').should('exist')
    })

    it('Bei aktivem Login wird kein Login Link angezeigt', () => {
        cy
            .intercept('GET', '/twitter/tweets', {
                statusCode: 200, body: { data: [] }
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

        cy.get('.nav').should('not.contain.text', 'Login')
    })

    it('Ein Klick auf den Logout Link loggt den Benutzer aus', () => {
        cy
            .intercept('GET', '/twitter/tweets', {
                statusCode: 200, body: { data: [] }
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

        cy.get('.logout-link').should('exist')
        cy.get('.logout-link').click()
        cy.get('.logout-link').should('not.exist')
    })
})
