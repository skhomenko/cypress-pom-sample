import LoginPage from '../pages/loginPage';
import SecurePage from '../pages/securePage';

const loginPage = new LoginPage();
const securePage = new SecurePage();

describe('Login Page Tests', () => {
    beforeEach(() => {
        cy.fixture('loginPageData').as('loginPD');
        cy.fixture('securePageData').as('secPD');
        loginPage.visit();
    });

    it('should be open', () => {
        loginPage.isOpen();
    });

    it('should have correct header text', function () {
        loginPage.getHeading().should('contain', this.loginPD.headerText);
    });

    it('should have correct body text', function () {
        loginPage.getSubheader().should('contain', this.loginPD.bodyText);
    });
    
    it('should successfully log in with valid credentials', function() {
        loginPage.doLogin(Cypress.env('username'), Cypress.env('password'));

        cy.url().should('include', '/secure');
        securePage.getFlashMessage().should('be.visible').and('contain', this.secPD.bannerText.loggedIn);
        securePage.getHeading().should('contain', this.secPD.headerText);
        securePage.getSubheader().should('contain', this.secPD.bodyText);
    });

    it('should fail to log in with invalid credentials', function() {
        loginPage.doLogin('invalid_user', 'invalid_pass');

        cy.url().should('include', '/login');
        loginPage.getFlashMessage().should('be.visible').and('contain', this.loginPD.bannerText.invalidUser);
    });

    it('should fail to log in with invalid username', function() {
        loginPage.doLogin('invalid_user', Cypress.env('password'));

        cy.url().should('include', '/login');
        loginPage.getFlashMessage().should('be.visible').and('contain', this.loginPD.bannerText.invalidUser);
    });

    it('should fail to log in with invalid password', function() {
        loginPage.doLogin(Cypress.env('username'), 'invalid_password');

        cy.url().should('include', '/login');
        loginPage.getFlashMessage().should('be.visible').and('contain', this.loginPD.bannerText.invalidPassword);
    });

});
