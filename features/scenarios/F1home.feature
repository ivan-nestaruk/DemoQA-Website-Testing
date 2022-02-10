Feature: Checking the Existence of Home Page items

  Scenario: 01. As a user, I can verify that six items are on the Home page
    Given I am on the Home page
    When I click on logo-button ToolsQA
    Then I should see the "Elements" item
    And I should see the "Forms" item
    And I should see the "Alerts, Frame & Windows" item
    And I should see the "Widgets" item
    And I should see the "Interactions" item
    And I should see the "Book Store Application" item