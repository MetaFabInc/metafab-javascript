/**
 * MetaFab API
 * Complete MetaFab API references and guides can be found at: https://trymetafab.com
 *
 * The version of the OpenAPI document: 1.5.1
 * Contact: metafabproject@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The UpdatePlayerRequest model module.
 * @module model/UpdatePlayerRequest
 * @version 1.5.1
 */
class UpdatePlayerRequest {
    /**
     * Constructs a new <code>UpdatePlayerRequest</code>.
     * @alias module:model/UpdatePlayerRequest
     */
    constructor() { 
        
        UpdatePlayerRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdatePlayerRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdatePlayerRequest} obj Optional instance to populate.
     * @return {module:model/UpdatePlayerRequest} The populated <code>UpdatePlayerRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdatePlayerRequest();

            if (data.hasOwnProperty('currentPassword')) {
                obj['currentPassword'] = ApiClient.convertToType(data['currentPassword'], 'String');
            }
            if (data.hasOwnProperty('newPassword')) {
                obj['newPassword'] = ApiClient.convertToType(data['newPassword'], 'String');
            }
            if (data.hasOwnProperty('resetAccessToken')) {
                obj['resetAccessToken'] = ApiClient.convertToType(data['resetAccessToken'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UpdatePlayerRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdatePlayerRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['currentPassword'] && !(typeof data['currentPassword'] === 'string' || data['currentPassword'] instanceof String)) {
            throw new Error("Expected the field `currentPassword` to be a primitive type in the JSON string but got " + data['currentPassword']);
        }
        // ensure the json data is a string
        if (data['newPassword'] && !(typeof data['newPassword'] === 'string' || data['newPassword'] instanceof String)) {
            throw new Error("Expected the field `newPassword` to be a primitive type in the JSON string but got " + data['newPassword']);
        }

        return true;
    }


}



/**
 * The player's current password. Must be provided if setting `newPassword`.
 * @member {String} currentPassword
 */
UpdatePlayerRequest.prototype['currentPassword'] = undefined;

/**
 * A new password. The player's old password will no longer be valid.
 * @member {String} newPassword
 */
UpdatePlayerRequest.prototype['newPassword'] = undefined;

/**
 * Revokes the player's previous access token and returns a new one if true.
 * @member {Boolean} resetAccessToken
 */
UpdatePlayerRequest.prototype['resetAccessToken'] = undefined;






export default UpdatePlayerRequest;

