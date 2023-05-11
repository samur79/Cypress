/// <reference types="cypress" />



describe('Context: My first test case',()=>{

    before(()=>{
        // this one runs once before all test cases in this describe block like beforeClass in TestNG
    })
    beforeEach(()=>{
        //run before each test case, before method in TestNG
        cy.clearAllCookies();
    })
    after(()=>{
        // similar to afterClass in TestNG  runs before once after all test cases finished
    })
    afterEach(()=>{
        // similar to after method in TestNG it runs after each test
    })
    it('Opening a web application',()=>{
        cy.visit('/registration_form');
      
    })
})