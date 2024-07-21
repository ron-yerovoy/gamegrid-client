describe('test login', () => {
  it('test the login email and passwordd', () => {
    cy.visit('http://localhost:3000/')
    cy.get(`[data-cy='button_named_about']`).should('be.visible').click()})
})
