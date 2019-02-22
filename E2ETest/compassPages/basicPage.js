const puppeteer = require('puppeteer');
const globalConfig = require('../globalConfig/config')
const localConfig = require('../localConfig/devopsConfig')
const pageElements = require('../compassPages/basicPageElements')

exports.login = async function(page, user, password, tenant) {
    await page.waitForSelector(pageElements.loginUser);
    await page.type(pageElements.loginUser, user);
    await page.waitForSelector(pageElements.loginPassword);
    await page.type(pageElements.loginPassword, password);
    await page.click(pageElements.loginSubmit);
}

exports.chooseAdminTenant = async function(page){
    await page.click(pageElements.adminIn);
    await page.click(pageElements.chooseAdmin);
}