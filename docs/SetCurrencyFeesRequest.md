# MetafabJavascript.SetCurrencyFeesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recipientAddress** | **String** | The recipient address of currency transaction fees. | 
**basisPoints** | **Number** | A percentage fee for every transaction represented in basis points. To set a 1.5% fee, you would use a value of 150. This value can be 0, denoting no percentage fees. | 
**fixedAmount** | **Number** | A fixed fee for every transaction. A value of 0.5 would mean 0.5 of the currency of a transaction is always taken as a fee. This value can be 0, denoting no fixed fees. | 
**capAmount** | **Number** | The maximum fee amount for any single transaction. The total fee of a transaction is calculated as the sum of the basis points (percentage) fee, and fixed fee. If a calculated fee is greater than this maximum fee value, the maximum fee will be used instead. | 


