# MetafabJavascript.UpdateGameRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | A new name. Replaces the game&#39;s current name. | [optional] 
**email** | **String** | A new email address. The game&#39;s old email will no longer be valid for account authentication. &#x60;currentPassword&#x60; must also be provided. | [optional] 
**currentPassword** | **String** | The game&#39;s current password. Must be provided if setting &#x60;newPassword&#x60; or &#x60;email&#x60;. | [optional] 
**newPassword** | **String** | A new password. The game&#39;s old password will no longer be valid. | [optional] 
**rpcs** | **{String: String}** | Sets a custom RPC for your game to use instead of MetaFab&#39;s default RPCs for the chain(s) you specify.  Expects a JSON object containing key value pairs of supported &#x60;chain&#x60; -&gt; &#x60;rpc url&#x60;. Only the chain names provided as keys in the object will be explicitly overriden. To delete a custom RPC for your game, provide the chain name to delete as a key in the provided object and &#x60;null&#x60; as the value.  Set RPC example, &#x60;{ MATIC: &#39;https://polygon-rpc.com&#39; }&#x60; Delete RPC example, &#x60;{ MATIC: null }&#x60; | [optional] 
**redirectUris** | **[String]** | An array of valid base redirect uris or exact uris that can be used for the redirect uri of various MetaFab features such as player login/registration and wallet connection.  Expects base or exact uris. For example, you could use include a uri of &#x60;https://trymetafab.com&#x60; and it would allow redirection to any valid uri on the domain, such as &#x60;https://trymetafab.com/play/game&#x60;. | [optional] 
**iconImageBase64** | **String** | A base64 string of the icon image for this game. Supported image formats are &#x60;jpg&#x60;, &#x60;jpeg&#x60;, &#x60;png&#x60;, &#x60;gif&#x60; Recommended size is 512x512 pixels, or 1:1 aspect ratio. This image is used for your auth/connect wallet flow and other MetaFab features for your game. | [optional] 
**coverImageBase64** | **String** | A base64 string of the cover image for this game. Supported image formats are &#x60;jpg&#x60;, &#x60;jpeg&#x60;, &#x60;png&#x60;, &#x60;gif&#x60;. Recommended size is 1600x1000 pixels, or 16:10 aspect ratio.  This image is used as the background image for your auth/connect wallet flow and other MetaFab features for your game. | [optional] 
**primaryColorHex** | **String** | A valid hex color code. This color is used for your auth/connect wallet flow to control the color of buttons and other brandable MetaFab features for your game. | [optional] 
**resetPublishedKey** | **Boolean** | Revokes the game&#39;s previous published key and returns a new one if true. | [optional] 
**resetSecretKey** | **Boolean** | Revokes the game&#39;s previous secret key and returns a new on if true. | [optional] 


