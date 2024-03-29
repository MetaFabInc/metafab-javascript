# metafab-javascript

MetafabJavascript - JavaScript client for metafab-javascript
Complete MetaFab API references and guides can be found at: https://trymetafab.com
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.5.1
- Package version: 1.5.1
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen
For more information, please visit [https://trymetafab.com](https://trymetafab.com)

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install metafab-javascript --save
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

To use the link you just defined in your project, switch to the directory you want to use your metafab-javascript from, and run:

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
var MetafabJavascript = require('metafab-javascript');


var api = new MetafabJavascript.ContractsApi()
var xAuthorization = game_sk_02z4Mv3c85Ig0gNowY9Dq0N2kjb1xwzr27ArLE0669RrRI6dLf822iPO26K1p1FP; // {String} The `secretKey` of the authenticating game.
var createContractRequest = new MetafabJavascript.CreateContractRequest(); // {CreateContractRequest} 
api.createContract(xAuthorization, createContractRequest).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

## Documentation for API Endpoints

All URIs are relative to *https://api.trymetafab.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*MetafabJavascript.ContractsApi* | [**createContract**](docs/ContractsApi.md#createContract) | **POST** /v1/contracts | Create custom contract
*MetafabJavascript.ContractsApi* | [**getContracts**](docs/ContractsApi.md#getContracts) | **GET** /v1/contracts | Get contracts
*MetafabJavascript.ContractsApi* | [**readContract**](docs/ContractsApi.md#readContract) | **GET** /v1/contracts/{contractId}/reads | Read contract data
*MetafabJavascript.ContractsApi* | [**transferContractOwnership**](docs/ContractsApi.md#transferContractOwnership) | **POST** /v1/contracts/{contractId}/owners | Transfer contract ownership
*MetafabJavascript.ContractsApi* | [**upgradeContractTrustedForwarder**](docs/ContractsApi.md#upgradeContractTrustedForwarder) | **POST** /v1/contracts/{contractId}/forwarders | Upgrade contract trusted forwarder
*MetafabJavascript.ContractsApi* | [**writeContract**](docs/ContractsApi.md#writeContract) | **POST** /v1/contracts/{contractId}/writes | Write contract data
*MetafabJavascript.CurrenciesApi* | [**batchTransferCurrency**](docs/CurrenciesApi.md#batchTransferCurrency) | **POST** /v1/currencies/{currencyId}/batchTransfers | Batch transfer currency
*MetafabJavascript.CurrenciesApi* | [**burnCurrency**](docs/CurrenciesApi.md#burnCurrency) | **POST** /v1/currencies/{currencyId}/burns | Burn currency
*MetafabJavascript.CurrenciesApi* | [**createCurrency**](docs/CurrenciesApi.md#createCurrency) | **POST** /v1/currencies | Create currency
*MetafabJavascript.CurrenciesApi* | [**getCurrencies**](docs/CurrenciesApi.md#getCurrencies) | **GET** /v1/currencies | Get currencies
*MetafabJavascript.CurrenciesApi* | [**getCurrencyBalance**](docs/CurrenciesApi.md#getCurrencyBalance) | **GET** /v1/currencies/{currencyId}/balances | Get currency balance
*MetafabJavascript.CurrenciesApi* | [**getCurrencyFees**](docs/CurrenciesApi.md#getCurrencyFees) | **GET** /v1/currencies/{currencyId}/fees | Get currency fees
*MetafabJavascript.CurrenciesApi* | [**getCurrencyRole**](docs/CurrenciesApi.md#getCurrencyRole) | **GET** /v1/currencies/{currencyId}/roles | Get currency role
*MetafabJavascript.CurrenciesApi* | [**grantCurrencyRole**](docs/CurrenciesApi.md#grantCurrencyRole) | **POST** /v1/currencies/{currencyId}/roles | Grant currency role
*MetafabJavascript.CurrenciesApi* | [**mintCurrency**](docs/CurrenciesApi.md#mintCurrency) | **POST** /v1/currencies/{currencyId}/mints | Mint currency
*MetafabJavascript.CurrenciesApi* | [**revokeCurrencyRole**](docs/CurrenciesApi.md#revokeCurrencyRole) | **DELETE** /v1/currencies/{currencyId}/roles | Revoke currency role
*MetafabJavascript.CurrenciesApi* | [**setCurrencyFees**](docs/CurrenciesApi.md#setCurrencyFees) | **POST** /v1/currencies/{currencyId}/fees | Set currency fees
*MetafabJavascript.CurrenciesApi* | [**transferCurrency**](docs/CurrenciesApi.md#transferCurrency) | **POST** /v1/currencies/{currencyId}/transfers | Transfer currency
*MetafabJavascript.EcosystemsApi* | [**approveEcosystemGame**](docs/EcosystemsApi.md#approveEcosystemGame) | **POST** /v1/ecosystems/{ecosystemId}/games | Approve ecosystem game
*MetafabJavascript.EcosystemsApi* | [**authEcosystem**](docs/EcosystemsApi.md#authEcosystem) | **GET** /v1/ecosystems/auth | Authenticate ecosystem
*MetafabJavascript.EcosystemsApi* | [**authProfile**](docs/EcosystemsApi.md#authProfile) | **GET** /v1/profiles/auth | Authenticate profile
*MetafabJavascript.EcosystemsApi* | [**authProfilePlayer**](docs/EcosystemsApi.md#authProfilePlayer) | **GET** /v1/profiles/{profileId}/games/{gameId}/players/auth | Authenticate profile player
*MetafabJavascript.EcosystemsApi* | [**createEcosystem**](docs/EcosystemsApi.md#createEcosystem) | **POST** /v1/ecosystems | Create ecosystem
*MetafabJavascript.EcosystemsApi* | [**createProfile**](docs/EcosystemsApi.md#createProfile) | **POST** /v1/profiles | Create profile
*MetafabJavascript.EcosystemsApi* | [**createProfilePlayer**](docs/EcosystemsApi.md#createProfilePlayer) | **POST** /v1/profiles/{profileId}/games/{gameId}/players | Create profile player
*MetafabJavascript.EcosystemsApi* | [**getEcosystem**](docs/EcosystemsApi.md#getEcosystem) | **GET** /v1/ecosystems/{ecosystemId} | Get ecosystem
*MetafabJavascript.EcosystemsApi* | [**getEcosystemGame**](docs/EcosystemsApi.md#getEcosystemGame) | **GET** /v1/ecosystems/{ecosystemId}/games/{gameId} | Get ecosystem game
*MetafabJavascript.EcosystemsApi* | [**getEcosystemGames**](docs/EcosystemsApi.md#getEcosystemGames) | **GET** /v1/ecosystems/{ecosystemId}/games | Get ecosystem games
*MetafabJavascript.EcosystemsApi* | [**getProfileGame**](docs/EcosystemsApi.md#getProfileGame) | **GET** /v1/profiles/{profileId}/games/{gameId} | Get profile game
*MetafabJavascript.EcosystemsApi* | [**getProfileGames**](docs/EcosystemsApi.md#getProfileGames) | **GET** /v1/profiles/{profileId}/games | Get profile games
*MetafabJavascript.EcosystemsApi* | [**unapproveEcosystemGame**](docs/EcosystemsApi.md#unapproveEcosystemGame) | **DELETE** /v1/ecosystems/{ecosystemId}/games/{gameId} | Unapprove ecosystem game
*MetafabJavascript.EcosystemsApi* | [**updateEcosystem**](docs/EcosystemsApi.md#updateEcosystem) | **PATCH** /v1/ecosystems/{ecosystemId} | Update ecosystem
*MetafabJavascript.EcosystemsApi* | [**updateProfile**](docs/EcosystemsApi.md#updateProfile) | **PATCH** /v1/profiles/{profileId} | Update profile
*MetafabJavascript.EcosystemsApi* | [**updateProfilePlayer**](docs/EcosystemsApi.md#updateProfilePlayer) | **PATCH** /v1/profiles/{profileId}/games/{gameId}/players/{playerId} | Update profile player
*MetafabJavascript.GamesApi* | [**authGame**](docs/GamesApi.md#authGame) | **GET** /v1/games/auth | Authenticate game
*MetafabJavascript.GamesApi* | [**createGame**](docs/GamesApi.md#createGame) | **POST** /v1/games | Create game
*MetafabJavascript.GamesApi* | [**getGame**](docs/GamesApi.md#getGame) | **GET** /v1/games/{gameId} | Get game
*MetafabJavascript.GamesApi* | [**updateGame**](docs/GamesApi.md#updateGame) | **PATCH** /v1/games/{gameId} | Update game
*MetafabJavascript.ItemsApi* | [**batchMintCollectionItems**](docs/ItemsApi.md#batchMintCollectionItems) | **POST** /v1/collections/{collectionId}/batchMints | Batch mint collection items
*MetafabJavascript.ItemsApi* | [**batchTransferCollectionItems**](docs/ItemsApi.md#batchTransferCollectionItems) | **POST** /v1/collections/{collectionId}/batchTransfers | Batch transfer collection items
*MetafabJavascript.ItemsApi* | [**burnCollectionItem**](docs/ItemsApi.md#burnCollectionItem) | **POST** /v1/collections/{collectionId}/items/{collectionItemId}/burns | Burn collection item
*MetafabJavascript.ItemsApi* | [**createCollection**](docs/ItemsApi.md#createCollection) | **POST** /v1/collections | Create collection
*MetafabJavascript.ItemsApi* | [**createCollectionItem**](docs/ItemsApi.md#createCollectionItem) | **POST** /v1/collections/{collectionId}/items | Create collection item
*MetafabJavascript.ItemsApi* | [**getCollectionApproval**](docs/ItemsApi.md#getCollectionApproval) | **GET** /v1/collections/{collectionId}/approvals | Get collection approval
*MetafabJavascript.ItemsApi* | [**getCollectionItem**](docs/ItemsApi.md#getCollectionItem) | **GET** /v1/collections/{collectionId}/items/{collectionItemId} | Get collection item
*MetafabJavascript.ItemsApi* | [**getCollectionItemBalance**](docs/ItemsApi.md#getCollectionItemBalance) | **GET** /v1/collections/{collectionId}/items/{collectionItemId}/balances | Get collection item balance
*MetafabJavascript.ItemsApi* | [**getCollectionItemBalances**](docs/ItemsApi.md#getCollectionItemBalances) | **GET** /v1/collections/{collectionId}/balances | Get collection item balances
*MetafabJavascript.ItemsApi* | [**getCollectionItemSupplies**](docs/ItemsApi.md#getCollectionItemSupplies) | **GET** /v1/collections/{collectionId}/supplies | Get collection item supplies
*MetafabJavascript.ItemsApi* | [**getCollectionItemSupply**](docs/ItemsApi.md#getCollectionItemSupply) | **GET** /v1/collections/{collectionId}/items/{collectionItemId}/supplies | Get collection item supply
*MetafabJavascript.ItemsApi* | [**getCollectionItemTimelock**](docs/ItemsApi.md#getCollectionItemTimelock) | **GET** /v1/collections/{collectionId}/items/{collectionItemId}/timelocks | Get collection item timelock
*MetafabJavascript.ItemsApi* | [**getCollectionItems**](docs/ItemsApi.md#getCollectionItems) | **GET** /v1/collections/{collectionId}/items | Get collection items
*MetafabJavascript.ItemsApi* | [**getCollectionRole**](docs/ItemsApi.md#getCollectionRole) | **GET** /v1/collections/{collectionId}/roles | Get collection role
*MetafabJavascript.ItemsApi* | [**getCollections**](docs/ItemsApi.md#getCollections) | **GET** /v1/collections | Get collections
*MetafabJavascript.ItemsApi* | [**grantCollectionRole**](docs/ItemsApi.md#grantCollectionRole) | **POST** /v1/collections/{collectionId}/roles | Grant collection role
*MetafabJavascript.ItemsApi* | [**mintCollectionItem**](docs/ItemsApi.md#mintCollectionItem) | **POST** /v1/collections/{collectionId}/items/{collectionItemId}/mints | Mint collection item
*MetafabJavascript.ItemsApi* | [**revokeCollectionRole**](docs/ItemsApi.md#revokeCollectionRole) | **DELETE** /v1/collections/{collectionId}/roles | Revoke collection role
*MetafabJavascript.ItemsApi* | [**setCollectionApproval**](docs/ItemsApi.md#setCollectionApproval) | **POST** /v1/collections/{collectionId}/approvals | Set collection approval
*MetafabJavascript.ItemsApi* | [**setCollectionItemTimelock**](docs/ItemsApi.md#setCollectionItemTimelock) | **POST** /v1/collections/{collectionId}/items/{collectionItemId}/timelocks | Set collection item timelock
*MetafabJavascript.ItemsApi* | [**transferCollectionItem**](docs/ItemsApi.md#transferCollectionItem) | **POST** /v1/collections/{collectionId}/items/{collectionItemId}/transfers | Transfer collection item
*MetafabJavascript.LootboxesApi* | [**createLootboxManager**](docs/LootboxesApi.md#createLootboxManager) | **POST** /v1/lootboxManagers | Create lootbox manager
*MetafabJavascript.LootboxesApi* | [**getLootboxManagerLootbox**](docs/LootboxesApi.md#getLootboxManagerLootbox) | **GET** /v1/lootboxManagers/{lootboxManagerId}/lootboxes/{lootboxManagerLootboxId} | Get lootbox manager lootbox
*MetafabJavascript.LootboxesApi* | [**getLootboxManagerLootboxes**](docs/LootboxesApi.md#getLootboxManagerLootboxes) | **GET** /v1/lootboxManagers/{lootboxManagerId}/lootboxes | Get lootbox manager lootboxes
*MetafabJavascript.LootboxesApi* | [**getLootboxManagers**](docs/LootboxesApi.md#getLootboxManagers) | **GET** /v1/lootboxManagers | Get lootbox managers
*MetafabJavascript.LootboxesApi* | [**openLootboxManagerLootbox**](docs/LootboxesApi.md#openLootboxManagerLootbox) | **POST** /v1/lootboxManagers/{lootboxManagerId}/lootboxes/{lootboxManagerLootboxId}/opens | Open lootbox manager lootbox
*MetafabJavascript.LootboxesApi* | [**removeLootboxManagerLootbox**](docs/LootboxesApi.md#removeLootboxManagerLootbox) | **DELETE** /v1/lootboxManagers/{lootboxManagerId}/lootboxes/{lootboxManagerLootboxId} | Remove lootbox manager lootbox
*MetafabJavascript.LootboxesApi* | [**setLootboxManagerLootbox**](docs/LootboxesApi.md#setLootboxManagerLootbox) | **POST** /v1/lootboxManagers/{lootboxManagerId}/lootboxes | Set lootbox manager lootbox
*MetafabJavascript.PlayersApi* | [**authPlayer**](docs/PlayersApi.md#authPlayer) | **GET** /v1/players/auth | Authenticate player
*MetafabJavascript.PlayersApi* | [**createPlayer**](docs/PlayersApi.md#createPlayer) | **POST** /v1/players | Create player
*MetafabJavascript.PlayersApi* | [**getPlayer**](docs/PlayersApi.md#getPlayer) | **GET** /v1/players/{playerId} | Get player
*MetafabJavascript.PlayersApi* | [**getPlayerData**](docs/PlayersApi.md#getPlayerData) | **GET** /v1/players/{playerId}/data | Get player data
*MetafabJavascript.PlayersApi* | [**getPlayers**](docs/PlayersApi.md#getPlayers) | **GET** /v1/players | Get players
*MetafabJavascript.PlayersApi* | [**removePlayerConnectedWallet**](docs/PlayersApi.md#removePlayerConnectedWallet) | **DELETE** /v1/players/{playerId}/wallets/{playerWalletId} | Remove player connected wallet
*MetafabJavascript.PlayersApi* | [**setPlayerConnectedWallet**](docs/PlayersApi.md#setPlayerConnectedWallet) | **POST** /v1/players/{playerId}/wallets | Set player connected wallet
*MetafabJavascript.PlayersApi* | [**setPlayerData**](docs/PlayersApi.md#setPlayerData) | **POST** /v1/players/{playerId}/data | Set player data
*MetafabJavascript.PlayersApi* | [**updatePlayer**](docs/PlayersApi.md#updatePlayer) | **PATCH** /v1/players/{playerId} | Update player
*MetafabJavascript.ShopsApi* | [**createShop**](docs/ShopsApi.md#createShop) | **POST** /v1/shops | Create shop
*MetafabJavascript.ShopsApi* | [**getShopOffer**](docs/ShopsApi.md#getShopOffer) | **GET** /v1/shops/{shopId}/offers/{shopOfferId} | Get shop offer
*MetafabJavascript.ShopsApi* | [**getShopOffers**](docs/ShopsApi.md#getShopOffers) | **GET** /v1/shops/{shopId}/offers | Get shop offers
*MetafabJavascript.ShopsApi* | [**getShops**](docs/ShopsApi.md#getShops) | **GET** /v1/shops | Get shops
*MetafabJavascript.ShopsApi* | [**removeShopOffer**](docs/ShopsApi.md#removeShopOffer) | **DELETE** /v1/shops/{shopId}/offers/{shopOfferId} | Remove shop offer
*MetafabJavascript.ShopsApi* | [**setShopOffer**](docs/ShopsApi.md#setShopOffer) | **POST** /v1/shops/{shopId}/offers | Set shop offer
*MetafabJavascript.ShopsApi* | [**useShopOffer**](docs/ShopsApi.md#useShopOffer) | **POST** /v1/shops/{shopId}/offers/{shopOfferId}/uses | Use shop offer
*MetafabJavascript.ShopsApi* | [**withdrawFromShop**](docs/ShopsApi.md#withdrawFromShop) | **POST** /v1/shops/{shopId}/withdrawals | Withdraw from shop
*MetafabJavascript.TransactionsApi* | [**getTransaction**](docs/TransactionsApi.md#getTransaction) | **GET** /v1/transactions/{transactionId} | Get transaction
*MetafabJavascript.WalletsApi* | [**createWalletSignature**](docs/WalletsApi.md#createWalletSignature) | **POST** /v1/wallets/{walletId}/signatures | Create wallet signature
*MetafabJavascript.WalletsApi* | [**getWallet**](docs/WalletsApi.md#getWallet) | **GET** /v1/wallets/{walletId} | Get wallet
*MetafabJavascript.WalletsApi* | [**getWalletBalances**](docs/WalletsApi.md#getWalletBalances) | **GET** /v1/wallets/{walletId}/balances | Get wallet balances
*MetafabJavascript.WalletsApi* | [**getWalletTransactions**](docs/WalletsApi.md#getWalletTransactions) | **GET** /v1/wallets/{walletId}/transactions | Get wallet transactions


## Documentation for Models

 - [MetafabJavascript.ApproveEcosystemGameRequest](docs/ApproveEcosystemGameRequest.md)
 - [MetafabJavascript.AuthGame200Response](docs/AuthGame200Response.md)
 - [MetafabJavascript.AuthGame200ResponseAllOf](docs/AuthGame200ResponseAllOf.md)
 - [MetafabJavascript.AuthPlayer200Response](docs/AuthPlayer200Response.md)
 - [MetafabJavascript.AuthPlayer200ResponseAllOf](docs/AuthPlayer200ResponseAllOf.md)
 - [MetafabJavascript.AuthProfile200Response](docs/AuthProfile200Response.md)
 - [MetafabJavascript.BatchMintCollectionItemsRequest](docs/BatchMintCollectionItemsRequest.md)
 - [MetafabJavascript.BatchTransferCollectionItemsRequest](docs/BatchTransferCollectionItemsRequest.md)
 - [MetafabJavascript.BatchTransferCurrencyRequest](docs/BatchTransferCurrencyRequest.md)
 - [MetafabJavascript.BurnCollectionItemRequest](docs/BurnCollectionItemRequest.md)
 - [MetafabJavascript.BurnCurrencyRequest](docs/BurnCurrencyRequest.md)
 - [MetafabJavascript.CollectionItem](docs/CollectionItem.md)
 - [MetafabJavascript.CollectionItemAttributesInner](docs/CollectionItemAttributesInner.md)
 - [MetafabJavascript.CollectionItemAttributesInnerValue](docs/CollectionItemAttributesInnerValue.md)
 - [MetafabJavascript.CollectionModel](docs/CollectionModel.md)
 - [MetafabJavascript.ContractModel](docs/ContractModel.md)
 - [MetafabJavascript.CreateCollection200Response](docs/CreateCollection200Response.md)
 - [MetafabJavascript.CreateCollection200ResponseAllOf](docs/CreateCollection200ResponseAllOf.md)
 - [MetafabJavascript.CreateCollection200ResponseAllOfContract](docs/CreateCollection200ResponseAllOfContract.md)
 - [MetafabJavascript.CreateCollection200ResponseAllOfContractAllOf](docs/CreateCollection200ResponseAllOfContractAllOf.md)
 - [MetafabJavascript.CreateCollectionItemRequest](docs/CreateCollectionItemRequest.md)
 - [MetafabJavascript.CreateCollectionItemRequestAttributesInner](docs/CreateCollectionItemRequestAttributesInner.md)
 - [MetafabJavascript.CreateCollectionRequest](docs/CreateCollectionRequest.md)
 - [MetafabJavascript.CreateContractRequest](docs/CreateContractRequest.md)
 - [MetafabJavascript.CreateCurrency200Response](docs/CreateCurrency200Response.md)
 - [MetafabJavascript.CreateCurrencyRequest](docs/CreateCurrencyRequest.md)
 - [MetafabJavascript.CreateEcosystemRequest](docs/CreateEcosystemRequest.md)
 - [MetafabJavascript.CreateGameRequest](docs/CreateGameRequest.md)
 - [MetafabJavascript.CreateLootboxManager200Response](docs/CreateLootboxManager200Response.md)
 - [MetafabJavascript.CreateLootboxManagerRequest](docs/CreateLootboxManagerRequest.md)
 - [MetafabJavascript.CreatePlayerRequest](docs/CreatePlayerRequest.md)
 - [MetafabJavascript.CreateProfilePlayerRequest](docs/CreateProfilePlayerRequest.md)
 - [MetafabJavascript.CreateProfileRequest](docs/CreateProfileRequest.md)
 - [MetafabJavascript.CreateShop200Response](docs/CreateShop200Response.md)
 - [MetafabJavascript.CreateShopRequest](docs/CreateShopRequest.md)
 - [MetafabJavascript.CreateWalletSignatureRequest](docs/CreateWalletSignatureRequest.md)
 - [MetafabJavascript.CurrencyModel](docs/CurrencyModel.md)
 - [MetafabJavascript.EcosystemGameModel](docs/EcosystemGameModel.md)
 - [MetafabJavascript.EcosystemModel](docs/EcosystemModel.md)
 - [MetafabJavascript.GameModel](docs/GameModel.md)
 - [MetafabJavascript.GetCollections200ResponseInner](docs/GetCollections200ResponseInner.md)
 - [MetafabJavascript.GetCollections200ResponseInnerAllOf](docs/GetCollections200ResponseInnerAllOf.md)
 - [MetafabJavascript.GetCurrencies200ResponseInner](docs/GetCurrencies200ResponseInner.md)
 - [MetafabJavascript.GetCurrencyFees200Response](docs/GetCurrencyFees200Response.md)
 - [MetafabJavascript.GetLootboxManagers200ResponseInner](docs/GetLootboxManagers200ResponseInner.md)
 - [MetafabJavascript.GetPlayerData200Response](docs/GetPlayerData200Response.md)
 - [MetafabJavascript.GetProfileGames200ResponseInner](docs/GetProfileGames200ResponseInner.md)
 - [MetafabJavascript.GetShops200ResponseInner](docs/GetShops200ResponseInner.md)
 - [MetafabJavascript.GrantCollectionRoleRequest](docs/GrantCollectionRoleRequest.md)
 - [MetafabJavascript.GrantCurrencyRoleRequest](docs/GrantCurrencyRoleRequest.md)
 - [MetafabJavascript.LootboxManagerLootbox](docs/LootboxManagerLootbox.md)
 - [MetafabJavascript.LootboxManagerModel](docs/LootboxManagerModel.md)
 - [MetafabJavascript.MintCollectionItemRequest](docs/MintCollectionItemRequest.md)
 - [MetafabJavascript.MintCurrencyRequest](docs/MintCurrencyRequest.md)
 - [MetafabJavascript.PlayerModel](docs/PlayerModel.md)
 - [MetafabJavascript.ProfileModel](docs/ProfileModel.md)
 - [MetafabJavascript.ProfilePermissionsValue](docs/ProfilePermissionsValue.md)
 - [MetafabJavascript.PublicEcosystem](docs/PublicEcosystem.md)
 - [MetafabJavascript.PublicGame](docs/PublicGame.md)
 - [MetafabJavascript.PublicPlayer](docs/PublicPlayer.md)
 - [MetafabJavascript.PublicPlayerCustodialWallet](docs/PublicPlayerCustodialWallet.md)
 - [MetafabJavascript.PublicProfile](docs/PublicProfile.md)
 - [MetafabJavascript.RemovePlayerConnectedWalletRequest](docs/RemovePlayerConnectedWalletRequest.md)
 - [MetafabJavascript.RevokeCollectionRoleRequest](docs/RevokeCollectionRoleRequest.md)
 - [MetafabJavascript.SetCollectionApprovalRequest](docs/SetCollectionApprovalRequest.md)
 - [MetafabJavascript.SetCollectionItemTimelockRequest](docs/SetCollectionItemTimelockRequest.md)
 - [MetafabJavascript.SetCurrencyFeesRequest](docs/SetCurrencyFeesRequest.md)
 - [MetafabJavascript.SetLootboxManagerLootboxRequest](docs/SetLootboxManagerLootboxRequest.md)
 - [MetafabJavascript.SetPlayerConnectedWallet200Response](docs/SetPlayerConnectedWallet200Response.md)
 - [MetafabJavascript.SetPlayerConnectedWalletRequest](docs/SetPlayerConnectedWalletRequest.md)
 - [MetafabJavascript.SetPlayerDataRequest](docs/SetPlayerDataRequest.md)
 - [MetafabJavascript.SetShopOfferRequest](docs/SetShopOfferRequest.md)
 - [MetafabJavascript.ShopModel](docs/ShopModel.md)
 - [MetafabJavascript.ShopOffer](docs/ShopOffer.md)
 - [MetafabJavascript.TransactionModel](docs/TransactionModel.md)
 - [MetafabJavascript.TransferCollectionItemRequest](docs/TransferCollectionItemRequest.md)
 - [MetafabJavascript.TransferContractOwnershipRequest](docs/TransferContractOwnershipRequest.md)
 - [MetafabJavascript.TransferCurrencyRequest](docs/TransferCurrencyRequest.md)
 - [MetafabJavascript.UpdateEcosystemRequest](docs/UpdateEcosystemRequest.md)
 - [MetafabJavascript.UpdateGame200Response](docs/UpdateGame200Response.md)
 - [MetafabJavascript.UpdateGame200ResponseAllOf](docs/UpdateGame200ResponseAllOf.md)
 - [MetafabJavascript.UpdateGameRequest](docs/UpdateGameRequest.md)
 - [MetafabJavascript.UpdatePlayer200Response](docs/UpdatePlayer200Response.md)
 - [MetafabJavascript.UpdatePlayerRequest](docs/UpdatePlayerRequest.md)
 - [MetafabJavascript.UpdateProfilePlayer200Response](docs/UpdateProfilePlayer200Response.md)
 - [MetafabJavascript.UpdateProfilePlayer200ResponseAllOf](docs/UpdateProfilePlayer200ResponseAllOf.md)
 - [MetafabJavascript.UpdateProfilePlayerRequest](docs/UpdateProfilePlayerRequest.md)
 - [MetafabJavascript.UpdateProfileRequest](docs/UpdateProfileRequest.md)
 - [MetafabJavascript.UpgradeContractTrustedForwarderRequest](docs/UpgradeContractTrustedForwarderRequest.md)
 - [MetafabJavascript.WalletModel](docs/WalletModel.md)
 - [MetafabJavascript.WithdrawFromShopRequest](docs/WithdrawFromShopRequest.md)
 - [MetafabJavascript.WriteContractRequest](docs/WriteContractRequest.md)
 - [MetafabJavascript.WriteContractRequestArgsInner](docs/WriteContractRequestArgsInner.md)


## Documentation for Authorization



### basicAuth

- **Type**: HTTP basic authentication

