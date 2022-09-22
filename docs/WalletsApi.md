# MetafabJavascript.WalletsApi

All URIs are relative to *https://api.trymetafab.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1WalletsWalletIdBalancesGet**](WalletsApi.md#v1WalletsWalletIdBalancesGet) | **GET** /v1/wallets/{walletId}/balances | Get wallet balances
[**v1WalletsWalletIdTransactionsGet**](WalletsApi.md#v1WalletsWalletIdTransactionsGet) | **GET** /v1/wallets/{walletId}/transactions | Get wallet transactions



## v1WalletsWalletIdBalancesGet

> {String: Number} v1WalletsWalletIdBalancesGet(walletId)

Get wallet balances

Returns the current native token balance for all chains supported by MetaFab for the provided walletId. This includes balances like Eth, Matic and other native tokens from chains MetaFab supports.

### Example

```javascript
import MetafabJavascript from 'metafab-javascript';

let apiInstance = new MetafabJavascript.WalletsApi();
let walletId = "walletId_example"; // String | Any wallet id within the MetaFab ecosystem.
apiInstance.v1WalletsWalletIdBalancesGet(walletId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletId** | **String**| Any wallet id within the MetaFab ecosystem. | 

### Return type

**{String: Number}**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## v1WalletsWalletIdTransactionsGet

> [TransactionModel] v1WalletsWalletIdTransactionsGet(walletId)

Get wallet transactions

Returns an array of MetaFab initiated transactions performed by the provided walletId. Transactions returned are ordered chronologically from newest to oldest.

### Example

```javascript
import MetafabJavascript from 'metafab-javascript';

let apiInstance = new MetafabJavascript.WalletsApi();
let walletId = "walletId_example"; // String | Any wallet id within the MetaFab ecosystem.
apiInstance.v1WalletsWalletIdTransactionsGet(walletId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **walletId** | **String**| Any wallet id within the MetaFab ecosystem. | 

### Return type

[**[TransactionModel]**](TransactionModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

