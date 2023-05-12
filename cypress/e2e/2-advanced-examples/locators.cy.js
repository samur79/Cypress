
/// <reference types="cypress" />
describe('Locators', ()=>{
    beforeEach(()=>{
        //run before each test case, before method in TestNG
        cy.clearAllCookies();
        cy.visit('/login');
    })
    it('Opening a web application',()=>{
        cy.clearAllCookies();
        
      
    })
    it('Check different locator strategies',()=>{
        //by css method
        cy.get("input[name='username'").type("Cydeostudent");
        // every statement creates an object to be interacted, and next command makes operation to the object created at previous statement.

        //attribute name and value
        cy.get("[type='text").clear();
        cy.get("input").each((item, index,list)=>{
            //assert the length of the list is 2
            expect(list).to.have.length(2);
            expect (item).to.have.attr("type");
        })

    })


})