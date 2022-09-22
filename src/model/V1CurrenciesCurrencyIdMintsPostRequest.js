/**
 * MetaFab API
 *  Complete MetaFab API references and guides can be found at: https://trymetafab.com
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: metafabproject@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The V1CurrenciesCurrencyIdMintsPostRequest model module.
 * @module model/V1CurrenciesCurrencyIdMintsPostRequest
 * @version 1.0.0
 */
class V1CurrenciesCurrencyIdMintsPostRequest {
    /**
     * Constructs a new <code>V1CurrenciesCurrencyIdMintsPostRequest</code>.
     * @alias module:model/V1CurrenciesCurrencyIdMintsPostRequest
     * @param amount {Number} The amount of currency to create (mint).
     */
    constructor(amount) { 
        
        V1CurrenciesCurrencyIdMintsPostRequest.initialize(this, amount);
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
     * Constructs a <code>V1CurrenciesCurrencyIdMintsPostRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/V1CurrenciesCurrencyIdMintsPostRequest} obj Optional instance to populate.
     * @return {module:model/V1CurrenciesCurrencyIdMintsPostRequest} The populated <code>V1CurrenciesCurrencyIdMintsPostRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new V1CurrenciesCurrencyIdMintsPostRequest();

            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('walletId')) {
                obj['walletId'] = ApiClient.convertToType(data['walletId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The amount of currency to create (mint).
 * @member {Number} amount
 */
V1CurrenciesCurrencyIdMintsPostRequest.prototype['amount'] = undefined;

/**
 * A valid EVM based address to create (mint) currency for. For example, `0x39cb70F972E0EE920088AeF97Dbe5c6251a9c25D`.
 * @member {String} address
 */
V1CurrenciesCurrencyIdMintsPostRequest.prototype['address'] = undefined;

/**
 * Any wallet id within the MetaFab ecosystem to create (mint) currency for.
 * @member {String} walletId
 */
V1CurrenciesCurrencyIdMintsPostRequest.prototype['walletId'] = undefined;






export default V1CurrenciesCurrencyIdMintsPostRequest;

