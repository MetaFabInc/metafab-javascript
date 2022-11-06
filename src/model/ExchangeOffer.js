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

/**
 * The ExchangeOffer model module.
 * @module model/ExchangeOffer
 * @version 1.1.43
 */
class ExchangeOffer {
    /**
     * Constructs a new <code>ExchangeOffer</code>.
     * @alias module:model/ExchangeOffer
     */
    constructor() { 
        
        ExchangeOffer.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ExchangeOffer</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExchangeOffer} obj Optional instance to populate.
     * @return {module:model/ExchangeOffer} The populated <code>ExchangeOffer</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExchangeOffer();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('inputCollection')) {
                obj['inputCollection'] = ApiClient.convertToType(data['inputCollection'], 'String');
            }
            if (data.hasOwnProperty('inputCollectionItemIds')) {
                obj['inputCollectionItemIds'] = ApiClient.convertToType(data['inputCollectionItemIds'], ['Number']);
            }
            if (data.hasOwnProperty('inputCollectionItemAmounts')) {
                obj['inputCollectionItemAmounts'] = ApiClient.convertToType(data['inputCollectionItemAmounts'], ['Number']);
            }
            if (data.hasOwnProperty('inputCurrency')) {
                obj['inputCurrency'] = ApiClient.convertToType(data['inputCurrency'], 'String');
            }
            if (data.hasOwnProperty('inputCurrencyAmount')) {
                obj['inputCurrencyAmount'] = ApiClient.convertToType(data['inputCurrencyAmount'], 'Number');
            }
            if (data.hasOwnProperty('outputCollection')) {
                obj['outputCollection'] = ApiClient.convertToType(data['outputCollection'], 'String');
            }
            if (data.hasOwnProperty('outputCollectionItemIds')) {
                obj['outputCollectionItemIds'] = ApiClient.convertToType(data['outputCollectionItemIds'], ['Number']);
            }
            if (data.hasOwnProperty('outputCollectionItemAmounts')) {
                obj['outputCollectionItemAmounts'] = ApiClient.convertToType(data['outputCollectionItemAmounts'], ['Number']);
            }
            if (data.hasOwnProperty('outputCurrency')) {
                obj['outputCurrency'] = ApiClient.convertToType(data['outputCurrency'], 'String');
            }
            if (data.hasOwnProperty('outputCurrencyAmount')) {
                obj['outputCurrencyAmount'] = ApiClient.convertToType(data['outputCurrencyAmount'], 'Number');
            }
            if (data.hasOwnProperty('uses')) {
                obj['uses'] = ApiClient.convertToType(data['uses'], 'Number');
            }
            if (data.hasOwnProperty('maxUses')) {
                obj['maxUses'] = ApiClient.convertToType(data['maxUses'], 'Number');
            }
            if (data.hasOwnProperty('lastUpdatedAt')) {
                obj['lastUpdatedAt'] = ApiClient.convertToType(data['lastUpdatedAt'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * The id of this offer.
 * @member {Number} id
 */
ExchangeOffer.prototype['id'] = undefined;

/**
 * The address of the ERC1155 of MetaFab game items contract for input items required by this offer.
 * @member {String} inputCollection
 */
ExchangeOffer.prototype['inputCollection'] = undefined;

/**
 * An array of item ids from the input collection that are required for this offer.
 * @member {Array.<Number>} inputCollectionItemIds
 */
ExchangeOffer.prototype['inputCollectionItemIds'] = undefined;

/**
 * An array of amounts for each item id for the input collection that are required to use this offer.
 * @member {Array.<Number>} inputCollectionItemAmounts
 */
ExchangeOffer.prototype['inputCollectionItemAmounts'] = undefined;

/**
 * The address of the ERC20 or MetaFab game currency for the currency required by this offer.
 * @member {String} inputCurrency
 */
ExchangeOffer.prototype['inputCurrency'] = undefined;

/**
 * The amount of currency required by this offer.
 * @member {Number} inputCurrencyAmount
 */
ExchangeOffer.prototype['inputCurrencyAmount'] = undefined;

/**
 * The address of the ERC1155 of MetaFab game items contract for output items given by this offer.
 * @member {String} outputCollection
 */
ExchangeOffer.prototype['outputCollection'] = undefined;

/**
 * An array of item ids from the output collection that are given for this offer.
 * @member {Array.<Number>} outputCollectionItemIds
 */
ExchangeOffer.prototype['outputCollectionItemIds'] = undefined;

/**
 * An array of amounts for each item id for the output collection that are given by this offer.
 * @member {Array.<Number>} outputCollectionItemAmounts
 */
ExchangeOffer.prototype['outputCollectionItemAmounts'] = undefined;

/**
 * The address of the ERC20 or MetaFab game currency for the output currency given by this offer.
 * @member {String} outputCurrency
 */
ExchangeOffer.prototype['outputCurrency'] = undefined;

/**
 * The amount of currency given by this offer.
 * @member {Number} outputCurrencyAmount
 */
ExchangeOffer.prototype['outputCurrencyAmount'] = undefined;

/**
 * The number of times this offer has been used.
 * @member {Number} uses
 */
ExchangeOffer.prototype['uses'] = undefined;

/**
 * The maximum number of times this offer can be used. A value of `0` means there is no limit on how many times this offer can be used.
 * @member {Number} maxUses
 */
ExchangeOffer.prototype['maxUses'] = undefined;

/**
 * A unix timestamp in seconds that represents the last time this offer was set or updated.
 * @member {Number} lastUpdatedAt
 */
ExchangeOffer.prototype['lastUpdatedAt'] = undefined;






export default ExchangeOffer;

