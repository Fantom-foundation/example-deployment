# Example-deployment

## Initial setup

1. Add a `.env` file that contains the PRIVATE_KEY of the wallet that will be used to deploy the contracts and API_KEY (if you want to verify using hardhat-etherscan)

```
PRIVATE_KEY = XXXXXXXXXX
API_KEY = XXXXXXX
```

2. Install `dotenv` to allow the config files to read PRIVATE_KEY from `.env` file

```
npm i dotenv
```

## Hardhat

1. Create a deployment script
<img width="887" alt="2" src="https://user-images.githubusercontent.com/38925737/157430834-72e7894f-c6d9-4c61-b601-26e5491e9fd7.png">

2. Update the `hardhat.config.js` file with these networks
<img width="761" alt="3" src="https://user-images.githubusercontent.com/38925737/157430999-f2248629-3d54-43d7-8afb-2cfc59bc6e05.png">

3. Run the following command to deploy the contract

#### Mainnet
```
npx hardhat run --network mainnet scripts/sample-script.js
```


#### Testnet
```
npx hardhat run --network testnet scripts/sample-script.js
```

4. You should see the deployed contract address
<img width="452" alt="4" src="https://user-images.githubusercontent.com/38925737/157434102-43fdaa77-30a7-4b0e-9b6e-54eb7d055c2b.png">

