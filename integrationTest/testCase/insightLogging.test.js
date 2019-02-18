const globalConfig = require('../globalConfig/config')
const apiUnit = require('../apiUnit/insightLogging')

describe("insight.logging test",() =>{
    test("logalertrules get list", async () => {
        await apiUnit.logalterrules();
        console.log('finish first');
    });
});