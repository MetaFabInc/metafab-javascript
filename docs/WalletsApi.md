# MetafabJavascript.WalletsApi

All URIs are relative to *https://api.trymetafab.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createWalletSignature**](WalletsApi.md#createWalletSignature) | **POST** /v1/wallets/{walletId}/signatures | Create wallet signature
[**getWallet**](WalletsApi.md#getWallet) | **GET** /v1/wallets/{walletId} | Get wallet
[**getWalletBalances**](WalletsApi.md#getWalletBalances) | **GET** /v1/wallets/{walletId}/balances | Get wallet balances
[**getWalletTransactions**](WalletsApi.md#getWalletTransactions) | **GET** /v1/wallets/{walletId}/transactions | Get wallet transactions



## createWalletSignature

> String createWalletSignature(walletId, xWalletDecryptKey, createWalletSignatureRequest)

Create wallet signature

Creates a wallet signature from a plaintext message using the wallet for the provided walletId and walletDecryptKey. Wallet signatures cannot be generated for EOA wallets.

### Example

```javascript
import MetafabJavascript from 'metafab-javascript';

let apiInstance = new MetafabJavascript.WalletsApi();
let walletId = "walletId_example"; // String | Any wallet id within the MetaFab platform.
let xWalletDecryptKey = AXNP8MKb+5SbBtHWrZu5KHh5/BomXY/dMRG/BDUn7a4=; // String | The `walletDecryptKey` for the provided `walletId`.
let createWalletSignatureRequest = new MetafabJavascript.CreateWalletSignatureRequest(); // CreateWalletSignatureRequest | 
apiInstance.createWalletSignature(walletId, xWalletDecryptKey, createWalletSignatureRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletId** | **String**| Any wallet id within the MetaFab platform. | 
 **xWalletDecryptKey** | **String**| The &#x60;walletDecryptKey&#x60; for the provided &#x60;walletId&#x60;. | 
 **createWalletSignatureRequest** | [**CreateWalletSignatureRequest**](CreateWalletSignatureRequest.md)|  | 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## getWallet

> WalletModel getWallet(walletId)

Get wallet

Returns a wallet object for the provided walletId.

### Example

```javascript
import MetafabJavascript from 'metafab-javascript';

let apiInstance = new MetafabJavascript.WalletsApi();
let walletId = "walletId_example"; // String | Any wallet id within the MetaFab platform.
apiInstance.getWallet(walletId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletId** | **String**| Any wallet id within the MetaFab platform. | 

### Return type

[**WalletModel**](WalletModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWalletBalances

> {String: Number} getWalletBalances(walletId)

Get wallet balances

Returns the current native token balance for all chains supported by MetaFab for the provided walletId. This includes balances like Eth, Matic and other native tokens from chains MetaFab supports.

### Example

```javascript
import MetafabJavascript from 'metafab-javascript';

let apiInstance = new MetafabJavascript.WalletsApi();
let walletId = "walletId_example"; // String | Any wallet id within the MetaFab platform.
apiInstance.getWalletBalances(walletId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletId** | **String**| Any wallet id within the MetaFab platform. | 

### Return type

**{String: Number}**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## getWalletTransactions

> [TransactionModel] getWalletTransactions(walletId)

Get wallet transactions

Returns an array of MetaFab initiated transactions performed by the provided walletId. Transactions returned are ordered chronologically from newest to oldest.

### Example

```javascript
import MetafabJavascript from 'metafab-javascript';

let apiInstance = new MetafabJavascript.WalletsApi();
let walletId = "walletId_example"; // String | Any wallet id within the MetaFab platform.
apiInstance.getWalletTransactions(walletId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletId** | **String**| Any wallet id within the MetaFab platform. | 

### Return type

[**[TransactionModel]**](TransactionModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

