Feature: Navigation Look

  Scenario: Menu has properly items texts
    When I go to "https://viktor-silakov.github.io/course-sut/formUser.html"
    When I wait for "2" second
    When I check the texts of the elements:
      | selector                    | text           |
      | (//*[@class='nav-link'])[1] | Orders         |
      | (//*[@class='nav-link'])[2] | Products       |
      | (//*[@class='nav-link'])[4] | Reports        |
      | (//*[@class='nav-link'])[5] | Integrations   |
      | (//*[@class='nav-link'])[6] | Create User    |
      | (//*[@class='nav-link'])[7] | Create Manager |
      | (//*[@class='nav-link'])[8] | List of users  |
