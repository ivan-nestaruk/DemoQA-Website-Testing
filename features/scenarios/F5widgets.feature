Feature: Checking the "Tabs" and "Menu" submodules of the Widgets module

    Scenario: 01. As a user, I can open the Widgets module page
        Given I am on the Home page
        When I click on the "Widgets" item
        Then I should see the Widgets module page

    Scenario: 02. As a user, I can open the "Tabs" submodule of the Widgets module
        When I click on the "Tabs" submodule item
        Then I should see the Tabs submodule page

    Scenario: 03. As a user, I can check the "Tabs" submodule
        When I click on the What tab
        Then I should see the What's tab information that includes the text "It was popularised in the 1960s"
        When I click on the Origin tab
        Then I should see the Origin's tab information that includes the text "Lorem Ipsum comes from sections 1.10.32"
        When I click on the Use tab
        Then I should see the Use's tab information that includes the text "The point of using Lorem Ipsum is that"

    Scenario: 04. As a user, I can open the "Menu" submodule
        Given I am on the Widgets module page
        When I click on the "Menu" submodule item
        Then I should see the Menu submodule page

    Scenario: 05. As a user, I can check the "Menu" submodule
        When I click the Main Item 1
        Then I should see the Menu page
        When I click the Main Item 2
        Then I should see the Menu page
        When I click the Main Item 3
        Then I should see the Menu page
        When I click the Sub Item 1
        Then I should see the Menu page
        When I click the Sub Item 2
        Then I should see the Menu page
        When I click the Sub Sub List
        Then I should see the Menu page
        When I click the Sub Sub Item 1
        Then I should see the Menu page
        When I click the Sub Sub Item 2
        Then I should see the Menu page