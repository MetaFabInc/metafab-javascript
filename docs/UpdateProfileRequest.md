# MetafabJavascript.UpdateProfileRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currentPassword** | **String** | The profile&#39;s current password. Must be provided if setting &#x60;newPassword&#x60;. | [optional] 
**newPassword** | **String** | A new password. The profile&#39;s old password will no longer be valid. | [optional] 
**resetAccessToken** | **Boolean** | Revokes the profile&#39;s previous access token and returns a new one if true. | [optional] 


