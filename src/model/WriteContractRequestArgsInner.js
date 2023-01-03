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
 * The WriteContractRequestArgsInner model module.
 * @module model/WriteContractRequestArgsInner
 * @version 1.4.1
 */
class WriteContractRequestArgsInner {
    /**
     * Constructs a new <code>WriteContractRequestArgsInner</code>.
     * @alias module:model/WriteContractRequestArgsInner
     */
    constructor() { 
        
        WriteContractRequestArgsInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WriteContractRequestArgsInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WriteContractRequestArgsInner} obj Optional instance to populate.
     * @return {module:model/WriteContractRequestArgsInner} The populated <code>WriteContractRequestArgsInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WriteContractRequestArgsInner();

        }
        return obj;
    }


}






export default WriteContractRequestArgsInner;

