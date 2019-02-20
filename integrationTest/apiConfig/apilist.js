const globalConfig = require('../globalConfig/config')
const localConfig = require('../localConfig/insightconfig')


//devops
exports.workspaces = '/workspaces'

//insight
exports.loggingLogalertrulesGet = '/logalertrules'
exports.loggingLogalertrulesAdd = '/clusters/'+localConfig.cid+'/partitions/'+localConfig.partition+'/applications/'+localConfig.app+'/logalertrules'
exports.loggingLogalertrulesDelete = '/logalertrules'