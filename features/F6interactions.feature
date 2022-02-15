Feature: Checking the "Selectable" submodule of the "Interactions" module

    Scenario: 01. As a user, I can open the "Interactions" module page
        Given I am on the Home page
        When I click on the "Interactions" item
        Then I should see the "Interactions" item page
    
    Scenario: 02. As a user, I can open the "Selectable" submodule of the "Interactions" module
        When I click on the "Selectable" submodule item
        Then I should see the "Selectable" item page
    
    Scenario: 03. As a user, I can open the "List" tab of the "Selectable" submodule
        When I click on the "List" tab
        Then I should see information of the active tab

    Scenario: 04. As a user, I can select/unselect all selectable items of the List tab
        When I click the "Cras justo odio" item
        Then I should see that the "Cras justo odio" item is selected
        When I click the "Dapibus ac facilisis in" item
        Then I should see that the "Dapibus ac facilisis in" item is selected
        When I click the "Morbi leo risus" item
        Then I should see that the "Morbi leo risus" item is selected
        When I click the "Porta ac consectetur ac" item
        Then I should see that the "Porta ac consectetur ac" item is selected
        When I click the "Cras justo odio" item
        Then I should see that the "Cras justo odio" item is unselected
        When I click the "Dapibus ac facilisis in" item
        Then I should see that the "Dapibus ac facilisis in" item is unselected
        When I click the "Morbi leo risus" item
        Then I should see that the "Morbi leo risus" item is unselected
        When I click the "Porta ac consectetur ac" item
        Then I should see that the "Porta ac consectetur ac" item is unselected

    Scenario: 05. As a user, I can open the "Grid" tab of the "Selectable" submodule
        When I click on the "Grid" tab
        Then I should see information of the active tab

    Scenario: 06. As a user, I can select/unselect all selectable items of the Grid tab
        When I click the "One" item
        Then I should see that the "One" item is selected
        When I click the "Two" item
        Then I should see that the "Two" item is selected
        When I click the "Three" item
        Then I should see that the "Three" item is selected
        When I click the "Four" item
        Then I should see that the "Four" item is selected
        When I click the "Five" item
        Then I should see that the "Five" item is selected
        When I click the "Six" item
        Then I should see that the "Six" item is selected
        When I click the "Seven" item
        Then I should see that the "Seven" item is selected
        When I click the "Eight" item
        Then I should see that the "Eight" item is selected
        When I click the "Nine" item
        Then I should see that the "Nine" item is selected
        When I click the "One" item
        Then I should see that the "One" item is unselected
        When I click the "Two" item
        Then I should see that the "Two" item is unselected
        When I click the "Three" item
        Then I should see that the "Three" item is unselected
        When I click the "Four" item
        Then I should see that the "Four" item is unselected
        When I click the "Five" item
        Then I should see that the "Five" item is unselected
        When I click the "Six" item
        Then I should see that the "Six" item is unselected
        When I click the "Seven" item
        Then I should see that the "Seven" item is unselected
        When I click the "Eight" item
        Then I should see that the "Eight" item is unselected
        When I click the "Nine" item
        Then I should see that the "Nine" item is unselected