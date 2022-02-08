Feature: Checking the "Selectable" submodule of the "Interactions" module

    Scenario: 01. As a user, I can open the "Interactions" module page
        Given I am on the Home page
        When I click on the Interactions item
        Then I should see the Interactions module page
    
    Scenario: 02. As a user, I can open the "Selectable" submodule of the "Interactions" module
        When I click on the Selectable item
        Then I should see the Selectable submodule page
    
    Scenario: 03. As a user, I can open the "List" tab of the "Selectable" submodule
        When I click on the List tab
        Then I should see the List tab items

    Scenario: 04. As a user, I can select/unselect all selectable items of the List tab
        When I click the List item_1
        Then I should see that the List item_1 is selected
        When I click the List item_2
        Then I should see that the List item_2 is selected
        When I click the List item_3
        Then I should see that the List item_3 is selected
        When I click the List item_4
        Then I should see that the List item_4 is selected
        When I click the List item_1
        Then I should see that the List item_1 is unselected
        When I click the List item_2
        Then I should see that the List item_2 is unselected
        When I click the List item_3
        Then I should see that the List item_3 is unselected
        When I click the List item_4
        Then I should see that the List item_4 is unselected

    Scenario: 05. As a user, I can open the "Grid" tab of the "Selectable" submodule
        When I click on the Grid tab
        Then I should see the Grid tab items

    Scenario: 06. As a user, I can select/unselect all selectable items of the Grid tab
        When I click the One item
        Then I should see that the One item is selected
        When I click the Two item
        Then I should see that the Two item is selected
        When I click the Three item
        Then I should see that the Three item is selected
        When I click the Four item
        Then I should see that the Four item is selected
        When I click the Five item
        Then I should see that the Five item is selected
        When I click the Six item
        Then I should see that the Six item is selected
        When I click the Seven item
        Then I should see that the Seven item is selected
        When I click the Eight item
        Then I should see that the Eight item is selected
        When I click the Nine item
        Then I should see that the Nine item is selected
        When I click the One item
        Then I should see that the One item is unselected
        When I click the Two item
        Then I should see that the Two item is unselected
        When I click the Three item
        Then I should see that the Three item is unselected
        When I click the Four item
        Then I should see that the Four item is unselected
        When I click the Five item
        Then I should see that the Five item is unselected
        When I click the Six item
        Then I should see that the Six item is unselected
        When I click the Seven item
        Then I should see that the Seven item is unselected
        When I click the Eight item
        Then I should see that the Eight item is unselected
        When I click the Nine item
        Then I should see that the Nine item is unselected