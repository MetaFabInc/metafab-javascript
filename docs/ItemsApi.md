# MetafabJavascript.ItemsApi

All URIs are relative to *https://api.trymetafab.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**batchMintCollectionItems**](ItemsApi.md#batchMintCollectionItems) | **POST** /v1/collections/{collectionId}/batchMints | Batch mint collection items
[**batchTransferCollectionItems**](ItemsApi.md#batchTransferCollectionItems) | **POST** /v1/collections/{collectionId}/batchTransfers | Batch transfer collection items
[**burnCollectionItem**](ItemsApi.md#burnCollectionItem) | **POST** /v1/collections/{collectionId}/items/{collectionItemId}/burns | Burn collection item
[**createCollection**](ItemsApi.md#createCollection) | **POST** /v1/collections | Create collection
[**createCollectionItem**](ItemsApi.md#createCollectionItem) | **POST** /v1/collections/{collectionId}/items | Create collection item
[**getCollectionApproval**](ItemsApi.md#getCollectionApproval) | **GET** /v1/collections/{collectionId}/approvals | Get collection approval
[**getCollectionItem**](ItemsApi.md#getCollectionItem) | **GET** /v1/collections/{collectionId}/items/{collectionItemId} | Get collection item
[**getCollectionItemBalance**](ItemsApi.md#getCollectionItemBalance) | **GET** /v1/collections/{collectionId}/items/{collectionItemId}/balances | Get collection item balance
[**getCollectionItemBalances**](ItemsApi.md#getCollectionItemBalances) | **GET** /v1/collections/{collectionId}/balances | Get collection item balances
[**getCollectionItemSupplies**](ItemsApi.md#getCollectionItemSupplies) | **GET** /v1/collections/{collectionId}/supplies | Get collection item supplies
[**getCollectionItemSupply**](ItemsApi.md#getCollectionItemSupply) | **GET** /v1/collections/{collectionId}/items/{collectionItemId}/supplies | Get collection item supply
[**getCollectionItemTimelock**](ItemsApi.md#getCollectionItemTimelock) | **GET** /v1/collections/{collectionId}/items/{collectionItemId}/timelocks | Get collection item timelock
[**getCollectionItems**](ItemsApi.md#getCollectionItems) | **GET** /v1/collections/{collectionId}/items | Get collection items
[**getCollections**](ItemsApi.md#getCollections) | **GET** /v1/collections | Get collections
[**mintCollectionItem**](ItemsApi.md#mintCollectionItem) | **POST** /v1/collections/{collectionId}/items/{collectionItemId}/mints | Mint collection item
[**setCollectionApproval**](ItemsApi.md#setCollectionApproval) | **POST** /v1/collections/{collectionId}/approvals | Set collection approval
[**setCollectionItemTimelock**](ItemsApi.md#setCollectionItemTimelock) | **POST** /v1/collections/{collectionId}/items/{collectionItemId}/timelocks | Set collection item timelock
[**transferCollectionItem**](ItemsApi.md#transferCollectionItem) | **POST** /v1/collections/{collectionId}/items/{collectionItemId}/transfers | Transfer collection item



## batchMintCollectionItems

> TransactionModel batchMintCollectionItems(collectionId, xAuthorization, xPassword, batchMintCollectionItemsRequest)

Batch mint collection items

Creates (mints) the provided itemIds of the specified quantities to the provided wallet address or wallet address associated with the provided walletId.

### Example

```javascript
import MetafabJavascript from 'metafab-javascript';

let apiInstance = new MetafabJavascript.ItemsApi();
let collectionId = "collectionId_example"; // String | Any collection id within the MetaFab ecosystem.
let xAuthorization = game_sk_02z4Mv3c85Ig0gNowY9Dq0N2kjb1xwzr27ArLE0669RrRI6dLf822iPO26K1p1FP; // String | The `secretKey` of the authenticating game.
let xPassword = mySecurePassword; // String | The password of the authenticating game. Required to decrypt and perform blockchain transactions with the game primary wallet.
let batchMintCollectionItemsRequest = new MetafabJavascript.BatchMintCollectionItemsRequest(); // BatchMintCollectionItemsRequest | 
apiInstance.batchMintCollectionItems(collectionId, xAuthorization, xPassword, batchMintCollectionItemsRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionId** | **String**| Any collection id within the MetaFab ecosystem. | 
 **xAuthorization** | **String**| The &#x60;secretKey&#x60; of the authenticating game. | 
 **xPassword** | **String**| The password of the authenticating game. Required to decrypt and perform blockchain transactions with the game primary wallet. | 
 **batchMintCollectionItemsRequest** | [**BatchMintCollectionItemsRequest**](BatchMintCollectionItemsRequest.md)|  | 

### Return type

[**TransactionModel**](TransactionModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## batchTransferCollectionItems

> TransactionModel batchTransferCollectionItems(collectionId, xAuthorization, xPassword, batchTransferCollectionItemsRequest)

Batch transfer collection items

Transfers one or multiple items of specified quantities to the provided wallet addresses or wallet addresses associated with the provided walletIds. You may also provide a combination of addresses and walletIds in one request.

### Example

```javascript
import MetafabJavascript from 'metafab-javascript';

let apiInstance = new MetafabJavascript.ItemsApi();
let collectionId = "collectionId_example"; // String | Any collection id within the MetaFab ecosystem.
let xAuthorization = ["game_sk_02z4Mv3c85Ig0gNowY9Dq0N2kjb1xwzr27ArLE0669RrRI6dLf822iPO26K1p1FP","player_at_02z4Mv3c85Ig0gNowY9Dq0N2kjb1xwzr27ArLE0669RrRI6dLf822iPO26K1p1FP"]; // String | The `secretKey` of a specific game or the `accessToken` of a specific player.
let xPassword = mySecurePassword; // String | The password of the authenticating game or player. Required to decrypt and perform blockchain transactions with the game or player primary wallet.
let batchTransferCollectionItemsRequest = new MetafabJavascript.BatchTransferCollectionItemsRequest(); // BatchTransferCollectionItemsRequest | 
apiInstance.batchTransferCollectionItems(collectionId, xAuthorization, xPassword, batchTransferCollectionItemsRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionId** | **String**| Any collection id within the MetaFab ecosystem. | 
 **xAuthorization** | **String**| The &#x60;secretKey&#x60; of a specific game or the &#x60;accessToken&#x60; of a specific player. | 
 **xPassword** | **String**| The password of the authenticating game or player. Required to decrypt and perform blockchain transactions with the game or player primary wallet. | 
 **batchTransferCollectionItemsRequest** | [**BatchTransferCollectionItemsRequest**](BatchTransferCollectionItemsRequest.md)|  | 

### Return type

[**TransactionModel**](TransactionModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## burnCollectionItem

> TransactionModel burnCollectionItem(collectionId, collectionItemId, xAuthorization, xPassword, burnCollectionItemRequest)

Burn collection item

Removes (burns) the provided quantity of the collectionItemId from the authenticating game or players wallet. The quantity is permanently removed from the circulating supply of the item.

### Example

```javascript
import MetafabJavascript from 'metafab-javascript';

let apiInstance = new MetafabJavascript.ItemsApi();
let collectionId = "collectionId_example"; // String | Any collection id within the MetaFab ecosystem.
let collectionItemId = 3.4; // Number | Any item id for the collection. Zero, or a positive integer.
let xAuthorization = ["game_sk_02z4Mv3c85Ig0gNowY9Dq0N2kjb1xwzr27ArLE0669RrRI6dLf822iPO26K1p1FP","player_at_02z4Mv3c85Ig0gNowY9Dq0N2kjb1xwzr27ArLE0669RrRI6dLf822iPO26K1p1FP"]; // String | The `secretKey` of a specific game or the `accessToken` of a specific player.
let xPassword = mySecurePassword; // String | The password of the authenticating game or player. Required to decrypt and perform blockchain transactions with the game or player primary wallet.
let burnCollectionItemRequest = new MetafabJavascript.BurnCollectionItemRequest(); // BurnCollectionItemRequest | 
apiInstance.burnCollectionItem(collectionId, collectionItemId, xAuthorization, xPassword, burnCollectionItemRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionId** | **String**| Any collection id within the MetaFab ecosystem. | 
 **collectionItemId** | **Number**| Any item id for the collection. Zero, or a positive integer. | 
 **xAuthorization** | **String**| The &#x60;secretKey&#x60; of a specific game or the &#x60;accessToken&#x60; of a specific player. | 
 **xPassword** | **String**| The password of the authenticating game or player. Required to decrypt and perform blockchain transactions with the game or player primary wallet. | 
 **burnCollectionItemRequest** | [**BurnCollectionItemRequest**](BurnCollectionItemRequest.md)|  | 

### Return type

[**TransactionModel**](TransactionModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createCollection

> CreateCollection200Response createCollection(xAuthorization, xPassword, createCollectionRequest)

Create collection

Creates a new game item collection and deploys an extended functionality ERC1155 contract on behalf of the authenticating game&#39;s primary wallet. The deployed ERC1155 contract is preconfigured to fully support creating unique item types, item transfer timelocks, custom metadata per item, gasless transactions from player managed wallets, and much more.

### Example

```javascript
import MetafabJavascript from 'metafab-javascript';

let apiInstance = new MetafabJavascript.ItemsApi();
let xAuthorization = game_sk_02z4Mv3c85Ig0gNowY9Dq0N2kjb1xwzr27ArLE0669RrRI6dLf822iPO26K1p1FP; // String | The `secretKey` of the authenticating game.
let xPassword = mySecurePassword; // String | The password of the authenticating game. Required to decrypt and perform blockchain transactions with the game primary wallet.
let createCollectionRequest = new MetafabJavascript.CreateCollectionRequest(); // CreateCollectionRequest | 
apiInstance.createCollection(xAuthorization, xPassword, createCollectionRequest).then((data) => {
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
 **createCollectionRequest** | [**CreateCollectionRequest**](CreateCollectionRequest.md)|  | 

### Return type

[**CreateCollection200Response**](CreateCollection200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createCollectionItem

> TransactionModel createCollectionItem(collectionId, xAuthorization, xPassword, createCollectionItemRequest)

Create collection item

Creates a new item type. Item type creation associates all of the relevant item data to a specific itemId. Such as item name, image, description, attributes, any arbitrary data such as 2D or 3D model resolver URLs, and more. It is recommended, but not required, that you create a new item type through this endpoint before minting any quantity of the related itemId.  Item type data is uploaded to, and resolved through IPFS for decentralized persistence. Any itemId provided will have its existing item type overriden if it already exists.

### Example

```javascript
import MetafabJavascript from 'metafab-javascript';

let apiInstance = new MetafabJavascript.ItemsApi();
let collectionId = "collectionId_example"; // String | Any collection id within the MetaFab ecosystem.
let xAuthorization = game_sk_02z4Mv3c85Ig0gNowY9Dq0N2kjb1xwzr27ArLE0669RrRI6dLf822iPO26K1p1FP; // String | The `secretKey` of the authenticating game.
let xPassword = mySecurePassword; // String | The password of the authenticating game. Required to decrypt and perform blockchain transactions with the game primary wallet.
let createCollectionItemRequest = new MetafabJavascript.CreateCollectionItemRequest(); // CreateCollectionItemRequest | 
apiInstance.createCollectionItem(collectionId, xAuthorization, xPassword, createCollectionItemRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionId** | **String**| Any collection id within the MetaFab ecosystem. | 
 **xAuthorization** | **String**| The &#x60;secretKey&#x60; of the authenticating game. | 
 **xPassword** | **String**| The password of the authenticating game. Required to decrypt and perform blockchain transactions with the game primary wallet. | 
 **createCollectionItemRequest** | [**CreateCollectionItemRequest**](CreateCollectionItemRequest.md)|  | 

### Return type

[**TransactionModel**](TransactionModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getCollectionApproval

> Number getCollectionApproval(collectionId, operatorAddress, opts)

Get collection approval

Returns a boolean (true/false) representing if the provided operatorAddress has approval to transfer and burn items from the current collection owned by the address or address associated with the provided walletId.

### Example

```javascript
import MetafabJavascript from 'metafab-javascript';

let apiInstance = new MetafabJavascript.ItemsApi();
let collectionId = "collectionId_example"; // String | Any collection id within the MetaFab ecosystem.
let operatorAddress = 0x39cb70F972E0EE920088AeF97Dbe5c6251a9c25D; // String | A valid EVM based address. For example, `0x39cb70F972E0EE920088AeF97Dbe5c6251a9c25D`.
let opts = {
  'address': 0x39cb70F972E0EE920088AeF97Dbe5c6251a9c25D, // String | A valid EVM based address. For example, `0x39cb70F972E0EE920088AeF97Dbe5c6251a9c25D`.
  'walletId': "walletId_example" // String | Any wallet id within the MetaFab ecosystem.
};
apiInstance.getCollectionApproval(collectionId, operatorAddress, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionId** | **String**| Any collection id within the MetaFab ecosystem. | 
 **operatorAddress** | **String**| A valid EVM based address. For example, &#x60;0x39cb70F972E0EE920088AeF97Dbe5c6251a9c25D&#x60;. | 
 **address** | **String**| A valid EVM based address. For example, &#x60;0x39cb70F972E0EE920088AeF97Dbe5c6251a9c25D&#x60;. | [optional] 
 **walletId** | **String**| Any wallet id within the MetaFab ecosystem. | [optional] 

### Return type

**Number**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCollectionItem

> [Object] getCollectionItem(collectionId, collectionItemId)

Get collection item

Returns a metadata object for the provided collectionItemId.

### Example

```javascript
import MetafabJavascript from 'metafab-javascript';

let apiInstance = new MetafabJavascript.ItemsApi();
let collectionId = "collectionId_example"; // String | Any collection id within the MetaFab ecosystem.
let collectionItemId = 3.4; // Number | Any item id for the collection. Zero, or a positive integer.
apiInstance.getCollectionItem(collectionId, collectionItemId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionId** | **String**| Any collection id within the MetaFab ecosystem. | 
 **collectionItemId** | **Number**| Any item id for the collection. Zero, or a positive integer. | 

### Return type

**[Object]**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCollectionItemBalance

> Number getCollectionItemBalance(collectionId, collectionItemId, opts)

Get collection item balance

Returns the current collection item balance of the provided collectionItemId for the provided wallet address or the wallet address associated with the provided walletId.

### Example

```javascript
import MetafabJavascript from 'metafab-javascript';

let apiInstance = new MetafabJavascript.ItemsApi();
let collectionId = "collectionId_example"; // String | Any collection id within the MetaFab ecosystem.
let collectionItemId = 3.4; // Number | Any item id for the collection. Zero, or a positive integer.
let opts = {
  'address': 0x39cb70F972E0EE920088AeF97Dbe5c6251a9c25D, // String | A valid EVM based address. For example, `0x39cb70F972E0EE920088AeF97Dbe5c6251a9c25D`.
  'walletId': "walletId_example" // String | Any wallet id within the MetaFab ecosystem.
};
apiInstance.getCollectionItemBalance(collectionId, collectionItemId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionId** | **String**| Any collection id within the MetaFab ecosystem. | 
 **collectionItemId** | **Number**| Any item id for the collection. Zero, or a positive integer. | 
 **address** | **String**| A valid EVM based address. For example, &#x60;0x39cb70F972E0EE920088AeF97Dbe5c6251a9c25D&#x60;. | [optional] 
 **walletId** | **String**| Any wallet id within the MetaFab ecosystem. | [optional] 

### Return type

**Number**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCollectionItemBalances

> {String: Number} getCollectionItemBalances(collectionId, opts)

Get collection item balances

Returns the current collection item balances of all collection items for the provided wallet address or the wallet address associated with the provided walletId.

### Example

```javascript
import MetafabJavascript from 'metafab-javascript';

let apiInstance = new MetafabJavascript.ItemsApi();
let collectionId = "collectionId_example"; // String | Any collection id within the MetaFab ecosystem.
let opts = {
  'address': 0x39cb70F972E0EE920088AeF97Dbe5c6251a9c25D, // String | A valid EVM based address. For example, `0x39cb70F972E0EE920088AeF97Dbe5c6251a9c25D`.
  'walletId': "walletId_example" // String | Any wallet id within the MetaFab ecosystem.
};
apiInstance.getCollectionItemBalances(collectionId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionId** | **String**| Any collection id within the MetaFab ecosystem. | 
 **address** | **String**| A valid EVM based address. For example, &#x60;0x39cb70F972E0EE920088AeF97Dbe5c6251a9c25D&#x60;. | [optional] 
 **walletId** | **String**| Any wallet id within the MetaFab ecosystem. | [optional] 

### Return type

**{String: Number}**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCollectionItemSupplies

> {String: Number} getCollectionItemSupplies(collectionId)

Get collection item supplies

Returns the currency circulating supply of all collection items.

### Example

```javascript
import MetafabJavascript from 'metafab-javascript';

let apiInstance = new MetafabJavascript.ItemsApi();
let collectionId = "collectionId_example"; // String | Any collection id within the MetaFab ecosystem.
apiInstance.getCollectionItemSupplies(collectionId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionId** | **String**| Any collection id within the MetaFab ecosystem. | 

### Return type

**{String: Number}**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCollectionItemSupply

> Number getCollectionItemSupply(collectionId, collectionItemId, opts)

Get collection item supply

Returns the current circulating supply of the provided collectionItemId.

### Example

```javascript
import MetafabJavascript from 'metafab-javascript';

let apiInstance = new MetafabJavascript.ItemsApi();
let collectionId = "collectionId_example"; // String | Any collection id within the MetaFab ecosystem.
let collectionItemId = 3.4; // Number | Any item id for the collection. Zero, or a positive integer.
let opts = {
  'address': 0x39cb70F972E0EE920088AeF97Dbe5c6251a9c25D, // String | A valid EVM based address. For example, `0x39cb70F972E0EE920088AeF97Dbe5c6251a9c25D`.
  'walletId': "walletId_example" // String | Any wallet id within the MetaFab ecosystem.
};
apiInstance.getCollectionItemSupply(collectionId, collectionItemId, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionId** | **String**| Any collection id within the MetaFab ecosystem. | 
 **collectionItemId** | **Number**| Any item id for the collection. Zero, or a positive integer. | 
 **address** | **String**| A valid EVM based address. For example, &#x60;0x39cb70F972E0EE920088AeF97Dbe5c6251a9c25D&#x60;. | [optional] 
 **walletId** | **String**| Any wallet id within the MetaFab ecosystem. | [optional] 

### Return type

**Number**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCollectionItemTimelock

> Number getCollectionItemTimelock(collectionId, collectionItemId)

Get collection item timelock

Returns a timestamp (in seconds) for when the provided collectionItemId&#39;s transfer timelock expires. A value of 0 means the provided collectionItemId does not have a timelock set. Timelocks prevent items of a specific collectionItemId from being transferred until the set timelock timestamp has been surpassed.

### Example

```javascript
import MetafabJavascript from 'metafab-javascript';

let apiInstance = new MetafabJavascript.ItemsApi();
let collectionId = "collectionId_example"; // String | Any collection id within the MetaFab ecosystem.
let collectionItemId = 3.4; // Number | Any item id for the collection. Zero, or a positive integer.
apiInstance.getCollectionItemTimelock(collectionId, collectionItemId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionId** | **String**| Any collection id within the MetaFab ecosystem. | 
 **collectionItemId** | **Number**| Any item id for the collection. Zero, or a positive integer. | 

### Return type

**Number**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCollectionItems

> [Object] getCollectionItems(collectionId)

Get collection items

Returns all collection items as an array of metadata objects.

### Example

```javascript
import MetafabJavascript from 'metafab-javascript';

let apiInstance = new MetafabJavascript.ItemsApi();
let collectionId = "collectionId_example"; // String | Any collection id within the MetaFab ecosystem.
apiInstance.getCollectionItems(collectionId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionId** | **String**| Any collection id within the MetaFab ecosystem. | 

### Return type

**[Object]**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getCollections

> [GetCollections200ResponseInner] getCollections(xGameKey)

Get collections

Returns an array of active item collections for the game associated with the provided &#x60;X-Game-Key&#x60;.

### Example

```javascript
import MetafabJavascript from 'metafab-javascript';

let apiInstance = new MetafabJavascript.ItemsApi();
let xGameKey = game_pk_4SOqpDi8pQdnQgfCOBW29qR8YmwOhxVPz5iHoMgUEJLDdPXgwLuHqZf8ewo2GajZ; // String | The `publishedKey` of a specific game. This can be shared or included in game clients, websites, etc.
apiInstance.getCollections(xGameKey).then((data) => {
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

[**[GetCollections200ResponseInner]**](GetCollections200ResponseInner.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## mintCollectionItem

> TransactionModel mintCollectionItem(collectionId, collectionItemId, xAuthorization, xPassword, mintCollectionItemRequest)

Mint collection item

Creates (mints) the specified quantity of the provided collectionItemId to the provided wallet address or wallet address associated with the provided walletId.

### Example

```javascript
import MetafabJavascript from 'metafab-javascript';

let apiInstance = new MetafabJavascript.ItemsApi();
let collectionId = "collectionId_example"; // String | Any collection id within the MetaFab ecosystem.
let collectionItemId = 3.4; // Number | Any item id for the collection. Zero, or a positive integer.
let xAuthorization = game_sk_02z4Mv3c85Ig0gNowY9Dq0N2kjb1xwzr27ArLE0669RrRI6dLf822iPO26K1p1FP; // String | The `secretKey` of the authenticating game.
let xPassword = mySecurePassword; // String | The password of the authenticating game. Required to decrypt and perform blockchain transactions with the game primary wallet.
let mintCollectionItemRequest = new MetafabJavascript.MintCollectionItemRequest(); // MintCollectionItemRequest | 
apiInstance.mintCollectionItem(collectionId, collectionItemId, xAuthorization, xPassword, mintCollectionItemRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionId** | **String**| Any collection id within the MetaFab ecosystem. | 
 **collectionItemId** | **Number**| Any item id for the collection. Zero, or a positive integer. | 
 **xAuthorization** | **String**| The &#x60;secretKey&#x60; of the authenticating game. | 
 **xPassword** | **String**| The password of the authenticating game. Required to decrypt and perform blockchain transactions with the game primary wallet. | 
 **mintCollectionItemRequest** | [**MintCollectionItemRequest**](MintCollectionItemRequest.md)|  | 

### Return type

[**TransactionModel**](TransactionModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## setCollectionApproval

> TransactionModel setCollectionApproval(collectionId, xAuthorization, xPassword, setCollectionApprovalRequest)

Set collection approval

Sets approval for the provided address or wallet address associated with the provided walletId to operate on behalf of the authenticating game or player&#39;s owned items for this collection. Setting an approved value of &#x60;true&#x60; allows the provided address or address associated with the provided walletId to transfer and burn items from this collection on behalf of the authenticated game or player&#39;s wallet address.

### Example

```javascript
import MetafabJavascript from 'metafab-javascript';

let apiInstance = new MetafabJavascript.ItemsApi();
let collectionId = "collectionId_example"; // String | Any collection id within the MetaFab ecosystem.
let xAuthorization = ["game_sk_02z4Mv3c85Ig0gNowY9Dq0N2kjb1xwzr27ArLE0669RrRI6dLf822iPO26K1p1FP","player_at_02z4Mv3c85Ig0gNowY9Dq0N2kjb1xwzr27ArLE0669RrRI6dLf822iPO26K1p1FP"]; // String | The `secretKey` of a specific game or the `accessToken` of a specific player.
let xPassword = mySecurePassword; // String | The password of the authenticating game or player. Required to decrypt and perform blockchain transactions with the game or player primary wallet.
let setCollectionApprovalRequest = new MetafabJavascript.SetCollectionApprovalRequest(); // SetCollectionApprovalRequest | 
apiInstance.setCollectionApproval(collectionId, xAuthorization, xPassword, setCollectionApprovalRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionId** | **String**| Any collection id within the MetaFab ecosystem. | 
 **xAuthorization** | **String**| The &#x60;secretKey&#x60; of a specific game or the &#x60;accessToken&#x60; of a specific player. | 
 **xPassword** | **String**| The password of the authenticating game or player. Required to decrypt and perform blockchain transactions with the game or player primary wallet. | 
 **setCollectionApprovalRequest** | [**SetCollectionApprovalRequest**](SetCollectionApprovalRequest.md)|  | 

### Return type

[**TransactionModel**](TransactionModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## setCollectionItemTimelock

> TransactionModel setCollectionItemTimelock(collectionId, collectionItemId, xAuthorization, xPassword, setCollectionItemTimelockRequest)

Set collection item timelock

Sets the item timelock for the provided collection itemId. The timelock is a unix timestamp (in seconds) that defines a period in time of when an item may be transferred by players. Until the timelock timestamp has passed, the itemId for the given timelock may not be transferred, sold, traded, etc. A timelock of 0 (default) means that there is no timelock set on the itemId and it can be freely transferred, traded, etc.

### Example

```javascript
import MetafabJavascript from 'metafab-javascript';

let apiInstance = new MetafabJavascript.ItemsApi();
let collectionId = "collectionId_example"; // String | Any collection id within the MetaFab ecosystem.
let collectionItemId = 3.4; // Number | Any item id for the collection. Zero, or a positive integer.
let xAuthorization = game_sk_02z4Mv3c85Ig0gNowY9Dq0N2kjb1xwzr27ArLE0669RrRI6dLf822iPO26K1p1FP; // String | The `secretKey` of the authenticating game.
let xPassword = mySecurePassword; // String | The password of the authenticating game. Required to decrypt and perform blockchain transactions with the game primary wallet.
let setCollectionItemTimelockRequest = new MetafabJavascript.SetCollectionItemTimelockRequest(); // SetCollectionItemTimelockRequest | 
apiInstance.setCollectionItemTimelock(collectionId, collectionItemId, xAuthorization, xPassword, setCollectionItemTimelockRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionId** | **String**| Any collection id within the MetaFab ecosystem. | 
 **collectionItemId** | **Number**| Any item id for the collection. Zero, or a positive integer. | 
 **xAuthorization** | **String**| The &#x60;secretKey&#x60; of the authenticating game. | 
 **xPassword** | **String**| The password of the authenticating game. Required to decrypt and perform blockchain transactions with the game primary wallet. | 
 **setCollectionItemTimelockRequest** | [**SetCollectionItemTimelockRequest**](SetCollectionItemTimelockRequest.md)|  | 

### Return type

[**TransactionModel**](TransactionModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## transferCollectionItem

> TransactionModel transferCollectionItem(collectionId, collectionItemId, xAuthorization, xPassword, transferCollectionItemRequest)

Transfer collection item

Transfers specified quantity of itemId to the provided wallet address or wallet address associated with the provided walletId.

### Example

```javascript
import MetafabJavascript from 'metafab-javascript';

let apiInstance = new MetafabJavascript.ItemsApi();
let collectionId = "collectionId_example"; // String | Any collection id within the MetaFab ecosystem.
let collectionItemId = 3.4; // Number | Any item id for the collection. Zero, or a positive integer.
let xAuthorization = ["game_sk_02z4Mv3c85Ig0gNowY9Dq0N2kjb1xwzr27ArLE0669RrRI6dLf822iPO26K1p1FP","player_at_02z4Mv3c85Ig0gNowY9Dq0N2kjb1xwzr27ArLE0669RrRI6dLf822iPO26K1p1FP"]; // String | The `secretKey` of a specific game or the `accessToken` of a specific player.
let xPassword = mySecurePassword; // String | The password of the authenticating game or player. Required to decrypt and perform blockchain transactions with the game or player primary wallet.
let transferCollectionItemRequest = new MetafabJavascript.TransferCollectionItemRequest(); // TransferCollectionItemRequest | 
apiInstance.transferCollectionItem(collectionId, collectionItemId, xAuthorization, xPassword, transferCollectionItemRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collectionId** | **String**| Any collection id within the MetaFab ecosystem. | 
 **collectionItemId** | **Number**| Any item id for the collection. Zero, or a positive integer. | 
 **xAuthorization** | **String**| The &#x60;secretKey&#x60; of a specific game or the &#x60;accessToken&#x60; of a specific player. | 
 **xPassword** | **String**| The password of the authenticating game or player. Required to decrypt and perform blockchain transactions with the game or player primary wallet. | 
 **transferCollectionItemRequest** | [**TransferCollectionItemRequest**](TransferCollectionItemRequest.md)|  | 

### Return type

[**TransactionModel**](TransactionModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

