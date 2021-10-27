import { BaseElement } from '../base/baseElement';

export class CheckBox extends BaseElement {
    constructor(selector) {
        super(selector);
    }

    check() {
        cy.get(this.selector).check();
    }

    uncheck() {
        cy.get(this.selector).uncheck();
    }
}