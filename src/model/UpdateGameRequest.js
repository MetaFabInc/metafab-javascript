/**
 * MetaFab API
 *  Complete MetaFab API references and guides can be found at: https://trymetafab.com
 *
 * The version of the OpenAPI document: 1.4.0
 * Contact: metafabproject@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The UpdateGameRequest model module.
 * @module model/UpdateGameRequest
 * @version 1.4.0
 */
class UpdateGameRequest {
    /**
     * Constructs a new <code>UpdateGameRequest</code>.
     * @alias module:model/UpdateGameRequest
     */
    constructor() { 
        
        UpdateGameRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateGameRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateGameRequest} obj Optional instance to populate.
     * @return {module:model/UpdateGameRequest} The populated <code>UpdateGameRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateGameRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('currentPassword')) {
                obj['currentPassword'] = ApiClient.convertToType(data['currentPassword'], 'String');
            }
            if (data.hasOwnProperty('newPassword')) {
                obj['newPassword'] = ApiClient.convertToType(data['newPassword'], 'String');
            }
            if (data.hasOwnProperty('rpcs')) {
                obj['rpcs'] = ApiClient.convertToType(data['rpcs'], {'String': 'String'});
            }
            if (data.hasOwnProperty('redirectUris')) {
                obj['redirectUris'] = ApiClient.convertToType(data['redirectUris'], ['String']);
            }
            if (data.hasOwnProperty('iconImageBase64')) {
                obj['iconImageBase64'] = ApiClient.convertToType(data['iconImageBase64'], 'String');
            }
            if (data.hasOwnProperty('coverImageBase64')) {
                obj['coverImageBase64'] = ApiClient.convertToType(data['coverImageBase64'], 'String');
            }
            if (data.hasOwnProperty('primaryColorHex')) {
                obj['primaryColorHex'] = ApiClient.convertToType(data['primaryColorHex'], 'String');
            }
            if (data.hasOwnProperty('resetPublishedKey')) {
                obj['resetPublishedKey'] = ApiClient.convertToType(data['resetPublishedKey'], 'Boolean');
            }
            if (data.hasOwnProperty('resetSecretKey')) {
                obj['resetSecretKey'] = ApiClient.convertToType(data['resetSecretKey'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * A new name. Replaces the game's current name.
 * @member {String} name
 */
UpdateGameRequest.prototype['name'] = undefined;

/**
 * A new email address. The game's old email will no longer be valid for account authentication. `currentPassword` must also be provided.
 * @member {String} email
 */
UpdateGameRequest.prototype['email'] = undefined;

/**
 * The game's current password. Must be provided if setting `newPassword` or `email`.
 * @member {String} currentPassword
 */
UpdateGameRequest.prototype['currentPassword'] = undefined;

/**
 * A new password. The game's old password will no longer be valid.
 * @member {String} newPassword
 */
UpdateGameRequest.prototype['newPassword'] = undefined;

/**
 * Sets a custom RPC for your game to use instead of MetaFab's default RPCs for the chain(s) you specify.  Expects a JSON object containing key value pairs of supported `chain` -> `rpc url`. Only the chain names provided as keys in the object will be explicitly overriden. To delete a custom RPC for your game, provide the chain name to delete as a key in the provided object and `null` as the value.  Set RPC example, `{ MATIC: 'https://polygon-rpc.com' }` Delete RPC example, `{ MATIC: null }`
 * @member {Object.<String, String>} rpcs
 */
UpdateGameRequest.prototype['rpcs'] = undefined;

/**
 * An array of valid base redirect uris or exact uris that can be used for the redirect uri of various MetaFab features such as player login/registration and wallet connection.  Expects base or exact uris. For example, you could use include a uri of `https://trymetafab.com` and it would allow redirection to any valid uri on the domain, such as `https://trymetafab.com/play/game`.
 * @member {Array.<String>} redirectUris
 */
UpdateGameRequest.prototype['redirectUris'] = undefined;

/**
 * A base64 string of the icon image for this game. Supported image formats are `jpg`, `jpeg`, `png`, `gif` Recommended size is 512x512 pixels, or 1:1 aspect ratio. This image is used for your auth/connect wallet flow and other MetaFab features for your game.
 * @member {String} iconImageBase64
 */
UpdateGameRequest.prototype['iconImageBase64'] = undefined;

/**
 * A base64 string of the cover image for this game. Supported image formats are `jpg`, `jpeg`, `png`, `gif`. Recommended size is 1600x1000 pixels, or 16:10 aspect ratio.  This image is used as the background image for your auth/connect wallet flow and other MetaFab features for your game.
 * @member {String} coverImageBase64
 */
UpdateGameRequest.prototype['coverImageBase64'] = undefined;

/**
 * A valid hex color code. This color is used for your auth/connect wallet flow to control the color of buttons and other brandable MetaFab features for your game.
 * @member {String} primaryColorHex
 */
UpdateGameRequest.prototype['primaryColorHex'] = undefined;

/**
 * Revokes the game's previous published key and returns a new one if true.
 * @member {Boolean} resetPublishedKey
 */
UpdateGameRequest.prototype['resetPublishedKey'] = undefined;

/**
 * Revokes the game's previous secret key and returns a new on if true.
 * @member {Boolean} resetSecretKey
 */
UpdateGameRequest.prototype['resetSecretKey'] = undefined;






export default UpdateGameRequest;

