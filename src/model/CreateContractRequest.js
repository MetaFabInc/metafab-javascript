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
 * The CreateContractRequest model module.
 * @module model/CreateContractRequest
 * @version 1.1.0
 */
class CreateContractRequest {
    /**
     * Constructs a new <code>CreateContractRequest</code>.
     * @alias module:model/CreateContractRequest
     * @param address {String} The address of the existing contract.
     * @param abi {String} JSON of the abi.
     * @param chain {module:model/CreateContractRequest.ChainEnum} The blockchain you want to deploy this currency on. Support for new blockchains are added over time.
     */
    constructor(address, abi, chain) { 
        
        CreateContractRequest.initialize(this, address, abi, chain);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, address, abi, chain) { 
        obj['address'] = address;
        obj['abi'] = abi;
        obj['chain'] = chain;
    }

    /**
     * Constructs a <code>CreateContractRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateContractRequest} obj Optional instance to populate.
     * @return {module:model/CreateContractRequest} The populated <code>CreateContractRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateContractRequest();

            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('abi')) {
                obj['abi'] = ApiClient.convertToType(data['abi'], 'String');
            }
            if (data.hasOwnProperty('chain')) {
                obj['chain'] = ApiClient.convertToType(data['chain'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The address of the existing contract.
 * @member {String} address
 */
CreateContractRequest.prototype['address'] = undefined;

/**
 * JSON of the abi.
 * @member {String} abi
 */
CreateContractRequest.prototype['abi'] = undefined;

/**
 * The blockchain you want to deploy this currency on. Support for new blockchains are added over time.
 * @member {module:model/CreateContractRequest.ChainEnum} chain
 */
CreateContractRequest.prototype['chain'] = undefined;





/**
 * Allowed values for the <code>chain</code> property.
 * @enum {String}
 * @readonly
 */
CreateContractRequest['ChainEnum'] = {

    /**
     * value: "ETHEREUM"
     * @const
     */
    "ETHEREUM": "ETHEREUM",

    /**
     * value: "GOERLI"
     * @const
     */
    "GOERLI": "GOERLI",

    /**
     * value: "MATIC"
     * @const
     */
    "MATIC": "MATIC",

    /**
     * value: "MUMBAI"
     * @const
     */
    "MUMBAI": "MUMBAI"
};



export default CreateContractRequest;

