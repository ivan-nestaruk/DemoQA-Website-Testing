Feature: Checking the "Browser Windows" and the "Modal Dialogs" submodules of the "Alerts, Frame, and Windows" module

    Scenario: 01. As a user, I can open the "Alerts, Frame, and Windows" module
        Given I am on the Home page
        When I click on the "Alerts, Frame & Windows" item
        Then I should see the Alerts, Frame, and Windows module page
        
    Scenario: 02. As a user, I can choose the Text Box submodule
        When I click on the "Browser Windows" submodule item
        Then I should see the Browser Windows submodule page

    Scenario: 03. As a user, I can check an information on the new browser tab, new browser window, and new browser message window
        When I click the New Tab button
        Then I should see the "This is a sample page" text on the new browser "Tab"
        When I click the New Window button
        Then I should see the "This is a sample page" text on the new browser "Window"

    Scenario: 04. As a user, I can open the Modal Dialog submodule page
        Given I am on the Alerts, Frame, and Windows module page
        When I click on the "Modal Dialogs" submodule item
        Then I should see the Modal Dialogs submodule page

    Scenario: 05. As a user, I can check the small and the large modal dialogs
        When I click the Small modal button
        Then I should see the title of the "Small Modal" dialog "Small Modal"
        When I click the Large modal button
        Then I should see the title of the "Large Modal" dialog "Large Modal"