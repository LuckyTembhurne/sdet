@FunctionalTest
Feature: Search Google

	@RegressionTest
  Scenario Outline: Need to enter multiple text
    Given Open calculator site
    Then Validate the Title of the current page
		Then Click on BMI Calculator
		And Verify the Title of the Page again
		Then Enter Age "<age>"
		And Enter Height "<height>"
		And Enter Weight "<weight>"
		And Tap on Calculate BMI
		Then Capture the BMI Result value
		And Close the browser
	    
    
    Examples:
    		|age | height | weight |
				|10|127|40|
				|30|156|70|
				|25|152|55|
				|20|160|45|
				|35|160|70|
								
				

