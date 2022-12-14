package pages;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class Login_Pg {
	WebDriver driver;

	public Login_Pg(WebDriver driver) {
		this.driver = driver;
	}

	// WebElement list
	@FindBy(how = How.XPATH, using = "//*[@id=\"username\"]")
	public WebElement USERNAME_ELE;
	@FindBy(how = How.XPATH, using = "//*[@id=\"password\"]")
	public WebElement PASSWORD_ELE;
	@FindBy(how = How.XPATH, using = "/html/body/div/div/div/form/div[3]/button")
	public WebElement SIGNIN_BUTTON;
	@FindBy(how = How.XPATH, using = "/html/body/div/div/div/div")
	public WebElement LOGINPG;

	
	// Corresponding Methods
	public void validateDashboardPageNOTfound(String expectedTest) {
		try {
			Thread.sleep(2000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		Assert.assertEquals(expectedTest,LOGINPG.getText());
	}
	public void goToURL() {
		
	}
	public void insertUserName(String username) {
		USERNAME_ELE.sendKeys(username);
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}

	}

	public void insertPassword(String password) {
		PASSWORD_ELE.sendKeys(password);
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}

	public void clickSignInButton() {
		SIGNIN_BUTTON.click();
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}

	public String getPageTitle() {
		return driver.getTitle();

	}

	public WebElement clickOnButton(WebElement ele) {
		ele.click();
		return ele;
	}

}
