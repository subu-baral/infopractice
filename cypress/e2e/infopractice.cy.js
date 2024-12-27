import { loginSelectors } from "../support/selectors/loginselectors";
describe('login form of cqnoval', () => {

  it('should log in successfully', () => {

    // Visit the URL
    cy.visit('https://cqweb.info.com.np/');
  
    // Input username and password
    cy.get (loginSelectors.userNameSelector).clear().type('tatsam');
    cy.get (loginSelectors.passwordSelector).clear().type('Iphone123!@#');
    cy.get(loginSelectors.loginButtonSelector).should('contain.text', 'Log In').click();

    cy.wait(500); // Wait for 500ms

    // Assert the correct URL is loaded
    cy.url().should('include', 'https://cqweb.info.com.np/#/dashBoard');
  });
});

  
