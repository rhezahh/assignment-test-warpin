@ebay
Feature: Ebay - Search

    I want to search an items on Ebay depends on categories

    Scenario: As an User, I should be able to search an items on Ebay depends on categories
        Given Go to www.ebay.com
        And Type any search string in the search bar. For example: "MacBook"
        And Change the Search category. For example: "Computers/Tablets & Networking" and click search
        Then Verify that the page loads completely
        Then Verify that the first result name matches with the "MacBook"