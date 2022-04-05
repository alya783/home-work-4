Feature: Form demo

  Scenario: Form fill
    When I go to "https://viktor-silakov.github.io/course-sut/"
    When I wait for "1" second
    When I go to "https://viktor-silakov.github.io/course-sut/formSubscription.html"
    When I wait for "1" second
    When I fill form:
    """
    plan: Premium
    years: 10
    user: default@test.com
    description: test description
    """

    When I wait for "1111" second

