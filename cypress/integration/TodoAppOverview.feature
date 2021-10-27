Feature: Page overview
    The header, page title, input field, "All" link, 'Active' link,
    'Completed' link should be displayed on the page

    @overview
    Scenario: Todo app main page overview
        Given User is on the To-Do page
        Then The elements are displayed on the page
        And Links href attributes should be correct