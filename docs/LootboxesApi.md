# MetafabJavascript.LootboxesApi

All URIs are relative to *https://api.trymetafab.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createLootboxManager**](LootboxesApi.md#createLootboxManager) | **POST** /v1/lootboxManagers | Create lootbox manager
[**getLootboxManagerLootbox**](LootboxesApi.md#getLootboxManagerLootbox) | **GET** /v1/lootboxManagers/{lootboxManagerId}/lootboxes/{lootboxManagerLootboxId} | Get lootbox manager lootbox
[**getLootboxManagerLootboxes**](LootboxesApi.md#getLootboxManagerLootboxes) | **GET** /v1/lootboxManagers/{lootboxManagerId}/lootboxes | Get lootbox manager lootboxes
[**getLootboxManagers**](LootboxesApi.md#getLootboxManagers) | **GET** /v1/lootboxManagers | Get lootbox managers
[**openLootboxManagerLootbox**](LootboxesApi.md#openLootboxManagerLootbox) | **POST** /v1/lootboxManagers/{lootboxManagerId}/lootboxes/{lootboxManagerLootboxId}/opens | Open lootbox manager lootbox
[**removeLootboxManagerLootbox**](LootboxesApi.md#removeLootboxManagerLootbox) | **DELETE** /v1/lootboxManagers/{lootboxManagerId}/lootboxes/{lootboxManagerLootboxId} | Remove lootbox manager lootbox
[**setLootboxManagerLootbox**](LootboxesApi.md#setLootboxManagerLootbox) | **POST** /v1/lootboxManagers/{lootboxManagerId}/lootboxes | Set lootbox manager lootbox



## createLootboxManager

> CreateLootboxManager200Response createLootboxManager(xAuthorization, xPassword, createLootboxManagerRequest)

Create lootbox manager

Creates a new game lootbox manager and deploys a lootbox manager contract on behalf of the authenticating game&#39;s primary wallet. The deployed lootbox manager contract allows you to create lootbox behavior for existing items. For example, you can define item id(s) from one of your item collections as the requirement(s) to open a \&quot;lootbox\&quot;. The required item(s) would be burned from the interacting player&#39;s wallet and the player would receive item(s) from a weighted randomized set of possible items the lootbox can contain.

### Example

```javascript
import MetafabJavascript from 'metafab-javascript';

let apiInstance = new MetafabJavascript.LootboxesApi();
let xAuthorization = game_sk_02z4Mv3c85Ig0gNowY9Dq0N2kjb1xwzr27ArLE0669RrRI6dLf822iPO26K1p1FP; // String | The `secretKey` of the authenticating game.
let xPassword = mySecurePassword; // String | The password of the authenticating game. Required to decrypt and perform blockchain transactions with the game primary wallet.
let createLootboxManagerRequest = new MetafabJavascript.CreateLootboxManagerRequest(); // CreateLootboxManagerRequest | 
apiInstance.createLootboxManager(xAuthorization, xPassword, createLootboxManagerRequest).then((data) => {
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
 **createLootboxManagerRequest** | [**CreateLootboxManagerRequest**](CreateLootboxManagerRequest.md)|  | 

### Return type

[**CreateLootboxManager200Response**](CreateLootboxManager200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getLootboxManagerLootbox

> LootboxManagerLootbox getLootboxManagerLootbox(lootboxManagerId, lootboxManagerLootboxId)

Get lootbox manager lootbox

Returns a lootbox manager lootbox object for the provided lootboxManagerLootboxId.

### Example

```javascript
import MetafabJavascript from 'metafab-javascript';

let apiInstance = new MetafabJavascript.LootboxesApi();
let lootboxManagerId = "lootboxManagerId_example"; // String | Any lootbox manager id within the MetaFab ecosystem.
let lootboxManagerLootboxId = "lootboxManagerLootboxId_example"; // String | Any lootbox manager lootbox id within the MetaFab ecosystem.
apiInstance.getLootboxManagerLootbox(lootboxManagerId, lootboxManagerLootboxId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lootboxManagerId** | **String**| Any lootbox manager id within the MetaFab ecosystem. | 
 **lootboxManagerLootboxId** | **String**| Any lootbox manager lootbox id within the MetaFab ecosystem. | 

### Return type

[**LootboxManagerLootbox**](LootboxManagerLootbox.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getLootboxManagerLootboxes

> [LootboxManagerLootbox] getLootboxManagerLootboxes(lootboxManagerId)

Get lootbox manager lootboxes

Returns all lootbox manager lootboxes as an array of lootbox objects.

### Example

```javascript
import MetafabJavascript from 'metafab-javascript';

let apiInstance = new MetafabJavascript.LootboxesApi();
let lootboxManagerId = "lootboxManagerId_example"; // String | Any lootbox manager id within the MetaFab ecosystem.
apiInstance.getLootboxManagerLootboxes(lootboxManagerId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lootboxManagerId** | **String**| Any lootbox manager id within the MetaFab ecosystem. | 

### Return type

[**[LootboxManagerLootbox]**](LootboxManagerLootbox.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getLootboxManagers

> [GetLootboxManagers200ResponseInner] getLootboxManagers(xGameKey)

Get lootbox managers

Returns an array of active lootbox managers for the game associated with the provided &#x60;X-Game-Key&#x60;.

### Example

```javascript
import MetafabJavascript from 'metafab-javascript';

let apiInstance = new MetafabJavascript.LootboxesApi();
let xGameKey = game_pk_4SOqpDi8pQdnQgfCOBW29qR8YmwOhxVPz5iHoMgUEJLDdPXgwLuHqZf8ewo2GajZ; // String | The `publishedKey` of a specific game. This can be shared or included in game clients, websites, etc.
apiInstance.getLootboxManagers(xGameKey).then((data) => {
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

[**[GetLootboxManagers200ResponseInner]**](GetLootboxManagers200ResponseInner.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## openLootboxManagerLootbox

> [TransactionModel] openLootboxManagerLootbox(lootboxManagerId, lootboxManagerLootboxId, xAuthorization, xPassword)

Open lootbox manager lootbox

Opens a lootbox manager lootbox. The required input item(s) are burned from the wallet or player wallet opening the lootbox. The given output item(s) are given to the wallet or player wallet opening the lootbox.

### Example

```javascript
import MetafabJavascript from 'metafab-javascript';

let apiInstance = new MetafabJavascript.LootboxesApi();
let lootboxManagerId = "lootboxManagerId_example"; // String | Any lootbox manager id within the MetaFab ecosystem.
let lootboxManagerLootboxId = "lootboxManagerLootboxId_example"; // String | Any lootbox manager lootbox id within the MetaFab ecosystem.
let xAuthorization = ["game_sk_02z4Mv3c85Ig0gNowY9Dq0N2kjb1xwzr27ArLE0669RrRI6dLf822iPO26K1p1FP","player_at_02z4Mv3c85Ig0gNowY9Dq0N2kjb1xwzr27ArLE0669RrRI6dLf822iPO26K1p1FP"]; // String | The `secretKey` of a specific game or the `accessToken` of a specific player.
let xPassword = mySecurePassword; // String | The password of the authenticating game or player. Required to decrypt and perform blockchain transactions with the game or player primary wallet.
apiInstance.openLootboxManagerLootbox(lootboxManagerId, lootboxManagerLootboxId, xAuthorization, xPassword).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lootboxManagerId** | **String**| Any lootbox manager id within the MetaFab ecosystem. | 
 **lootboxManagerLootboxId** | **String**| Any lootbox manager lootbox id within the MetaFab ecosystem. | 
 **xAuthorization** | **String**| The &#x60;secretKey&#x60; of a specific game or the &#x60;accessToken&#x60; of a specific player. | 
 **xPassword** | **String**| The password of the authenticating game or player. Required to decrypt and perform blockchain transactions with the game or player primary wallet. | 

### Return type

[**[TransactionModel]**](TransactionModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## removeLootboxManagerLootbox

> TransactionModel removeLootboxManagerLootbox(lootboxManagerId, lootboxManagerLootboxId, xAuthorization, xPassword)

Remove lootbox manager lootbox

Removes the provided lootbox by lootboxId from the provided lootbox manager. Removed lootboxes can no longer be used.

### Example

```javascript
import MetafabJavascript from 'metafab-javascript';

let apiInstance = new MetafabJavascript.LootboxesApi();
let lootboxManagerId = "lootboxManagerId_example"; // String | Any lootbox manager id within the MetaFab ecosystem.
let lootboxManagerLootboxId = "lootboxManagerLootboxId_example"; // String | Any lootbox manager lootbox id within the MetaFab ecosystem.
let xAuthorization = game_sk_02z4Mv3c85Ig0gNowY9Dq0N2kjb1xwzr27ArLE0669RrRI6dLf822iPO26K1p1FP; // String | The `secretKey` of the authenticating game.
let xPassword = mySecurePassword; // String | The password of the authenticating game. Required to decrypt and perform blockchain transactions with the game primary wallet.
apiInstance.removeLootboxManagerLootbox(lootboxManagerId, lootboxManagerLootboxId, xAuthorization, xPassword).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lootboxManagerId** | **String**| Any lootbox manager id within the MetaFab ecosystem. | 
 **lootboxManagerLootboxId** | **String**| Any lootbox manager lootbox id within the MetaFab ecosystem. | 
 **xAuthorization** | **String**| The &#x60;secretKey&#x60; of the authenticating game. | 
 **xPassword** | **String**| The password of the authenticating game. Required to decrypt and perform blockchain transactions with the game primary wallet. | 

### Return type

[**TransactionModel**](TransactionModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## setLootboxManagerLootbox

> TransactionModel setLootboxManagerLootbox(lootboxManagerId, xAuthorization, xPassword, setLootboxManagerLootboxRequest)

Set lootbox manager lootbox

Sets a new lootbox manager lootbox or updates an existing one for the provided id. Lootboxes allow item(s) to be burned to receive a random set of possible item(s) based on probability weight.  Lootboxes can require any number of unique types of items and quantities to open a created lootbox type within the system. A common pattern with lootboxes is to create a lootbox item type within an item collection, and require it as the input item type.

### Example

```javascript
import MetafabJavascript from 'metafab-javascript';

let apiInstance = new MetafabJavascript.LootboxesApi();
let lootboxManagerId = "lootboxManagerId_example"; // String | Any lootbox manager id within the MetaFab ecosystem.
let xAuthorization = game_sk_02z4Mv3c85Ig0gNowY9Dq0N2kjb1xwzr27ArLE0669RrRI6dLf822iPO26K1p1FP; // String | The `secretKey` of the authenticating game.
let xPassword = mySecurePassword; // String | The password of the authenticating game. Required to decrypt and perform blockchain transactions with the game primary wallet.
let setLootboxManagerLootboxRequest = new MetafabJavascript.SetLootboxManagerLootboxRequest(); // SetLootboxManagerLootboxRequest | 
apiInstance.setLootboxManagerLootbox(lootboxManagerId, xAuthorization, xPassword, setLootboxManagerLootboxRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lootboxManagerId** | **String**| Any lootbox manager id within the MetaFab ecosystem. | 
 **xAuthorization** | **String**| The &#x60;secretKey&#x60; of the authenticating game. | 
 **xPassword** | **String**| The password of the authenticating game. Required to decrypt and perform blockchain transactions with the game primary wallet. | 
 **setLootboxManagerLootboxRequest** | [**SetLootboxManagerLootboxRequest**](SetLootboxManagerLootboxRequest.md)|  | 

### Return type

[**TransactionModel**](TransactionModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

