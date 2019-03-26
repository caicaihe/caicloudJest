const globalConfig = require('../globalConfig/config')
const localConfig = require('../localConfig/devopsConfig')

exports.workspaceGithub = {"metadata":{"annotations":{"cyclone.io/alias":localConfig.workspaceNameGithub,"cyclone.io/description":"first workspace"},"name":localConfig.workspaceNameGithub},"spec":{"scm":{"type":"GitHub","server":"https://github.com","username":"caicaihe","password":"","token":"916cb97588e9e5db1754f8f63bb565d3e9537464","authType":"Token"},"cargo":{"name":"default"},"quota":{"limits.cpu":"1","limits.memory":"1Gi","requests.cpu":"0.5","requests.memory":"500M"}}}