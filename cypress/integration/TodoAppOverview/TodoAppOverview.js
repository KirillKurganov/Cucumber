import { TodoPage } from '../../page-object/pages/todoPage';
import { Before, Given, Then } from 'cypress-cucumber-preprocessor/steps';

let toDoPage;

Before(() => {
    toDoPage = new TodoPage();
});

Given('User is on the To-Do page', () => {
    toDoPage.navigateTo();
});

Then('The elements are displayed on the page', () => {
    toDoPage.header.shouldBeVisible();
    toDoPage.pageTitle.shouldBeVisible();
    toDoPage.inputField.shouldBeVisible();
    toDoPage.allLink.shouldBeVisible();
    toDoPage.activeLink.shouldBeVisible();
    toDoPage.completedLink.shouldBeVisible();
});

And('Links href attributes should be correct', () => {
    toDoPage.allLink.attributeShouldBeCorrect('href', '#/');
    toDoPage.activeLink.attributeShouldBeCorrect('href', '#/active');
    toDoPage.completedLink.attributeShouldBeCorrect('href', '#/completed');
});