describe('AInclude', () => {
  it('should include fragment', () => {
    cy.visit('/example/demo.html')
    cy.contains('Hello')
    cy.contains('World')
    cy.get('a-include').should('not.exist')
  })

  it('should include fragment via selector including main', () => {
    cy.visit('/example/demo.html')
    cy.contains('Welcome to')
    cy.contains('Mars')
    cy.get('header').should('not.exist')
    cy.get('main').should('exist')
    cy.get('a-include').should('not.exist')
  })

})