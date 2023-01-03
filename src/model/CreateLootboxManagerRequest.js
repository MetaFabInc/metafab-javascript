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

/**
 * The CreateLootboxManagerRequest model module.
 * @module model/CreateLootboxManagerRequest
 * @version 1.4.0
 */
class CreateLootboxManagerRequest {
    /**
     * Constructs a new <code>CreateLootboxManagerRequest</code>.
     * @alias module:model/CreateLootboxManagerRequest
     * @param chain {module:model/CreateLootboxManagerRequest.ChainEnum} The blockchain you want to deploy this lootbox manager on. Support for new blockchains are added over time.
     */
    constructor(chain) { 
        
        CreateLootboxManagerRequest.initialize(this, chain);
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
     * Constructs a <code>CreateLootboxManagerRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateLootboxManagerRequest} obj Optional instance to populate.
     * @return {module:model/CreateLootboxManagerRequest} The populated <code>CreateLootboxManagerRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateLootboxManagerRequest();

            if (data.hasOwnProperty('chain')) {
                obj['chain'] = ApiClient.convertToType(data['chain'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The blockchain you want to deploy this lootbox manager on. Support for new blockchains are added over time.
 * @member {module:model/CreateLootboxManagerRequest.ChainEnum} chain
 */
CreateLootboxManagerRequest.prototype['chain'] = undefined;





/**
 * Allowed values for the <code>chain</code> property.
 * @enum {String}
 * @readonly
 */
CreateLootboxManagerRequest['ChainEnum'] = {

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



export default CreateLootboxManagerRequest;

