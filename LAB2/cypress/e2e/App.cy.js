describe('Number Input Component', () => { 
    it('should display input numbers', () => {
        cy.visit('/')
        cy.get('#reg').should('have.text', 'Регистрація').click()
        cy.get('input[data-cy=name-input]').type('name')
        cy.get('input[data-cy=email-input]').type('name@kpi.ua')
        cy.get('input[data-cy=pass-input]').type('123')
        cy.get('[data-cy=sex-input]').click().type('{moveToStart}{enter}')
        cy.get('#date').click().type('2023-06-14').type('{enter}')
        cy.get('#save').click()

        cy.get('input[data-cy=ilogin]').type('name@kpi.ua')
        cy.get('input[data-cy=ipass]').type('123')
        cy.get('#input').click()

        cy.get('h2').contains('Введені числа:');
        cy.get('li').should('have.length', 0);
    
        const numbers = '5, 4, 5, 3';
        cy.get('input[type="text"]').type(numbers);
        cy.get('[data-cy="input"]').should('have.text', '5453');
        cy.get('[data-cy="output"]').should('have.text', '3455');
    });
});
  
