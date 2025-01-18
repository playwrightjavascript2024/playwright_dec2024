import test, { expect, chromium, firefox } from "@playwright/test";

test("Leads creation",async() =>{
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
    await page.locator("//div[@class='slds-form-element__control slds-grow slds-input-has-icon slds-input-has-icon_left-right']/input").fill("Marketing")

    // Click Service using index based XPath
    await page.locator("//p[@class='slds-truncate']").click()

    // Click Accounts using attribute based CSS selector
    await page.locator("//one-app-nav-bar-item-root[@data-id='Lead']//lightning-primitive-icon[@exportparts='icon']//*[name()='svg']").click()

    // Click New using getByRole 
    await page.locator("//span[contains(text(),'New Lead')]").click()
   //await page.locator("//one-app-nav-bar-menu-item[2]//a[1]//span[1]//span[1]").click()
    
    // Enter first name, lastname and valid data
    await page.getByPlaceholder("First Name").fill("karthiki")
    await page.getByPlaceholder("Last Name").fill("karyan")
    await page.locator("//input[@name='Company']").fill("testleaf")
    await page.locator("//button[normalize-space()='Save']").click()
 

    // Verify the toast message displayed
    let message = await page.locator("//span[@class='toastMessage slds-text-heading--small forceActionsText']").innerText()
    expect(message).toEqual("Lead \"karthiki karyan\" was created.")

    //approval button
    await page.locator("//div[@class='windowViewMode-normal oneContent active lafPageHost']//div[@class='oneRecordHomeFlexipage2Wrapper']//div[@class='recordHomeFlexipage2']//one-record-home-flexipage2//forcegenerated-adg-rollup_component___force-generated__flexipage_-record-page___runtime_sales_lead__-lead_rec_-l___-lead___-v-i-e-w___-l-m-t___-v-i-e-w[@class='adg-rollup-wrapped']//forcegenerated-flexipage_lead_rec_l_lead__view_js___lmt___1736193560000[@class='forcegenerated-flexipage-module']//record_flexipage-desktop-record-page-decorator//div[@class='record-page-decorator']//records-record-layout-event-broker//slot//slot//flexipage-record-home-with-subheader-template-desktop2[@class='forcegenerated-flexipage-template']//div[@class='slds-grid slds-wrap']//div[@class='slds-col slds-size_1-of-1 row region-header']//slot[@name='header']//flexipage-component2[@data-component-id='force_highlightsPanel']//slot//records-lwc-highlights-panel//records-lwc-record-layout//forcegenerated-highlightspanel_lead___012000000000000aaa___compact___view___recordlayout2[@class='forcegenerated-record-layout2']//records-highlights2//div[@class='highlights slds-clearfix slds-page-header slds-page-header_record-home fixed-position']//div[@class='slds-grid primaryFieldRow']//div[@class='slds-col slds-no-flex slds-grid slds-grid_vertical-align-center horizontal actionsContainer']//div//lightning-primitive-icon[@variant='bare']//*[name()='svg']").click()
    await page.locator("//span[normalize-space()='Convert']").click()

    //Opportunity name
    //*[@id="content_2607:0"]/div/div[1]/fieldset[3]/div/div/div[2]/div[1]/div[2]/div[1]/button
    await page.locator("//button[normalize-space()='testleaf-']").click()
    await page.locator("//div[@class='createPanelExpanded']//div//div[@class='uiInput uiInputText uiInput--default uiInput--input']//input").fill("karthikopportunity3")
    await page.locator("//button[@class='slds-button slds-button_brand']").click()

    let leadsmsg = await page.locator("//h2[normalize-space()='Your lead has been converted']").innerText()
    expect(leadsmsg).toEqual("Your lead has been converted")
    
    await page.locator("//button[normalize-space()='Go to Leads']").click()

    await page.getByPlaceholder("Search this list...").fill("karthikopportunity3")
    await page.keyboard.down('Enter')
   
    let nomsg = await page.locator("//span[normalize-space()='No items to display.']").innerText()
    expect(nomsg).toEqual("No items to display.")

    //navigate the opportunity tab
    await page.locator("//one-app-nav-bar-item-root[@data-id='Opportunity']//lightning-primitive-icon[@exportparts='icon']//*[name()='svg']").click()
    await page.locator("//span[contains(text(),'karthikopportunity3')]").click()

    let verifyOpportunity = await page.locator("//lightning-formatted-text[@slot='primaryField']").innerText()
    expect(verifyOpportunity).toEqual("karthikopportunity3")
})