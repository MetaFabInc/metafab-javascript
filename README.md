# meta_fab_api

MetaFabApi - JavaScript client for meta_fab_api
Documentation for the MetaFab API. Complete API references and guides can be found at: https://trymetafab.com
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.0.0
- Package version: 1.0.0
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen
For more information, please visit [https://trymetafab.com](https://trymetafab.com)

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install meta_fab_api --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your meta_fab_api from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var MetaFabApi = require('meta_fab_api');


var api = new MetaFabApi.ContractsApi()
var contractId = "contractId_example"; // {String} Any contract id within the MetaFab ecosystem.
var func = "func_example"; // {String} A contract function name. This can be any valid function from the the ABI of the contract you are interacting with. For example, `balanceOf`.
var opts = {
  'args': 123,"Hello",false // {String} A comma seperated list of basic data type arguments. This is optional and only necessary if the function being invoked requires arguments per the contract ABI. For example, `123,\"Hello\",false`.
};
api.v1ContractsContractIdReadsGet(contractId, func, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

## Documentation for API Endpoints

All URIs are relative to *https://api.trymetafab.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*MetaFabApi.ContractsApi* | [**v1ContractsContractIdReadsGet**](docs/ContractsApi.md#v1ContractsContractIdReadsGet) | **GET** /v1/contracts/{contractId}/reads | Read contract data
*MetaFabApi.ContractsApi* | [**v1ContractsContractIdWritesPost**](docs/ContractsApi.md#v1ContractsContractIdWritesPost) | **POST** /v1/contracts/{contractId}/writes | Write contract data
*MetaFabApi.ContractsApi* | [**v1ContractsGet**](docs/ContractsApi.md#v1ContractsGet) | **GET** /v1/contracts | Get contracts
*MetaFabApi.ContractsApi* | [**v1ContractsPost**](docs/ContractsApi.md#v1ContractsPost) | **POST** /v1/contracts | Create custom contract
*MetaFabApi.CurrenciesApi* | [**v1CurrenciesCurrencyIdBalancesGet**](docs/CurrenciesApi.md#v1CurrenciesCurrencyIdBalancesGet) | **GET** /v1/currencies/{currencyId}/balances | Get currency balance
*MetaFabApi.CurrenciesApi* | [**v1CurrenciesCurrencyIdBatchTransfersPost**](docs/CurrenciesApi.md#v1CurrenciesCurrencyIdBatchTransfersPost) | **POST** /v1/currencies/{currencyId}/batchTransfers | Batch transfer currency
*MetaFabApi.CurrenciesApi* | [**v1CurrenciesCurrencyIdBurnsPost**](docs/CurrenciesApi.md#v1CurrenciesCurrencyIdBurnsPost) | **POST** /v1/currencies/{currencyId}/burns | Burn currency
*MetaFabApi.CurrenciesApi* | [**v1CurrenciesCurrencyIdFeesGet**](docs/CurrenciesApi.md#v1CurrenciesCurrencyIdFeesGet) | **GET** /v1/currencies/{currencyId}/fees | Get currency fees
*MetaFabApi.CurrenciesApi* | [**v1CurrenciesCurrencyIdFeesPost**](docs/CurrenciesApi.md#v1CurrenciesCurrencyIdFeesPost) | **POST** /v1/currencies/{currencyId}/fees | Set currency fees
*MetaFabApi.CurrenciesApi* | [**v1CurrenciesCurrencyIdMintsPost**](docs/CurrenciesApi.md#v1CurrenciesCurrencyIdMintsPost) | **POST** /v1/currencies/{currencyId}/mints | Mint currency
*MetaFabApi.CurrenciesApi* | [**v1CurrenciesCurrencyIdTransfersPost**](docs/CurrenciesApi.md#v1CurrenciesCurrencyIdTransfersPost) | **POST** /v1/currencies/{currencyId}/transfers | Transfer currency
*MetaFabApi.CurrenciesApi* | [**v1CurrenciesGet**](docs/CurrenciesApi.md#v1CurrenciesGet) | **GET** /v1/currencies | Get currencies
*MetaFabApi.CurrenciesApi* | [**v1CurrenciesPost**](docs/CurrenciesApi.md#v1CurrenciesPost) | **POST** /v1/currencies | Create currency
*MetaFabApi.GamesApi* | [**v1GamesGameIdPatch**](docs/GamesApi.md#v1GamesGameIdPatch) | **PATCH** /v1/games/{gameId} | Update game
*MetaFabApi.GamesApi* | [**v1GamesGet**](docs/GamesApi.md#v1GamesGet) | **GET** /v1/games | Authenticate game
*MetaFabApi.GamesApi* | [**v1GamesPost**](docs/GamesApi.md#v1GamesPost) | **POST** /v1/games | Create game
*MetaFabApi.PlayersApi* | [**v1PlayersGet**](docs/PlayersApi.md#v1PlayersGet) | **GET** /v1/players | Authenticate player
*MetaFabApi.PlayersApi* | [**v1PlayersPlayerIdPatch**](docs/PlayersApi.md#v1PlayersPlayerIdPatch) | **PATCH** /v1/players/{playerId} | Update player
*MetaFabApi.PlayersApi* | [**v1PlayersPost**](docs/PlayersApi.md#v1PlayersPost) | **POST** /v1/players | Create player
*MetaFabApi.TransactionsApi* | [**v1TransactionsTransactionIdGet**](docs/TransactionsApi.md#v1TransactionsTransactionIdGet) | **GET** /v1/transactions/{transactionId} | Get transaction
*MetaFabApi.WalletsApi* | [**v1WalletsWalletIdBalancesGet**](docs/WalletsApi.md#v1WalletsWalletIdBalancesGet) | **GET** /v1/wallets/{walletId}/balances | Get wallet balances
*MetaFabApi.WalletsApi* | [**v1WalletsWalletIdTransactionsGet**](docs/WalletsApi.md#v1WalletsWalletIdTransactionsGet) | **GET** /v1/wallets/{walletId}/transactions | Get wallet transactions


## Documentation for Models

 - [MetaFabApi.ContractModel](docs/ContractModel.md)
 - [MetaFabApi.CurrencyModel](docs/CurrencyModel.md)
 - [MetaFabApi.GameModel](docs/GameModel.md)
 - [MetaFabApi.PlayerModel](docs/PlayerModel.md)
 - [MetaFabApi.TransactionModel](docs/TransactionModel.md)
 - [MetaFabApi.V1ContractsContractIdWritesPostRequest](docs/V1ContractsContractIdWritesPostRequest.md)
 - [MetaFabApi.V1ContractsGetRequest](docs/V1ContractsGetRequest.md)
 - [MetaFabApi.V1CurrenciesCurrencyIdBatchTransfersPostRequest](docs/V1CurrenciesCurrencyIdBatchTransfersPostRequest.md)
 - [MetaFabApi.V1CurrenciesCurrencyIdBurnsPostRequest](docs/V1CurrenciesCurrencyIdBurnsPostRequest.md)
 - [MetaFabApi.V1CurrenciesCurrencyIdFeesGet200Response](docs/V1CurrenciesCurrencyIdFeesGet200Response.md)
 - [MetaFabApi.V1CurrenciesCurrencyIdFeesGetRequest](docs/V1CurrenciesCurrencyIdFeesGetRequest.md)
 - [MetaFabApi.V1CurrenciesCurrencyIdMintsPostRequest](docs/V1CurrenciesCurrencyIdMintsPostRequest.md)
 - [MetaFabApi.V1CurrenciesCurrencyIdTransfersPostRequest](docs/V1CurrenciesCurrencyIdTransfersPostRequest.md)
 - [MetaFabApi.V1CurrenciesGet200Response](docs/V1CurrenciesGet200Response.md)
 - [MetaFabApi.V1CurrenciesGet200ResponseAllOf](docs/V1CurrenciesGet200ResponseAllOf.md)
 - [MetaFabApi.V1CurrenciesGet200ResponseAllOfContract](docs/V1CurrenciesGet200ResponseAllOfContract.md)
 - [MetaFabApi.V1CurrenciesGet200ResponseAllOfContractAllOf](docs/V1CurrenciesGet200ResponseAllOfContractAllOf.md)
 - [MetaFabApi.V1CurrenciesGet200ResponseInner](docs/V1CurrenciesGet200ResponseInner.md)
 - [MetaFabApi.V1CurrenciesGet200ResponseInnerAllOf](docs/V1CurrenciesGet200ResponseInnerAllOf.md)
 - [MetaFabApi.V1CurrenciesGetRequest](docs/V1CurrenciesGetRequest.md)
 - [MetaFabApi.V1GamesGameIdPatchRequest](docs/V1GamesGameIdPatchRequest.md)
 - [MetaFabApi.V1GamesGet200Response](docs/V1GamesGet200Response.md)
 - [MetaFabApi.V1GamesGet200ResponseAllOf](docs/V1GamesGet200ResponseAllOf.md)
 - [MetaFabApi.V1GamesGet200ResponseAllOf1](docs/V1GamesGet200ResponseAllOf1.md)
 - [MetaFabApi.V1GamesGetRequest](docs/V1GamesGetRequest.md)
 - [MetaFabApi.V1PlayersGet200Response](docs/V1PlayersGet200Response.md)
 - [MetaFabApi.V1PlayersGetRequest](docs/V1PlayersGetRequest.md)
 - [MetaFabApi.V1PlayersPlayerIdPatchRequest](docs/V1PlayersPlayerIdPatchRequest.md)
 - [MetaFabApi.WalletModel](docs/WalletModel.md)


## Documentation for Authorization



### basicAuth

- **Type**: HTTP basic authentication

