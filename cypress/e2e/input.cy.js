/// <reference types="cypress" />



describe('Input Form Tests',()=>{

   
    beforeEach('Navigate to registration page',()=>{
        //run before each test case, before method in TestNG
        cy.clearAllCookies();
        cy.visit('/registration_form');

    })
    it('Check different input box field and verify',()=>{
      // fill the form for username and other information
      cy.get('input[name="firstname"]').type('Mike');
      cy.get('input[name="lastname"]').type('Brown');
      cy.get('input[name="username"]').type('CrazyChef');

      /**
       * Math.random(): creates a number between 0-1~0.005678
       * Math.floor(): makes the random number a whole number
       */
        let email= `formtest${Math.floor(100000+Math.random()*9000)}@cydeo.com`;
        cy.get('input[name="email"]').type(email);
    })
})