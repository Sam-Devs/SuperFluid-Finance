const SuperfluidSDK = require("@superfluid-finance/js-sdk");
const Web3 = require("web3");

const superfluid = new SuperfluidSDK.Framework({
    web3: new Web3(window.ethereum)
})
 superfluid.initialize();

const wallet =  window.ethereum.request({
    method: "request_ethereum_wallet_account",
    params: [
        {
            ethereum_accounts: []
        }
    ]
})

const sam = wallet.user({
    address: wallet[0],
    token: "0xF2d68898557cCb2Cf4C10c3Ef2B034b2a69DAD00"
})

const accountDetails = sam.details();
console.log(accountDetails);