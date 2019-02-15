const globalConfig = require('../globalConfig/config')
const apiUnit = require('../apiUnit/workspace')

describe("workspaces",() =>{
    test("workspaces get", async () => {
        const expected = "csm-test";
        await apiUnit.workspacesGet(expected);
        console.log('finish first');
    });
});