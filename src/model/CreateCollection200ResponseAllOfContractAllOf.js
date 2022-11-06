/**
 * MetaFab API
 *  Complete MetaFab API references and guides can be found at: https://trymetafab.com
 *
 * The version of the OpenAPI document: 1.1.43
 * Contact: metafabproject@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import TransactionModel from './TransactionModel';

/**
 * The CreateCollection200ResponseAllOfContractAllOf model module.
 * @module model/CreateCollection200ResponseAllOfContractAllOf
 * @version 1.1.43
 */
class CreateCollection200ResponseAllOfContractAllOf {
    /**
     * Constructs a new <code>CreateCollection200ResponseAllOfContractAllOf</code>.
     * @alias module:model/CreateCollection200ResponseAllOfContractAllOf
     */
    constructor() { 
        
        CreateCollection200ResponseAllOfContractAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateCollection200ResponseAllOfContractAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateCollection200ResponseAllOfContractAllOf} obj Optional instance to populate.
     * @return {module:model/CreateCollection200ResponseAllOfContractAllOf} The populated <code>CreateCollection200ResponseAllOfContractAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateCollection200ResponseAllOfContractAllOf();

            if (data.hasOwnProperty('transactions')) {
                obj['transactions'] = ApiClient.convertToType(data['transactions'], [TransactionModel]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/TransactionModel>} transactions
 */
CreateCollection200ResponseAllOfContractAllOf.prototype['transactions'] = undefined;






export default CreateCollection200ResponseAllOfContractAllOf;

