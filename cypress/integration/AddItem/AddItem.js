import { TodoPage } from '../../page-object/pages/todoPage';
import { Before, Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';

const itemName = 'New Item Name';

let toDoPage;

Before(() => {
    toDoPage = new TodoPage();
});

Given('User is on the To-Do page', () => {
    toDoPage.navigateTo();
});

When('User types the text to the input field', () => {
    toDoPage.todoItem.elementWithTextShouldNotExist(itemName);
    toDoPage.inputField.type(`${itemName}{enter}`);
    
});

And('Clicks enter', () => {
    toDoPage.inputField.shouldHaveValue('');
});

Then('New item should be added to the list of items', () => {
    toDoPage.todoItem.elementWithTextShouldBeVisible(itemName);
});