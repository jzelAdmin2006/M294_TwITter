describe('F4', () => {
    it('Fehlermeldungen werden bei falschen Daten angezeigt', () => {
        cy
            .intercept('POST', '/twitter/login', {
                statusCode: 422,
                body: {
                    errors: {
                        email: 'email error',
                        password: 'password error',
                    }
                }
            })
            .as('login')

        cy.visit('/login')

        cy.get('#email').type('user@example.com')
        cy.get('#password').type('1234')

        cy.get('.login .btn').click()
        cy.wait('@login')

        cy.get('.login .form-error').should('have.length', 2)

        cy.get('.login .form-error').eq(0).should('contain', 'email error')
        cy.get('.login .form-error').eq(1).should('contain', 'password error')
    })

    it('Fehlermeldungen werden bei korrekten Daten nicht', () => {
        cy
            .intercept('POST', '/twitter/login', {
                statusCode: 422,
                body: {
                    errors: {
                        email: '',
                        password: '',
                    }
                }
            })
            .as('login')

        cy.visit('/login')

        cy.get('#email').type('user@example.com')
        cy.get('#password').type('1234')

        cy.get('.login .btn').click()
        cy.wait('@login')

        cy.get('.login .form-error').should('have.length', 0)
    })

    it('Nach erfolgreichen Login wird nach / umgeleitet', () => {
        cy
            .intercept('POST', '/twitter/login', {
                statusCode: 200,
                body: {
                    token: 'xyz',
                },
            })
            .as('login')

        cy.visit('/login')

        cy.get('#email').type('user@example.com')
        cy.get('#password').type('1234')

        cy.get('.login .btn').click()
        cy.wait('@login')

        cy.url().should('match', /\/$/)
    })

})
