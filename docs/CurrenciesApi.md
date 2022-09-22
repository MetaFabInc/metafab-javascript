# MetafabJavascript.CurrenciesApi

All URIs are relative to *https://api.trymetafab.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1CurrenciesCurrencyIdBalancesGet**](CurrenciesApi.md#v1CurrenciesCurrencyIdBalancesGet) | **GET** /v1/currencies/{currencyId}/balances | Get currency balance
[**v1CurrenciesCurrencyIdBatchTransfersPost**](CurrenciesApi.md#v1CurrenciesCurrencyIdBatchTransfersPost) | **POST** /v1/currencies/{currencyId}/batchTransfers | Batch transfer currency
[**v1CurrenciesCurrencyIdBurnsPost**](CurrenciesApi.md#v1CurrenciesCurrencyIdBurnsPost) | **POST** /v1/currencies/{currencyId}/burns | Burn currency
[**v1CurrenciesCurrencyIdFeesGet**](CurrenciesApi.md#v1CurrenciesCurrencyIdFeesGet) | **GET** /v1/currencies/{currencyId}/fees | Get currency fees
[**v1CurrenciesCurrencyIdFeesPost**](CurrenciesApi.md#v1CurrenciesCurrencyIdFeesPost) | **POST** /v1/currencies/{currencyId}/fees | Set currency fees
[**v1CurrenciesCurrencyIdMintsPost**](CurrenciesApi.md#v1CurrenciesCurrencyIdMintsPost) | **POST** /v1/currencies/{currencyId}/mints | Mint currency
[**v1CurrenciesCurrencyIdTransfersPost**](CurrenciesApi.md#v1CurrenciesCurrencyIdTransfersPost) | **POST** /v1/currencies/{currencyId}/transfers | Transfer currency
[**v1CurrenciesGet**](CurrenciesApi.md#v1CurrenciesGet) | **GET** /v1/currencies | Get currencies
[**v1CurrenciesPost**](CurrenciesApi.md#v1CurrenciesPost) | **POST** /v1/currencies | Create currency



## v1CurrenciesCurrencyIdBalancesGet

> Number v1CurrenciesCurrencyIdBalancesGet(currencyId, opts)

Get currency balance

Returns the current currency balance of the provided wallet address or or the wallet address associated with the provided walletId.

### Example

```javascript
import MetafabJavascript from 'metafab-javascript';

let apiInstance = new MetafabJavascript.CurrenciesApi();
let currencyId = "currencyId_example"; // String | Any currency id within the MetaFab ecosystem.
let opts = {
  'address': 0x39cb70F972E0EE920088AeF97Dbe5c6251a9c25D, // String | A valid EVM based address. For example, `0x39cb70F972E0EE920088AeF97Dbe5c6251a9c25D`.
  'walletId': "walletId_example" // String | Any wallet id within the MetaFab ecosystem.
};
apiInstance.v1CurrenciesCurrencyIdBalancesGet(currencyId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyId** | **String**| Any currency id within the MetaFab ecosystem. | 
 **address** | **String**| A valid EVM based address. For example, &#x60;0x39cb70F972E0EE920088AeF97Dbe5c6251a9c25D&#x60;. | [optional] 
 **walletId** | **String**| Any wallet id within the MetaFab ecosystem. | [optional] 

### Return type

**Number**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1CurrenciesCurrencyIdBatchTransfersPost

> TransactionModel v1CurrenciesCurrencyIdBatchTransfersPost(currencyId, xAuthorization, xPassword, v1CurrenciesCurrencyIdBatchTransfersPostRequest)

Batch transfer currency

Transfers multiple amounts of currency to multiple provided wallet addresses or wallet addresses associated with the provided walletIds. You may also provide a combination of addresses and walletIds in one request, the proper receipients will be automatically determined, with &#x60;addresses&#x60; getting &#x60;amounts&#x60; order priority first. Optional references may be included for the transfer. References are useful for identifying transfers intended to pay for items, trades, services and more.

### Example

```javascript
import MetafabJavascript from 'metafab-javascript';

let apiInstance = new MetafabJavascript.CurrenciesApi();
let currencyId = "currencyId_example"; // String | Any currency id within the MetaFab ecosystem.
let xAuthorization = ["game_sk_02z4Mv3c85Ig0gNowY9Dq0N2kjb1xwzr27ArLE0669RrRI6dLf822iPO26K1p1FP","player_at_02z4Mv3c85Ig0gNowY9Dq0N2kjb1xwzr27ArLE0669RrRI6dLf822iPO26K1p1FP"]; // String | The `secretKey` of a specific game or the `accessToken` of a specific player.
let xPassword = mySecurePassword; // String | The password of the authenticating game or player. Required to decrypt and perform blockchain transactions with the game or player primary wallet.
let v1CurrenciesCurrencyIdBatchTransfersPostRequest = new MetafabJavascript.V1CurrenciesCurrencyIdBatchTransfersPostRequest(); // V1CurrenciesCurrencyIdBatchTransfersPostRequest | 
apiInstance.v1CurrenciesCurrencyIdBatchTransfersPost(currencyId, xAuthorization, xPassword, v1CurrenciesCurrencyIdBatchTransfersPostRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyId** | **String**| Any currency id within the MetaFab ecosystem. | 
 **xAuthorization** | **String**| The &#x60;secretKey&#x60; of a specific game or the &#x60;accessToken&#x60; of a specific player. | 
 **xPassword** | **String**| The password of the authenticating game or player. Required to decrypt and perform blockchain transactions with the game or player primary wallet. | 
 **v1CurrenciesCurrencyIdBatchTransfersPostRequest** | [**V1CurrenciesCurrencyIdBatchTransfersPostRequest**](V1CurrenciesCurrencyIdBatchTransfersPostRequest.md)|  | 

### Return type

[**TransactionModel**](TransactionModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1CurrenciesCurrencyIdBurnsPost

> TransactionModel v1CurrenciesCurrencyIdBurnsPost(currencyId, xAuthorization, xPassword, v1CurrenciesCurrencyIdBurnsPostRequest)

Burn currency

Removes (burns) the provided amount of currency from the authenticating game or players wallet. The currency amount is permanently removed from the circulating supply of the currency.

### Example

```javascript
import MetafabJavascript from 'metafab-javascript';

let apiInstance = new MetafabJavascript.CurrenciesApi();
let currencyId = "currencyId_example"; // String | Any currency id within the MetaFab ecosystem.
let xAuthorization = ["game_sk_02z4Mv3c85Ig0gNowY9Dq0N2kjb1xwzr27ArLE0669RrRI6dLf822iPO26K1p1FP","player_at_02z4Mv3c85Ig0gNowY9Dq0N2kjb1xwzr27ArLE0669RrRI6dLf822iPO26K1p1FP"]; // String | The `secretKey` of a specific game or the `accessToken` of a specific player.
let xPassword = mySecurePassword; // String | The password of the authenticating game or player. Required to decrypt and perform blockchain transactions with the game or player primary wallet.
let v1CurrenciesCurrencyIdBurnsPostRequest = new MetafabJavascript.V1CurrenciesCurrencyIdBurnsPostRequest(); // V1CurrenciesCurrencyIdBurnsPostRequest | 
apiInstance.v1CurrenciesCurrencyIdBurnsPost(currencyId, xAuthorization, xPassword, v1CurrenciesCurrencyIdBurnsPostRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyId** | **String**| Any currency id within the MetaFab ecosystem. | 
 **xAuthorization** | **String**| The &#x60;secretKey&#x60; of a specific game or the &#x60;accessToken&#x60; of a specific player. | 
 **xPassword** | **String**| The password of the authenticating game or player. Required to decrypt and perform blockchain transactions with the game or player primary wallet. | 
 **v1CurrenciesCurrencyIdBurnsPostRequest** | [**V1CurrenciesCurrencyIdBurnsPostRequest**](V1CurrenciesCurrencyIdBurnsPostRequest.md)|  | 

### Return type

[**TransactionModel**](TransactionModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1CurrenciesCurrencyIdFeesGet

> V1CurrenciesCurrencyIdFeesGet200Response v1CurrenciesCurrencyIdFeesGet(currencyId)

Get currency fees

Returns the current fee recipient address and fees of the currency for the provided currencyId. Fees are only applicable for gasless transactions performed by default by players.

### Example

```javascript
import MetafabJavascript from 'metafab-javascript';

let apiInstance = new MetafabJavascript.CurrenciesApi();
let currencyId = "currencyId_example"; // String | Any currency id within the MetaFab ecosystem.
apiInstance.v1CurrenciesCurrencyIdFeesGet(currencyId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyId** | **String**| Any currency id within the MetaFab ecosystem. | 

### Return type

[**V1CurrenciesCurrencyIdFeesGet200Response**](V1CurrenciesCurrencyIdFeesGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1CurrenciesCurrencyIdFeesPost

> TransactionModel v1CurrenciesCurrencyIdFeesPost(currencyId, xAuthorization, xPassword, v1CurrenciesCurrencyIdFeesGetRequest)

Set currency fees

Sets the recipient address, basis points, fixed amount and cap amount for a currency&#39;s fees.

### Example

```javascript
import MetafabJavascript from 'metafab-javascript';

let apiInstance = new MetafabJavascript.CurrenciesApi();
let currencyId = "currencyId_example"; // String | Any currency id within the MetaFab ecosystem.
let xAuthorization = game_sk_02z4Mv3c85Ig0gNowY9Dq0N2kjb1xwzr27ArLE0669RrRI6dLf822iPO26K1p1FP; // String | The `secretKey` of the authenticating game.
let xPassword = mySecurePassword; // String | The password of the authenticating game. Required to decrypt and perform blockchain transactions with the game primary wallet.
let v1CurrenciesCurrencyIdFeesGetRequest = new MetafabJavascript.V1CurrenciesCurrencyIdFeesGetRequest(); // V1CurrenciesCurrencyIdFeesGetRequest | 
apiInstance.v1CurrenciesCurrencyIdFeesPost(currencyId, xAuthorization, xPassword, v1CurrenciesCurrencyIdFeesGetRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyId** | **String**| Any currency id within the MetaFab ecosystem. | 
 **xAuthorization** | **String**| The &#x60;secretKey&#x60; of the authenticating game. | 
 **xPassword** | **String**| The password of the authenticating game. Required to decrypt and perform blockchain transactions with the game primary wallet. | 
 **v1CurrenciesCurrencyIdFeesGetRequest** | [**V1CurrenciesCurrencyIdFeesGetRequest**](V1CurrenciesCurrencyIdFeesGetRequest.md)|  | 

### Return type

[**TransactionModel**](TransactionModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1CurrenciesCurrencyIdMintsPost

> TransactionModel v1CurrenciesCurrencyIdMintsPost(currencyId, xAuthorization, xPassword, v1CurrenciesCurrencyIdMintsPostRequest)

Mint currency

Creates (mints) the provided amount of currency  to the provided wallet address or wallet address associated with the provided walletId.

### Example

```javascript
import MetafabJavascript from 'metafab-javascript';

let apiInstance = new MetafabJavascript.CurrenciesApi();
let currencyId = "currencyId_example"; // String | Any currency id within the MetaFab ecosystem.
let xAuthorization = game_sk_02z4Mv3c85Ig0gNowY9Dq0N2kjb1xwzr27ArLE0669RrRI6dLf822iPO26K1p1FP; // String | The `secretKey` of the authenticating game.
let xPassword = mySecurePassword; // String | The password of the authenticating game. Required to decrypt and perform blockchain transactions with the game primary wallet.
let v1CurrenciesCurrencyIdMintsPostRequest = new MetafabJavascript.V1CurrenciesCurrencyIdMintsPostRequest(); // V1CurrenciesCurrencyIdMintsPostRequest | 
apiInstance.v1CurrenciesCurrencyIdMintsPost(currencyId, xAuthorization, xPassword, v1CurrenciesCurrencyIdMintsPostRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyId** | **String**| Any currency id within the MetaFab ecosystem. | 
 **xAuthorization** | **String**| The &#x60;secretKey&#x60; of the authenticating game. | 
 **xPassword** | **String**| The password of the authenticating game. Required to decrypt and perform blockchain transactions with the game primary wallet. | 
 **v1CurrenciesCurrencyIdMintsPostRequest** | [**V1CurrenciesCurrencyIdMintsPostRequest**](V1CurrenciesCurrencyIdMintsPostRequest.md)|  | 

### Return type

[**TransactionModel**](TransactionModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1CurrenciesCurrencyIdTransfersPost

> TransactionModel v1CurrenciesCurrencyIdTransfersPost(currencyId, xAuthorization, xPassword, v1CurrenciesCurrencyIdTransfersPostRequest)

Transfer currency

Transfers an amount of currency to the provided wallet address or wallet address associated with the provided walletId. If you want to transfer to multiple wallets with different amounts and optional references in one API request, please see the Batch transfer currency documentation.  An optional reference may be included for the transfer. References are useful for identifying transfers intended to pay for items, trades, services and more.

### Example

```javascript
import MetafabJavascript from 'metafab-javascript';

let apiInstance = new MetafabJavascript.CurrenciesApi();
let currencyId = "currencyId_example"; // String | Any currency id within the MetaFab ecosystem.
let xAuthorization = ["game_sk_02z4Mv3c85Ig0gNowY9Dq0N2kjb1xwzr27ArLE0669RrRI6dLf822iPO26K1p1FP","player_at_02z4Mv3c85Ig0gNowY9Dq0N2kjb1xwzr27ArLE0669RrRI6dLf822iPO26K1p1FP"]; // String | The `secretKey` of a specific game or the `accessToken` of a specific player.
let xPassword = mySecurePassword; // String | The password of the authenticating game or player. Required to decrypt and perform blockchain transactions with the game or player primary wallet.
let v1CurrenciesCurrencyIdTransfersPostRequest = new MetafabJavascript.V1CurrenciesCurrencyIdTransfersPostRequest(); // V1CurrenciesCurrencyIdTransfersPostRequest | 
apiInstance.v1CurrenciesCurrencyIdTransfersPost(currencyId, xAuthorization, xPassword, v1CurrenciesCurrencyIdTransfersPostRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **currencyId** | **String**| Any currency id within the MetaFab ecosystem. | 
 **xAuthorization** | **String**| The &#x60;secretKey&#x60; of a specific game or the &#x60;accessToken&#x60; of a specific player. | 
 **xPassword** | **String**| The password of the authenticating game or player. Required to decrypt and perform blockchain transactions with the game or player primary wallet. | 
 **v1CurrenciesCurrencyIdTransfersPostRequest** | [**V1CurrenciesCurrencyIdTransfersPostRequest**](V1CurrenciesCurrencyIdTransfersPostRequest.md)|  | 

### Return type

[**TransactionModel**](TransactionModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1CurrenciesGet

> [V1CurrenciesGet200ResponseInner] v1CurrenciesGet(xGameKey)

Get currencies

Returns an array of active currencies for the game associated with the provided &#x60;X-Game-Key&#x60;.

### Example

```javascript
import MetafabJavascript from 'metafab-javascript';

let apiInstance = new MetafabJavascript.CurrenciesApi();
let xGameKey = game_pk_4SOqpDi8pQdnQgfCOBW29qR8YmwOhxVPz5iHoMgUEJLDdPXgwLuHqZf8ewo2GajZ; // String | The `publishedKey` of a specific game. This can be shared or included in game clients, websites, etc.
apiInstance.v1CurrenciesGet(xGameKey).then((data) => {
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

[**[V1CurrenciesGet200ResponseInner]**](V1CurrenciesGet200ResponseInner.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1CurrenciesPost

> V1CurrenciesGet200Response v1CurrenciesPost(xAuthorization, xPassword, v1CurrenciesGetRequest)

Create currency

Creates a new game currency and deploys an ERC20 token contract on behalf of the authenticating game&#39;s primary wallet. The deployed ERC20 contract is preconfigured to fully support bridging across blockchains, batched transfers and gasless transactions on any supported blockchain as well as full support for gasless transactions from player managed wallets.

### Example

```javascript
import MetafabJavascript from 'metafab-javascript';

let apiInstance = new MetafabJavascript.CurrenciesApi();
let xAuthorization = game_sk_02z4Mv3c85Ig0gNowY9Dq0N2kjb1xwzr27ArLE0669RrRI6dLf822iPO26K1p1FP; // String | The `secretKey` of the authenticating game.
let xPassword = mySecurePassword; // String | The password of the authenticating game. Required to decrypt and perform blockchain transactions with the game primary wallet.
let v1CurrenciesGetRequest = new MetafabJavascript.V1CurrenciesGetRequest(); // V1CurrenciesGetRequest | 
apiInstance.v1CurrenciesPost(xAuthorization, xPassword, v1CurrenciesGetRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAuthorization** | **String**| The &#x60;secretKey&#x60; of the authenticating game. | 
 **xPassword** | **String**| The password of the authenticating game. Required to decrypt and perform blockchain transactions with the game primary wallet. | 
 **v1CurrenciesGetRequest** | [**V1CurrenciesGetRequest**](V1CurrenciesGetRequest.md)|  | 

### Return type

[**V1CurrenciesGet200Response**](V1CurrenciesGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

