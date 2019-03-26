const globalConfig = require('../globalConfig/config')
const apiUnit = require('../apiUnit/devops')
const localConfig = require('../localConfig/insightConfig')

describe("devops test", () =>{
    test("workspace create", async () => {
        await apiUnit.workspacesCreate();
        console.log('creat success');
        /*await apiUnit.workspacesDelete();
        console.log('delete success');*/

    },100000);

   });