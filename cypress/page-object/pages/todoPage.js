import { BasePage } from "../base/basePage";
import { ROUTES } from "../../data/routes";
import { Section } from "../controls/section";
import { Label } from "../controls/label";
import { Input } from "../controls/input";
import { Link } from "../controls/link";
import { Button } from "../controls/button";
import { CheckBox } from "../controls/checkBox";

export class TodoPage extends BasePage {

    constructor(route=ROUTES.todoPage) {
        super(route);
        this.headerLocator = '.container #navbar';
        this.itemLocator = 'ul.todo-list li';
        this.titleLocator = 'section h1';
        this.inputFieldLocator = 'input.new-todo';
        this.allLinkLocator = '.filters li:nth-child(1) a';
        this.activeLinkLocator = '.filters li:nth-child(2) a';
        this.completedLinkLocator = '.filters li:nth-child(3) a';
        this.crossButtonLocator = `${this.itemLocator} button`;
        this.itemsCounterLocator = '.todo-count';
        this.completedToggleLOcator = `${this.itemLocator} input`;
        this.clearCompletedButtonLOcator = 'button.clear-completed';
    }

    get header() {
        return new Section(this.headerLocator);
    }

    get pageTitle() {
        return new Label(this.titleLocator);
    }

    get inputField() {
        return new Input(this.inputFieldLocator);
    }

    get allLink() {
        return new Link(this.allLinkLocator);
    }

    get activeLink() {
        return new Link(this.activeLinkLocator);
    }

    get completedLink() {
        return new Link(this.completedLinkLocator);
    }

    get todoItem() {
        return new Label(this.itemLocator);
    }

    get crossButton() {
        return new Button(this.crossButtonLocator);
    }

    get itemsCounter() {
        return new Label(this.itemsCounterLocator);
    }

    get completedToggle() {
        return new CheckBox(this.completedToggleLOcator);
    }

    get clearCompletedButton() {
        return new Button(this.clearCompletedButtonLOcator);
    }

    removeToDoItemByIndex(index) {
        this.crossButton.hoverElementOfCollection(index);
        this.crossButton.clickElementOfCollection(index);
    };
};