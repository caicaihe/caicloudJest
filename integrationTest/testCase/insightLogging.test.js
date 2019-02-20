const globalConfig = require('../globalConfig/config')
const apiUnit = require('../apiUnit/insightLogging')
const localConfig = require('../localConfig/insightconfig')

describe("insight.logging test", () =>{
    test("logalertrules create test", async () => {
        await apiUnit.logalterrulesAdd(localConfig.logalterruler);
        console.log('creat success');
        rulerId = await apiUnit.rulerNameToId(localConfig.logalterruler);
        await apiUnit.logalterrulesGetById(rulerId);
        console.log('check success');
        await apiUnit.logalterrulesDelete(rulerId);  
        console.log('delete success');

    });
});