import { loginSelectors } from "../support/selectors/loginselectors";
describe('login form of cqnoval', () => {
    
    // beforeEach(() => {
    //     // Visit the page to test scrolling
    //     cy.visit('/scrollable-page'); // Replace with the actual URL
    //   });
    
      it('should scroll the page to the bottom', () => {
        cy.scrollTo('bottom'); // Scrolls the page to the bottom
    
        // Verify scrolling by checking the position or an element at the bottom
        cy.get('#footer') // Replace with a footer or bottom element selector
          .should('be.visible');
      });
    
    //   it('should scroll the page to specific coordinates', () => {
    //     // Scroll to specific x, y coordinates on the page
    //     cy.scrollTo(0, 500); // Scroll 500px down
    
    //     // Verify the scroll position
    //     cy.window().its('scrollY').should('equal', 500);
    //   });
    
    //   it('should scroll the page back to the top', () => {
    //     cy.scrollTo('top'); // Scrolls the page to the top
    
    //     // Verify the page is at the top
    //     cy.window().its('scrollY').should('equal', 0);
    //   });
    

    

    it('should run dashboard functionality successfully', () => {
        cy.visit(loginSelectors.cqurlSelector);
        cy.get (loginSelectors.userNameSelector).clear().type('tatsam');
        cy.get (loginSelectors.passwordSelector).clear().type('Iphone123!@#');
        cy.get(loginSelectors.loginButtonSelector).should('contain.text', 'Log In').click();
    
        cy.wait(500); 
        
        cy.url().should('include', 'https://cqweb.info.com.np/#/dashBoard');
        cy.get("navbars").should('be.visible').click();
        cy.get("dashboards__sub").should('be.visible');
        cy.get("dashboards__title").should('be.visible');
        cy.get("dashboards__bellIcon").should('be.visible').click();
        cy.get("navbarsRight").should('be.visible').click();
    })
})