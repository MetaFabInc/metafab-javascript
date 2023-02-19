# MetafabJavascript.ProfilePermissionsValue

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chain** | **String** | The target chain for the contract and related permissions. | [optional] 
**scopes** | **[String]** | An optional array of valid permissioning scopes. | [optional] 
**functions** | **[String]** | An optional array of contract functions to request permission for. | [optional] 
**erc20Limit** | **Number** | A maximum lifetime limit of erc20 that can be tranferred for this contract address. | [optional] 
**erc1155Limits** | **{String: Number}** | An object mapping erc1155 ids to maximum lifetime transfer limits of each permitted item id supplied for this contract address. | [optional] 


