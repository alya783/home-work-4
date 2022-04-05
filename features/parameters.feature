Feature: Parameters
  Scenario: Parameters demo
    When I print built-in parameters, word: test, string: "test string", int: 123, float: 10.003
    When I print regex parameters, string: "test string", int: 123
    When I print custom parameters: date
