const utils = require('../utils')
const maticPOSClient = utils.getMaticPOSClient()

const burnHash = '0xae7644f460b59e9985fa44ed055fc923d2ad04e3dda706df5218be2b6abcd05a';
const burnForMintHash = "0xdfd862b23c8a67755488447ae1ddea2afa698a45b3a6e6d61e4ba2a6df93e45c";
const execute = async () => {
  try {
    const tx = await maticPOSClient.exitERC20(burnForMintHash)
    console.log(tx.transactionHash) // eslint-disable-line
  } catch (e) {
    console.error(e) // eslint-disable-line
  }
}

execute().then(() => process.exit(0))