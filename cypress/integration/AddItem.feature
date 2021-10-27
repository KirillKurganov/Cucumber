Feature: Todo item adding
    As a user I want to be able to add to-do item on the page
    
    @add
    Scenario: Todo item adding
        Given User is on the To-Do page
        When User types the text to the input field
        And Clicks enter
        Then New item should be added to the list of items