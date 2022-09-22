/**
 * MetaFab API
 *  Complete MetaFab API references and guides can be found at: https://trymetafab.com
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
import CreateCurrency200ResponseAllOfContract from './CreateCurrency200ResponseAllOfContract';

/**
 * The CreateCurrency200ResponseAllOf model module.
 * @module model/CreateCurrency200ResponseAllOf
 * @version 1.0.0
 */
class CreateCurrency200ResponseAllOf {
    /**
     * Constructs a new <code>CreateCurrency200ResponseAllOf</code>.
     * @alias module:model/CreateCurrency200ResponseAllOf
     */
    constructor() { 
        
        CreateCurrency200ResponseAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateCurrency200ResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateCurrency200ResponseAllOf} obj Optional instance to populate.
     * @return {module:model/CreateCurrency200ResponseAllOf} The populated <code>CreateCurrency200ResponseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateCurrency200ResponseAllOf();

            if (data.hasOwnProperty('contract')) {
                obj['contract'] = CreateCurrency200ResponseAllOfContract.constructFromObject(data['contract']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/CreateCurrency200ResponseAllOfContract} contract
 */
CreateCurrency200ResponseAllOf.prototype['contract'] = undefined;






export default CreateCurrency200ResponseAllOf;
