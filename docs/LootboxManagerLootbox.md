# MetafabJavascript.LootboxManagerLootbox

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **Number** | The id of this lootbox. | [optional] 
**inputCollection** | **String** | The address of the ERC1155 or MetaFab game items contract for input items required by this lootbox. | [optional] 
**inputCollectionItemIds** | **[Number]** | An array of item ids from the input collection that are required for this lootbox. | [optional] 
**inputCollectionItemAmounts** | **[Number]** | An array of amounts for each item id for the input collection that are required to open this lootbox. | [optional] 
**outputCollection** | **String** | The address of the ERC1155 of MetaFab game items contract for possible output items given by this lootbox. | [optional] 
**outputCollectionItemIds** | **[Number]** | An array of item ids from the output collection that are possibly given by this lootbox. | [optional] 
**outputCollectionItemAmounts** | **[Number]** | An array of amounts for each item id for the output collection that are possibly given by this lootbox. | [optional] 
**outputCollectionItemWeights** | **[Number]** | An array of weights for each item id for the output collection that are possibly given by this lootbox. | [optional] 
**outputTotalItems** | **Number** | The number of items randomly selected when this lootbox is opened. | [optional] 
**lastUpdatedAt** | **Number** | A unix timestamp in seconds that represents the last time this offer was set or updated. | [optional] 


