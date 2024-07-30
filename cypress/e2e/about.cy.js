describe('test about', () => {
  it('test the about button', () => {
    cy.visit('http://localhost:3000/')
    cy.get(`[data-cy='button_named_about']`).should('be.visible').click()
    cy.url().should('include', '/about')
    })
})
