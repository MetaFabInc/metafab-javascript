/**
 * MetaFab API
 *  Complete MetaFab API references and guides can be found at: https://trymetafab.com
 *
 * The version of the OpenAPI document: 1.4.1
 * Contact: metafabproject@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The GetPlayerData200Response model module.
 * @module model/GetPlayerData200Response
 * @version 1.4.1
 */
class GetPlayerData200Response {
    /**
     * Constructs a new <code>GetPlayerData200Response</code>.
     * @alias module:model/GetPlayerData200Response
     */
    constructor() { 
        
        GetPlayerData200Response.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetPlayerData200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetPlayerData200Response} obj Optional instance to populate.
     * @return {module:model/GetPlayerData200Response} The populated <code>GetPlayerData200Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetPlayerData200Response();

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
 * @member {Object} protectedData
 */
GetPlayerData200Response.prototype['protectedData'] = undefined;

/**
 * @member {Object} publicData
 */
GetPlayerData200Response.prototype['publicData'] = undefined;






export default GetPlayerData200Response;

