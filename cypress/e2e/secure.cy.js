import LoginPage from '../pages/loginPage';
import SecurePage from '../pages/securePage';

const loginPage = new LoginPage();
const securePage = new SecurePage();

describe('Secure Page Tests', () => {
    beforeEach(function () {
        cy.fixture('loginPageData').as('loginPD');
        cy.fixture('securePageData').as('secPD');
        loginPage.visit();
        loginPage.doLogin(Cypress.env('username'), Cypress.env('password'));
    });

    it('should be open', () => {
        securePage.isOpen();
    });

    it('should have correct banner text', function () {
        securePage.getFlashMessage().should('be.visible').and('contain', this.secPD.bannerText.loggedIn);
    });

    it('should have correct header text', function () {
        securePage.getHeading().should('contain', this.secPD.headerText);
    });

    it('should have correct body text', function () {
        securePage.getSubheader().should('contain', this.secPD.bodyText);
    });

    it('should log out correctly', function () {
        securePage.doLogout();
        loginPage.getFlashMessage().should('contain', this.loginPD.bannerText.loggedOut);
    });
});
