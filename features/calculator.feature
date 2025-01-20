Feature: Calculate the sum of numbers
  As a user
  I want to add numbers using a calculator
  So that I can know their total

  Background: a calculator is available
    Given I have a new calculator

  Scenario: Adding multiple numbers
    When I add the number <number1>
    And I add the number <number2>
    And I add the number <number3>
    Then the total should be <expected>
    Examples:
      | number1 | number2 | number3 | expected |
      | 1       | 1       | 1       | 3        |
      | 1       | 2       | 1       | 4        |

  Scenario: Adding negative numbers
    When I add the number -5
    And I add the number -10
    And I add the number -15
    Then the total should be -30

  Scenario: Pressing the clear button
    When I add the number 5
    Then the total should be 5
