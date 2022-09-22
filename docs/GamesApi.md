# MetaFabApi.GamesApi

All URIs are relative to *https://api.trymetafab.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1GamesGameIdPatch**](GamesApi.md#v1GamesGameIdPatch) | **PATCH** /v1/games/{gameId} | Update game
[**v1GamesGet**](GamesApi.md#v1GamesGet) | **GET** /v1/games | Authenticate game
[**v1GamesPost**](GamesApi.md#v1GamesPost) | **POST** /v1/games | Create game



## v1GamesGameIdPatch

> GameModel v1GamesGameIdPatch(gameId, xAuthorization, v1GamesGameIdPatchRequest)

Update game

Update various fields specific to a game. Such as changing its password, resetting its published or secret key, or updating its RPCs.

### Example

```javascript
import MetaFabApi from 'meta_fab_api';

let apiInstance = new MetaFabApi.GamesApi();
let gameId = "gameId_example"; // String | Any game id within the MetaFab ecosystem.
let xAuthorization = game_sk_02z4Mv3c85Ig0gNowY9Dq0N2kjb1xwzr27ArLE0669RrRI6dLf822iPO26K1p1FP; // String | The `secretKey` of the authenticating game.
let v1GamesGameIdPatchRequest = new MetaFabApi.V1GamesGameIdPatchRequest(); // V1GamesGameIdPatchRequest | 
apiInstance.v1GamesGameIdPatch(gameId, xAuthorization, v1GamesGameIdPatchRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameId** | **String**| Any game id within the MetaFab ecosystem. | 
 **xAuthorization** | **String**| The &#x60;secretKey&#x60; of the authenticating game. | 
 **v1GamesGameIdPatchRequest** | [**V1GamesGameIdPatchRequest**](V1GamesGameIdPatchRequest.md)|  | 

### Return type

[**GameModel**](GameModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1GamesGet

> V1GamesGet200Response v1GamesGet()

Authenticate game

Returns an existing game object containing authorization keys and credentials when provided a valid email (in place of username) and password login using Basic Auth.

### Example

```javascript
import MetaFabApi from 'meta_fab_api';
let defaultClient = MetaFabApi.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new MetaFabApi.GamesApi();
apiInstance.v1GamesGet().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**V1GamesGet200Response**](V1GamesGet200Response.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1GamesPost

> V1GamesGet200Response v1GamesPost(v1GamesGetRequest)

Create game

Create a new game. A game is the root entity required for all API interactions. Contracts, currencies, items and more are deployed by games, player accounts are created and registered to games, etc.  To use any of MetaFab&#39;s services, you must first create a game through this endpoint.  **Game creation is limited during our closed beta. Please contact ArkDev#4501 on Discord to be a part of our beta.**

### Example

```javascript
import MetaFabApi from 'meta_fab_api';

let apiInstance = new MetaFabApi.GamesApi();
let v1GamesGetRequest = new MetaFabApi.V1GamesGetRequest(); // V1GamesGetRequest | 
apiInstance.v1GamesPost(v1GamesGetRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **v1GamesGetRequest** | [**V1GamesGetRequest**](V1GamesGetRequest.md)|  | 

### Return type

[**V1GamesGet200Response**](V1GamesGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

