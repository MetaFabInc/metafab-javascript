# MetaFabApi.TransactionsApi

All URIs are relative to *https://api.trymetafab.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v1TransactionsTransactionIdGet**](TransactionsApi.md#v1TransactionsTransactionIdGet) | **GET** /v1/transactions/{transactionId} | Get transaction



## v1TransactionsTransactionIdGet

> TransactionModel v1TransactionsTransactionIdGet(transactionId)

Get transaction

Returns an executed transaction object for the provided transactionId. Transactions are created by MetaFab when interacting with contracts, currencies, items and other MetaFab resources.

### Example

```javascript
import MetaFabApi from 'meta_fab_api';

let apiInstance = new MetaFabApi.TransactionsApi();
let transactionId = "transactionId_example"; // String | Any transaction id within the MetaFab ecosystem.
apiInstance.v1TransactionsTransactionIdGet(transactionId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transactionId** | **String**| Any transaction id within the MetaFab ecosystem. | 

### Return type

[**TransactionModel**](TransactionModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

