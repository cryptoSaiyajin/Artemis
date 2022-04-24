const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require ('web3');
const { interface, bytecode } = require ('./compile');

const provider = new HDWalletProvider(
  'venue gallery august cherry book betray witness fashion address marriage draft orbit',
  'https://rinkeby.infura.io/v3/aeee7a5cb670486aabe5781ef9b8ccf1'

);
const web3 = new Web3(provider);

const deploy = async () => { //just using this function to use async await
const  accounts = await  web3.eth.getAccounts();

console.log('Attempting to deploy Art Coin from account:',accounts[0]);

const result= await new web3.eth.Contract(JSON.parse(interface))
.deploy({ data: bytecode })
.send({ gas: '1000000', from: accounts[0]});
console.log(interface);
console.log("Contract Deployed to:",result.options.address);
provider.engine.stop();

};

deploy();
