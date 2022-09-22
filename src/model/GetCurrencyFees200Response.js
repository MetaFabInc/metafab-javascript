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
 * The GetCurrencyFees200Response model module.
 * @module model/GetCurrencyFees200Response
 * @version 1.0.1
 */
class GetCurrencyFees200Response {
    /**
     * Constructs a new <code>GetCurrencyFees200Response</code>.
     * @alias module:model/GetCurrencyFees200Response
     */
    constructor() { 
        
        GetCurrencyFees200Response.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetCurrencyFees200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetCurrencyFees200Response} obj Optional instance to populate.
     * @return {module:model/GetCurrencyFees200Response} The populated <code>GetCurrencyFees200Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetCurrencyFees200Response();

            if (data.hasOwnProperty('recipientAddress')) {
                obj['recipientAddress'] = ApiClient.convertToType(data['recipientAddress'], 'String');
            }
            if (data.hasOwnProperty('basisPoints')) {
                obj['basisPoints'] = ApiClient.convertToType(data['basisPoints'], 'Number');
            }
            if (data.hasOwnProperty('fixedAmount')) {
                obj['fixedAmount'] = ApiClient.convertToType(data['fixedAmount'], 'Number');
            }
            if (data.hasOwnProperty('capAmount')) {
                obj['capAmount'] = ApiClient.convertToType(data['capAmount'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * The wallet address that fees from all applicable transactions are automatically sent to.
 * @member {String} recipientAddress
 */
GetCurrencyFees200Response.prototype['recipientAddress'] = undefined;

/**
 * The number of fee basis points. 100 basisPoints = 1% fee of the total transaction amount deducted from the total received by the recipient.
 * @member {Number} basisPoints
 */
GetCurrencyFees200Response.prototype['basisPoints'] = undefined;

/**
 * The fixed number of currency as a fee regardless of the total transaction amount. 10 = 10 of the currency as a fee for any transaction, deducted from the total received by the recipient.
 * @member {Number} fixedAmount
 */
GetCurrencyFees200Response.prototype['fixedAmount'] = undefined;

/**
 * The maximum combined fee between basisPoints and fixedAmount. If the total transaction fee is over this amount, the capAmount will be used as the transaction fee deducted from the total received by the recipient.
 * @member {Number} capAmount
 */
GetCurrencyFees200Response.prototype['capAmount'] = undefined;






export default GetCurrencyFees200Response;

