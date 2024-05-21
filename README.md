# Zircuit Testnet - Deploy Conctract
---
This deployer is very easy to use.
You can modify the contract or add a new contract.
Clone the repository -> git clone 'https://github.com/DonMed00/zircuit-deployer'
The first step is to install the dependencies, if you meet the requirements of your pc, just run 'npm i'
STEPS:
1) Create the contract.
2) Compile the contract using 'npx hardhat compile'
3) In hardhat.config.ts put your private key (you should not share your private key and it is advisable to take it from a .env file or connect your wallet with a third party library)
4) You must have funds in your testing wallet to pay the fees, after that use 'npx hardhat run index.js --network zircuit'
5) Your contract will be deployed to your wallet, at the address shown in the terminal.

If you want to clean your artifacts folder, use 'npx hardhat clean'


ALL the docs are from https://docs.zircuit.com/build-on-zircuit/deploy-on-zircuit

This deployer can also be used for other networks. Just change the network URL or add it to your environment.
