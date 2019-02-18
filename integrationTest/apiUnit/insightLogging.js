const request = require("supertest")
const globalConfig = require('../globalConfig/config')
const localConfig = require('../localConfig/insightconfig')
const apilist = require('../apiConfig/apilist')

exports.logalterrules = async function() {   
        //console.log(globalConfig.url+localConfig.loggingApi) 
        //console.log(apilist.loggingLogalertrules)
        const response = await request(globalConfig.url+localConfig.loggingApi)
        .get(apilist.loggingLogalertrules)
        .auth('admin','Pwd123456')
        .set({'X-Tenant':'devops'})
        expect(response.statusCode).toBe(200);
        console.log(response.body)
        expect(response.body.items[0].metadata.alias).toEqual(expect.stringContaining('oioi'));
  
}