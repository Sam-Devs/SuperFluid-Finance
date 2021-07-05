const SuperfluidSDK = require("@superfluid-finance/js-sdk");
const Web3 = require("web3");
const HDWalletProvider = require("@truffle/hdwallet-provider");
const mnemonic = "aunt audit gallery easily tank desk trip punch volcano axis buyer castle"
const provider = new HDWalletProvider({
  mnemonic: mnemonic,
  providerOrUrl: "wss://eth-goerli.ws.alchemyapi.io/v2/gYsNxGzbVTOC0D_liQiO-e4vqPIDC18w",
})

const superfluid = async () => {
  try {
    const sf = new SuperfluidSDK.Framework({
      web3: new Web3(provider),
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

    await alice.createPool({ poolId: 1});    

    await alice.giveShares({ poolId: 1, recipient: carol, shares: 20});
    
    const details = await carol.details();
    console.log(details);
  } catch (error) {
    console.log(error.toString());
  }
};
superfluid();
