const SuperfluidSDK = require("@superfluid-finance/js-sdk");
const Web3 = require("web3");

const superfluid = async () => {
  try {
    const sf = new SuperfluidSDK.Framework({
      web3: new Web3(
        "https://eth-goerli.alchemyapi.io/v2/gYsNxGzbVTOC0D_liQiO-e4vqPIDC18w"
      ),
    });
    await sf.initialize();

    const walletAddress = "0x9C0cEC1f95582100b07581efCEB45A96FE01e8C0";

    const carol = sf.user({
      address: walletAddress,
      token: "0xF2d68898557cCb2Cf4C10c3Ef2B034b2a69DAD00",
    });

    await carol.flow({
      recipient: "0x52DBDfa46Cd6AeC23e248c3D2cec723830D227CD",
      flowRate: "385802469135802",
    });

    const details = await carol.details();
    console.log(details);
  } catch (error) {
    console.log(error);
  }
};
superfluid();

// const sf = new SuperfluidSDK.Framework({
//   web3: new Web3("wss://goerli.infura.io/ws/v3/ba5697fa2ff24490a41a7bf8991a7799"),
// });
// await sf.initialize();

// const walletAddress =  window.ethereum.request({
//   method: "eth_requestAccounts",
//   params: [
//     {
//       eth_accounts: {},
//     },
//   ],
// });

// const walletAddress = "0x9C0cEC1f95582100b07581efCEB45A96FE01e8C0";

// const carol = sf.user({
//   address: walletAddress,
//   token: "0xF2d68898557cCb2Cf4C10c3Ef2B034b2a69DAD00",
// });

// carol.flow({
//   recipient: "0x52DBDfa46Cd6AeC23e248c3D2cec723830D227CD",
//   flowRate: "385802469135802",
// });

// const details = await carol.details();
// console.log(details);
