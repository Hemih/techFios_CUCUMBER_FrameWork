package pages;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class DashBoard_Pg {
	WebDriver driver;

	public DashBoard_Pg(WebDriver driver) {
		this.driver = driver;

	}

	// WebElement list
	@FindBy(how = How.XPATH, using = "//h2[contains(text(),'Dashboard')]")
	WebElement DASHBOARD_HEADER_ELE;
	// CUSTOMERS
	@FindBy(how = How.XPATH, using = "//span[contains(text(), 'Customers' )]")
	WebElement CUSTOMER_MENU_ELE;
	@FindBy(how = How.XPATH, using = "//a[contains(text(), 'Add Customer' )]")
	WebElement ADD_CUSTOMER_MENU_ELE;
	@FindBy(how = How.XPATH, using = "//a[contains(text(), 'List Customers')]")
	WebElement LIST_CUSTOMER_MENU_ELE;
	@FindBy(how = How.XPATH, using = "//*[@id=\"side-menu\"]/li[3]/ul/li[3]/a")
	WebElement CUSTOMER_GROUP_MENU_ELE;

	// BANK AND CASH
	@FindBy(how = How.XPATH, using = "//*[@id=\"side-menu\"]/li[10]/a/span[1]")
	WebElement BANK_CASH_MENU_ELE;
	@FindBy(how = How.XPATH, using = "//*[@id=\"side-menu\"]/li[10]/ul/li[1]/a")
	WebElement NEW_ACCOUNT_MENU_ELE;
	@FindBy(how = How.XPATH, using = "//*[@id=\"side-menu\"]/li[10]/ul/li[2]/a")
	WebElement LIST_ACCOUNT_MENU_ELE;
	@FindBy(how = How.XPATH, using = "//*[@id=\"side-menu\"]/li[10]/ul/li[3]/a")
	WebElement ACCOUNT_BALANCE_MENU_ELE;

	// TRANSACTIONS
	@FindBy(how = How.XPATH, using = "//*[@id=\"side-menu\"]/li[5]/a/span[1]")
	WebElement TRANSACTIONS_MENU_ELE;

	// Corresponding method
	public void validateDashboardPage(String expectedTest) {
		try {
			Thread.sleep(2000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		Assert.assertEquals(expectedTest,DASHBOARD_HEADER_ELE.getText());
	}

	/*--------Add Customer Test Case---------------------------------------------------------------------------*/
	public void clickCustomerMenuButton() {
		CUSTOMER_MENU_ELE.click();
	}

	public void clickAddCustomerMenuButton() {
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		ADD_CUSTOMER_MENU_ELE.click();
	}

	public void clickListCustomerMenuButton() {
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		LIST_CUSTOMER_MENU_ELE.click();
	}

	public void clickCustomerGroupMenuButton() {
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		CUSTOMER_GROUP_MENU_ELE.click();
	}
	/*---------Add Account Test Case---------------------------------------------------------------------------*/

	public void clickBankCashMenuButton() {
		BANK_CASH_MENU_ELE.click();
	}

	public void clickNewAccountMenuButton() {
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		NEW_ACCOUNT_MENU_ELE.click();
	}

	public void clickListAccountMenuButton() {
		LIST_ACCOUNT_MENU_ELE.click();
	}
}
