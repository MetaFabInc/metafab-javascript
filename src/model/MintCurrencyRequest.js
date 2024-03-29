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
 * The MintCurrencyRequest model module.
 * @module model/MintCurrencyRequest
 * @version 1.5.1
 */
class MintCurrencyRequest {
    /**
     * Constructs a new <code>MintCurrencyRequest</code>.
     * @alias module:model/MintCurrencyRequest
     * @param amount {Number} The amount of currency to create (mint).
     */
    constructor(amount) { 
        
        MintCurrencyRequest.initialize(this, amount);
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
     * Constructs a <code>MintCurrencyRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MintCurrencyRequest} obj Optional instance to populate.
     * @return {module:model/MintCurrencyRequest} The populated <code>MintCurrencyRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MintCurrencyRequest();

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

    /**
     * Validates the JSON data with respect to <code>MintCurrencyRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>MintCurrencyRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of MintCurrencyRequest.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['address'] && !(typeof data['address'] === 'string' || data['address'] instanceof String)) {
            throw new Error("Expected the field `address` to be a primitive type in the JSON string but got " + data['address']);
        }
        // ensure the json data is a string
        if (data['walletId'] && !(typeof data['walletId'] === 'string' || data['walletId'] instanceof String)) {
            throw new Error("Expected the field `walletId` to be a primitive type in the JSON string but got " + data['walletId']);
        }

        return true;
    }


}

MintCurrencyRequest.RequiredProperties = ["amount"];

/**
 * The amount of currency to create (mint).
 * @member {Number} amount
 */
MintCurrencyRequest.prototype['amount'] = undefined;

/**
 * A valid EVM based address to create (mint) currency for. For example, `0x39cb70F972E0EE920088AeF97Dbe5c6251a9c25D`.
 * @member {String} address
 */
MintCurrencyRequest.prototype['address'] = undefined;

/**
 * Any wallet id within the MetaFab ecosystem to create (mint) currency for.
 * @member {String} walletId
 */
MintCurrencyRequest.prototype['walletId'] = undefined;






export default MintCurrencyRequest;

