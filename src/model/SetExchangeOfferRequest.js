/**
 * MetaFab API
 *  Complete MetaFab API references and guides can be found at: https://trymetafab.com
 *
 * The version of the OpenAPI document: 1.1.4
 * Contact: metafabproject@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The SetExchangeOfferRequest model module.
 * @module model/SetExchangeOfferRequest
 * @version 1.1.4
 */
class SetExchangeOfferRequest {
    /**
     * Constructs a new <code>SetExchangeOfferRequest</code>.
     * @alias module:model/SetExchangeOfferRequest
     * @param id {Number} A unique offer id to use for this offer for the exchange. If an existing offer id is used, the current offer will be updated but the existing number of uses will be kept. If you want to reset the number of uses for an existing offer, first remove it using the remove offer endpoint, then set it.
     */
    constructor(id) { 
        
        SetExchangeOfferRequest.initialize(this, id);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id) { 
        obj['id'] = id;
    }

    /**
     * Constructs a <code>SetExchangeOfferRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SetExchangeOfferRequest} obj Optional instance to populate.
     * @return {module:model/SetExchangeOfferRequest} The populated <code>SetExchangeOfferRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SetExchangeOfferRequest();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('inputCollectionAddress')) {
                obj['inputCollectionAddress'] = ApiClient.convertToType(data['inputCollectionAddress'], 'String');
            }
            if (data.hasOwnProperty('inputCollectionId')) {
                obj['inputCollectionId'] = ApiClient.convertToType(data['inputCollectionId'], 'String');
            }
            if (data.hasOwnProperty('inputCollectionItemIds')) {
                obj['inputCollectionItemIds'] = ApiClient.convertToType(data['inputCollectionItemIds'], ['Number']);
            }
            if (data.hasOwnProperty('inputCollectionItemAmounts')) {
                obj['inputCollectionItemAmounts'] = ApiClient.convertToType(data['inputCollectionItemAmounts'], ['Number']);
            }
            if (data.hasOwnProperty('inputCurrencyAddress')) {
                obj['inputCurrencyAddress'] = ApiClient.convertToType(data['inputCurrencyAddress'], 'String');
            }
            if (data.hasOwnProperty('inputCurrencyId')) {
                obj['inputCurrencyId'] = ApiClient.convertToType(data['inputCurrencyId'], 'String');
            }
            if (data.hasOwnProperty('inputCurrencyAmount')) {
                obj['inputCurrencyAmount'] = ApiClient.convertToType(data['inputCurrencyAmount'], 'Number');
            }
            if (data.hasOwnProperty('outputCollectionAddress')) {
                obj['outputCollectionAddress'] = ApiClient.convertToType(data['outputCollectionAddress'], 'String');
            }
            if (data.hasOwnProperty('outputCollectionId')) {
                obj['outputCollectionId'] = ApiClient.convertToType(data['outputCollectionId'], 'String');
            }
            if (data.hasOwnProperty('outputCollectionItemIds')) {
                obj['outputCollectionItemIds'] = ApiClient.convertToType(data['outputCollectionItemIds'], ['Number']);
            }
            if (data.hasOwnProperty('outputCollectionItemAmounts')) {
                obj['outputCollectionItemAmounts'] = ApiClient.convertToType(data['outputCollectionItemAmounts'], ['Number']);
            }
            if (data.hasOwnProperty('outputCurrencyAddress')) {
                obj['outputCurrencyAddress'] = ApiClient.convertToType(data['outputCurrencyAddress'], 'String');
            }
            if (data.hasOwnProperty('outputCurrencyId')) {
                obj['outputCurrencyId'] = ApiClient.convertToType(data['outputCurrencyId'], 'String');
            }
            if (data.hasOwnProperty('outputCurrencyAmount')) {
                obj['outputCurrencyAmount'] = ApiClient.convertToType(data['outputCurrencyAmount'], 'Number');
            }
            if (data.hasOwnProperty('maxUses')) {
                obj['maxUses'] = ApiClient.convertToType(data['maxUses'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * A unique offer id to use for this offer for the exchange. If an existing offer id is used, the current offer will be updated but the existing number of uses will be kept. If you want to reset the number of uses for an existing offer, first remove it using the remove offer endpoint, then set it.
 * @member {Number} id
 */
SetExchangeOfferRequest.prototype['id'] = undefined;

/**
 * A valid EVM based ERC1155 or MetaFab game items contract address that represents the collection for input items required by this offer. `inputCollectionAddress` or `inputCollectionId` can optionally be provided.
 * @member {String} inputCollectionAddress
 */
SetExchangeOfferRequest.prototype['inputCollectionAddress'] = undefined;

/**
 * A valid MetaFab collection id that represents the collection for input items required by this offer. `inputCollectionAddress` or `inputCollectionId` can optionally be provided.
 * @member {String} inputCollectionId
 */
SetExchangeOfferRequest.prototype['inputCollectionId'] = undefined;

/**
 * An array of item ids from the provided input collection that are required to use this offer. Input items are transferred from the wallet to the exchange contract upon using an offer.
 * @member {Array.<Number>} inputCollectionItemIds
 */
SetExchangeOfferRequest.prototype['inputCollectionItemIds'] = undefined;

/**
 * An array of amounts for each item id from the provided input collection that are required to use this offer. Item amounts array indices are reflective of the amount required for a given item id at the same index.
 * @member {Array.<Number>} inputCollectionItemAmounts
 */
SetExchangeOfferRequest.prototype['inputCollectionItemAmounts'] = undefined;

/**
 * A valid EVM based ERC20 or MetaFab game currency contract address that for the currency required by this offer.
 * @member {String} inputCurrencyAddress
 */
SetExchangeOfferRequest.prototype['inputCurrencyAddress'] = undefined;

/**
 * A valid MetaFab currency id that represents the currency required by this offer.
 * @member {String} inputCurrencyId
 */
SetExchangeOfferRequest.prototype['inputCurrencyId'] = undefined;

/**
 * The amount of currency required by this offer. If an inputCurrencyAmount is provided without in input currency address or id, the native chain currency is used as the required currency.
 * @member {Number} inputCurrencyAmount
 */
SetExchangeOfferRequest.prototype['inputCurrencyAmount'] = undefined;

/**
 * A valid EVM based ERC1155 or MetaFab game items contract address that represents the collection for output items given by this offer. `outputCollectionAddress` or `outputCollectionId` can optionally be provided.
 * @member {String} outputCollectionAddress
 */
SetExchangeOfferRequest.prototype['outputCollectionAddress'] = undefined;

/**
 * A valid MetaFab collection id that represents the collection for output items given by this offer. `outputCollectionAddress` or `outputCollectionId` can optionally be provided.
 * @member {String} outputCollectionId
 */
SetExchangeOfferRequest.prototype['outputCollectionId'] = undefined;

/**
 * An array of item ids from the provided output collection that are given by this offer. Output items are automatically minted if the exchange contract has the `minter` role for the output collection contract. Otherwise, they are transferred from the item balance held by the exchange contract.
 * @member {Array.<Number>} outputCollectionItemIds
 */
SetExchangeOfferRequest.prototype['outputCollectionItemIds'] = undefined;

/**
 * An array of amounts for each item id from the provided output collection that are given by this offer. Item amounts array indices are reflective of the amount required for a given item id at the same index.
 * @member {Array.<Number>} outputCollectionItemAmounts
 */
SetExchangeOfferRequest.prototype['outputCollectionItemAmounts'] = undefined;

/**
 * A valid EVM based ERC20 or MetaFab game currency contract address that for the currency given by this offer. The output currency amount is automatically minted if the exchange contract has the `minter` role for the output currency contract. Otherwise, they are transferred from the currency balance held by the exchange contract.
 * @member {String} outputCurrencyAddress
 */
SetExchangeOfferRequest.prototype['outputCurrencyAddress'] = undefined;

/**
 * A valid MetaFab currency id for the currency given by this offer.
 * @member {String} outputCurrencyId
 */
SetExchangeOfferRequest.prototype['outputCurrencyId'] = undefined;

/**
 * The amount of currency given by this offer. If an outputCurrencyAmount is provided without an output currency address or id, the native chain currency is used as the given currency.
 * @member {Number} outputCurrencyAmount
 */
SetExchangeOfferRequest.prototype['outputCurrencyAmount'] = undefined;

/**
 * The maximum number of times this offer can be used in total. maxUses is collective across all uses of the offer. If 5 unique players use an offer, that counts as 5 offer uses. Exclude this or use 0 to allow unlimited uses.
 * @member {Number} maxUses
 */
SetExchangeOfferRequest.prototype['maxUses'] = undefined;






export default SetExchangeOfferRequest;
