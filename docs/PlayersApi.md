# MetafabJavascript.PlayersApi

All URIs are relative to *https://api.trymetafab.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authPlayer**](PlayersApi.md#authPlayer) | **GET** /v1/players/auth | Authenticate player
[**createPlayer**](PlayersApi.md#createPlayer) | **POST** /v1/players | Create player
[**getPlayer**](PlayersApi.md#getPlayer) | **GET** /v1/players/{playerId} | Get player
[**getPlayerData**](PlayersApi.md#getPlayerData) | **GET** /v1/players/{playerId}/data | Get player data
[**getPlayers**](PlayersApi.md#getPlayers) | **GET** /v1/players | Get players
[**setPlayerData**](PlayersApi.md#setPlayerData) | **POST** /v1/players/{playerId}/data | Set player data
[**updatePlayer**](PlayersApi.md#updatePlayer) | **PATCH** /v1/players/{playerId} | Update player



## authPlayer

> AuthPlayer200Response authPlayer(xGameKey)

Authenticate player

Returns an existing player object containing access token, wallet, and other details for a game when provided a valid username and password login using Basic Auth.

### Example

```javascript
import MetafabJavascript from 'metafab-javascript';
let defaultClient = MetafabJavascript.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new MetafabJavascript.PlayersApi();
let xGameKey = game_pk_4SOqpDi8pQdnQgfCOBW29qR8YmwOhxVPz5iHoMgUEJLDdPXgwLuHqZf8ewo2GajZ; // String | The `publishedKey` of a specific game. This can be shared or included in game clients, websites, etc.
apiInstance.authPlayer(xGameKey).then((data) => {
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

[**AuthPlayer200Response**](AuthPlayer200Response.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## createPlayer

> AuthPlayer200Response createPlayer(xGameKey, createPlayerRequest)

Create player

Create a new player for a game. Players are automatically associated with an internally managed wallet.  Player access tokens can be used to directly interact with any MetaFab managed contracts, currencies, items collections, marketplaces and more. Player interactions are also gasless by default, completely removing all crypto friction for players to engage with your MetaFab supported games.

### Example

```javascript
import MetafabJavascript from 'metafab-javascript';

let apiInstance = new MetafabJavascript.PlayersApi();
let xGameKey = game_pk_4SOqpDi8pQdnQgfCOBW29qR8YmwOhxVPz5iHoMgUEJLDdPXgwLuHqZf8ewo2GajZ; // String | The `publishedKey` of a specific game. This can be shared or included in game clients, websites, etc.
let createPlayerRequest = new MetafabJavascript.CreatePlayerRequest(); // CreatePlayerRequest | 
apiInstance.createPlayer(xGameKey, createPlayerRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xGameKey** | **String**| The &#x60;publishedKey&#x60; of a specific game. This can be shared or included in game clients, websites, etc. | 
 **createPlayerRequest** | [**CreatePlayerRequest**](CreatePlayerRequest.md)|  | 

### Return type

[**AuthPlayer200Response**](AuthPlayer200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getPlayer

> PublicPlayer getPlayer(playerId)

Get player

Returns a player object for the provided player id.

### Example

```javascript
import MetafabJavascript from 'metafab-javascript';

let apiInstance = new MetafabJavascript.PlayersApi();
let playerId = "playerId_example"; // String | Any player id within the MetaFab ecosystem.
apiInstance.getPlayer(playerId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **playerId** | **String**| Any player id within the MetaFab ecosystem. | 

### Return type

[**PublicPlayer**](PublicPlayer.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPlayerData

> GetPlayerData200Response getPlayerData(playerId)

Get player data

Returns the latest public and protected data as an object for the provided playerId.

### Example

```javascript
import MetafabJavascript from 'metafab-javascript';

let apiInstance = new MetafabJavascript.PlayersApi();
let playerId = "playerId_example"; // String | Any player id within the MetaFab ecosystem.
apiInstance.getPlayerData(playerId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **playerId** | **String**| Any player id within the MetaFab ecosystem. | 

### Return type

[**GetPlayerData200Response**](GetPlayerData200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getPlayers

> [PublicPlayer] getPlayers(xAuthorization)

Get players

Returns all players for the authenticated game as an array of player objects.

### Example

```javascript
import MetafabJavascript from 'metafab-javascript';

let apiInstance = new MetafabJavascript.PlayersApi();
let xAuthorization = game_sk_02z4Mv3c85Ig0gNowY9Dq0N2kjb1xwzr27ArLE0669RrRI6dLf822iPO26K1p1FP; // String | The `secretKey` of the authenticating game.
apiInstance.getPlayers(xAuthorization).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAuthorization** | **String**| The &#x60;secretKey&#x60; of the authenticating game. | 

### Return type

[**[PublicPlayer]**](PublicPlayer.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## setPlayerData

> GetPlayerData200Response setPlayerData(playerId, xAuthorization, setPlayerDataRequest)

Set player data

Creates or updates public and/or protected data for the provided playerId. Data updates are performed using deep merging. This means that when you update any top level or nested properties specific to player public or protected data, you only need to include the properties you are making changes to. Any existing properties not included in request body arguments will be retained on the player data object.  Please note, When writing an array type for a player, arrays do not follow the deep merge approach. If you add or remove an item from an array, the entire array must be passed as an argument when updating the related property for player public or protected data.

### Example

```javascript
import MetafabJavascript from 'metafab-javascript';

let apiInstance = new MetafabJavascript.PlayersApi();
let playerId = "playerId_example"; // String | Any player id within the MetaFab ecosystem.
let xAuthorization = ["game_sk_02z4Mv3c85Ig0gNowY9Dq0N2kjb1xwzr27ArLE0669RrRI6dLf822iPO26K1p1FP","player_at_02z4Mv3c85Ig0gNowY9Dq0N2kjb1xwzr27ArLE0669RrRI6dLf822iPO26K1p1FP"]; // String | The `secretKey` of a specific game or the `accessToken` of a specific player.
let setPlayerDataRequest = new MetafabJavascript.SetPlayerDataRequest(); // SetPlayerDataRequest | 
apiInstance.setPlayerData(playerId, xAuthorization, setPlayerDataRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **playerId** | **String**| Any player id within the MetaFab ecosystem. | 
 **xAuthorization** | **String**| The &#x60;secretKey&#x60; of a specific game or the &#x60;accessToken&#x60; of a specific player. | 
 **setPlayerDataRequest** | [**SetPlayerDataRequest**](SetPlayerDataRequest.md)|  | 

### Return type

[**GetPlayerData200Response**](GetPlayerData200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updatePlayer

> PlayerModel updatePlayer(playerId, xAuthorization, updatePlayerRequest)

Update player

Update various fields specific to a player. Such as changing its password and resetting its access token.

### Example

```javascript
import MetafabJavascript from 'metafab-javascript';

let apiInstance = new MetafabJavascript.PlayersApi();
let playerId = "playerId_example"; // String | Any player id within the MetaFab ecosystem.
let xAuthorization = player_at_02z4Mv3c85Ig0gNowY9Dq0N2kjb1xwzr27ArLE0669RrRI6dLf822iPO26K1p1FP; // String | The `accessToken` of the authenticating player.
let updatePlayerRequest = new MetafabJavascript.UpdatePlayerRequest(); // UpdatePlayerRequest | 
apiInstance.updatePlayer(playerId, xAuthorization, updatePlayerRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **playerId** | **String**| Any player id within the MetaFab ecosystem. | 
 **xAuthorization** | **String**| The &#x60;accessToken&#x60; of the authenticating player. | 
 **updatePlayerRequest** | [**UpdatePlayerRequest**](UpdatePlayerRequest.md)|  | 

### Return type

[**PlayerModel**](PlayerModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

