// cypress/integration/api_integration_spec.js

describe('API Integration Tests', () => {
    it('successfully fetches user data from the API', () => {
      cy.intercept('GET', 'https://api.example.com/users/1', { fixture: 'user.json' });
  
      cy.visit('/user-profile/1');
  
      cy.get('h2').should('contain.text', 'John Doe');
      cy.get('p').should('contain.text', 'Email: john@example.com');
    });
  
    it('successfully fetches and displays posts from the API', () => {
      cy.intercept('GET', 'https://api.example.com/posts', { fixture: 'posts.json' });
  
      cy.visit('/post-list');
  
      cy.get('li').should('have.length', 2);
      cy.get('li').first().should('contain.text', 'Post 1');
      cy.get('li').last().should('contain.text', 'Post 2');
    });
  });
