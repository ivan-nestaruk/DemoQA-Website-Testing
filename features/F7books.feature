Feature: Checking the Book Store Application module

    Scenario: 01. As a user, I can open the Book Store Application module
        Given I am on the Home page
        When I click on the Book Store Application item
        Then I should see the Book Store Application module page

    Scenario: 02. As a user, I can open the Book Store submodule
        When I click on the Book Store item
        Then I should see the Book Store items
    
    Scenario: 03. As a user, I can verify ISBN matches pattern on the page
        When I click on the Book_4 item
        Then I expect ISBN matches pattern "^([0-9_-]){13}$" on page
