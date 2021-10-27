export class BasePage {
    constructor(route) {
        this.url = `${Cypress.env('base_url')}${route}`;
    }

    getUrl() {
        return cy.url();
    }

    getPageTitle() {
        cy.title();
    }

    navigateTo(url=this.url) {
        cy.visit(this.url);
    }
};