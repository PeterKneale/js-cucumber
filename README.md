# js-cucumber

- https://en.wikipedia.org/wiki/Acceptance_testing
- https://en.wikipedia.org/wiki/Acceptance_test-driven_development
- https://en.wikipedia.org/wiki/Behavior-driven_development

```gerkin
Feature: Calculate the sum of numbers
  As a user
  I want to add numbers using a calculator
  So that I can know their total

  Scenario: Adding multiple numbers
    Given I have a new calculator
    When I add the number 5
    And I add the number 10
    And I add the number 15
    Then the total should be 30
```
