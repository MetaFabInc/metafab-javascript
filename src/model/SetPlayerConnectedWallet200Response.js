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
import TransactionModel from './TransactionModel';

/**
 * The SetPlayerConnectedWallet200Response model module.
 * @module model/SetPlayerConnectedWallet200Response
 * @version 1.5.1
 */
class SetPlayerConnectedWallet200Response {
    /**
     * Constructs a new <code>SetPlayerConnectedWallet200Response</code>.
     * @alias module:model/SetPlayerConnectedWallet200Response
     */
    constructor() { 
        
        SetPlayerConnectedWallet200Response.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SetPlayerConnectedWallet200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SetPlayerConnectedWallet200Response} obj Optional instance to populate.
     * @return {module:model/SetPlayerConnectedWallet200Response} The populated <code>SetPlayerConnectedWallet200Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SetPlayerConnectedWallet200Response();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('transaction')) {
                obj['transaction'] = TransactionModel.constructFromObject(data['transaction']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SetPlayerConnectedWallet200Response</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SetPlayerConnectedWallet200Response</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['address'] && !(typeof data['address'] === 'string' || data['address'] instanceof String)) {
            throw new Error("Expected the field `address` to be a primitive type in the JSON string but got " + data['address']);
        }
        // validate the optional field `transaction`
        if (data['transaction']) { // data not null
          TransactionModel.validateJSON(data['transaction']);
        }

        return true;
    }


}



/**
 * @member {String} id
 */
SetPlayerConnectedWallet200Response.prototype['id'] = undefined;

/**
 * @member {String} address
 */
SetPlayerConnectedWallet200Response.prototype['address'] = undefined;

/**
 * @member {module:model/TransactionModel} transaction
 */
SetPlayerConnectedWallet200Response.prototype['transaction'] = undefined;






export default SetPlayerConnectedWallet200Response;

