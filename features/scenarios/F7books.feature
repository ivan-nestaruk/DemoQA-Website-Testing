Feature: Checking the Book Store Application module

    Scenario: 01. As a user, I can open the Book Store Application module
        Given I am on the Home page
        When I click on the "Book Store Application" item
        Then I should see the "Book Store" item page

    Scenario: 02. As a user, I can open the Book Store submodule
        When I click on the "Book Store" submodule item
        Then I should see the "Book Store" item page
    
    Scenario: 03. As a user, I can verify ISBN matches pattern on the page
        When I click on the "Speaking JavaScript" book item
        Then I expect ISBN matches pattern "^([0-9_-]){13}$" on page

    Scenario: 04. As a user, I can perform a search on the Book Store page
        When I click the "Back To Book Store" button
        Then I should see the "Book Store" item page
        When I fill in the search field with "JavaScript"
        Then Then I expect the following books are displayed
        |values                             |
        |Learning JavaScript Design Patterns|
        |Speaking JavaScript                |
        |Programming JavaScript Applications|
        |Eloquent JavaScript, Second Edition|