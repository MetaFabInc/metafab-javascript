# MetafabJavascript.UpdateEcosystemRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | A new name. Replaces the ecosystem&#39;s current name. | [optional] 
**email** | **String** | A new email address. The ecosystem&#39;s old email will no longer be valid for account authentication. &#x60;currentPassword&#x60; must also be provided. | [optional] 
**currentPassword** | **String** | The ecosystem&#39;s current password. Must be provided if setting &#x60;newPassword&#x60; or &#x60;email&#x60;. | [optional] 
**newPassword** | **String** | A new password. The ecosystem&#39;s old password will no longer be valid. | [optional] 
**iconImageBase64** | **String** | A base64 string of the icon image for this ecosystem. Supported image formats are &#x60;jpg&#x60;, &#x60;jpeg&#x60;, &#x60;png&#x60;, &#x60;gif&#x60; Recommended size is 512x512 pixels, or 1:1 aspect ratio. This image is used for your profile authorization flow and other MetaFab features for your ecosystem. | [optional] 
**coverImageBase64** | **String** | A base64 string of the cover image for this ecosystem. Supported image formats are &#x60;jpg&#x60;, &#x60;jpeg&#x60;, &#x60;png&#x60;, &#x60;gif&#x60;. Recommended size is 1600x1000 pixels, or 16:10 aspect ratio.  This image is used as the background image for your profile authorization flow and other MetaFab features for your ecosystem. | [optional] 
**primaryColorHex** | **String** | A valid hex color code. This color is used for your profile authorization flow to control the color of buttons and other brandable MetaFab features for your ecosystem. | [optional] 
**resetPublishedKey** | **Boolean** | Revokes the ecosystem&#39;s previous published key and returns a new one if true. | [optional] 
**resetSecretKey** | **Boolean** | Revokes the ecosystem&#39;s previous secret key and returns a new on if true. | [optional] 


