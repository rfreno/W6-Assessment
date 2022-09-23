
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    await driver.sleep(1000)
    expect(displayed).toBe(true)
})

test('Clicking on Draw button displays the "Choose 2!" message',async () => {
    const button = await driver.findElement(By.id('draw'))
    await button.click()
    await driver.sleep(1000)

    const chooseHeader = await driver.findElement(By.id('choose-header'))
    const displayed = await chooseHeader.isDisplayed()
    expect(displayed).toBe(true)
})

test('Clicking Add to Duo displays the player-duo div', async () => {
    const button1 = await driver.findElement(By.id('draw'))
    await button1.click()
    const button = await driver.findElement(By.xpath('//div/div/button'))
    await button.click()
    await driver.sleep(1000)

    const duoHeader = await driver.findElement(By.id('player-duo'))
    const displayed = await duoHeader.isDisplayed()
    expect(displayed).toBe(true)
})