# MetafabJavascript.SetPlayerDataRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**protectedData** | **Object** | protectedData can only be set if &#x60;X-Authorization&#x60; includes credentials for the game the target player is a part of. Expects an arbitrary object allowed to contain any set of properties and nested data within those properties, including arrays. | [optional] 
**publicData** | **Object** | publicData can be set if &#x60;X-Authorization&#x60; includes credentials for the target player or game the player is a part of. Expects an arbitrary object allowed to contain any set of properties and nested data within those properties, including arrays. | [optional] 


