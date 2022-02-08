Feature: Checking the "Text Box" and the "Buttons" submodules of the Elements module

    Scenario: 01. As a user, I can open the Elements module
        Given I am on the Home page
        When I click on the Elements item
        Then I should see the Elements module page
        
    Scenario: 02. As a user, I can choose the Text Box submodule
        When I click on the Text Box item
        Then I should see the Text Box submodule page

    Scenario: 03. As a user, I can fill in all the text fields, submit, and verify the submitted data
        When I fill in the Full Name field with "Ivanov Ivan"
        When I fill in the Email field with "test1234512345@yopmail.com"
        When I fill in the Current Address field with "61 Maple Street, New York, NY"
        When I fill in the Permanent Address field with "221B Baker Street, London"
        When I click the Submit button
        Then I should verify the Summary text field contains Full Name: "Ivanov Ivan"
        And I should verify the Summary text field contains Email: "test1234512345@yopmail.com"
        And I should verify the Summary text field contains Current Address: "61 Maple Street, New York, NY"
        And I should verify the Summary text field contains Permanent Address: "221B Baker Street, London"

    Scenario: 04. As a user, I can open the Buttons submodule
        Given I am on the Elements module page
        When I click on the Buttons item
        Then I should see the Buttons submodule page

    Scenario: 05. As a user, I can check the buttons on the page
        When I double-click on the Double Click Me button
        Then I should see a text message_1: "You have done a double click"
        When I right-click on the Right Click Me button
        Then I should see a text message_2: "You have done a right click"
        When I click on the Click Me button
        Then I should see a text message_3: "You have done a dynamic click"

        