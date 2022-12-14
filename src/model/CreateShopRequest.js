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
 * The CreateShopRequest model module.
 * @module model/CreateShopRequest
 * @version 1.4.1
 */
class CreateShopRequest {
    /**
     * Constructs a new <code>CreateShopRequest</code>.
     * @alias module:model/CreateShopRequest
     * @param chain {module:model/CreateShopRequest.ChainEnum} The blockchain you want to deploy this shop on. Support for new blockchains are added over time.
     */
    constructor(chain) { 
        
        CreateShopRequest.initialize(this, chain);
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
     * Constructs a <code>CreateShopRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateShopRequest} obj Optional instance to populate.
     * @return {module:model/CreateShopRequest} The populated <code>CreateShopRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateShopRequest();

            if (data.hasOwnProperty('chain')) {
                obj['chain'] = ApiClient.convertToType(data['chain'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The blockchain you want to deploy this shop on. Support for new blockchains are added over time.
 * @member {module:model/CreateShopRequest.ChainEnum} chain
 */
CreateShopRequest.prototype['chain'] = undefined;





/**
 * Allowed values for the <code>chain</code> property.
 * @enum {String}
 * @readonly
 */
CreateShopRequest['ChainEnum'] = {

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



export default CreateShopRequest;

