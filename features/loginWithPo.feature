Feature: Login

  Scenario: Successful login
    When I go to "https://viktor-silakov.github.io/course-sut/?quick"
        When I login as: "walker@jw.com", "password"
