# MetaFabApi.ContractsApi

All URIs are relative to *https://api.trymetafab.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1ContractsContractIdReadsGet**](ContractsApi.md#v1ContractsContractIdReadsGet) | **GET** /v1/contracts/{contractId}/reads | Read contract data
[**v1ContractsContractIdWritesPost**](ContractsApi.md#v1ContractsContractIdWritesPost) | **POST** /v1/contracts/{contractId}/writes | Write contract data
[**v1ContractsGet**](ContractsApi.md#v1ContractsGet) | **GET** /v1/contracts | Get contracts
[**v1ContractsPost**](ContractsApi.md#v1ContractsPost) | **POST** /v1/contracts | Create custom contract



## v1ContractsContractIdReadsGet

> Object v1ContractsContractIdReadsGet(contractId, func, opts)

Read contract data

Oftentimes you&#39;ll want to query and retrieve some data from a contract. This is incredibly easy to do for any contract deployed through MetaFab.  Using this endpoint, you can get the data returned by any readable function listed in a contracts ABI. This could be things like querying the totalSupply of a currency contract, the number of owners of an items contract, and more.

### Example

```javascript
import MetaFabApi from 'meta_fab_api';

let apiInstance = new MetaFabApi.ContractsApi();
let contractId = "contractId_example"; // String | Any contract id within the MetaFab ecosystem.
let func = "func_example"; // String | A contract function name. This can be any valid function from the the ABI of the contract you are interacting with. For example, `balanceOf`.
let opts = {
  'args': 123,"Hello",false // String | A comma seperated list of basic data type arguments. This is optional and only necessary if the function being invoked requires arguments per the contract ABI. For example, `123,\"Hello\",false`.
};
apiInstance.v1ContractsContractIdReadsGet(contractId, func, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contractId** | **String**| Any contract id within the MetaFab ecosystem. | 
 **func** | **String**| A contract function name. This can be any valid function from the the ABI of the contract you are interacting with. For example, &#x60;balanceOf&#x60;. | 
 **args** | **String**| A comma seperated list of basic data type arguments. This is optional and only necessary if the function being invoked requires arguments per the contract ABI. For example, &#x60;123,\&quot;Hello\&quot;,false&#x60;. | [optional] 

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1ContractsContractIdWritesPost

> TransactionModel v1ContractsContractIdWritesPost(contractId, xAuthorization, xPassword, v1ContractsContractIdWritesPostRequest)

Write contract data

MetaFab&#39;s convenience endpoints for contract interactions may not be flexible enough depending on your use case. For these situations, you can interact with contracts and create transactions directly.  Using this endpoint, you can execute a transaction for any writeable contract method as defined in the contract&#39;s ABI for the MetaFab contractId provided. Both Games and Player resources have authority to use this endpoint to execute transactions against any valid MetaFab contractId.  Additionally, MetaFab will automatically attempt to perform a gasless transaction for players interacting with a contract through this endpoint. Gasless transactions by players through this endpoint will only work if the target contract was deployed through MetaFab or supports MetaFab&#39;s ERC2771 trusted forwarder contract.

### Example

```javascript
import MetaFabApi from 'meta_fab_api';

let apiInstance = new MetaFabApi.ContractsApi();
let contractId = "contractId_example"; // String | Any contract id within the MetaFab ecosystem.
let xAuthorization = ["game_sk_02z4Mv3c85Ig0gNowY9Dq0N2kjb1xwzr27ArLE0669RrRI6dLf822iPO26K1p1FP","player_at_02z4Mv3c85Ig0gNowY9Dq0N2kjb1xwzr27ArLE0669RrRI6dLf822iPO26K1p1FP"]; // String | The `secretKey` of a specific game or the `accessToken` of a specific player.
let xPassword = mySecurePassword; // String | The password of the authenticating game or player. Required to decrypt and perform blockchain transactions with the game or player primary wallet.
let v1ContractsContractIdWritesPostRequest = new MetaFabApi.V1ContractsContractIdWritesPostRequest(); // V1ContractsContractIdWritesPostRequest | 
apiInstance.v1ContractsContractIdWritesPost(contractId, xAuthorization, xPassword, v1ContractsContractIdWritesPostRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contractId** | **String**| Any contract id within the MetaFab ecosystem. | 
 **xAuthorization** | **String**| The &#x60;secretKey&#x60; of a specific game or the &#x60;accessToken&#x60; of a specific player. | 
 **xPassword** | **String**| The password of the authenticating game or player. Required to decrypt and perform blockchain transactions with the game or player primary wallet. | 
 **v1ContractsContractIdWritesPostRequest** | [**V1ContractsContractIdWritesPostRequest**](V1ContractsContractIdWritesPostRequest.md)|  | 

### Return type

[**TransactionModel**](TransactionModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1ContractsGet

> [ContractModel] v1ContractsGet(xGameKey)

Get contracts

Returns an array of active contracts deployed by the game associated with the provided &#x60;X-Game-Key&#x60;.

### Example

```javascript
import MetaFabApi from 'meta_fab_api';

let apiInstance = new MetaFabApi.ContractsApi();
let xGameKey = game_pk_4SOqpDi8pQdnQgfCOBW29qR8YmwOhxVPz5iHoMgUEJLDdPXgwLuHqZf8ewo2GajZ; // String | The `publishedKey` of a specific game. This can be shared or included in game clients, websites, etc.
apiInstance.v1ContractsGet(xGameKey).then((data) => {
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

[**[ContractModel]**](ContractModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1ContractsPost

> ContractModel v1ContractsPost(xAuthorization, v1ContractsGetRequest)

Create custom contract

Create a MetaFab custom contract entry from an existing contract address and contract abi. This allows the game and players belonging to the authenticated game to interact with the contract&#39;s read and write functions through MetaFab&#39;s read and write contract endpoints.

### Example

```javascript
import MetaFabApi from 'meta_fab_api';

let apiInstance = new MetaFabApi.ContractsApi();
let xAuthorization = game_sk_02z4Mv3c85Ig0gNowY9Dq0N2kjb1xwzr27ArLE0669RrRI6dLf822iPO26K1p1FP; // String | The `secretKey` of the authenticating game.
let v1ContractsGetRequest = new MetaFabApi.V1ContractsGetRequest(); // V1ContractsGetRequest | 
apiInstance.v1ContractsPost(xAuthorization, v1ContractsGetRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAuthorization** | **String**| The &#x60;secretKey&#x60; of the authenticating game. | 
 **v1ContractsGetRequest** | [**V1ContractsGetRequest**](V1ContractsGetRequest.md)|  | 

### Return type

[**ContractModel**](ContractModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

