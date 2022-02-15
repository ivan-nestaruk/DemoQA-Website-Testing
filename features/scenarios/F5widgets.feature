Feature: Checking the "Tabs" and "Menu" submodules of the Widgets module

    Scenario: 01. As a user, I can open the Widgets module page
        Given I am on the Home page
        When I click on the "Widgets" item
        Then I should see the "Widgets" item page

    Scenario: 02. As a user, I can open the "Tabs" submodule of the Widgets module
        When I click on the "Tabs" submodule item
        Then I should see the "Tabs" item page

    Scenario: 03. As a user, I can check the "Tabs" submodule
        When I click on the "What" tab
        Then I should see information of the active tab
        When I click on the "Origin" tab
        Then I should see information of the active tab
        When I click on the "Use" tab
        Then I should see information of the active tab

    Scenario: 04. As a user, I can open the "Menu" submodule
        When I click on the "Menu" submodule item
        Then I should see the "Menu" item page

    Scenario: 05. As a user, I can check the "Menu" submodule
        When I click on the "Main Item 1" menu item
        Then I should see the page with URL "https://demoqa.com/menu#"
        When I click on the "Main Item 2" menu item
        Then I should see the page with URL "https://demoqa.com/menu#"
        When I click on the "Main Item 3" menu item
        Then I should see the page with URL "https://demoqa.com/menu#"
        When I hover on the "Main Item 2" menu item
        And I click on the "Sub Item" menu item
        Then I should see the page with URL "https://demoqa.com/menu#"
        When I hover on the "Main Item 2" menu item
        And I click on the "SUB SUB LIST »" menu item
        Then I should see the page with URL "https://demoqa.com/menu#"
        When I hover on the "Main Item 2" menu item
        And I hover on the "SUB SUB LIST »" menu item
        And I click on the "Sub Sub Item 1" menu item
        Then I should see the page with URL "https://demoqa.com/menu#"
        When I hover on the "Main Item 2" menu item
        And I hover on the "SUB SUB LIST »" menu item
        And I click on the "Sub Sub Item 2" menu item
        Then I should see the page with URL "https://demoqa.com/menu#"