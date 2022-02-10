Feature: Checking the "Practice Form" submodule of the Forms module

    Scenario: 01. As a user, I can open the Forms module
        Given I am on the Home page
        When I click on the "Forms" item
        Then I should see the Forms module page

    Scenario: 02. As a user, I can open the Practice Form submodule
        When I click on the "Practice Form" submodule item
        Then I should see the Practice Form submodule page

    Scenario: 03. As a user, I can fill in, submit, and verify the Student Registration Form
        When I fill in the "Name" with "John" 
        Then I expect that the value "John" of the "Name" field is correct
        When I fill in the "Last Name" with "Doe"
        Then I expect that the value "Doe" of the "Last Name" field is correct
        When I fill in the "Email" with "test12345@yopmail.com"
        Then I expect that the value "test12345@yopmail.com" of the "Email" field is correct
        When I select Male gender
        Then I expect that the Male radio-button is selected
        When I fill in the "Mobile" with "7777777777"
        Then I expect that the value "7777777777" of the "Mobile" field is correct
        When I choose the Date of Birth 01 Feb 2022
        Then I expect that the value "01 Feb 2022" of the "Date of Birth" field is correct
        When I enter the Subjects with "Maths"
        Then I expect that the value "Maths" of the Subjects field is correct
        When I select hobbies: Sports
        Then I expect that the Sports check-box is active
        When I upload the picture with path "./picture.png"
        When I fill in the "Current Address" with "221B Baker Street, London"
        Then I expect that the value "221B Baker Street, London" of the "Current Address" field is correct
        When I select the State "Haryana"
        Then I expect that value "Haryana" of the State is correct
        When I select the City "Panipat"
        Then I expect that value "Panipat" of the City is correct
        When I click the form Submit button
        Then I should see the output window with submitted data
        And I should verify that output contains "First Name": "John"
        And I should verify that output contains "Last Name": "Doe"
        And I should verify that output contains "Email": "test12345@yopmail.com"
        And I should verify that output contains "Gender": "Male"
        And I should verify that output contains "Mobile Number": "7777777777"
        And I should verify that output contains "Date of Birth": "01 February,2022"
        And I should verify that output contains "Subjects": "Maths"
        And I should verify that output contains "Hobbies": "Sports"
        And I should verify that output contains "Picture": "picture.png"
        And I should verify that output contains "Current Address": "221B Baker Street, London"
        And I should verify that output contains "State": "Haryana"
        And I should verify that output contains "City": "Panipat"