class SecurePage {

    isOpen() {
        cy.url().should('include', '/secure');
    }

    getFlashMessage() {
        return cy.get('.flash.success');
    }

    getHeading() {
        return cy.get('h2');
    }

    getSubheader() {
        return cy.get('.subheader');
    }

    doLogout() {
        cy.get('a[href="/logout"]').click();
    }
}

export default SecurePage;
