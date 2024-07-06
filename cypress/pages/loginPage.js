class LoginPage {
    visit() {
        cy.visit('https://the-internet.herokuapp.com/login');
    }

    fillUsername(username) {
        cy.get('#username').type(username);
    }

    fillPassword(password) {
        cy.get('#password').type(password);
    }

    submit() {
        cy.get('button[type="submit"]').click();
    }

    getFlashMessage() {
        return cy.get('.flash');
    }

    doLogin(username, password) {
        this.fillUsername(username);
        this.fillPassword(password);
        this.submit();
    }
}

export default LoginPage;
