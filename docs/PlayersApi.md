# MetafabJavascript.PlayersApi

All URIs are relative to *https://api.trymetafab.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1PlayersGet**](PlayersApi.md#v1PlayersGet) | **GET** /v1/players | Authenticate player
[**v1PlayersPlayerIdPatch**](PlayersApi.md#v1PlayersPlayerIdPatch) | **PATCH** /v1/players/{playerId} | Update player
[**v1PlayersPost**](PlayersApi.md#v1PlayersPost) | **POST** /v1/players | Create player



## v1PlayersGet

> V1PlayersGet200Response v1PlayersGet(xGameKey)

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
apiInstance.v1PlayersGet(xGameKey).then((data) => {
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

[**V1PlayersGet200Response**](V1PlayersGet200Response.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1PlayersPlayerIdPatch

> PlayerModel v1PlayersPlayerIdPatch(playerId, xAuthorization, v1PlayersPlayerIdPatchRequest)

Update player

Update various fields specific to a player. Such as changing its password and resetting its access token.

### Example

```javascript
import MetafabJavascript from 'metafab-javascript';

let apiInstance = new MetafabJavascript.PlayersApi();
let playerId = "playerId_example"; // String | Any player id within the MetaFab ecosystem.
let xAuthorization = player_at_02z4Mv3c85Ig0gNowY9Dq0N2kjb1xwzr27ArLE0669RrRI6dLf822iPO26K1p1FP; // String | The `accessToken` of the authenticating player.
let v1PlayersPlayerIdPatchRequest = new MetafabJavascript.V1PlayersPlayerIdPatchRequest(); // V1PlayersPlayerIdPatchRequest | 
apiInstance.v1PlayersPlayerIdPatch(playerId, xAuthorization, v1PlayersPlayerIdPatchRequest).then((data) => {
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
 **v1PlayersPlayerIdPatchRequest** | [**V1PlayersPlayerIdPatchRequest**](V1PlayersPlayerIdPatchRequest.md)|  | 

### Return type

[**PlayerModel**](PlayerModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## v1PlayersPost

> V1PlayersGet200Response v1PlayersPost(xGameKey, v1PlayersGetRequest)

Create player

Create a new player for a game. Players are automatically associated with an internally managed wallet.  Player access tokens can be used to directly interact with any MetaFab managed contracts, currencies, items collections, marketplaces and more. Player interactions are also gasless by default, completely removing all crypto friction for players to engage with your MetaFab supported games.

### Example

```javascript
import MetafabJavascript from 'metafab-javascript';

let apiInstance = new MetafabJavascript.PlayersApi();
let xGameKey = game_pk_4SOqpDi8pQdnQgfCOBW29qR8YmwOhxVPz5iHoMgUEJLDdPXgwLuHqZf8ewo2GajZ; // String | The `publishedKey` of a specific game. This can be shared or included in game clients, websites, etc.
let v1PlayersGetRequest = new MetafabJavascript.V1PlayersGetRequest(); // V1PlayersGetRequest | 
apiInstance.v1PlayersPost(xGameKey, v1PlayersGetRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xGameKey** | **String**| The &#x60;publishedKey&#x60; of a specific game. This can be shared or included in game clients, websites, etc. | 
 **v1PlayersGetRequest** | [**V1PlayersGetRequest**](V1PlayersGetRequest.md)|  | 

### Return type

[**V1PlayersGet200Response**](V1PlayersGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

