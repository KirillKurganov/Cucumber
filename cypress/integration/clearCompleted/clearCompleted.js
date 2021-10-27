import { TodoPage } from '../../page-object/pages/todoPage';
import { Before, Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import { ToDoPageHelper } from '../../helpers/toDoPage/toDoPageHelper';

const itemToDelete = 1;
const listOfItems = ['firstItem', 'secondItem', 'thirdItem', 'fourthItem', 'fifthItem'];

let toDoPage;
let toDoPageHelper;

Before(() => {
    toDoPage = new TodoPage();
    toDoPageHelper = new ToDoPageHelper();
});

Given('User is on the To-Do page', () => {
    toDoPage.navigateTo();
    toDoPageHelper.addListOfItems(listOfItems);
});

When('User marks items as completed', () => {
    toDoPage.removeToDoItemByIndex(itemToDelete);
    toDoPage.completedToggle.check();
    toDoPage.clearCompletedButton.shouldBeVisible();
});

Then('Items are crossed out', () => {
    toDoPage.todoItem.elementShouldHaveClass('completed');
});

When('User clicks Clear Completed link', () => {
    toDoPage.clearCompletedButton.click();
});

Then('The list of items is cleared', () => {
    toDoPage.todoItem.elementShouldNotExist();
});