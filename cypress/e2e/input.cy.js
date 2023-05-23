/// <reference types="cypress" />

describe('Input Form Tests', () => {
  beforeEach('Navigate to registration page', () => {
    // run before each test case, before method in TestNG
    cy.clearAllCookies();
    cy.visit('/registration_form');
  });
  it.skip('Check different input box field and verify', () => {
    // fill the form for username and other information
    cy.get('input[name="firstname"]').type('Mike');
    cy.get('input[name="lastname"]').type('Brown');
    cy.get('input[name="username"]').type('CrazyChef');

    /**
     * Math.random(): creates a number between 0-1~0.005678
     * Math.floor(): makes the random number a whole number
     */
    const email = `formtest${Math.floor(100000 + Math.random() * 900000)}@cydeo.com`;
    cy.get('input[name="email"]').type(email);

    const password = `test${Math.floor(100000 + Math.random() * 900000)}`;
    cy.get('input[name="password"]').type(password);

    const phone = `505-239-${Math.floor(1000 + Math.random() * 9000)}`; // 4 digit extension number
    cy.get('input[name="phone"]').type(phone);
    cy.get('input[name="birthday"]').type('07/07/1977');
  });
  it.skip('Check different radio Buttons',()=>{
    cy.get('.radio')
    .find('[type=radio]')
    .then ((radio=>{
      // get all radio buttons, select the first one and verify it is selecte
      cy.wrap(radio).first().check().should('be.checked');// everthing in one line as you get the elements in wrap then check first one and check
      /**
       * radio: is a Jquery element, cy.wrap(radio): turns it into Cypress Object so that I can use cypress functions
       * first(): selects first element
       * check(): checks it out
       * should(): verifies whether I provide as parameter 'be.checked'
       */
      // get all radio buttons, select the second one and verify that it is checked and confirmation label is visible
      cy.wrap(radio).eq(1).check().should('be.checked');
      cy.get('[data-bv-icon-for="gender"]').should('be.visible'); // commmon function used in tests
      // third radio button is not checked
       cy.wrap(radio).eq(2). should('not.be.checked');
    }))
  })
  it('Check different checkbox ections',()=>{
    //get all checkboxes, select JAVA and verify
  cy.get('[type="checkbox"]').then((checkbox)=>{
    cy.wrap(checkbox).eq(1).should("be.checked");
    //uncheck JAVA
    cy.wrap(checkbox).eq(1).uncheck().should("not.be.checked");

  })



  })

});
