import { BaseElement } from '../base/baseElement';

export class Button extends BaseElement {

    constructor(selector) {
        super(selector);
    }

    shouldBeDisabled() {
        cy.get(this.selector).should('be.disabled');
    }

    shouldBeEnabled() {
        cy.get(this.selector).should('be.enabled');
    }
}