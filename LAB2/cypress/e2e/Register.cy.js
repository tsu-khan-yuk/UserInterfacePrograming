describe('Register tests', () => {
    it('visiting and testing register page', () => {
        cy.visit('/register')

        cy.get('#reg').should('have.text', 'Регистрація').click()
        cy.get('input[data-cy=name-input]').type('name')
        cy.get('input[data-cy=email-input]').type('name@kpi.ua')
        cy.get('input[data-cy=pass-input]').type('123')
        cy.get('[data-cy=sex-input]').click().type('{moveToStart}{enter}')
        cy.get('#date').click().type('2023-06-14').type('{enter}')
    })
})