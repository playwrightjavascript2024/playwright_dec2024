import test, { expect, chromium, firefox } from "@playwright/test";

test("create an account",async() =>{
    // Navigate to salesforce website 
    const browser = await chromium.launch();
    
    const browserContext = await browser.newContext();
    
    const page = await browserContext.newPage();
    
    await page.goto("https://login.salesforce.com/")

    // Enter username using getByLabel 
    await page.locator("//input[@id='username']").fill("ravindran.ramdas@testleaf.com")

    // Enter password using getByLabel 
    await page.locator("//input[@id='password']").fill("Indran#1432")

    // Click Login 
    await page.locator("//input[@id='Login']").click()
    await page.waitForTimeout(5000)

    // Verify the title and url of the page using appropriate assertions 
    await expect(page).toHaveTitle("Home | Salesforce", { timeout: 15000 })
    await expect(page).toHaveURL("https://testleaf22-dev-ed.develop.lightning.force.com/lightning/setup/SetupOneHome/home")

    // Click App Launcher using the class locator 
    await page.locator("//div[@class='slds-icon-waffle']").click()

    // Click View All using getByText 
    await page.locator("//button[normalize-space()='View All']").click()

    // Enter ‘Service’ in the App Launcher Search box using getByPlaceHolder 
    await page.locator("//div[@class='slds-form-element__control slds-grow slds-input-has-icon slds-input-has-icon_left-right']/input").fill("Service")

    // Click Service using index based XPath
    await page.locator("//one-app-launcher-app-tile[1]//div[1]//div[2]//div[1]//a[1]//lightning-formatted-rich-text[1]//span[1]//p[1]//mark[1]").click()

    // Click Accounts using attribute based CSS selector
    await page.locator("//one-app-nav-bar-item-root[@data-id='Account']//a[@role='button']//lightning-primitive-icon[@exportparts='icon']//*[name()='svg']//*[name()='path' and contains(@d,'M476 178L2')]").click()

    // Click New using getByRole 
    await page.locator("//span[contains(text(),'New Account')]").click()
    

    // Enter Account name using attribute based CSS selector 
    await page.locator("input[name='Name']").fill("karthik1")

    // Click Save button using XPath 
    await page.locator("//button[@name='SaveEdit']").click()

    // Verify the toast message displayed
    let message = await page.locator("//span[@class='toastMessage slds-text-heading--small forceActionsText']").innerText()
    expect(message).toEqual("Account \"karthik1\" was created.")

   
   
})