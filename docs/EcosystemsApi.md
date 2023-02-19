# MetafabJavascript.EcosystemsApi

All URIs are relative to *https://api.trymetafab.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**approveEcosystemGame**](EcosystemsApi.md#approveEcosystemGame) | **POST** /v1/ecosystems/{ecosystemId}/games | Approve ecosystem game
[**authEcosystem**](EcosystemsApi.md#authEcosystem) | **GET** /v1/ecosystems/auth | Authenticate ecosystem
[**authProfile**](EcosystemsApi.md#authProfile) | **GET** /v1/profiles/auth | Authenticate profile
[**authProfilePlayer**](EcosystemsApi.md#authProfilePlayer) | **GET** /v1/profiles/{profileId}/games/{gameId}/players/auth | Authenticate profile player
[**createEcosystem**](EcosystemsApi.md#createEcosystem) | **POST** /v1/ecosystems | Create ecosystem
[**createProfile**](EcosystemsApi.md#createProfile) | **POST** /v1/profiles | Create profile
[**createProfilePlayer**](EcosystemsApi.md#createProfilePlayer) | **POST** /v1/profiles/{profileId}/games/{gameId}/players | Create profile player
[**getEcosystem**](EcosystemsApi.md#getEcosystem) | **GET** /v1/ecosystems/{ecosystemId} | Get ecosystem
[**getEcosystemGame**](EcosystemsApi.md#getEcosystemGame) | **GET** /v1/ecosystems/{ecosystemId}/games/{gameId} | Get ecosystem game
[**getEcosystemGames**](EcosystemsApi.md#getEcosystemGames) | **GET** /v1/ecosystems/{ecosystemId}/games | Get ecosystem games
[**getProfileGame**](EcosystemsApi.md#getProfileGame) | **GET** /v1/profiles/{profileId}/games/{gameId} | Get profile game
[**getProfileGames**](EcosystemsApi.md#getProfileGames) | **GET** /v1/profiles/{profileId}/games | Get profile games
[**unapproveEcosystemGame**](EcosystemsApi.md#unapproveEcosystemGame) | **DELETE** /v1/ecosystems/{ecosystemId}/games/{gameId} | Unapprove ecosystem game
[**updateEcosystem**](EcosystemsApi.md#updateEcosystem) | **PATCH** /v1/ecosystems/{ecosystemId} | Update ecosystem
[**updateProfile**](EcosystemsApi.md#updateProfile) | **PATCH** /v1/profiles/{profileId} | Update profile
[**updateProfilePlayer**](EcosystemsApi.md#updateProfilePlayer) | **PATCH** /v1/profiles/{profileId}/games/{gameId}/players/{playerId} | Update profile player



## approveEcosystemGame

> approveEcosystemGame(ecosystemId, xAuthorization, approveEcosystemGameRequest)

Approve ecosystem game

Approves a game for an ecosystem. By approving a game, it allows that game to integrate the ability for profile accounts from an ecosystem to login directly to the approved game and play. This also allows games to request access to assets held at the profile level for the game to frictionlessly interact with on behalf of the profile.

### Example

```javascript
import MetafabJavascript from 'metafab-javascript';

let apiInstance = new MetafabJavascript.EcosystemsApi();
let ecosystemId = "ecosystemId_example"; // String | The ecosystem id of the authenticating ecosystem.
let xAuthorization = ecosystem_sk_02z4Mv3c85Ig0gNowY9Dq0N2kjb1xwzr27ArLE0669RrRI6dLf822iPO26K1p1FP; // String | The `secretKey` of the authenticating ecosystem.
let approveEcosystemGameRequest = new MetafabJavascript.ApproveEcosystemGameRequest(); // ApproveEcosystemGameRequest | 
apiInstance.approveEcosystemGame(ecosystemId, xAuthorization, approveEcosystemGameRequest).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ecosystemId** | **String**| The ecosystem id of the authenticating ecosystem. | 
 **xAuthorization** | **String**| The &#x60;secretKey&#x60; of the authenticating ecosystem. | 
 **approveEcosystemGameRequest** | [**ApproveEcosystemGameRequest**](ApproveEcosystemGameRequest.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## authEcosystem

> EcosystemModel authEcosystem()

Authenticate ecosystem

Returns an existing ecosystem object containing authorization keys when provided a valid email (in place of username) and password login using Basic Auth.

### Example

```javascript
import MetafabJavascript from 'metafab-javascript';
let defaultClient = MetafabJavascript.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new MetafabJavascript.EcosystemsApi();
apiInstance.authEcosystem().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**EcosystemModel**](EcosystemModel.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## authProfile

> AuthProfile200Response authProfile(xEcosystemKey)

Authenticate profile

Returns an existing profile object containing access token, wallet, and other details when provided a valid profile username and password login using Basic Auth.

### Example

```javascript
import MetafabJavascript from 'metafab-javascript';
let defaultClient = MetafabJavascript.ApiClient.instance;
// Configure HTTP basic authorization: basicAuth
let basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

let apiInstance = new MetafabJavascript.EcosystemsApi();
let xEcosystemKey = ecosystem_pk_a5sFpDi8pQdnQgfCOBW29qR8YmwOhxVPz5iHoMgUEJLDdPXgwLuHqZf8ewo2GajZ; // String | The `publishedKey` of a specific ecosystem. This can be shared or included in clients, websites, etc.
apiInstance.authProfile(xEcosystemKey).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xEcosystemKey** | **String**| The &#x60;publishedKey&#x60; of a specific ecosystem. This can be shared or included in clients, websites, etc. | 

### Return type

[**AuthProfile200Response**](AuthProfile200Response.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## authProfilePlayer

> AuthPlayer200Response authProfilePlayer(profileId, gameId, xAuthorization, xWalletDecryptKey, xUsername)

Authenticate profile player

Returns an existing player object containing access token, wallet, wallet decrypt key, profile authorization and other details for a game when provided profile authentication and the player&#39;s username.

### Example

```javascript
import MetafabJavascript from 'metafab-javascript';

let apiInstance = new MetafabJavascript.EcosystemsApi();
let profileId = "profileId_example"; // String | The profile id of the authenticating profile.
let gameId = "gameId_example"; // String | Any game id within the MetaFab platform.
let xAuthorization = profile_at_02z4Mv3c85Ig0gNowY9Dq0N2kjb1xwzr27ArLE0669RrRI6dLf822iPO26K1p1FP; // String | The `accessToken` of the authenticating profile.
let xWalletDecryptKey = AXNP8MKb+5SbBtHWrZu5KHh5/BomXY/dMRG/BDUn7a4=; // String | The `walletDecryptKey` of the authenticating profile. Required to decrypt and perform blockchain transactions with the profile wallet.
let xUsername = arkdev; // String | The username of a player.
apiInstance.authProfilePlayer(profileId, gameId, xAuthorization, xWalletDecryptKey, xUsername).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profileId** | **String**| The profile id of the authenticating profile. | 
 **gameId** | **String**| Any game id within the MetaFab platform. | 
 **xAuthorization** | **String**| The &#x60;accessToken&#x60; of the authenticating profile. | 
 **xWalletDecryptKey** | **String**| The &#x60;walletDecryptKey&#x60; of the authenticating profile. Required to decrypt and perform blockchain transactions with the profile wallet. | 
 **xUsername** | **String**| The username of a player. | 

### Return type

[**AuthPlayer200Response**](AuthPlayer200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## createEcosystem

> EcosystemModel createEcosystem(createEcosystemRequest)

Create ecosystem

Create a new ecosystem. An ecosystem is a parent entity that many profiles live under for a given ecosystem of games. Ecosystems allow your players to create one profile within your ecosystem that allows a single account and wallet to be used across all of the approved games in your ecosystem that they play.

### Example

```javascript
import MetafabJavascript from 'metafab-javascript';

let apiInstance = new MetafabJavascript.EcosystemsApi();
let createEcosystemRequest = new MetafabJavascript.CreateEcosystemRequest(); // CreateEcosystemRequest | 
apiInstance.createEcosystem(createEcosystemRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createEcosystemRequest** | [**CreateEcosystemRequest**](CreateEcosystemRequest.md)|  | 

### Return type

[**EcosystemModel**](EcosystemModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createProfile

> AuthProfile200Response createProfile(xEcosystemKey, createProfileRequest)

Create profile

Create a new profile. Profiles are automatically associated with an internally managed wallet. Profiles can be thought of as a umbrella account that can be used to sign into and create player accounts across many games and have a singular asset store wallet at the profile level that can be used across all connected player accounts for games those player accounts are a part of.  Profiles are associated to a parent ecosystem of games. This allows an ecosystem to approve a permissioned set of games that can request authorized wallet permissions from profiles of players for their game.

### Example

```javascript
import MetafabJavascript from 'metafab-javascript';

let apiInstance = new MetafabJavascript.EcosystemsApi();
let xEcosystemKey = ecosystem_pk_a5sFpDi8pQdnQgfCOBW29qR8YmwOhxVPz5iHoMgUEJLDdPXgwLuHqZf8ewo2GajZ; // String | The `publishedKey` of a specific ecosystem. This can be shared or included in clients, websites, etc.
let createProfileRequest = new MetafabJavascript.CreateProfileRequest(); // CreateProfileRequest | 
apiInstance.createProfile(xEcosystemKey, createProfileRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xEcosystemKey** | **String**| The &#x60;publishedKey&#x60; of a specific ecosystem. This can be shared or included in clients, websites, etc. | 
 **createProfileRequest** | [**CreateProfileRequest**](CreateProfileRequest.md)|  | 

### Return type

[**AuthProfile200Response**](AuthProfile200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## createProfilePlayer

> AuthPlayer200Response createProfilePlayer(profileId, gameId, xAuthorization, xWalletDecryptKey, createProfilePlayerRequest)

Create profile player

Creates a new player account for the provided game id linked to the authenticating profile. The created player account will default to using the parent profile&#39;s wallet for any transactions, wallet content balance checks and verifications, and more.

### Example

```javascript
import MetafabJavascript from 'metafab-javascript';

let apiInstance = new MetafabJavascript.EcosystemsApi();
let profileId = "profileId_example"; // String | The profile id of the authenticating profile.
let gameId = "gameId_example"; // String | Any game id within the MetaFab platform.
let xAuthorization = profile_at_02z4Mv3c85Ig0gNowY9Dq0N2kjb1xwzr27ArLE0669RrRI6dLf822iPO26K1p1FP; // String | The `accessToken` of the authenticating profile.
let xWalletDecryptKey = AXNP8MKb+5SbBtHWrZu5KHh5/BomXY/dMRG/BDUn7a4=; // String | The `walletDecryptKey` of the authenticating profile. Required to decrypt and perform blockchain transactions with the profile wallet.
let createProfilePlayerRequest = new MetafabJavascript.CreateProfilePlayerRequest(); // CreateProfilePlayerRequest | 
apiInstance.createProfilePlayer(profileId, gameId, xAuthorization, xWalletDecryptKey, createProfilePlayerRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profileId** | **String**| The profile id of the authenticating profile. | 
 **gameId** | **String**| Any game id within the MetaFab platform. | 
 **xAuthorization** | **String**| The &#x60;accessToken&#x60; of the authenticating profile. | 
 **xWalletDecryptKey** | **String**| The &#x60;walletDecryptKey&#x60; of the authenticating profile. Required to decrypt and perform blockchain transactions with the profile wallet. | 
 **createProfilePlayerRequest** | [**CreateProfilePlayerRequest**](CreateProfilePlayerRequest.md)|  | 

### Return type

[**AuthPlayer200Response**](AuthPlayer200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getEcosystem

> PublicEcosystem getEcosystem(ecosystemId)

Get ecosystem

Returns a ecosystem object for the provided ecosystem id.

### Example

```javascript
import MetafabJavascript from 'metafab-javascript';

let apiInstance = new MetafabJavascript.EcosystemsApi();
let ecosystemId = "ecosystemId_example"; // String | Any ecosystem id within the MetaFab platform.
apiInstance.getEcosystem(ecosystemId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ecosystemId** | **String**| Any ecosystem id within the MetaFab platform. | 

### Return type

[**PublicEcosystem**](PublicEcosystem.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEcosystemGame

> PublicGame getEcosystemGame(ecosystemId, gameId)

Get ecosystem game

Returns a game object for the provided game id that the ecosystem has approved.

### Example

```javascript
import MetafabJavascript from 'metafab-javascript';

let apiInstance = new MetafabJavascript.EcosystemsApi();
let ecosystemId = "ecosystemId_example"; // String | Any ecosystem id within the MetaFab platform.
let gameId = "gameId_example"; // String | Any game id within the MetaFab platform.
apiInstance.getEcosystemGame(ecosystemId, gameId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ecosystemId** | **String**| Any ecosystem id within the MetaFab platform. | 
 **gameId** | **String**| Any game id within the MetaFab platform. | 

### Return type

[**PublicGame**](PublicGame.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getEcosystemGames

> [PublicGame] getEcosystemGames(ecosystemId)

Get ecosystem games

Returns an array of games the ecosystem has approved.

### Example

```javascript
import MetafabJavascript from 'metafab-javascript';

let apiInstance = new MetafabJavascript.EcosystemsApi();
let ecosystemId = "ecosystemId_example"; // String | Any ecosystem id within the MetaFab platform.
apiInstance.getEcosystemGames(ecosystemId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ecosystemId** | **String**| Any ecosystem id within the MetaFab platform. | 

### Return type

[**[PublicGame]**](PublicGame.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProfileGame

> GetProfileGames200ResponseInner getProfileGame(profileId, gameId, xAuthorization)

Get profile game

Returns a game this profile has connected player accounts for.

### Example

```javascript
import MetafabJavascript from 'metafab-javascript';

let apiInstance = new MetafabJavascript.EcosystemsApi();
let profileId = "profileId_example"; // String | The profile id of the authenticating profile.
let gameId = "gameId_example"; // String | Any game id within the MetaFab platform.
let xAuthorization = profile_at_02z4Mv3c85Ig0gNowY9Dq0N2kjb1xwzr27ArLE0669RrRI6dLf822iPO26K1p1FP; // String | The `accessToken` of the authenticating profile.
apiInstance.getProfileGame(profileId, gameId, xAuthorization).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profileId** | **String**| The profile id of the authenticating profile. | 
 **gameId** | **String**| Any game id within the MetaFab platform. | 
 **xAuthorization** | **String**| The &#x60;accessToken&#x60; of the authenticating profile. | 

### Return type

[**GetProfileGames200ResponseInner**](GetProfileGames200ResponseInner.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getProfileGames

> [GetProfileGames200ResponseInner] getProfileGames(profileId, xAuthorization)

Get profile games

Returns an array of games the authorized profile has connected player accounts for.

### Example

```javascript
import MetafabJavascript from 'metafab-javascript';

let apiInstance = new MetafabJavascript.EcosystemsApi();
let profileId = "profileId_example"; // String | The profile id of the authenticating profile.
let xAuthorization = profile_at_02z4Mv3c85Ig0gNowY9Dq0N2kjb1xwzr27ArLE0669RrRI6dLf822iPO26K1p1FP; // String | The `accessToken` of the authenticating profile.
apiInstance.getProfileGames(profileId, xAuthorization).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profileId** | **String**| The profile id of the authenticating profile. | 
 **xAuthorization** | **String**| The &#x60;accessToken&#x60; of the authenticating profile. | 

### Return type

[**[GetProfileGames200ResponseInner]**](GetProfileGames200ResponseInner.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## unapproveEcosystemGame

> unapproveEcosystemGame(ecosystemId, gameId, xAuthorization)

Unapprove ecosystem game

Unapproves a game for an ecosystem. The game will no longer be able to allow profiles from the ecosystem to login. All profile permissions approved for the game will also be revoked.

### Example

```javascript
import MetafabJavascript from 'metafab-javascript';

let apiInstance = new MetafabJavascript.EcosystemsApi();
let ecosystemId = "ecosystemId_example"; // String | The ecosystem id of the authenticating ecosystem.
let gameId = "gameId_example"; // String | Any game id within the MetaFab platform.
let xAuthorization = ecosystem_sk_02z4Mv3c85Ig0gNowY9Dq0N2kjb1xwzr27ArLE0669RrRI6dLf822iPO26K1p1FP; // String | The `secretKey` of the authenticating ecosystem.
apiInstance.unapproveEcosystemGame(ecosystemId, gameId, xAuthorization).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ecosystemId** | **String**| The ecosystem id of the authenticating ecosystem. | 
 **gameId** | **String**| Any game id within the MetaFab platform. | 
 **xAuthorization** | **String**| The &#x60;secretKey&#x60; of the authenticating ecosystem. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## updateEcosystem

> EcosystemModel updateEcosystem(ecosystemId, xAuthorization, updateEcosystemRequest)

Update ecosystem

Update various fields specific to an ecosystem. Such as changing its password, resetting its published or secret key, or updating its approved games.

### Example

```javascript
import MetafabJavascript from 'metafab-javascript';

let apiInstance = new MetafabJavascript.EcosystemsApi();
let ecosystemId = "ecosystemId_example"; // String | The ecosystem id of the authenticating ecosystem.
let xAuthorization = ecosystem_sk_02z4Mv3c85Ig0gNowY9Dq0N2kjb1xwzr27ArLE0669RrRI6dLf822iPO26K1p1FP; // String | The `secretKey` of the authenticating ecosystem.
let updateEcosystemRequest = new MetafabJavascript.UpdateEcosystemRequest(); // UpdateEcosystemRequest | 
apiInstance.updateEcosystem(ecosystemId, xAuthorization, updateEcosystemRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ecosystemId** | **String**| The ecosystem id of the authenticating ecosystem. | 
 **xAuthorization** | **String**| The &#x60;secretKey&#x60; of the authenticating ecosystem. | 
 **updateEcosystemRequest** | [**UpdateEcosystemRequest**](UpdateEcosystemRequest.md)|  | 

### Return type

[**EcosystemModel**](EcosystemModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateProfile

> ProfileModel updateProfile(profileId, xAuthorization, updateProfileRequest)

Update profile

Update various fields specific to a profile. Such as changing its password and resetting its access token.

### Example

```javascript
import MetafabJavascript from 'metafab-javascript';

let apiInstance = new MetafabJavascript.EcosystemsApi();
let profileId = "profileId_example"; // String | The profile id of the authenticating profile.
let xAuthorization = profile_at_02z4Mv3c85Ig0gNowY9Dq0N2kjb1xwzr27ArLE0669RrRI6dLf822iPO26K1p1FP; // String | The `accessToken` of the authenticating profile.
let updateProfileRequest = new MetafabJavascript.UpdateProfileRequest(); // UpdateProfileRequest | 
apiInstance.updateProfile(profileId, xAuthorization, updateProfileRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profileId** | **String**| The profile id of the authenticating profile. | 
 **xAuthorization** | **String**| The &#x60;accessToken&#x60; of the authenticating profile. | 
 **updateProfileRequest** | [**UpdateProfileRequest**](UpdateProfileRequest.md)|  | 

### Return type

[**ProfileModel**](ProfileModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## updateProfilePlayer

> UpdateProfilePlayer200Response updateProfilePlayer(profileId, gameId, playerId, xAuthorization, xWalletDecryptKey, updateProfilePlayerRequest)

Update profile player

Update various fields specific to a player. Such as changing its permissions.

### Example

```javascript
import MetafabJavascript from 'metafab-javascript';

let apiInstance = new MetafabJavascript.EcosystemsApi();
let profileId = "profileId_example"; // String | The profile id of the authenticating profile.
let gameId = "gameId_example"; // String | Any game id within the MetaFab platform.
let playerId = "playerId_example"; // String | Any player id within the MetaFab platform.
let xAuthorization = profile_at_02z4Mv3c85Ig0gNowY9Dq0N2kjb1xwzr27ArLE0669RrRI6dLf822iPO26K1p1FP; // String | The `accessToken` of the authenticating profile.
let xWalletDecryptKey = AXNP8MKb+5SbBtHWrZu5KHh5/BomXY/dMRG/BDUn7a4=; // String | The `walletDecryptKey` of the authenticating profile. Required to decrypt and perform blockchain transactions with the profile wallet.
let updateProfilePlayerRequest = new MetafabJavascript.UpdateProfilePlayerRequest(); // UpdateProfilePlayerRequest | 
apiInstance.updateProfilePlayer(profileId, gameId, playerId, xAuthorization, xWalletDecryptKey, updateProfilePlayerRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profileId** | **String**| The profile id of the authenticating profile. | 
 **gameId** | **String**| Any game id within the MetaFab platform. | 
 **playerId** | **String**| Any player id within the MetaFab platform. | 
 **xAuthorization** | **String**| The &#x60;accessToken&#x60; of the authenticating profile. | 
 **xWalletDecryptKey** | **String**| The &#x60;walletDecryptKey&#x60; of the authenticating profile. Required to decrypt and perform blockchain transactions with the profile wallet. | 
 **updateProfilePlayerRequest** | [**UpdateProfilePlayerRequest**](UpdateProfilePlayerRequest.md)|  | 

### Return type

[**UpdateProfilePlayer200Response**](UpdateProfilePlayer200Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

