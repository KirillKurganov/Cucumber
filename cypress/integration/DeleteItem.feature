Feature: Todo item deleting
    As a user I want to be able to delete to-do item from list of todos

    @delete
    Scenario: Todo item deleting
        Given User is on the To-Do page
        When User clicks the cross button
        Then The item should be deleted from the list of todos
        And The items counter should be decreased by 1