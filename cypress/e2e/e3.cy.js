describe('E3', () => {
    it('Die Tweets werden vom Backend geladen und gerendert', () => {
        cy
            .intercept('GET', '/twitter/tweets', {
                statusCode: 200, body: {
                    data: [
                        {
                            id: 1,
                            text: 'Test Tweet 1',
                            likes: 6,
                            created_at: '2023-01-01T12:00:00Z',
                            user: {id: 1, name: 'Test User 1'}
                        },
                        {
                            id: 2,
                            likes: 6,
                            text: 'Test Tweet 2',
                            created_at: '2023-01-01T12:00:00Z',
                            user: {id: 2, name: 'Test User 2'}
                        },
                    ],
                }
            })
            .as('loadStream')

        cy.visit('/')

        cy.wait('@loadStream')

        cy.get('.stream').children().should('have.length', 2)

        cy.get('.stream').children().should('not.contain', 'John Doe')
        cy.get('.stream').children().should('not.contain', 'Lorem ipsum')
    })

    it('Die Ladeanzeige wird korrekt angezeigt', () => {
        cy
            .intercept('GET', '/twitter/tweets', req => {
                req.reply({
                    delay: 1000,
                    statusCode: 200,
                    body: {data: []}
                })
            })
            .as('loadStream')

        cy.visit('/')
        cy.get('.loading').should('be.visible')

        cy.wait('@loadStream')

        cy.get('.loading').should('not.exist')
    })
})
