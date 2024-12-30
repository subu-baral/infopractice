// import { beforeEach } from "mocha";
import { loginSelectors } from "../support/selectors/loginselectors";
describe('login form of cqnoval', () => {
  beforeEach (() => {
    cy.visit(loginSelectors.cqurlSelector);
   })

  it ('invalid login with invalid username', () =>{
    // cy.visit(loginSelectors.cqurlSelector);

    cy.get (loginSelectors.userNameSelector).clear().type('tatsamaas');
    cy.get (loginSelectors.passwordSelector).clear().type('Iphone123!@#');
    cy.get(loginSelectors.loginButtonSelector).should('contain.text', 'Log In').click();
    cy.get('.ant-notification-notice-message') // Selector for the main message
    .should('be.visible')
    .and('contain.text', 'Try again...');

  cy.get('.ant-notification-notice-description') // Selector for the detailed description
    .should('be.visible')
    .and('contain.text', 'Invalid username or password!');
    cy.wait(300);

  } )

  it ('invalid login with invalid password', () =>{
    // cy.visit(loginSelectors.cqurlSelector);

    cy.get (loginSelectors.userNameSelector).clear().type('tatsam');
    cy.get (loginSelectors.passwordSelector).clear().type('Iphone123!@#asw');
    cy.get(loginSelectors.loginButtonSelector).should('contain.text', 'Log In').click();
    cy.get('.ant-notification-notice-message') // Selector for the main message
    .should('be.visible')
    .and('contain.text', 'Try again...');

  cy.get('.ant-notification-notice-description') // Selector for the detailed description
    .should('be.visible')
    .and('contain.text', 'Invalid username or password!');
    cy.wait(300);

  } )

   it ('should login successfully', () => {

    // Visit the URL
    cy.visit(loginSelectors.cqurlSelector);
    cy.get(loginSelectors.cqLogoSelector) // Select the image by its alt attribute
  .should('have.attr', 'src', 'assets/images/logo.png');
  
    // Input username and password
    cy.get (loginSelectors.userNameSelector).clear().type('tatsam');
    cy.get (loginSelectors.passwordSelector).clear().type('Iphone123!@#');
    cy.get(loginSelectors.loginButtonSelector).should('contain.text', 'Log In').click();

    cy.wait(500); // Wait for 500ms

    // Assert the correct URL is loaded
    cy.url().should('include', 'https://cqweb.info.com.np/#/dashBoard');
  });
});

  
