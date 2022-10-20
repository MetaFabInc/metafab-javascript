/**
 * MetaFab API
 *  Complete MetaFab API references and guides can be found at: https://trymetafab.com
 *
 * The version of the OpenAPI document: 1.1.0
 * Contact: metafabproject@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The SetCollectionItemTimelockRequest model module.
 * @module model/SetCollectionItemTimelockRequest
 * @version 1.1.0
 */
class SetCollectionItemTimelockRequest {
    /**
     * Constructs a new <code>SetCollectionItemTimelockRequest</code>.
     * @alias module:model/SetCollectionItemTimelockRequest
     * @param timelock {Number} A unix timestamp (in seconds) defining when the set timelock expires.
     */
    constructor(timelock) { 
        
        SetCollectionItemTimelockRequest.initialize(this, timelock);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, timelock) { 
        obj['timelock'] = timelock;
    }

    /**
     * Constructs a <code>SetCollectionItemTimelockRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SetCollectionItemTimelockRequest} obj Optional instance to populate.
     * @return {module:model/SetCollectionItemTimelockRequest} The populated <code>SetCollectionItemTimelockRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SetCollectionItemTimelockRequest();

            if (data.hasOwnProperty('timelock')) {
                obj['timelock'] = ApiClient.convertToType(data['timelock'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * A unix timestamp (in seconds) defining when the set timelock expires.
 * @member {Number} timelock
 */
SetCollectionItemTimelockRequest.prototype['timelock'] = undefined;






export default SetCollectionItemTimelockRequest;
