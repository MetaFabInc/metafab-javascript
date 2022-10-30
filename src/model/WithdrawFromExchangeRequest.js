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
 * The WithdrawFromExchangeRequest model module.
 * @module model/WithdrawFromExchangeRequest
 * @version 1.1.4
 */
class WithdrawFromExchangeRequest {
    /**
     * Constructs a new <code>WithdrawFromExchangeRequest</code>.
     * @alias module:model/WithdrawFromExchangeRequest
     */
    constructor() { 
        
        WithdrawFromExchangeRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WithdrawFromExchangeRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WithdrawFromExchangeRequest} obj Optional instance to populate.
     * @return {module:model/WithdrawFromExchangeRequest} The populated <code>WithdrawFromExchangeRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WithdrawFromExchangeRequest();

            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('walletId')) {
                obj['walletId'] = ApiClient.convertToType(data['walletId'], 'String');
            }
            if (data.hasOwnProperty('currencyAddress')) {
                obj['currencyAddress'] = ApiClient.convertToType(data['currencyAddress'], 'String');
            }
            if (data.hasOwnProperty('currencyId')) {
                obj['currencyId'] = ApiClient.convertToType(data['currencyId'], 'String');
            }
            if (data.hasOwnProperty('collectionAddress')) {
                obj['collectionAddress'] = ApiClient.convertToType(data['collectionAddress'], 'String');
            }
            if (data.hasOwnProperty('collectionId')) {
                obj['collectionId'] = ApiClient.convertToType(data['collectionId'], 'String');
            }
            if (data.hasOwnProperty('itemIds')) {
                obj['itemIds'] = ApiClient.convertToType(data['itemIds'], ['Number']);
            }
        }
        return obj;
    }


}

/**
 * A valid EVM based address to withdraw to. For example, `0x39cb70F972E0EE920088AeF97Dbe5c6251a9c25D`.
 * @member {String} address
 */
WithdrawFromExchangeRequest.prototype['address'] = undefined;

/**
 * Any wallet id within the MetaFab ecosystem to withdraw to.
 * @member {String} walletId
 */
WithdrawFromExchangeRequest.prototype['walletId'] = undefined;

/**
 * The address of the currency (ERC20) token to withdraw from the exchange. If no currencyAddress or currencyId, and no collectionAddress or collectionId are provided, the native token held by the exchange will be withdrawn.
 * @member {String} currencyAddress
 */
WithdrawFromExchangeRequest.prototype['currencyAddress'] = undefined;

/**
 * A valid MetaFab currency id that represents the currency token to withdraw from the exchange. `currencyAddress` or `currencyId` can be provided when withdrawing currency.
 * @member {String} currencyId
 */
WithdrawFromExchangeRequest.prototype['currencyId'] = undefined;

/**
 * The address of the collection (ERC1155) for the items to withdraw from the exchange. If no currencyAddress and no collectionAddress is provided, the native token held by the exchange will be withdrawn.
 * @member {String} collectionAddress
 */
WithdrawFromExchangeRequest.prototype['collectionAddress'] = undefined;

/**
 * A valid MetaFab collection id that represents the collection for the items to withdraw from the exchange. `collectionAddress` or `collectionId` can be provided when withdrawing items.
 * @member {String} collectionId
 */
WithdrawFromExchangeRequest.prototype['collectionId'] = undefined;

/**
 * The specific itemIds of the provided collection to withdraw from the exchange.
 * @member {Array.<Number>} itemIds
 */
WithdrawFromExchangeRequest.prototype['itemIds'] = undefined;






export default WithdrawFromExchangeRequest;

