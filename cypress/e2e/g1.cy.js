describe('G1', () => {
    it('Ein Tweet wird korrekt an das Backend gesendet', () => {
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

        cy.intercept('POST', '/twitter/tweets', {
            statusCode: 200, body: { data: { id: 1 } }
        }).as('post')

        cy.visit('/')
        cy.wait('@authCheck')

        cy.get('.composer__textarea').type('Hello World')
        cy.get('.composer .btn').click()

        cy.get('@post').then(interception => {
            expect(interception.request.body).to.have.property('text', 'Hello World')
        })
    })
})
