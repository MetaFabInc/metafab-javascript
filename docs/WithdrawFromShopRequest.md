# MetafabJavascript.WithdrawFromShopRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**address** | **String** | A valid EVM based address to withdraw to. For example, &#x60;0x39cb70F972E0EE920088AeF97Dbe5c6251a9c25D&#x60;. | [optional] 
**walletId** | **String** | Any wallet id within the MetaFab ecosystem to withdraw to. | [optional] 
**currencyAddress** | **String** | The address of the currency (ERC20) token to withdraw from the shop. If no currencyAddress or currencyId, and no collectionAddress or collectionId are provided, the native token held by the shop will be withdrawn. | [optional] 
**currencyId** | **String** | A valid MetaFab currency id that represents the currency token to withdraw from the shop. &#x60;currencyAddress&#x60; or &#x60;currencyId&#x60; can be provided when withdrawing currency. | [optional] 
**collectionAddress** | **String** | The address of the collection (ERC1155) for the items to withdraw from the shop. If no currencyAddress and no collectionAddress is provided, the native token held by the shop will be withdrawn. | [optional] 
**collectionId** | **String** | A valid MetaFab collection id that represents the collection for the items to withdraw from the shop. &#x60;collectionAddress&#x60; or &#x60;collectionId&#x60; can be provided when withdrawing items. | [optional] 
**itemIds** | **[Number]** | The specific itemIds of the provided collection to withdraw from the shop. | [optional] 


