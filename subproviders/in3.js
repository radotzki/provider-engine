const createIn3Provider = require('eth-json-rpc-in3/src/createProvider')
const ProviderSubprovider = require('./provider.js')

class In3Subprovider extends ProviderSubprovider {
  constructor(opts = {}) {
    const provider = createIn3Provider(opts)
    super(provider)
  }
}

module.exports = In3Subprovider