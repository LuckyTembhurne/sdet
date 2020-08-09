package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/test/java/features/Dataassignment.feature", 
		glue = { "stepDefination" },
		tags = {"@FunctionalTest","@RegressionTest"},
		 plugin = { "pretty" , "html:target/reports" },
		 monochrome = true
		)


public class TestRunner {

}
