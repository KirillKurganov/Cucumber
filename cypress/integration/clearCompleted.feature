Feature: Items clearing
    As a user I want to be able to clear all the items with 'Clear Completed' functionality

    @clear
    Scenario: Items clearing
        Given User is on the To-Do page
        When User marks items as completed
        Then Items are crossed out
        When User clicks Clear Completed link
        Then The list of items is cleared