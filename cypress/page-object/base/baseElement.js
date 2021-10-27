export class BaseElement {

    constructor(selector) {
        this.selector = selector;
    }

    click() {
        cy.get(this.selector).click();
    }

    clickElementOfCollection(index) {
        cy.get(this.selector).eq(index).click();
    }

    shouldBeVisible() {
        cy.get(this.selector).should('be.visible');
    }

    shouldHaveAmount(number) {
        cy.get(this.selector).should('have.length', number);
    }

    hover() {
        cy.get(this.selector).invoke('show');
    }

    hoverElementOfCollection(index) {
        cy.get(this.selector).eq(index).invoke('show');
    }

    attributeShouldBeCorrect(attribute, expectedValue) {
        cy.get(this.selector).should('have.attr', attribute).then(value => {
            expect(value).to.equal(expectedValue);
        });
    }

    elementShouldHaveClass(className) {
        cy.get(this.selector).should('have.class', className);
    }

    elementShouldNotExist() {
        cy.get(this.selector).should('not.exist');
    };
}