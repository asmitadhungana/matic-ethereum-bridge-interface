const config = require('../config')
const utils = require('../utils')
const maticPOSClient = utils.getMaticPOSClient()

const execute = async () => {
  try {
    const tx = await maticPOSClient.approveERC20ForDeposit(config.root.OLD_GLD, config.user.amount)
    console.log(tx.transactionHash) // eslint-disable-line
  } catch (e) {
    console.error(e) // eslint-disable-line
  }
}

execute().then(() => process.exit(0))