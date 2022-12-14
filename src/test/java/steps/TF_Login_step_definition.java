package steps;

import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.DashBoard_Pg;
import pages.DataBase_Pg;
import pages.Login_Pg;
import pages.TestBase_Pg;

public class TF_Login_step_definition extends TestBase_Pg {
	Login_Pg loginPg;
	DashBoard_Pg dashBoardPg;
	DataBase_Pg dBasePg;

	
	@Before
	public void beforeRun() {
		initDriver();
		loginPg = PageFactory.initElements(driver, Login_Pg.class);
		dashBoardPg = PageFactory.initElements(driver, DashBoard_Pg.class);
		dBasePg = PageFactory.initElements(driver, DataBase_Pg.class);
	}

	@Given("^User is on the techfios login page$")
	public void user_is_on_the_techfios_login_page() {
		driver.get("https://techfios.com/billing/?ng=login/");
		

	}

	@When("^User enters the username as \"([^\"]*)\"$")
	public void user_enters_the_username_as(String username) {
		loginPg.insertUserName(username);
		takeScreenshot(driver);

	}

	@When("^User enters the password as \"([^\"]*)\"$")
	public void user_enters_the_password_as(String password) {
		loginPg.insertPassword(password);
		
	}

	@When("^User clicks on login button$")
	public void user_clicks_on_login_button() {
		loginPg.clickSignInButton();

	}

	@Then("^User should land on Dashboard page$")
	public void user_should_land_on_Dashboard_page() {
		dashBoardPg.validateDashboardPage("Dashboard");
	}

	@Then("^User should not land on Dashboard page$")
	public void user_should_not_land_on_Dashboard_page() {
		loginPg.validateDashboardPageNOTfound("");
	}

	@After
	public void tearDown() {
		closeDriver();
	}

}
