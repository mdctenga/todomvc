/// <reference types = "cypress" />

describe('todo actions', () => {
  beforeEach(() => {
    cy.visit('http://todomvc-app-for-testing.surge.sh/');
  
    cy.get('.new-todo',{timeout: 6000}).type("THIS IS WHAT POWER FEELS LIKE{enter}");
  });

  it('should be able to add a new todo to the list', () => {  
    cy.get('label').should('have.text', 'THIS IS WHAT POWER FEELS LIKE');
  });
  
  it('should be able to mark todo as completed', () => {
    cy.get('.toggle').should('not.be.checked');
    cy.get('.toggle').click().should('be.checked');
    cy.get('label').should('have.css', 'text-decoration-line', 'line-through');
  });
  
  it('should be able to clear completed todos', () => {
    cy.get('.toggle').click();
    cy.contains('Clear completed').click();
    cy.get('.todo-list').should('not.have.descendants');
  });
});