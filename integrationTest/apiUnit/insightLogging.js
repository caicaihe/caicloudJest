const request = require("supertest")
const globalConfig = require('../globalConfig/config')
const localConfig = require('../localConfig/insightConfig')
const apilist = require('../apiConfig/apilist')
const testData = require('../testData/insightLogging')


exports.rulerNameToId = async function(expected) {   
        const response = await request(globalConfig.url+localConfig.loggingApi)
        .get(apilist.loggingLogalertrulesGet)
        .auth(localConfig.user,localConfig.passwd)
        .set({'X-Tenant':localConfig.tenant})
        expect(response.statusCode).toBe(200);
        //console.log(response.body)
        var hasRuler = false;
        response.body.items.forEach((obj) => {
                //console.log(obj.metadata.alias)
                if(obj.metadata.alias == localConfig.logalterruler){
                        rulerId = obj.metadata.ID;
                        hasRuler = true;
                }
        })
        return rulerId;
}

exports.logalterrulesAdd = async function() {   
        //console.log(globalConfig.url+localConfig.loggingApi) 
        //console.log(apilist.loggingLogalertrules)
        const response = await request(globalConfig.url+localConfig.loggingApi)
        .post(apilist.loggingLogalertrulesAdd)
        .auth(localConfig.user,localConfig.passwd)
        .set({'X-Tenant':localConfig.tenant})
        .send(testData.logalterrulesconfig);
        console.log(response.body);
        expect(response.statusCode).toBe(201);   
}

exports.logalterrulesGetById = async function(expected) {   
        const response = await request(globalConfig.url+localConfig.loggingApi)
        .get(apilist.loggingLogalertrulesGet+'/'+expected)
        .auth(localConfig.user,localConfig.passwd)
        .set({'X-Tenant':localConfig.tenant});
        console.log(response.body);
        expect(response.statusCode).toBe(200); 
}


exports.logalterrulesDelete = async function(expected) {      
        const response = await request(globalConfig.url+localConfig.loggingApi)
        .delete(apilist.loggingLogalertrulesDelete+'/'+expected)
        .auth(localConfig.user,localConfig.passwd)
        .set({'X-Tenant':localConfig.tenant});
        expect(response.statusCode).toBe(204);       
}