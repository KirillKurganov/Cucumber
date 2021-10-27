import { BaseElement } from '../base/baseElement';

export class Label extends BaseElement {
    constructor(selector) {
        super(selector);
    }

    elementShouldIncludeText(expectedText) {
        cy.get(this.selector).invoke('text').then((text) => {
            expect(text).to.include(expectedText);
        })
    }

    elementWithTextShouldNotExist(text) {
        cy.get(this.selector).contains(text).should('not.exist');
    }

    elementWithTextShouldBeVisible(text) {
        cy.get(this.selector).contains(text).should('be.visible');
    }
}