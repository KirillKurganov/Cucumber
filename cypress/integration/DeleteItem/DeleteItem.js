import { TodoPage } from '../../page-object/pages/todoPage';
import { Before, Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';

const first =0;

let toDoPage;
let counterValue;

Before(() => {
    toDoPage = new TodoPage();
});

Given('User is on the To-Do page', () => {
    toDoPage.navigateTo();
    toDoPage.todoItem.shouldHaveAmount(2);
    counterValue = toDoPage.itemsCounter.elementShouldIncludeText('2');
});

When('User clicks the cross button', () => {
    toDoPage.crossButton.hoverElementOfCollection(first);
    toDoPage.crossButton.shouldBeVisible();
    toDoPage.crossButton.clickElementOfCollection(first);
});

Then('The item should be deleted from the list of todos', () => {
    toDoPage.todoItem.shouldHaveAmount(1);
});

And('The items counter should be decreased by 1', () => {
    toDoPage.itemsCounter.elementShouldIncludeText('1');
});