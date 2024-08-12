const extensionApi = typeof chrome !== 'undefined' ? chrome : browser
extensionApi.runtime.sendMessage('processSuccess')
