# MetafabJavascript.GetCurrencyFees200Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recipientAddress** | **String** | The wallet address that fees from all applicable transactions are automatically sent to. | [optional] 
**basisPoints** | **Number** | The number of fee basis points. 100 basisPoints &#x3D; 1% fee of the total transaction amount deducted from the total received by the recipient. | [optional] 
**fixedAmount** | **Number** | The fixed number of currency as a fee regardless of the total transaction amount. 10 &#x3D; 10 of the currency as a fee for any transaction, deducted from the total received by the recipient. | [optional] 
**capAmount** | **Number** | The maximum combined fee between basisPoints and fixedAmount. If the total transaction fee is over this amount, the capAmount will be used as the transaction fee deducted from the total received by the recipient. | [optional] 


