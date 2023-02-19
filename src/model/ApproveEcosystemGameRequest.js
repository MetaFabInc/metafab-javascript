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
 * The ApproveEcosystemGameRequest model module.
 * @module model/ApproveEcosystemGameRequest
 * @version 1.5.1
 */
class ApproveEcosystemGameRequest {
    /**
     * Constructs a new <code>ApproveEcosystemGameRequest</code>.
     * @alias module:model/ApproveEcosystemGameRequest
     * @param gameId {String} The id of the game being approved.
     */
    constructor(gameId) { 
        
        ApproveEcosystemGameRequest.initialize(this, gameId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, gameId) { 
        obj['gameId'] = gameId;
    }

    /**
     * Constructs a <code>ApproveEcosystemGameRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ApproveEcosystemGameRequest} obj Optional instance to populate.
     * @return {module:model/ApproveEcosystemGameRequest} The populated <code>ApproveEcosystemGameRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ApproveEcosystemGameRequest();

            if (data.hasOwnProperty('gameId')) {
                obj['gameId'] = ApiClient.convertToType(data['gameId'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ApproveEcosystemGameRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ApproveEcosystemGameRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ApproveEcosystemGameRequest.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['gameId'] && !(typeof data['gameId'] === 'string' || data['gameId'] instanceof String)) {
            throw new Error("Expected the field `gameId` to be a primitive type in the JSON string but got " + data['gameId']);
        }

        return true;
    }


}

ApproveEcosystemGameRequest.RequiredProperties = ["gameId"];

/**
 * The id of the game being approved.
 * @member {String} gameId
 */
ApproveEcosystemGameRequest.prototype['gameId'] = undefined;






export default ApproveEcosystemGameRequest;

