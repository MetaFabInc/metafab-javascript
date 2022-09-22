/**
 * MetaFab API
 * Documentation for the MetaFab API. Complete API references and guides can be found at: https://trymetafab.com
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: metafabproject@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The V1PlayersPlayerIdPatchRequest model module.
 * @module model/V1PlayersPlayerIdPatchRequest
 * @version 1.0.0
 */
class V1PlayersPlayerIdPatchRequest {
    /**
     * Constructs a new <code>V1PlayersPlayerIdPatchRequest</code>.
     * @alias module:model/V1PlayersPlayerIdPatchRequest
     */
    constructor() { 
        
        V1PlayersPlayerIdPatchRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>V1PlayersPlayerIdPatchRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1PlayersPlayerIdPatchRequest} obj Optional instance to populate.
     * @return {module:model/V1PlayersPlayerIdPatchRequest} The populated <code>V1PlayersPlayerIdPatchRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1PlayersPlayerIdPatchRequest();

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


}

/**
 * The player's current password. Must be provided if setting `newPassword`.
 * @member {String} currentPassword
 */
V1PlayersPlayerIdPatchRequest.prototype['currentPassword'] = undefined;

/**
 * A new password. The player's old password will no longer be valid.
 * @member {String} newPassword
 */
V1PlayersPlayerIdPatchRequest.prototype['newPassword'] = undefined;

/**
 * Revokes the player's previous access token and returns a new one if true.
 * @member {Boolean} resetAccessToken
 */
V1PlayersPlayerIdPatchRequest.prototype['resetAccessToken'] = undefined;






export default V1PlayersPlayerIdPatchRequest;

