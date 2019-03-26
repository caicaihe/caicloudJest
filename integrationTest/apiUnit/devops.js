const request = require("supertest")
const globalConfig = require('../globalConfig/config')
const localConfig = require('../localConfig/devopsConfig')
const apilist = require('../apiConfig/apilist')
const testData = require('../testData/devops')

exports.workspacesGet = async function(expected) {
    
        const response = await request(globalConfig.url)
        .get(apilist.workspaces)
        .auth('admin','Pwd123456')
        .set({'X-Tenant':'devops'})
        expect(response.statusCode).toBe(200);
        //console.log(response.body)
        expect(response.body.items[0].name).toEqual(expect.stringContaining(expected));
  
}


exports.workspacesCreate = async function() {
        const response = await request(globalConfig.url+localConfig.api)
        .post(apilist.workspaces)
        .auth('admin','Pwd123456')
        .set({'X-Tenant':'devops'})
        .send(testData.workspaceGithub)
        expect(response.statusCode).toBe(201);
        //console.log(response.body)
}

exports.workspacesDelete = async function() {
        const response = await request(globalConfig.url+localConfig.api)
        .delete(apilist.workspaces+'/'+localConfig.workspaceNameGithub)
        .auth('admin','Pwd123456')
        .set({'X-Tenant':'devops'})
        expect(response.statusCode).toBe(204);
        //console.log(response.body)
}