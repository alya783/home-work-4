Feature: ATM withdraw
  As an Account Holder
  In Order to get money
  I want to withdraw cash from an ATM

  Scenario: Account has sufficient funds
    Given my account balance is "500"
    And the ATM contains "600"
    When I withdraw "50"
    Then I get "Take your money!" message

  Scenario: Account has insufficient funds
    Given my account balance is "500"
    And the ATM contains "600"
    When I withdraw "550"
    Then I get "You don't have enough money!" message

  Scenario: The ATM has insufficient amount of money
    Given my account balance is "500"
    And the ATM contains "150"
    When I withdraw "300"
    Then I get "The machine is not have enough money!" message
