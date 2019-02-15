const request = require("supertest")
const globalConfig = require('../globalConfig/config')
const apilist = require('../apiConfig/apilist')

exports.workspacesGet = async function(expected) {
    
        const response = await request(globalConfig.url)
        .get(apilist.workspaces)
        .auth('admin','Pwd123456')
        .set({'X-Tenant':'devops'})
        expect(response.statusCode).toBe(200);
        console.log(response.body)
        expect(response.body.items[0].name).toEqual(expect.stringContaining(expected));
  
}