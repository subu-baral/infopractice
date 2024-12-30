import { loginSelectors } from "../support/selectors/loginselectors";
describe('login form of cqnoval', () => {

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