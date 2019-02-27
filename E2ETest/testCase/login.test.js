const puppeteer = require('puppeteer');
const globalConfig = require('../globalConfig/config')
const localConfig = require('../localConfig/devopsConfig')
const pageElements = require('../compassPages/basicPageElements')
const basicPage = require('../compassPages/basicPage')

describe('web test', () => {
    test('first', async () => {
    const browser = await puppeteer.launch({headless:false});
    //const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
    const page = await browser.newPage();
    await page.goto(globalConfig.url);  
    await page.setViewport({ width: 1440, height: 862 });
    await page.evaluate(()=>{
        localStorage.setItem('initOverview', true);
    });

    basicPage.login(page, globalConfig.loginUser, globalConfig.loginPassword, localConfig.tenant);
    await page.waitFor(6000);

    basicPage.chooseAdminTenant(page);
    await page.waitFor(5000);

    await basicPage.addTenant(page);
    await browser.close();
    }, 100000);
    })