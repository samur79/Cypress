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
    it ('Test2', ()=>{
        expect(false).to.equal(false);

    })
    //if you write it.skip it will skip that method
    it ('Test3', ()=>{
        expect(false).not.to.equal(true);
        
    })
    //if you write xit it will not run this test
    it ('Test4', ()=>{
        expect(5).to.equal(5);
        
    })
    //if  you write it.only it will run only that test
    it ('Test5', ()=>{
        expect(true).to.equal('5'==5);
        
    })
})