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
 * The TransferCurrencyRequest model module.
 * @module model/TransferCurrencyRequest
 * @version 1.4.1
 */
class TransferCurrencyRequest {
    /**
     * Constructs a new <code>TransferCurrencyRequest</code>.
     * @alias module:model/TransferCurrencyRequest
     * @param amount {Number} The amount of currency to transfer.
     */
    constructor(amount) { 
        
        TransferCurrencyRequest.initialize(this, amount);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, amount) { 
        obj['amount'] = amount;
    }

    /**
     * Constructs a <code>TransferCurrencyRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransferCurrencyRequest} obj Optional instance to populate.
     * @return {module:model/TransferCurrencyRequest} The populated <code>TransferCurrencyRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransferCurrencyRequest();

            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('walletId')) {
                obj['walletId'] = ApiClient.convertToType(data['walletId'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('reference')) {
                obj['reference'] = ApiClient.convertToType(data['reference'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * A valid EVM based address to transfer currency to. For example, `0x39cb70F972E0EE920088AeF97Dbe5c6251a9c25D`.
 * @member {String} address
 */
TransferCurrencyRequest.prototype['address'] = undefined;

/**
 * Any wallet id within the MetaFab ecosystem to transfer currency to.
 * @member {String} walletId
 */
TransferCurrencyRequest.prototype['walletId'] = undefined;

/**
 * The amount of currency to transfer.
 * @member {Number} amount
 */
TransferCurrencyRequest.prototype['amount'] = undefined;

/**
 * An optional uint256 number to reference the transfer. Commonly used to identify transfers intended to pay for game items or services.
 * @member {Number} reference
 */
TransferCurrencyRequest.prototype['reference'] = undefined;






export default TransferCurrencyRequest;

