/// <reference types="cypress"/>

describe('filtering', () => {
  beforeEach(() => {
    cy.visit('http://todomvc-app-for-testing.surge.sh/');
  
    cy.get('.new-todo').type('THIS IS WHAT POWER FEELS LIKE{enter}');
    cy.get('.new-todo').type('YOU BET\'CHA{enter}');
    cy.get('.new-todo').type('MAYBE I SHOULD TURN DOWN THE CAPS LOCK?{enter}');

    cy.get(':nth-child(2) > .view > .toggle').click();
  });

  it('can only see active', () => {
    cy.contains('Active').click();
    cy.get('.todo-list li').should('have.length', 2);
  });

  it('can only see complete', () => {
    cy.get(':nth-child(3) > a').click();
    cy.get('.todo-list li').should('have.length', 1);
  });

  it('can see both incomplete and complete', () => {
    cy.get('.selected').click();
    cy.get('.todo-list li').should('have.length', 3);
  });

});