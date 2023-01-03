/**
 * MetaFab API
 *  Complete MetaFab API references and guides can be found at: https://trymetafab.com
 *
 * The version of the OpenAPI document: 1.4.0
 * Contact: metafabproject@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import WriteContractRequestArgsInner from './WriteContractRequestArgsInner';

/**
 * The WriteContractRequest model module.
 * @module model/WriteContractRequest
 * @version 1.4.0
 */
class WriteContractRequest {
    /**
     * Constructs a new <code>WriteContractRequest</code>.
     * @alias module:model/WriteContractRequest
     * @param func {String} A contract function name. This can be any valid function from the the ABI of the contract you are interacting with. For example, `mint`.
     */
    constructor(func) { 
        
        WriteContractRequest.initialize(this, func);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, func) { 
        obj['func'] = func;
    }

    /**
     * Constructs a <code>WriteContractRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WriteContractRequest} obj Optional instance to populate.
     * @return {module:model/WriteContractRequest} The populated <code>WriteContractRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WriteContractRequest();

            if (data.hasOwnProperty('func')) {
                obj['func'] = ApiClient.convertToType(data['func'], 'String');
            }
            if (data.hasOwnProperty('args')) {
                obj['args'] = ApiClient.convertToType(data['args'], [WriteContractRequestArgsInner]);
            }
        }
        return obj;
    }


}

/**
 * A contract function name. This can be any valid function from the the ABI of the contract you are interacting with. For example, `mint`.
 * @member {String} func
 */
WriteContractRequest.prototype['func'] = undefined;

/**
 * An array of args. This is optional and only necessary if the function being invoked requires arguments per the contract ABI. For example, `[123, \"Hello\", false]`.
 * @member {Array.<module:model/WriteContractRequestArgsInner>} args
 */
WriteContractRequest.prototype['args'] = undefined;






export default WriteContractRequest;

