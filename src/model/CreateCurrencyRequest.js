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
 * The CreateCurrencyRequest model module.
 * @module model/CreateCurrencyRequest
 * @version 1.4.1
 */
class CreateCurrencyRequest {
    /**
     * Constructs a new <code>CreateCurrencyRequest</code>.
     * @alias module:model/CreateCurrencyRequest
     * @param name {String} The name of this currency. This can be anything, such as `Bright Gems`, `Gold`, etc.
     * @param symbol {String} The shorthand symbol to represent this currency. This can be anything, such as `BGEM`, `GLD`, etc.
     * @param supplyCap {Number} The maximum amount of this currency that can ever exist. Use `0` if you do not want this currency to have a maximum supply.
     * @param chain {module:model/CreateCurrencyRequest.ChainEnum} The blockchain you want to deploy this currency on. Support for new blockchains are added over time.
     */
    constructor(name, symbol, supplyCap, chain) { 
        
        CreateCurrencyRequest.initialize(this, name, symbol, supplyCap, chain);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, symbol, supplyCap, chain) { 
        obj['name'] = name;
        obj['symbol'] = symbol;
        obj['supplyCap'] = supplyCap;
        obj['chain'] = chain;
    }

    /**
     * Constructs a <code>CreateCurrencyRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateCurrencyRequest} obj Optional instance to populate.
     * @return {module:model/CreateCurrencyRequest} The populated <code>CreateCurrencyRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateCurrencyRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('supplyCap')) {
                obj['supplyCap'] = ApiClient.convertToType(data['supplyCap'], 'Number');
            }
            if (data.hasOwnProperty('chain')) {
                obj['chain'] = ApiClient.convertToType(data['chain'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The name of this currency. This can be anything, such as `Bright Gems`, `Gold`, etc.
 * @member {String} name
 */
CreateCurrencyRequest.prototype['name'] = undefined;

/**
 * The shorthand symbol to represent this currency. This can be anything, such as `BGEM`, `GLD`, etc.
 * @member {String} symbol
 */
CreateCurrencyRequest.prototype['symbol'] = undefined;

/**
 * The maximum amount of this currency that can ever exist. Use `0` if you do not want this currency to have a maximum supply.
 * @member {Number} supplyCap
 */
CreateCurrencyRequest.prototype['supplyCap'] = undefined;

/**
 * The blockchain you want to deploy this currency on. Support for new blockchains are added over time.
 * @member {module:model/CreateCurrencyRequest.ChainEnum} chain
 */
CreateCurrencyRequest.prototype['chain'] = undefined;





/**
 * Allowed values for the <code>chain</code> property.
 * @enum {String}
 * @readonly
 */
CreateCurrencyRequest['ChainEnum'] = {

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



export default CreateCurrencyRequest;

