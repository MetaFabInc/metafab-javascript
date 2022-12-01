# MetafabJavascript.GamesApi

All URIs are relative to *https://api.trymetafab.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authGame**](GamesApi.md#authGame) | **GET** /v1/games/auth | Authenticate game
[**createGame**](GamesApi.md#createGame) | **POST** /v1/games | Create game
[**getGame**](GamesApi.md#getGame) | **GET** /v1/games/{gameId} | Get game
[**updateGame**](GamesApi.md#updateGame) | **PATCH** /v1/games/{gameId} | Update game



## authGame

> AuthGame200Response authGame()

Authenticate game

Returns an existing game object containing authorization keys and credentials when provided a valid email (in place of username) and password login using Basic Auth.

### Example

```javascript
import MetafabJavascript from 'metafab-javascript';
let defaultClient = MetafabJavascript.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new MetafabJavascript.GamesApi();
apiInstance.authGame().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**AuthGame200Response**](AuthGame200Response.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## createGame

> AuthGame200Response createGame(createGameRequest)

Create game

Create a new game. A game is the root entity required for all API interactions. Contracts, currencies, items and more are deployed by games, player accounts are created and registered to games, etc.  To use any of MetaFab&#39;s services, you must first create a game through this endpoint.  After creating your game through this endpoint, a verification email will be sent to the email address used. Before you can access any of MetaFab&#39;s features, you&#39;ll need to click the link contained in the verification email to verify your account.

### Example

```javascript
import MetafabJavascript from 'metafab-javascript';

let apiInstance = new MetafabJavascript.GamesApi();
let createGameRequest = new MetafabJavascript.CreateGameRequest(); // CreateGameRequest | 
apiInstance.createGame(createGameRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createGameRequest** | [**CreateGameRequest**](CreateGameRequest.md)|  | 

### Return type

[**AuthGame200Response**](AuthGame200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getGame

> PublicGame getGame(gameId)

Get game

Returns a game object for the provided game id.

### Example

```javascript
import MetafabJavascript from 'metafab-javascript';

let apiInstance = new MetafabJavascript.GamesApi();
let gameId = "gameId_example"; // String | Any game id within the MetaFab ecosystem.
apiInstance.getGame(gameId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **gameId** | **String**| Any game id within the MetaFab ecosystem. | 

### Return type

[**PublicGame**](PublicGame.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateGame

> GameModel updateGame(gameId, xAuthorization, updateGameRequest)

Update game

Update various fields specific to a game. Such as changing its password, resetting its published or secret key, or updating its RPCs.

### Example

```javascript
import MetafabJavascript from 'metafab-javascript';

let apiInstance = new MetafabJavascript.GamesApi();
let gameId = "gameId_example"; // String | Any game id within the MetaFab ecosystem.
let xAuthorization = game_sk_02z4Mv3c85Ig0gNowY9Dq0N2kjb1xwzr27ArLE0669RrRI6dLf822iPO26K1p1FP; // String | The `secretKey` of the authenticating game.
let updateGameRequest = new MetafabJavascript.UpdateGameRequest(); // UpdateGameRequest | 
apiInstance.updateGame(gameId, xAuthorization, updateGameRequest).then((data) => {
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
 **updateGameRequest** | [**UpdateGameRequest**](UpdateGameRequest.md)|  | 

### Return type

[**GameModel**](GameModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

