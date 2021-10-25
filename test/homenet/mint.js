const ERC20ABI = require('../../../erc-20/build/contracts/CloudSilver.json').abi;


const Web3 = require("../../node_modules/web3");

const web3 = new Web3("http://localhost:7545");

const DAI_ADDRESS = "0xb020dc3B898F6E782BfBF2073094714132E18716"

const daiToken = new web3.eth.Contract(ERC20ABI, DAI_ADDRESS)

const account = web3.eth.accounts.privateKeyToAccount('0x' + "fba449db1b41c5e87c0408179cc0301000fb78e1a3ffd61eb7eae62da1d07dd1");
web3.eth.accounts.wallet.add(account);
web3.eth.defaultAccount = account.address;

async function main() {
  console.log(await web3.eth.getGasPrice())
  let x = daiToken.methods.mint("0x4C37630C258A110f27e022604a4508923a94F4Cd", web3.utils.toHex(987)).send({
    from: web3.eth.defaultAccount,
    gas: web3.utils.toHex(3000000),
    gasPrice: web3.utils.toHex(await web3.eth.getGasPrice()),
    chainId: 0x03,
    value: 0x0,
  }, function (err, res) {
    if (err) console.log("An error occured", err)
    else console.log(res)

    daiToken.methods.balanceOf("0x4C37630C258A110f27e022604a4508923a94F4Cd").call(function (err, res) {
      if (err) {
        console.log("An error occured", err)
        return
      }
      console.log("The balance is: ", res)
    })

  })
}
main()

// var count = web3.eth.getTransactionCount("0x26...");
// var contractAddress = "0x76eeEf289d4020cFb26ab0b499f7f73B0243739d";
// var contract = web3.eth.contract(ERC20ABI).at(contractAddress);
// var rawTransaction = {
//     "from": "0x26...",
//     "nonce": web3.toHex(count),
//     "gasPrice": "0x04e3b29200",
//     "gasLimit": "0x7458",
//     "to": contractAddress,
//     "value": "0x0",
//     "data": contract.transfer.getData("0xCb...", 10, {from: "0x26..."}),
//     "chainId": 0x03
// };

// var privKey = new Buffer('fc3...', 'hex');
// var tx = new Tx(rawTransaction);

// tx.sign(privKey);
// var serializedTx = tx.serialize();

// web3.eth.sendRawTransaction('0x' + serializedTx.toString('hex'), function(err, hash) {
//     if (!err)
//         console.log(hash);
//     else
//         console.log(err);
// });