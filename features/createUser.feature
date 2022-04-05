Feature: User Creation

  Background:
    When I go to "https://viktor-silakov.github.io/course-sut/"
    When I login as: "User", "Password"

  Scenario: Create user
    When I go to "Create User" menu item
    When I fill form:
      """
      email: 'test@test.com'
      password: 'U&cmpYsxK9'
      Address: 'Rustaveli 20-21'
      Address2: 'flor 4'
      City: 'Tbilisi'
      Zip: 222567
      Description: 'test user'
      """
