/**
 * MetaFab API
 *  Complete MetaFab API references and guides can be found at: https://trymetafab.com
 *
 * The version of the OpenAPI document: 1.1.4
 * Contact: metafabproject@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import CreateCollection200ResponseAllOfContract from './CreateCollection200ResponseAllOfContract';

/**
 * The CreateCollection200ResponseAllOf model module.
 * @module model/CreateCollection200ResponseAllOf
 * @version 1.1.4
 */
class CreateCollection200ResponseAllOf {
    /**
     * Constructs a new <code>CreateCollection200ResponseAllOf</code>.
     * @alias module:model/CreateCollection200ResponseAllOf
     */
    constructor() { 
        
        CreateCollection200ResponseAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateCollection200ResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateCollection200ResponseAllOf} obj Optional instance to populate.
     * @return {module:model/CreateCollection200ResponseAllOf} The populated <code>CreateCollection200ResponseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateCollection200ResponseAllOf();

            if (data.hasOwnProperty('contract')) {
                obj['contract'] = CreateCollection200ResponseAllOfContract.constructFromObject(data['contract']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/CreateCollection200ResponseAllOfContract} contract
 */
CreateCollection200ResponseAllOf.prototype['contract'] = undefined;






export default CreateCollection200ResponseAllOf;

