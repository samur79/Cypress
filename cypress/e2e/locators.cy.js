
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

        //by attribute name (locators)
        cy.get('[type]');

        //by className
        cy.get('.btn,btn-primary');

        //by id
        cy.get('#wooden_spoon');
        // there is no xpath in Cypress

        // If I want to use text: no xparth in cypress but it is still possible with a different aproach

        cy.get('button').should('contain','Login').click;


    })

    it('Check finding elements by travelling through DOM',()=>{
        // travel to find login button: locate username box go to parent form  then find button

        cy.get('input[name="username"]').parents('form').find('button').should('contain','Login').click()


    })

    it.only('Check different Type of Assertions', () =>{
        // Cypress itself bundles assertions provided by Chai, Chai-Query libraries
        //Should assertion does the assertion directly on the object.

        cy.get('#wooden_spoon')
        .should('contain','Login')
        .and('have.class','btn btn-primary');
        //just verifying these element are there

        //expect assertion creates a subject of our test  then you implement different actions is explicit assertions
        cy.get('#wooden_spoon').then((buttonElement)=>{
            expect(buttonElement).to.have.text('Login');
            expect(buttonElement).to.have.class('btn btn-primary')
        }) 
    })

   



})