import { BaseElement } from '../base/baseElement';

export class Link extends BaseElement {

    constructor(selector) {
        super(selector);
    }

    getElementByText(text) {
        return cy.get(this.selector).contains(text);
    }

    getHref() {
        let linkValue;
        cy.get(this.selector).should('have.attr', 'href').then(link => {
            linkValue = link;
        });
        return linkValue;
    }
};