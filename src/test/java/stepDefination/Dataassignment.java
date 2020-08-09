package stepDefination;

import org.junit.Assert; 
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;


public class Dataassignment {


public static WebDriver driver;

	
	@Given("^Open calculator site$")
	public void open_calculator_site() throws Throwable {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\LuckyTembhurne\\Desktop\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://www.calculator.net/");
	}

	@Then("^Validate the Title of the current page$")
	public void validate_the_Title_of_the_current_page() throws Throwable {
	  // String title0 = driver.getTitle();
		String title0 = "Calculator.net: Free Online Calculators - Math, Fitness, Finance, Science";
		Assert.assertEquals(title0, driver.getTitle());
	   
		
	}

	@Then("^Click on BMI Calculator$")
	public void click_on_BMI_Calculator() throws Throwable {
		WebDriverWait wait = new WebDriverWait(driver, 10);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.linkText("BMI Calculator")));
		driver.findElement(By.linkText("BMI Calculator")).click();
	    
	}

	@Then("^Verify the Title of the Page again$")
	public void verify_the_Title_of_the_Page_again() throws Throwable {
		String title1 = "BMI Calculator";
		Assert.assertEquals(title1, driver.getTitle());
		
		
	}

	@Then("^Enter Age \"([^\"]*)\"$")
	public void enter_Age(String arg1) throws Throwable {
		//wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("cage")));
		driver.findElement(By.id("cage")).clear();
		driver.findElement(By.id("cage")).sendKeys(arg1);
	    
	}

	@Then("^Enter Height \"([^\"]*)\"$")
	public void enter_Height(String arg1) throws Throwable {
		driver.findElement(By.id("cheightmeter")).clear();
		driver.findElement(By.id("cheightmeter")).sendKeys(arg1);
	
	}

	@Then("^Enter Weight \"([^\"]*)\"$")
	public void enter_Weight(String arg1) throws Throwable {
		driver.findElement(By.id("ckg")).clear();
		driver.findElement(By.id("ckg")).sendKeys(arg1);
	    
	}

	@Then("^Tap on Calculate BMI$")
	public void tap_on_Calculate_BMI() throws Throwable {
		driver.findElement(By.xpath("/html/body/div[3]/div[1]/div[4]/div[2]/table/tbody/tr/td/table[4]/tbody/tr/td/input[2]")).click();
		
	    
	}

	@Then("^Capture the BMI Result value$")
	public void capture_the_BMI_Result_value() throws Throwable {
		
		String result = driver.findElement(By.className("bigtext")).getText();
		System.out.println(result);
				
	  
	}

	@Then("^Close the browser$")
	public void close_the_browser() throws Throwable {
		//Thread.sleep(5000);
		driver.close();
		driver.quit();
	    
	}
	
}
