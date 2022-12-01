# MetafabJavascript.SetShopOfferRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | A unique offer id to use for this offer for the shop. If an existing offer id is used, the current offer will be updated but the existing number of uses will be kept. If you want to reset the number of uses for an existing offer, first remove it using the remove offer endpoint, then set it. | 
**inputCollectionAddress** | **String** | A valid EVM based ERC1155 or MetaFab game items contract address that represents the collection for input items required by this offer. &#x60;inputCollectionAddress&#x60; or &#x60;inputCollectionId&#x60; can optionally be provided. | [optional] 
**inputCollectionId** | **String** | A valid MetaFab collection id that represents the collection for input items required by this offer. &#x60;inputCollectionAddress&#x60; or &#x60;inputCollectionId&#x60; can optionally be provided. | [optional] 
**inputCollectionItemIds** | **[Number]** | An array of item ids from the provided input collection that are required to use this offer. Input items are transferred from the wallet to the shop contract upon using an offer. | [optional] 
**inputCollectionItemAmounts** | **[Number]** | An array of amounts for each item id from the provided input collection that are required to use this offer. Item amounts array indices are reflective of the amount required for a given item id at the same index. | [optional] 
**inputCurrencyAddress** | **String** | A valid EVM based ERC20 or MetaFab game currency contract address that for the currency required by this offer. | [optional] 
**inputCurrencyId** | **String** | A valid MetaFab currency id that represents the currency required by this offer. | [optional] 
**inputCurrencyAmount** | **Number** | The amount of currency required by this offer. If an inputCurrencyAmount is provided without in input currency address or id, the native chain currency is used as the required currency. | [optional] 
**outputCollectionAddress** | **String** | A valid EVM based ERC1155 or MetaFab game items contract address that represents the collection for output items given by this offer. &#x60;outputCollectionAddress&#x60; or &#x60;outputCollectionId&#x60; can optionally be provided. | [optional] 
**outputCollectionId** | **String** | A valid MetaFab collection id that represents the collection for output items given by this offer. &#x60;outputCollectionAddress&#x60; or &#x60;outputCollectionId&#x60; can optionally be provided. | [optional] 
**outputCollectionItemIds** | **[Number]** | An array of item ids from the provided output collection that are given by this offer. Output items are automatically minted if the shop contract has the &#x60;minter&#x60; role for the output collection contract. Otherwise, they are transferred from the item balance held by the shop contract. | [optional] 
**outputCollectionItemAmounts** | **[Number]** | An array of amounts for each item id from the provided output collection that are given by this offer. Item amounts array indices are reflective of the amount required for a given item id at the same index. | [optional] 
**outputCurrencyAddress** | **String** | A valid EVM based ERC20 or MetaFab game currency contract address that for the currency given by this offer. The output currency amount is automatically minted if the shop contract has the &#x60;minter&#x60; role for the output currency contract. Otherwise, they are transferred from the currency balance held by the shop contract. | [optional] 
**outputCurrencyId** | **String** | A valid MetaFab currency id for the currency given by this offer. | [optional] 
**outputCurrencyAmount** | **Number** | The amount of currency given by this offer. If an outputCurrencyAmount is provided without an output currency address or id, the native chain currency is used as the given currency. | [optional] 
**maxUses** | **Number** | The maximum number of times this offer can be used in total. maxUses is collective across all uses of the offer. If 5 unique players use an offer, that counts as 5 offer uses. Exclude this or use 0 to allow unlimited uses. | [optional] 


