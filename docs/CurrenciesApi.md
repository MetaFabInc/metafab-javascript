# MetafabJavascript.CurrenciesApi

All URIs are relative to *https://api.trymetafab.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**batchTransferCurrency**](CurrenciesApi.md#batchTransferCurrency) | **POST** /v1/currencies/{currencyId}/batchTransfers | Batch transfer currency
[**burnCurrency**](CurrenciesApi.md#burnCurrency) | **POST** /v1/currencies/{currencyId}/burns | Burn currency
[**createCurrency**](CurrenciesApi.md#createCurrency) | **POST** /v1/currencies | Create currency
[**getCurrencies**](CurrenciesApi.md#getCurrencies) | **GET** /v1/currencies | Get currencies
[**getCurrencyBalance**](CurrenciesApi.md#getCurrencyBalance) | **GET** /v1/currencies/{currencyId}/balances | Get currency balance
[**getCurrencyFees**](CurrenciesApi.md#getCurrencyFees) | **GET** /v1/currencies/{currencyId}/fees | Get currency fees
[**getCurrencyRole**](CurrenciesApi.md#getCurrencyRole) | **GET** /v1/currencies/{currencyId}/roles | Get currency role
[**grantCurrencyRole**](CurrenciesApi.md#grantCurrencyRole) | **POST** /v1/currencies/{currencyId}/roles | Grant currency role
[**mintCurrency**](CurrenciesApi.md#mintCurrency) | **POST** /v1/currencies/{currencyId}/mints | Mint currency
[**revokeCurrencyRole**](CurrenciesApi.md#revokeCurrencyRole) | **DELETE** /v1/currencies/{currencyId}/roles | Revoke currency role
[**setCurrencyFees**](CurrenciesApi.md#setCurrencyFees) | **POST** /v1/currencies/{currencyId}/fees | Set currency fees
[**transferCurrency**](CurrenciesApi.md#transferCurrency) | **POST** /v1/currencies/{currencyId}/transfers | Transfer currency



## batchTransferCurrency

> TransactionModel batchTransferCurrency(currencyId, xAuthorization, xWalletDecryptKey, batchTransferCurrencyRequest)

Batch transfer currency

Transfers multiple amounts of currency to multiple provided wallet addresses or wallet addresses associated with the provided walletIds. You may also provide a combination of addresses and walletIds in one request, the proper receipients will be automatically determined, with &#x60;addresses&#x60; getting &#x60;amounts&#x60; order priority first.  Optional references may be included for the transfer. References are useful for identifying transfers intended to pay for items, trades, services and more.

### Example

```javascript
import MetafabJavascript from 'metafab-javascript';

let apiInstance = new MetafabJavascript.CurrenciesApi();
let currencyId = "currencyId_example"; // String | Any currency id within the MetaFab platform.
let xAuthorization = ["game_sk_02z4Mv3c85Ig0gNowY9Dq0N2kjb1xwzr27ArLE0669RrRI6dLf822iPO26K1p1FP","player_at_02z4Mv3c85Ig0gNowY9Dq0N2kjb1xwzr27ArLE0669RrRI6dLf822iPO26K1p1FP"]; // String | The `secretKey` of a specific game or the `accessToken` of a specific player.
let xWalletDecryptKey = AXNP8MKb+5SbBtHWrZu5KHh5/BomXY/dMRG/BDUn7a4=; // String | The `walletDecryptKey` of the authenticating game or player. Required to decrypt and perform blockchain transactions with the game or player primary wallet.
let batchTransferCurrencyRequest = new MetafabJavascript.BatchTransferCurrencyRequest(); // BatchTransferCurrencyRequest | 
apiInstance.batchTransferCurrency(currencyId, xAuthorization, xWalletDecryptKey, batchTransferCurrencyRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyId** | **String**| Any currency id within the MetaFab platform. | 
 **xAuthorization** | **String**| The &#x60;secretKey&#x60; of a specific game or the &#x60;accessToken&#x60; of a specific player. | 
 **xWalletDecryptKey** | **String**| The &#x60;walletDecryptKey&#x60; of the authenticating game or player. Required to decrypt and perform blockchain transactions with the game or player primary wallet. | 
 **batchTransferCurrencyRequest** | [**BatchTransferCurrencyRequest**](BatchTransferCurrencyRequest.md)|  | 

### Return type

[**TransactionModel**](TransactionModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## burnCurrency

> TransactionModel burnCurrency(currencyId, xAuthorization, xWalletDecryptKey, burnCurrencyRequest)

Burn currency

Removes (burns) the provided amount of currency from the authenticating game or players wallet. The currency amount is permanently removed from the circulating supply of the currency.

### Example

```javascript
import MetafabJavascript from 'metafab-javascript';

let apiInstance = new MetafabJavascript.CurrenciesApi();
let currencyId = "currencyId_example"; // String | Any currency id within the MetaFab platform.
let xAuthorization = ["game_sk_02z4Mv3c85Ig0gNowY9Dq0N2kjb1xwzr27ArLE0669RrRI6dLf822iPO26K1p1FP","player_at_02z4Mv3c85Ig0gNowY9Dq0N2kjb1xwzr27ArLE0669RrRI6dLf822iPO26K1p1FP"]; // String | The `secretKey` of a specific game or the `accessToken` of a specific player.
let xWalletDecryptKey = AXNP8MKb+5SbBtHWrZu5KHh5/BomXY/dMRG/BDUn7a4=; // String | The `walletDecryptKey` of the authenticating game or player. Required to decrypt and perform blockchain transactions with the game or player primary wallet.
let burnCurrencyRequest = new MetafabJavascript.BurnCurrencyRequest(); // BurnCurrencyRequest | 
apiInstance.burnCurrency(currencyId, xAuthorization, xWalletDecryptKey, burnCurrencyRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyId** | **String**| Any currency id within the MetaFab platform. | 
 **xAuthorization** | **String**| The &#x60;secretKey&#x60; of a specific game or the &#x60;accessToken&#x60; of a specific player. | 
 **xWalletDecryptKey** | **String**| The &#x60;walletDecryptKey&#x60; of the authenticating game or player. Required to decrypt and perform blockchain transactions with the game or player primary wallet. | 
 **burnCurrencyRequest** | [**BurnCurrencyRequest**](BurnCurrencyRequest.md)|  | 

### Return type

[**TransactionModel**](TransactionModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createCurrency

> CreateCurrency200Response createCurrency(xAuthorization, xWalletDecryptKey, createCurrencyRequest)

Create currency

Creates a new game currency and deploys an ERC20 token contract on behalf of the authenticating game&#39;s primary wallet. The deployed ERC20 contract is preconfigured to fully support bridging across blockchains, batched transfers and gasless transactions on any supported blockchain as well as full support for gasless transactions from player managed wallets.

### Example

```javascript
import MetafabJavascript from 'metafab-javascript';

let apiInstance = new MetafabJavascript.CurrenciesApi();
let xAuthorization = game_sk_02z4Mv3c85Ig0gNowY9Dq0N2kjb1xwzr27ArLE0669RrRI6dLf822iPO26K1p1FP; // String | The `secretKey` of the authenticating game.
let xWalletDecryptKey = AXNP8MKb+5SbBtHWrZu5KHh5/BomXY/dMRG/BDUn7a4=; // String | The `walletDecryptKey` of the authenticating game. Required to decrypt and perform blockchain transactions with the game primary wallet.
let createCurrencyRequest = new MetafabJavascript.CreateCurrencyRequest(); // CreateCurrencyRequest | 
apiInstance.createCurrency(xAuthorization, xWalletDecryptKey, createCurrencyRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAuthorization** | **String**| The &#x60;secretKey&#x60; of the authenticating game. | 
 **xWalletDecryptKey** | **String**| The &#x60;walletDecryptKey&#x60; of the authenticating game. Required to decrypt and perform blockchain transactions with the game primary wallet. | 
 **createCurrencyRequest** | [**CreateCurrencyRequest**](CreateCurrencyRequest.md)|  | 

### Return type

[**CreateCurrency200Response**](CreateCurrency200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getCurrencies

> [GetCurrencies200ResponseInner] getCurrencies(xGameKey)

Get currencies

Returns an array of active currencies for the game associated with the provided &#x60;X-Game-Key&#x60;.

### Example

```javascript
import MetafabJavascript from 'metafab-javascript';

let apiInstance = new MetafabJavascript.CurrenciesApi();
let xGameKey = game_pk_4SOqpDi8pQdnQgfCOBW29qR8YmwOhxVPz5iHoMgUEJLDdPXgwLuHqZf8ewo2GajZ; // String | The `publishedKey` of a specific game. This can be shared or included in game clients, websites, etc.
apiInstance.getCurrencies(xGameKey).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xGameKey** | **String**| The &#x60;publishedKey&#x60; of a specific game. This can be shared or included in game clients, websites, etc. | 

### Return type

[**[GetCurrencies200ResponseInner]**](GetCurrencies200ResponseInner.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCurrencyBalance

> Number getCurrencyBalance(currencyId, opts)

Get currency balance

Returns the current currency balance of the provided wallet address or or the wallet address associated with the provided walletId.

### Example

```javascript
import MetafabJavascript from 'metafab-javascript';

let apiInstance = new MetafabJavascript.CurrenciesApi();
let currencyId = "currencyId_example"; // String | Any currency id within the MetaFab platform.
let opts = {
  'address': 0x39cb70F972E0EE920088AeF97Dbe5c6251a9c25D, // String | A valid EVM based address. For example, `0x39cb70F972E0EE920088AeF97Dbe5c6251a9c25D`.
  'walletId': "walletId_example" // String | Any wallet id within the MetaFab platform.
};
apiInstance.getCurrencyBalance(currencyId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyId** | **String**| Any currency id within the MetaFab platform. | 
 **address** | **String**| A valid EVM based address. For example, &#x60;0x39cb70F972E0EE920088AeF97Dbe5c6251a9c25D&#x60;. | [optional] 
 **walletId** | **String**| Any wallet id within the MetaFab platform. | [optional] 

### Return type

**Number**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCurrencyFees

> GetCurrencyFees200Response getCurrencyFees(currencyId)

Get currency fees

Returns the current fee recipient address and fees of the currency for the provided currencyId. Fees are only applicable for gasless transactions performed by default by players.

### Example

```javascript
import MetafabJavascript from 'metafab-javascript';

let apiInstance = new MetafabJavascript.CurrenciesApi();
let currencyId = "currencyId_example"; // String | Any currency id within the MetaFab platform.
apiInstance.getCurrencyFees(currencyId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyId** | **String**| Any currency id within the MetaFab platform. | 

### Return type

[**GetCurrencyFees200Response**](GetCurrencyFees200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCurrencyRole

> Boolean getCurrencyRole(currencyId, role, opts)

Get currency role

Returns a boolean (true/false) representing if the provided role for this currency has been granted to the provided address or address associated with the provided walletId.

### Example

```javascript
import MetafabJavascript from 'metafab-javascript';

let apiInstance = new MetafabJavascript.CurrenciesApi();
let currencyId = "currencyId_example"; // String | Any currency id within the MetaFab platform.
let role = minter; // String | A valid MetaFab role or bytes string representing a role, such as `0xc9eb32e43bf5ecbceacf00b32281dfc5d6d700a0db676ea26ccf938a385ac3b7`
let opts = {
  'address': 0x39cb70F972E0EE920088AeF97Dbe5c6251a9c25D, // String | A valid EVM based address. For example, `0x39cb70F972E0EE920088AeF97Dbe5c6251a9c25D`.
  'walletId': "walletId_example" // String | Any wallet id within the MetaFab platform.
};
apiInstance.getCurrencyRole(currencyId, role, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyId** | **String**| Any currency id within the MetaFab platform. | 
 **role** | **String**| A valid MetaFab role or bytes string representing a role, such as &#x60;0xc9eb32e43bf5ecbceacf00b32281dfc5d6d700a0db676ea26ccf938a385ac3b7&#x60; | 
 **address** | **String**| A valid EVM based address. For example, &#x60;0x39cb70F972E0EE920088AeF97Dbe5c6251a9c25D&#x60;. | [optional] 
 **walletId** | **String**| Any wallet id within the MetaFab platform. | [optional] 

### Return type

**Boolean**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## grantCurrencyRole

> TransactionModel grantCurrencyRole(currencyId, xAuthorization, xWalletDecryptKey, grantCurrencyRoleRequest)

Grant currency role

Grants the provided role for the currency to the provided address or address associated with the provided walletId. Granted roles give different types of authority on behalf of the currency for specific players, addresses, or contracts to perform different types of permissioned currency operations.

### Example

```javascript
import MetafabJavascript from 'metafab-javascript';

let apiInstance = new MetafabJavascript.CurrenciesApi();
let currencyId = "currencyId_example"; // String | Any currency id within the MetaFab platform.
let xAuthorization = ["game_sk_02z4Mv3c85Ig0gNowY9Dq0N2kjb1xwzr27ArLE0669RrRI6dLf822iPO26K1p1FP","player_at_02z4Mv3c85Ig0gNowY9Dq0N2kjb1xwzr27ArLE0669RrRI6dLf822iPO26K1p1FP"]; // String | The `secretKey` of a specific game or the `accessToken` of a specific player.
let xWalletDecryptKey = AXNP8MKb+5SbBtHWrZu5KHh5/BomXY/dMRG/BDUn7a4=; // String | The `walletDecryptKey` of the authenticating game or player. Required to decrypt and perform blockchain transactions with the game or player primary wallet.
let grantCurrencyRoleRequest = new MetafabJavascript.GrantCurrencyRoleRequest(); // GrantCurrencyRoleRequest | 
apiInstance.grantCurrencyRole(currencyId, xAuthorization, xWalletDecryptKey, grantCurrencyRoleRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyId** | **String**| Any currency id within the MetaFab platform. | 
 **xAuthorization** | **String**| The &#x60;secretKey&#x60; of a specific game or the &#x60;accessToken&#x60; of a specific player. | 
 **xWalletDecryptKey** | **String**| The &#x60;walletDecryptKey&#x60; of the authenticating game or player. Required to decrypt and perform blockchain transactions with the game or player primary wallet. | 
 **grantCurrencyRoleRequest** | [**GrantCurrencyRoleRequest**](GrantCurrencyRoleRequest.md)|  | 

### Return type

[**TransactionModel**](TransactionModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## mintCurrency

> TransactionModel mintCurrency(currencyId, xAuthorization, xWalletDecryptKey, mintCurrencyRequest)

Mint currency

Creates (mints) the provided amount of currency to the provided wallet address or wallet address associated with the provided walletId.

### Example

```javascript
import MetafabJavascript from 'metafab-javascript';

let apiInstance = new MetafabJavascript.CurrenciesApi();
let currencyId = "currencyId_example"; // String | Any currency id within the MetaFab platform.
let xAuthorization = game_sk_02z4Mv3c85Ig0gNowY9Dq0N2kjb1xwzr27ArLE0669RrRI6dLf822iPO26K1p1FP; // String | The `secretKey` of the authenticating game.
let xWalletDecryptKey = AXNP8MKb+5SbBtHWrZu5KHh5/BomXY/dMRG/BDUn7a4=; // String | The `walletDecryptKey` of the authenticating game. Required to decrypt and perform blockchain transactions with the game primary wallet.
let mintCurrencyRequest = new MetafabJavascript.MintCurrencyRequest(); // MintCurrencyRequest | 
apiInstance.mintCurrency(currencyId, xAuthorization, xWalletDecryptKey, mintCurrencyRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyId** | **String**| Any currency id within the MetaFab platform. | 
 **xAuthorization** | **String**| The &#x60;secretKey&#x60; of the authenticating game. | 
 **xWalletDecryptKey** | **String**| The &#x60;walletDecryptKey&#x60; of the authenticating game. Required to decrypt and perform blockchain transactions with the game primary wallet. | 
 **mintCurrencyRequest** | [**MintCurrencyRequest**](MintCurrencyRequest.md)|  | 

### Return type

[**TransactionModel**](TransactionModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## revokeCurrencyRole

> TransactionModel revokeCurrencyRole(currencyId, xAuthorization, xWalletDecryptKey, revokeCollectionRoleRequest)

Revoke currency role

Revokes the provided role for the currency to the provided address or address associated with the provided walletId.

### Example

```javascript
import MetafabJavascript from 'metafab-javascript';

let apiInstance = new MetafabJavascript.CurrenciesApi();
let currencyId = "currencyId_example"; // String | Any currency id within the MetaFab platform.
let xAuthorization = ["game_sk_02z4Mv3c85Ig0gNowY9Dq0N2kjb1xwzr27ArLE0669RrRI6dLf822iPO26K1p1FP","player_at_02z4Mv3c85Ig0gNowY9Dq0N2kjb1xwzr27ArLE0669RrRI6dLf822iPO26K1p1FP"]; // String | The `secretKey` of a specific game or the `accessToken` of a specific player.
let xWalletDecryptKey = AXNP8MKb+5SbBtHWrZu5KHh5/BomXY/dMRG/BDUn7a4=; // String | The `walletDecryptKey` of the authenticating game or player. Required to decrypt and perform blockchain transactions with the game or player primary wallet.
let revokeCollectionRoleRequest = new MetafabJavascript.RevokeCollectionRoleRequest(); // RevokeCollectionRoleRequest | 
apiInstance.revokeCurrencyRole(currencyId, xAuthorization, xWalletDecryptKey, revokeCollectionRoleRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyId** | **String**| Any currency id within the MetaFab platform. | 
 **xAuthorization** | **String**| The &#x60;secretKey&#x60; of a specific game or the &#x60;accessToken&#x60; of a specific player. | 
 **xWalletDecryptKey** | **String**| The &#x60;walletDecryptKey&#x60; of the authenticating game or player. Required to decrypt and perform blockchain transactions with the game or player primary wallet. | 
 **revokeCollectionRoleRequest** | [**RevokeCollectionRoleRequest**](RevokeCollectionRoleRequest.md)|  | 

### Return type

[**TransactionModel**](TransactionModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## setCurrencyFees

> TransactionModel setCurrencyFees(currencyId, xAuthorization, xWalletDecryptKey, setCurrencyFeesRequest)

Set currency fees

Sets the recipient address, basis points, fixed amount and cap amount for a currency&#39;s fees.

### Example

```javascript
import MetafabJavascript from 'metafab-javascript';

let apiInstance = new MetafabJavascript.CurrenciesApi();
let currencyId = "currencyId_example"; // String | Any currency id within the MetaFab platform.
let xAuthorization = game_sk_02z4Mv3c85Ig0gNowY9Dq0N2kjb1xwzr27ArLE0669RrRI6dLf822iPO26K1p1FP; // String | The `secretKey` of the authenticating game.
let xWalletDecryptKey = AXNP8MKb+5SbBtHWrZu5KHh5/BomXY/dMRG/BDUn7a4=; // String | The `walletDecryptKey` of the authenticating game. Required to decrypt and perform blockchain transactions with the game primary wallet.
let setCurrencyFeesRequest = new MetafabJavascript.SetCurrencyFeesRequest(); // SetCurrencyFeesRequest | 
apiInstance.setCurrencyFees(currencyId, xAuthorization, xWalletDecryptKey, setCurrencyFeesRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyId** | **String**| Any currency id within the MetaFab platform. | 
 **xAuthorization** | **String**| The &#x60;secretKey&#x60; of the authenticating game. | 
 **xWalletDecryptKey** | **String**| The &#x60;walletDecryptKey&#x60; of the authenticating game. Required to decrypt and perform blockchain transactions with the game primary wallet. | 
 **setCurrencyFeesRequest** | [**SetCurrencyFeesRequest**](SetCurrencyFeesRequest.md)|  | 

### Return type

[**TransactionModel**](TransactionModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## transferCurrency

> TransactionModel transferCurrency(currencyId, xAuthorization, xWalletDecryptKey, transferCurrencyRequest)

Transfer currency

Transfers an amount of currency to the provided wallet address or wallet address associated with the provided walletId. If you want to transfer to multiple wallets with different amounts and optional references in one API request, please see the Batch transfer currency documentation.  An optional reference may be included for the transfer. References are useful for identifying transfers intended to pay for items, trades, services and more.

### Example

```javascript
import MetafabJavascript from 'metafab-javascript';

let apiInstance = new MetafabJavascript.CurrenciesApi();
let currencyId = "currencyId_example"; // String | Any currency id within the MetaFab platform.
let xAuthorization = ["game_sk_02z4Mv3c85Ig0gNowY9Dq0N2kjb1xwzr27ArLE0669RrRI6dLf822iPO26K1p1FP","player_at_02z4Mv3c85Ig0gNowY9Dq0N2kjb1xwzr27ArLE0669RrRI6dLf822iPO26K1p1FP"]; // String | The `secretKey` of a specific game or the `accessToken` of a specific player.
let xWalletDecryptKey = AXNP8MKb+5SbBtHWrZu5KHh5/BomXY/dMRG/BDUn7a4=; // String | The `walletDecryptKey` of the authenticating game or player. Required to decrypt and perform blockchain transactions with the game or player primary wallet.
let transferCurrencyRequest = new MetafabJavascript.TransferCurrencyRequest(); // TransferCurrencyRequest | 
apiInstance.transferCurrency(currencyId, xAuthorization, xWalletDecryptKey, transferCurrencyRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyId** | **String**| Any currency id within the MetaFab platform. | 
 **xAuthorization** | **String**| The &#x60;secretKey&#x60; of a specific game or the &#x60;accessToken&#x60; of a specific player. | 
 **xWalletDecryptKey** | **String**| The &#x60;walletDecryptKey&#x60; of the authenticating game or player. Required to decrypt and perform blockchain transactions with the game or player primary wallet. | 
 **transferCurrencyRequest** | [**TransferCurrencyRequest**](TransferCurrencyRequest.md)|  | 

### Return type

[**TransactionModel**](TransactionModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

