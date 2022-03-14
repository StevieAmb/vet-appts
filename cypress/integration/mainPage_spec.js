describe('Main Page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/appointments', {fixture: 'example.json'})
    cy.visit('http://localhost:3000/')
  })

  //user should be able to input a pet name
  //user should be able to input a date 
  //user should be able to input a time
  //check length of data on screen before posting

  it('User should be able to submit pet name, date, and time, and make an appt', () => {
    cy.intercept('POST', 'http://localhost:3001/appointments', 
  {
     pet: "sd",
     date: "sd",
     time: "sd"
  }
    )
    cy.get('#pet').type('sd')
    cy.get('#date').type('sd')
    cy.get('#time').type('sd')
    cy.get('button').contains('Make an Appt').click()
    cy.get('.appts')
    .children('div')
    .should('have.length', 3)
  })
})
