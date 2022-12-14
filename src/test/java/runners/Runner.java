package runners;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src/test\\java\\features" , 
		glue = "steps" , 
		tags = "@Scenario02" ,
		monochrome = true ,
		dryRun = false , 
		plugin = {
				"pretty",
				"html:target/CucumberHTML/cucumber.html",
				"json:target/CucumberJSON/cucumber.json"
		}		
		)
public class Runner {

}
