describe('Description tests', () => {
    it('visits the app description url', () => {
      cy.visit('/login')

      cy.get('input[data-cy=ilogin]').type('name@kpi.ua')
      cy.get('input[data-cy=ipass]').type('123')
    })
})
  