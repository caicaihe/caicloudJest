const puppeteer = require('puppeteer');
const globalConfig = require('../globalConfig/config')
const localConfig = require('../localConfig/devopsConfig')
const pageElements = require('../compassPages/basicPageElements')

describe('web test', () => {
    test('first', async () => {
    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    await page.goto(globalConfig.url);
   
   
    await page.setViewport({ width: 1440, height: 862 });
    await page.waitForSelector(pageElements.loginUser);
    await page.type(pageElements.loginUser, globalConfig.loginUser);
    await page.waitForSelector(pageElements.loginPassword);
    await page.type(pageElements.loginPassword, globalConfig.loginPassword);
    await page.click(pageElements.loginSubmit);
    await page.waitFor(5000);
    await browser.close();
    }, 100000);






    })