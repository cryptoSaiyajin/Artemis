const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3= new Web3(ganache.provider());//creates instance of web3 and tells that instance to connect to local test etherum network
const { interface, bytecode } = require ('../compile');
let accounts;
let inbox;
beforeEach(async () => {
  //get list of accounts
accounts = await  web3.eth.getAccounts();

//use one of the accounts to deploy contracts
inbox = await new web3.eth.Contract(JSON.parse(interface))
.deploy({data: bytecode, arguments: ['Hi there!']})
.send({from: accounts[0], gas: '1000000'})
});

describe ('Art', () =>
{
  it('deploys contract',() => {
assert.ok(Art.options.address);
  });

  it('mints 100000 coins',async () => {
const bal = await Art.methods.getBalance().call()({
          from: accounts[0]
        });
assert.equal(bal,100000);
  });
}

describe ('StakingArt', () =>
{
  it('deploys contract',() => {
assert.ok(StakingArt.options.address);
  });

  it('stakes 1000',async () => {
    await StakingArt.methods.stake(1000).send({
         from: accounts[0]
              });
    const bal = await StakingArt.methods._totalSupply().call()({
                        from: accounts[0]
                      });
assert.equal(bal,1000);
  });
}
)
