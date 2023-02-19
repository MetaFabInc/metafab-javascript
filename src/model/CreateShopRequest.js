/**
 * MetaFab API
 * Complete MetaFab API references and guides can be found at: https://trymetafab.com
 *
 * The version of the OpenAPI document: 1.5.1
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
 * @version 1.5.1
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

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('chain')) {
                obj['chain'] = ApiClient.convertToType(data['chain'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateShopRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateShopRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreateShopRequest.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['chain'] && !(typeof data['chain'] === 'string' || data['chain'] instanceof String)) {
            throw new Error("Expected the field `chain` to be a primitive type in the JSON string but got " + data['chain']);
        }

        return true;
    }


}

CreateShopRequest.RequiredProperties = ["chain"];

/**
 * The name of this item collection. This can be anything, such as `Production - Game Shop`, `Testing - My Game Shop`, etc.
 * @member {String} name
 */
CreateShopRequest.prototype['name'] = undefined;

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
     * value: "ARBITRUM"
     * @const
     */
    "ARBITRUM": "ARBITRUM",

    /**
     * value: "ARBITRUMGOERLI"
     * @const
     */
    "ARBITRUMGOERLI": "ARBITRUMGOERLI",

    /**
     * value: "ARBITRUMNOVA"
     * @const
     */
    "ARBITRUMNOVA": "ARBITRUMNOVA",

    /**
     * value: "AVALANCHE"
     * @const
     */
    "AVALANCHE": "AVALANCHE",

    /**
     * value: "AVALANCHEFUJI"
     * @const
     */
    "AVALANCHEFUJI": "AVALANCHEFUJI",

    /**
     * value: "ETHEREUM"
     * @const
     */
    "ETHEREUM": "ETHEREUM",

    /**
     * value: "FANTOM"
     * @const
     */
    "FANTOM": "FANTOM",

    /**
     * value: "FANTOMTEST"
     * @const
     */
    "FANTOMTEST": "FANTOMTEST",

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
     * value: "THUNDERCORE"
     * @const
     */
    "THUNDERCORE": "THUNDERCORE",

    /**
     * value: "THUNDERCORETESTNET"
     * @const
     */
    "THUNDERCORETESTNET": "THUNDERCORETESTNET"
};



export default CreateShopRequest;

