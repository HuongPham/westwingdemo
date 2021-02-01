Feature: Wishlist
Background:
    Given I am on the WestwingNow home page
Scenario Outline: Searching a specific product to add into wishlist then delete it from wishlist
    When I search for "möbel"
    Then I should see product listing page with a list of products
    When I click on wishlist icon of the first found product
    Then I should see the login-registration overlay
    When I switch to login form of the overlay
    And I log in with "<user_name>" and "<password>" credentials
    Then The product should be added to the wishlist
    And I go to the wishlist page
    And I delete the product from my wishlist
    Examples:
        |user_name|password|
        |huongcdit@gmail.com|K7UAfpmU!sb7RNq|
