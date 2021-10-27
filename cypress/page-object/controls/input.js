import { BaseElement } from '../base/baseElement';

export class Input extends BaseElement {
    constructor(selector) {
        super(selector);
    }

    type(text) {
        cy.get(this.selector).type(text);
    }

    shouldHaveValue(expectedValue) {
        cy.get(this.selector).should('have.value', expectedValue);
    }

    getValue() {
        let value;
        cy.get(this.selector).should(element => {
            value = element.val();
        })
        return value;
    }
}