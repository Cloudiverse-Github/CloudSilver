const ERC20ABI = require('../../../erc-20/build/contracts/CloudSilver.json').abi;


const Web3 = require("../../node_modules/web3");

const web3 = new Web3("https://ropsten.infura.io/v3/759e2479e2fa4755b99bb6671745ffae")
const DAI_ADDRESS = "0xbbABD03ae0d7ac79db6e912241Aa9B0c4a83ea75" // this is mainnet

const daiToken = new web3.eth.Contract(ERC20ABI, DAI_ADDRESS)

const account = web3.eth.accounts.privateKeyToAccount('0x' + "b237aa87f92b99fb49674cbf3e6259729da06977e48f3c482d48a4099c905d3f");
web3.eth.accounts.wallet.add(account);
web3.eth.defaultAccount = account.address;

async function main() {
  let x = daiToken.methods.mint("0x03018bD7236BC817905c84D84Fe028e240464201", web3.utils.toHex('5000000000000000000')).send({
    from: web3.eth.defaultAccount,
    gas: web3.utils.toHex(3000000),
    gasPrice: web3.utils.toHex(await web3.eth.getGasPrice()),
    chainId: 0x03,
    value: 0x0,
  }, function (err, res) {
    if (err) console.log("An error occured", err)
    else console.log(res)
  })


  daiToken.methods.balanceOf("0xe60AEdc184486313BD012aa8aFDe46209398706c").call(function (err, res) {
    if (err) {
      console.log("An error occured", err)
      return
    }
    console.log("The balance is: ", res)
  })
}


main()

