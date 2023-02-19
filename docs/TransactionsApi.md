# MetafabJavascript.TransactionsApi

All URIs are relative to *https://api.trymetafab.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getTransaction**](TransactionsApi.md#getTransaction) | **GET** /v1/transactions/{transactionId} | Get transaction



## getTransaction

> TransactionModel getTransaction(transactionId)

Get transaction

Returns an executed transaction object for the provided transactionId. Transactions are created by MetaFab when interacting with contracts, currencies, items and other MetaFab resources.

### Example

```javascript
import MetafabJavascript from 'metafab-javascript';

let apiInstance = new MetafabJavascript.TransactionsApi();
let transactionId = "transactionId_example"; // String | Any transaction id within the MetaFab platform.
apiInstance.getTransaction(transactionId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **transactionId** | **String**| Any transaction id within the MetaFab platform. | 

### Return type

[**TransactionModel**](TransactionModel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

