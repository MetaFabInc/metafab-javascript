# MetafabJavascript.ExchangesApi

All URIs are relative to *https://api.trymetafab.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createExchange**](ExchangesApi.md#createExchange) | **POST** /v1/exchanges | Create exchange
[**getExchangeOffer**](ExchangesApi.md#getExchangeOffer) | **GET** /v1/exchanges/{exchangeId}/items/{exchangeOfferId} | Get exchange offer
[**getExchangeOffers**](ExchangesApi.md#getExchangeOffers) | **GET** /v1/exchanges/{exchangeId}/offers | Get exchange offers
[**getExchanges**](ExchangesApi.md#getExchanges) | **GET** /v1/exchanges | Get exchanges
[**removeExchangeOffer**](ExchangesApi.md#removeExchangeOffer) | **DELETE** /v1/exchanges/{exchangeId}/offers/{exchangeOfferId} | Remove exchange offer
[**setExchangeOffer**](ExchangesApi.md#setExchangeOffer) | **POST** /v1/exchanges/{exchangeId}/offers | Set exchange offer
[**useExchangeOffer**](ExchangesApi.md#useExchangeOffer) | **POST** /v1/exchanges/{exchangeId}/offers/{exchangeOfferId}/uses | Use exchange offer
[**withdrawFromExchange**](ExchangesApi.md#withdrawFromExchange) | **POST** /v1/exchanges/{exchangeId}/withdrawals | Withdraw from exchange



## createExchange

> CreateExchange200Response createExchange(xAuthorization, xPassword, createExchangeRequest)

Create exchange

Creates a new game exchange and deploys a exchange contract on behalf of the authenticating game&#39;s primary wallet. The deployed exchange contract allows you to create fixed price rates for players to buy specific items from any item collection or ERC1155 contract. Additionally, an exchange allows you to create exchange offers for some set of item(s) to another set of item(s) or any mix of currency. Exchanges completely supports gasless player transactions.

### Example

```javascript
import MetafabJavascript from 'metafab-javascript';

let apiInstance = new MetafabJavascript.ExchangesApi();
let xAuthorization = game_sk_02z4Mv3c85Ig0gNowY9Dq0N2kjb1xwzr27ArLE0669RrRI6dLf822iPO26K1p1FP; // String | The `secretKey` of the authenticating game.
let xPassword = mySecurePassword; // String | The password of the authenticating game. Required to decrypt and perform blockchain transactions with the game primary wallet.
let createExchangeRequest = new MetafabJavascript.CreateExchangeRequest(); // CreateExchangeRequest | 
apiInstance.createExchange(xAuthorization, xPassword, createExchangeRequest).then((data) => {
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
 **createExchangeRequest** | [**CreateExchangeRequest**](CreateExchangeRequest.md)|  | 

### Return type

[**CreateExchange200Response**](CreateExchange200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getExchangeOffer

> ExchangeOffer getExchangeOffer(exchangeId, exchangeOfferId)

Get exchange offer

Returns a exchange offer object for the provided exchangeOfferId.

### Example

```javascript
import MetafabJavascript from 'metafab-javascript';

let apiInstance = new MetafabJavascript.ExchangesApi();
let exchangeId = "exchangeId_example"; // String | Any exchange id within the MetaFab ecosystem.
let exchangeOfferId = "exchangeOfferId_example"; // String | Any offer id for the exchange. Zero, or a positive integer.
apiInstance.getExchangeOffer(exchangeId, exchangeOfferId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exchangeId** | **String**| Any exchange id within the MetaFab ecosystem. | 
 **exchangeOfferId** | **String**| Any offer id for the exchange. Zero, or a positive integer. | 

### Return type

[**ExchangeOffer**](ExchangeOffer.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getExchangeOffers

> [ExchangeOffer] getExchangeOffers(exchangeId)

Get exchange offers

Returns all exchange offers as an array of exchange offer objects.

### Example

```javascript
import MetafabJavascript from 'metafab-javascript';

let apiInstance = new MetafabJavascript.ExchangesApi();
let exchangeId = "exchangeId_example"; // String | Any exchange id within the MetaFab ecosystem.
apiInstance.getExchangeOffers(exchangeId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exchangeId** | **String**| Any exchange id within the MetaFab ecosystem. | 

### Return type

[**[ExchangeOffer]**](ExchangeOffer.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getExchanges

> [GetExchanges200ResponseInner] getExchanges(xGameKey)

Get exchanges

Returns an array of active exchanges for the game associated with the provided &#x60;X-Game-Key&#x60;.

### Example

```javascript
import MetafabJavascript from 'metafab-javascript';

let apiInstance = new MetafabJavascript.ExchangesApi();
let xGameKey = game_pk_4SOqpDi8pQdnQgfCOBW29qR8YmwOhxVPz5iHoMgUEJLDdPXgwLuHqZf8ewo2GajZ; // String | The `publishedKey` of a specific game. This can be shared or included in game clients, websites, etc.
apiInstance.getExchanges(xGameKey).then((data) => {
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

[**[GetExchanges200ResponseInner]**](GetExchanges200ResponseInner.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## removeExchangeOffer

> TransactionModel removeExchangeOffer(exchangeId, exchangeOfferId, xAuthorization, xPassword)

Remove exchange offer

Removes the provided offerId from the provided exchange. Removed offers can no longer be used.

### Example

```javascript
import MetafabJavascript from 'metafab-javascript';

let apiInstance = new MetafabJavascript.ExchangesApi();
let exchangeId = "exchangeId_example"; // String | Any exchange id within the MetaFab ecosystem.
let exchangeOfferId = "exchangeOfferId_example"; // String | Any offer id for the exchange. Zero, or a positive integer.
let xAuthorization = game_sk_02z4Mv3c85Ig0gNowY9Dq0N2kjb1xwzr27ArLE0669RrRI6dLf822iPO26K1p1FP; // String | The `secretKey` of the authenticating game.
let xPassword = mySecurePassword; // String | The password of the authenticating game. Required to decrypt and perform blockchain transactions with the game primary wallet.
apiInstance.removeExchangeOffer(exchangeId, exchangeOfferId, xAuthorization, xPassword).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exchangeId** | **String**| Any exchange id within the MetaFab ecosystem. | 
 **exchangeOfferId** | **String**| Any offer id for the exchange. Zero, or a positive integer. | 
 **xAuthorization** | **String**| The &#x60;secretKey&#x60; of the authenticating game. | 
 **xPassword** | **String**| The password of the authenticating game. Required to decrypt and perform blockchain transactions with the game primary wallet. | 

### Return type

[**TransactionModel**](TransactionModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## setExchangeOffer

> TransactionModel setExchangeOffer(exchangeId, xAuthorization, xPassword, setExchangeOfferRequest)

Set exchange offer

Sets a new exchange offer or updates an existing one for the provided id. Exchange offers allow currency to item, item to currency or item to item exchanges.  All request fields besides &#x60;id&#x60; are optional. Any optional fields omitted will not be used for the offer. This allows you to create many different combinations of offers. For example, you can create an offer that may require 3 unique item ids of specified quantities from a given item collection and gives the user 1 new unique item id in exchange.  Another example, you may want to make an exchange offer from one ERC20 token to another. This is also possible - simple set the input and output currency fields and leave the others blank.

### Example

```javascript
import MetafabJavascript from 'metafab-javascript';

let apiInstance = new MetafabJavascript.ExchangesApi();
let exchangeId = "exchangeId_example"; // String | Any exchange id within the MetaFab ecosystem.
let xAuthorization = game_sk_02z4Mv3c85Ig0gNowY9Dq0N2kjb1xwzr27ArLE0669RrRI6dLf822iPO26K1p1FP; // String | The `secretKey` of the authenticating game.
let xPassword = mySecurePassword; // String | The password of the authenticating game. Required to decrypt and perform blockchain transactions with the game primary wallet.
let setExchangeOfferRequest = new MetafabJavascript.SetExchangeOfferRequest(); // SetExchangeOfferRequest | 
apiInstance.setExchangeOffer(exchangeId, xAuthorization, xPassword, setExchangeOfferRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exchangeId** | **String**| Any exchange id within the MetaFab ecosystem. | 
 **xAuthorization** | **String**| The &#x60;secretKey&#x60; of the authenticating game. | 
 **xPassword** | **String**| The password of the authenticating game. Required to decrypt and perform blockchain transactions with the game primary wallet. | 
 **setExchangeOfferRequest** | [**SetExchangeOfferRequest**](SetExchangeOfferRequest.md)|  | 

### Return type

[**TransactionModel**](TransactionModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## useExchangeOffer

> TransactionModel useExchangeOffer(exchangeId, exchangeOfferId, xAuthorization, xPassword)

Use exchange offer

Uses an exchange offer. The required (input) item(s) and/or currency are removed from the wallet or player wallet using the offer. The given (output) item(s) and/or currency are given to the wallet or player wallet using the offer.

### Example

```javascript
import MetafabJavascript from 'metafab-javascript';

let apiInstance = new MetafabJavascript.ExchangesApi();
let exchangeId = "exchangeId_example"; // String | Any exchange id within the MetaFab ecosystem.
let exchangeOfferId = "exchangeOfferId_example"; // String | Any offer id for the exchange. Zero, or a positive integer.
let xAuthorization = ["game_sk_02z4Mv3c85Ig0gNowY9Dq0N2kjb1xwzr27ArLE0669RrRI6dLf822iPO26K1p1FP","player_at_02z4Mv3c85Ig0gNowY9Dq0N2kjb1xwzr27ArLE0669RrRI6dLf822iPO26K1p1FP"]; // String | The `secretKey` of a specific game or the `accessToken` of a specific player.
let xPassword = mySecurePassword; // String | The password of the authenticating game or player. Required to decrypt and perform blockchain transactions with the game or player primary wallet.
apiInstance.useExchangeOffer(exchangeId, exchangeOfferId, xAuthorization, xPassword).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exchangeId** | **String**| Any exchange id within the MetaFab ecosystem. | 
 **exchangeOfferId** | **String**| Any offer id for the exchange. Zero, or a positive integer. | 
 **xAuthorization** | **String**| The &#x60;secretKey&#x60; of a specific game or the &#x60;accessToken&#x60; of a specific player. | 
 **xPassword** | **String**| The password of the authenticating game or player. Required to decrypt and perform blockchain transactions with the game or player primary wallet. | 

### Return type

[**TransactionModel**](TransactionModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## withdrawFromExchange

> TransactionModel withdrawFromExchange(exchangeId, xAuthorization, xPassword, withdrawFromExchangeRequest)

Withdraw from exchange

Withdraws native token, currency or items from a exchange. Whenever an exchange offer has input requirements, the native tokens, currencies or items for the requirements of that offer are deposited into the exchange contract when the offer is used. These can be withdrawn to any other address.

### Example

```javascript
import MetafabJavascript from 'metafab-javascript';

let apiInstance = new MetafabJavascript.ExchangesApi();
let exchangeId = "exchangeId_example"; // String | Any exchange id within the MetaFab ecosystem.
let xAuthorization = game_sk_02z4Mv3c85Ig0gNowY9Dq0N2kjb1xwzr27ArLE0669RrRI6dLf822iPO26K1p1FP; // String | The `secretKey` of the authenticating game.
let xPassword = mySecurePassword; // String | The password of the authenticating game. Required to decrypt and perform blockchain transactions with the game primary wallet.
let withdrawFromExchangeRequest = new MetafabJavascript.WithdrawFromExchangeRequest(); // WithdrawFromExchangeRequest | 
apiInstance.withdrawFromExchange(exchangeId, xAuthorization, xPassword, withdrawFromExchangeRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exchangeId** | **String**| Any exchange id within the MetaFab ecosystem. | 
 **xAuthorization** | **String**| The &#x60;secretKey&#x60; of the authenticating game. | 
 **xPassword** | **String**| The password of the authenticating game. Required to decrypt and perform blockchain transactions with the game primary wallet. | 
 **withdrawFromExchangeRequest** | [**WithdrawFromExchangeRequest**](WithdrawFromExchangeRequest.md)|  | 

### Return type

[**TransactionModel**](TransactionModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

