# MetafabJavascript.ShopsApi

All URIs are relative to *https://api.trymetafab.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createShop**](ShopsApi.md#createShop) | **POST** /v1/shops | Create shop
[**getShopOffer**](ShopsApi.md#getShopOffer) | **GET** /v1/shops/{shopId}/items/{shopOfferId} | Get shop offer
[**getShopOffers**](ShopsApi.md#getShopOffers) | **GET** /v1/shops/{shopId}/offers | Get shop offers
[**getShops**](ShopsApi.md#getShops) | **GET** /v1/shops | Get shops
[**removeShopOffer**](ShopsApi.md#removeShopOffer) | **DELETE** /v1/shops/{shopId}/offers/{shopOfferId} | Remove shop offer
[**setShopOffer**](ShopsApi.md#setShopOffer) | **POST** /v1/shops/{shopId}/offers | Set shop offer
[**useShopOffer**](ShopsApi.md#useShopOffer) | **POST** /v1/shops/{shopId}/offers/{shopOfferId}/uses | Use shop offer
[**withdrawFromShop**](ShopsApi.md#withdrawFromShop) | **POST** /v1/shops/{shopId}/withdrawals | Withdraw from shop



## createShop

> CreateShop200Response createShop(xAuthorization, xPassword, createShopRequest)

Create shop

Creates a new game shop and deploys a shop contract on behalf of the authenticating game&#39;s primary wallet. The deployed shop contract allows you to create fixed price rates for players to buy specific items from any item collection or ERC1155 contract. Additionally, a shop allows you to create shop offers for some set of item(s) to another set of item(s) or any mix of currency. Shops completely support gasless player transactions.

### Example

```javascript
import MetafabJavascript from 'metafab-javascript';

let apiInstance = new MetafabJavascript.ShopsApi();
let xAuthorization = game_sk_02z4Mv3c85Ig0gNowY9Dq0N2kjb1xwzr27ArLE0669RrRI6dLf822iPO26K1p1FP; // String | The `secretKey` of the authenticating game.
let xPassword = mySecurePassword; // String | The password of the authenticating game. Required to decrypt and perform blockchain transactions with the game primary wallet.
let createShopRequest = new MetafabJavascript.CreateShopRequest(); // CreateShopRequest | 
apiInstance.createShop(xAuthorization, xPassword, createShopRequest).then((data) => {
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
 **createShopRequest** | [**CreateShopRequest**](CreateShopRequest.md)|  | 

### Return type

[**CreateShop200Response**](CreateShop200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getShopOffer

> ShopOffer getShopOffer(shopId, shopOfferId)

Get shop offer

Returns a shop offer object for the provided shopOfferId.

### Example

```javascript
import MetafabJavascript from 'metafab-javascript';

let apiInstance = new MetafabJavascript.ShopsApi();
let shopId = "shopId_example"; // String | Any shop id within the MetaFab ecosystem.
let shopOfferId = "shopOfferId_example"; // String | Any offer id for the shop. Zero, or a positive integer.
apiInstance.getShopOffer(shopId, shopOfferId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shopId** | **String**| Any shop id within the MetaFab ecosystem. | 
 **shopOfferId** | **String**| Any offer id for the shop. Zero, or a positive integer. | 

### Return type

[**ShopOffer**](ShopOffer.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getShopOffers

> [ShopOffer] getShopOffers(shopId)

Get shop offers

Returns all shop offers as an array of shop offer objects.

### Example

```javascript
import MetafabJavascript from 'metafab-javascript';

let apiInstance = new MetafabJavascript.ShopsApi();
let shopId = "shopId_example"; // String | Any shop id within the MetaFab ecosystem.
apiInstance.getShopOffers(shopId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shopId** | **String**| Any shop id within the MetaFab ecosystem. | 

### Return type

[**[ShopOffer]**](ShopOffer.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getShops

> [GetShops200ResponseInner] getShops(xGameKey)

Get shops

Returns an array of active shops for the game associated with the provided &#x60;X-Game-Key&#x60;.

### Example

```javascript
import MetafabJavascript from 'metafab-javascript';

let apiInstance = new MetafabJavascript.ShopsApi();
let xGameKey = game_pk_4SOqpDi8pQdnQgfCOBW29qR8YmwOhxVPz5iHoMgUEJLDdPXgwLuHqZf8ewo2GajZ; // String | The `publishedKey` of a specific game. This can be shared or included in game clients, websites, etc.
apiInstance.getShops(xGameKey).then((data) => {
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

[**[GetShops200ResponseInner]**](GetShops200ResponseInner.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## removeShopOffer

> TransactionModel removeShopOffer(shopId, shopOfferId, xAuthorization, xPassword)

Remove shop offer

Removes the provided offer by offerId from the provided shop. Removed offers can no longer be used.

### Example

```javascript
import MetafabJavascript from 'metafab-javascript';

let apiInstance = new MetafabJavascript.ShopsApi();
let shopId = "shopId_example"; // String | Any shop id within the MetaFab ecosystem.
let shopOfferId = "shopOfferId_example"; // String | Any offer id for the shop. Zero, or a positive integer.
let xAuthorization = game_sk_02z4Mv3c85Ig0gNowY9Dq0N2kjb1xwzr27ArLE0669RrRI6dLf822iPO26K1p1FP; // String | The `secretKey` of the authenticating game.
let xPassword = mySecurePassword; // String | The password of the authenticating game. Required to decrypt and perform blockchain transactions with the game primary wallet.
apiInstance.removeShopOffer(shopId, shopOfferId, xAuthorization, xPassword).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shopId** | **String**| Any shop id within the MetaFab ecosystem. | 
 **shopOfferId** | **String**| Any offer id for the shop. Zero, or a positive integer. | 
 **xAuthorization** | **String**| The &#x60;secretKey&#x60; of the authenticating game. | 
 **xPassword** | **String**| The password of the authenticating game. Required to decrypt and perform blockchain transactions with the game primary wallet. | 

### Return type

[**TransactionModel**](TransactionModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## setShopOffer

> TransactionModel setShopOffer(shopId, xAuthorization, xPassword, setShopOfferRequest)

Set shop offer

Sets a new shop offer or updates an existing one for the provided id. Shop offers allow currency to item, item to currency or item to item exchanges.  All request fields besides &#x60;id&#x60; are optional. Any optional fields omitted will not be used for the offer. This allows you to create many different combinations of offers. For example, you can create an offer that may require 3 unique item ids of specified quantities from a given item collection and gives the user 1 new unique item id in exchange.  Another example, you may want to make a shop offer from one ERC20 token to another. This is also possible - simple set the input and output currency fields and leave the others blank.

### Example

```javascript
import MetafabJavascript from 'metafab-javascript';

let apiInstance = new MetafabJavascript.ShopsApi();
let shopId = "shopId_example"; // String | Any shop id within the MetaFab ecosystem.
let xAuthorization = game_sk_02z4Mv3c85Ig0gNowY9Dq0N2kjb1xwzr27ArLE0669RrRI6dLf822iPO26K1p1FP; // String | The `secretKey` of the authenticating game.
let xPassword = mySecurePassword; // String | The password of the authenticating game. Required to decrypt and perform blockchain transactions with the game primary wallet.
let setShopOfferRequest = new MetafabJavascript.SetShopOfferRequest(); // SetShopOfferRequest | 
apiInstance.setShopOffer(shopId, xAuthorization, xPassword, setShopOfferRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shopId** | **String**| Any shop id within the MetaFab ecosystem. | 
 **xAuthorization** | **String**| The &#x60;secretKey&#x60; of the authenticating game. | 
 **xPassword** | **String**| The password of the authenticating game. Required to decrypt and perform blockchain transactions with the game primary wallet. | 
 **setShopOfferRequest** | [**SetShopOfferRequest**](SetShopOfferRequest.md)|  | 

### Return type

[**TransactionModel**](TransactionModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## useShopOffer

> TransactionModel useShopOffer(shopId, shopOfferId, xAuthorization, xPassword)

Use shop offer

Uses a shop offer. The required (input) item(s) and/or currency are removed from the wallet or player wallet using the offer. The given (output) item(s) and/or currency are given to the wallet or player wallet using the offer.

### Example

```javascript
import MetafabJavascript from 'metafab-javascript';

let apiInstance = new MetafabJavascript.ShopsApi();
let shopId = "shopId_example"; // String | Any shop id within the MetaFab ecosystem.
let shopOfferId = "shopOfferId_example"; // String | Any offer id for the shop. Zero, or a positive integer.
let xAuthorization = ["game_sk_02z4Mv3c85Ig0gNowY9Dq0N2kjb1xwzr27ArLE0669RrRI6dLf822iPO26K1p1FP","player_at_02z4Mv3c85Ig0gNowY9Dq0N2kjb1xwzr27ArLE0669RrRI6dLf822iPO26K1p1FP"]; // String | The `secretKey` of a specific game or the `accessToken` of a specific player.
let xPassword = mySecurePassword; // String | The password of the authenticating game or player. Required to decrypt and perform blockchain transactions with the game or player primary wallet.
apiInstance.useShopOffer(shopId, shopOfferId, xAuthorization, xPassword).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shopId** | **String**| Any shop id within the MetaFab ecosystem. | 
 **shopOfferId** | **String**| Any offer id for the shop. Zero, or a positive integer. | 
 **xAuthorization** | **String**| The &#x60;secretKey&#x60; of a specific game or the &#x60;accessToken&#x60; of a specific player. | 
 **xPassword** | **String**| The password of the authenticating game or player. Required to decrypt and perform blockchain transactions with the game or player primary wallet. | 

### Return type

[**TransactionModel**](TransactionModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## withdrawFromShop

> TransactionModel withdrawFromShop(shopId, xAuthorization, xPassword, withdrawFromShopRequest)

Withdraw from shop

Withdraws native token, currency or items from a shop. Whenever a shop offer has input requirements, the native tokens, currencies or items for the requirements of that offer are deposited into the shop contract when the offer is used. These can be withdrawn to any other address.

### Example

```javascript
import MetafabJavascript from 'metafab-javascript';

let apiInstance = new MetafabJavascript.ShopsApi();
let shopId = "shopId_example"; // String | Any shop id within the MetaFab ecosystem.
let xAuthorization = game_sk_02z4Mv3c85Ig0gNowY9Dq0N2kjb1xwzr27ArLE0669RrRI6dLf822iPO26K1p1FP; // String | The `secretKey` of the authenticating game.
let xPassword = mySecurePassword; // String | The password of the authenticating game. Required to decrypt and perform blockchain transactions with the game primary wallet.
let withdrawFromShopRequest = new MetafabJavascript.WithdrawFromShopRequest(); // WithdrawFromShopRequest | 
apiInstance.withdrawFromShop(shopId, xAuthorization, xPassword, withdrawFromShopRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shopId** | **String**| Any shop id within the MetaFab ecosystem. | 
 **xAuthorization** | **String**| The &#x60;secretKey&#x60; of the authenticating game. | 
 **xPassword** | **String**| The password of the authenticating game. Required to decrypt and perform blockchain transactions with the game primary wallet. | 
 **withdrawFromShopRequest** | [**WithdrawFromShopRequest**](WithdrawFromShopRequest.md)|  | 

### Return type

[**TransactionModel**](TransactionModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

