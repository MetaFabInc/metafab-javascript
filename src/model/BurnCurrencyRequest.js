/**
 * MetaFab API
 *  Complete MetaFab API references and guides can be found at: https://trymetafab.com
 *
 * The version of the OpenAPI document: 1.3.0
 * Contact: metafabproject@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The BurnCurrencyRequest model module.
 * @module model/BurnCurrencyRequest
 * @version 1.3.0
 */
class BurnCurrencyRequest {
    /**
     * Constructs a new <code>BurnCurrencyRequest</code>.
     * @alias module:model/BurnCurrencyRequest
     * @param amount {Number} The amount of currency to remove (burn). The currency balance of the authenticating game or player's wallet must be equal to or greater than this amount.
     */
    constructor(amount) { 
        
        BurnCurrencyRequest.initialize(this, amount);
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
     * Constructs a <code>BurnCurrencyRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BurnCurrencyRequest} obj Optional instance to populate.
     * @return {module:model/BurnCurrencyRequest} The populated <code>BurnCurrencyRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BurnCurrencyRequest();

            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * The amount of currency to remove (burn). The currency balance of the authenticating game or player's wallet must be equal to or greater than this amount.
 * @member {Number} amount
 */
BurnCurrencyRequest.prototype['amount'] = undefined;






export default BurnCurrencyRequest;

