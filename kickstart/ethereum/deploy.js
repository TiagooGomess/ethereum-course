const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const compiledFactory = require("./build/CampaignFactory.json");

const provider = new HDWalletProvider(
  "spoon dinner valley around sure cigar edge team advance attend enemy sample",
    "https://rinkeby.infura.io/v3/72ba22adafe14b33adb92b34ee9539f6"
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data: compiledFactory.bytecode })
    .send({ gas: "1000000", from: accounts[0], gasPrice: "5000000000" });

  console.log("Contract deployed to", result.options.address);
};
deploy();