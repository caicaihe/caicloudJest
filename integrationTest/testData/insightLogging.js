const globalConfig = require('../globalConfig/config')
const localConfig = require('../localConfig/insightConfig')

exports.logalterrulesconfig = {"metadata":{"alias":localConfig.logalterruler,"description":"for test"},"spec":{"queryString":localConfig.logalterrulerkeyword,"range":"5m","comparison":">","threshhold":1,"checkInterval":"10m","notifyTypes":[],"groups":[]}}