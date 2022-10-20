# MetafabJavascript.BatchMintCollectionItemsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **String** | A valid EVM based address to create (mint) the items for. For example, &#x60;0x39cb70F972E0EE920088AeF97Dbe5c6251a9c25D&#x60;. | [optional] 
**itemIds** | **[Number]** | An array of unique itemIds to create (mint). | 
**quantities** | **[Number]** | An array of the quantities of each of the unique itemIds provided to create (mint). The quantity of each itemId in itemIds should be at the same index as the specific itemId in the itemIds array. For example, quantities[2] defines the quantity to mint for itemIds[2], etc. | 
**walletId** | **String** | Any wallet id within the MetaFab ecosystem to create (mint) the items for. | [optional] 


