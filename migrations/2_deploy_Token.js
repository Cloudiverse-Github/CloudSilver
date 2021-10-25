const CloudSilver = artifacts.require("CloudSilver")

module.exports = async function (deployer, network, accounts) {
  await deployer.deploy(CloudSilver, 'CloudSilver', 'CSVR', '10000000000000000000000')
  const cloudSilver = await CloudSilver.deployed();
}
