export class TodoPage {
  navigate(){
    cy.visit('http://todomvc-app-for-testing.surge.sh/');
  }

  addTodo(todoText) {
    cy.get('.new-todo',{timeout: 6000}).type(todoText + "{enter}");
  }
}