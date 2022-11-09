/**
 * MetaFab API
 *  Complete MetaFab API references and guides can be found at: https://trymetafab.com
 *
 * The version of the OpenAPI document: 1.2.1
 * Contact: metafabproject@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The CreateExchangeRequest model module.
 * @module model/CreateExchangeRequest
 * @version 1.2.1
 */
class CreateExchangeRequest {
    /**
     * Constructs a new <code>CreateExchangeRequest</code>.
     * @alias module:model/CreateExchangeRequest
     * @param chain {module:model/CreateExchangeRequest.ChainEnum} The blockchain you want to deploy this exchange on. Support for new blockchains are added over time.
     */
    constructor(chain) { 
        
        CreateExchangeRequest.initialize(this, chain);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, chain) { 
        obj['chain'] = chain;
    }

    /**
     * Constructs a <code>CreateExchangeRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateExchangeRequest} obj Optional instance to populate.
     * @return {module:model/CreateExchangeRequest} The populated <code>CreateExchangeRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateExchangeRequest();

            if (data.hasOwnProperty('chain')) {
                obj['chain'] = ApiClient.convertToType(data['chain'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The blockchain you want to deploy this exchange on. Support for new blockchains are added over time.
 * @member {module:model/CreateExchangeRequest.ChainEnum} chain
 */
CreateExchangeRequest.prototype['chain'] = undefined;





/**
 * Allowed values for the <code>chain</code> property.
 * @enum {String}
 * @readonly
 */
CreateExchangeRequest['ChainEnum'] = {

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
     * value: "MATICMUMBAI"
     * @const
     */
    "MATICMUMBAI": "MATICMUMBAI",

    /**
     * value: "ARBITRUM"
     * @const
     */
    "ARBITRUM": "ARBITRUM",

    /**
     * value: "ARBITRUMGOERLI"
     * @const
     */
    "ARBITRUMGOERLI": "ARBITRUMGOERLI"
};



export default CreateExchangeRequest;

