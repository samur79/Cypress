/// <reference types="cypress" />

describe('Context: My first test case', () => {
  beforeEach(() => {
    // run before each test case, before method in TestNG
    cy.clearAllCookies();
    cy.visit('/multiple_buttons');
  });

  it('Check Different Button Actions', () => {
    // select a button with text
    cy.contains('Button 2').should('be.visible').click();
    cy.contains('Clicked on button two!').should('be.visible');
    // Find element with class atribute and create  a list then select 3rd element from the list.

    // $buttons is a jquery element
    cy.get('.btn.btn-primary').then(($buttons) => {
      cy.wrap($buttons).eq(2).click();
      // assert the text
      cy.contains('Clicked on button three!').should('be.visible');
    });
    // you get all buttons with tagName: each method is creating a loop for me
    cy.get('button').each((item, index, list) => {
      // assert length of the list, verify number of buttons
      expect(list).to.have.length(6);
      expect(item).to.have.attr('onclick');
    });
    // I will get all buttons like previous approach, get only the item then check for  text of each item, if it is equal to Button4 , then click on it

    cy.get('button').each((item, index, list) => {
      if (item.text() == 'Button 4') {
        cy.log(item.text()); /// this command write the text at the test console
        // item.click(); you can not use cypress click func on jquery element
        cy.wrap(item).click();
        cy.contains('Clicked on button four!').should('be.visible');
      }
    });

    // npx cypress run --headless -b chrome
  });
});
