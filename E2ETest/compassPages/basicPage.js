const puppeteer = require('puppeteer');
const globalConfig = require('../globalConfig/config')
const localConfig = require('../localConfig/insightConfig')
const pageElements = require('../compassPages/basicPageElements')

exports.login = async function(page, user, password, tenant) {
    await page.waitForSelector(pageElements.loginUser);
    await page.type(pageElements.loginUser, user);
    await page.waitForSelector(pageElements.loginPassword);
    await page.type(pageElements.loginPassword, password);
    await page.click(pageElements.loginSubmit);
}

exports.chooseAdminTenant = async function(page) {
    await page.click(pageElements.adminIn);
    await page.click(pageElements.chooseAdmin);
}

exports.addTenant = async function(page) {
    await page.click(pageElements.tenantManage);
    await page.reload();
    await page.click(pageElements.addTenant);
    //await page.reload();
    await page.waitForSelector(pageElements.inputTenantName);
    await page.type(pageElements.inputTenantName, localConfig.tenantName);
    //await page.waitFor(5000);
    await page.click(pageElements.submitTenantInfo);
    await page.waitFor(2000);

    await page.click(pageElements.chooseAdminToTenant);
    await page.click(pageElements.submitTenantInfo);
}