describe('test login', () => {
  it('test the login email and passwordd', () => {
    cy.visit('http://localhost:3000/')
    cy.get("[data-cy='login_button_in_heade_menu'").should('be.visible')
  })
})
