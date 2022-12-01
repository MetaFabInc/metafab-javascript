/**
 * MetaFab API
 *  Complete MetaFab API references and guides can be found at: https://trymetafab.com
 *
 * The version of the OpenAPI document: 1.3.0
 * Contact: metafabproject@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The SetPlayerDataRequest model module.
 * @module model/SetPlayerDataRequest
 * @version 1.3.0
 */
class SetPlayerDataRequest {
    /**
     * Constructs a new <code>SetPlayerDataRequest</code>.
     * @alias module:model/SetPlayerDataRequest
     */
    constructor() { 
        
        SetPlayerDataRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SetPlayerDataRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SetPlayerDataRequest} obj Optional instance to populate.
     * @return {module:model/SetPlayerDataRequest} The populated <code>SetPlayerDataRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SetPlayerDataRequest();

            if (data.hasOwnProperty('protectedData')) {
                obj['protectedData'] = ApiClient.convertToType(data['protectedData'], Object);
            }
            if (data.hasOwnProperty('publicData')) {
                obj['publicData'] = ApiClient.convertToType(data['publicData'], Object);
            }
        }
        return obj;
    }


}

/**
 * protectedData can only be set if `X-Authorization` includes credentials for the game the target player is a part of. Expects an arbitrary object allowed to contain any set of properties and nested data within those properties, including arrays.  protectedData is great for storing sensitive player data like tracking experience points, off-chain inventories, save states, and more - things that players shouldn't have the ability to directly change themselves.
 * @member {Object} protectedData
 */
SetPlayerDataRequest.prototype['protectedData'] = undefined;

/**
 * publicData can be set if `X-Authorization` includes credentials for the target player or game the player is a part of. Expects an arbitrary object allowed to contain any set of properties and nested data within those properties, including arrays.  publicData is great for storing player preferences like in-game settings, non-sensitive data and more. Anything that a player should have the ability to directly change themselves without client or server verification can be stored in publicData.
 * @member {Object} publicData
 */
SetPlayerDataRequest.prototype['publicData'] = undefined;






export default SetPlayerDataRequest;

