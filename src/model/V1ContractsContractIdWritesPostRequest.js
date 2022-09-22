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

/**
 * The V1ContractsContractIdWritesPostRequest model module.
 * @module model/V1ContractsContractIdWritesPostRequest
 * @version 1.0.0
 */
class V1ContractsContractIdWritesPostRequest {
    /**
     * Constructs a new <code>V1ContractsContractIdWritesPostRequest</code>.
     * @alias module:model/V1ContractsContractIdWritesPostRequest
     * @param func {String} A contract function name. This can be any valid function from the the ABI of the contract you are interacting with. For example, `mint`.
     */
    constructor(func) { 
        
        V1ContractsContractIdWritesPostRequest.initialize(this, func);
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
     * Constructs a <code>V1ContractsContractIdWritesPostRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1ContractsContractIdWritesPostRequest} obj Optional instance to populate.
     * @return {module:model/V1ContractsContractIdWritesPostRequest} The populated <code>V1ContractsContractIdWritesPostRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1ContractsContractIdWritesPostRequest();

            if (data.hasOwnProperty('func')) {
                obj['func'] = ApiClient.convertToType(data['func'], 'String');
            }
            if (data.hasOwnProperty('args')) {
                obj['args'] = ApiClient.convertToType(data['args'], 'String');
            }
        }
        return obj;
    }


}

/**
 * A contract function name. This can be any valid function from the the ABI of the contract you are interacting with. For example, `mint`.
 * @member {String} func
 */
V1ContractsContractIdWritesPostRequest.prototype['func'] = undefined;

/**
 * An array of args. This is optional and only necessary if the function being invoked requires arguments per the contract ABI. For example, `[123, \"Hello\", false]`.
 * @member {String} args
 */
V1ContractsContractIdWritesPostRequest.prototype['args'] = undefined;






export default V1ContractsContractIdWritesPostRequest;

