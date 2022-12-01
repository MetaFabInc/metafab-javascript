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
 * The TransactionModel model module.
 * @module model/TransactionModel
 * @version 1.3.0
 */
class TransactionModel {
    /**
     * Constructs a new <code>TransactionModel</code>.
     * @alias module:model/TransactionModel
     */
    constructor() { 
        
        TransactionModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TransactionModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransactionModel} obj Optional instance to populate.
     * @return {module:model/TransactionModel} The populated <code>TransactionModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransactionModel();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('contractId')) {
                obj['contractId'] = ApiClient.convertToType(data['contractId'], 'String');
            }
            if (data.hasOwnProperty('walletId')) {
                obj['walletId'] = ApiClient.convertToType(data['walletId'], 'String');
            }
            if (data.hasOwnProperty('function')) {
                obj['function'] = ApiClient.convertToType(data['function'], 'String');
            }
            if (data.hasOwnProperty('args')) {
                obj['args'] = ApiClient.convertToType(data['args'], Object);
            }
            if (data.hasOwnProperty('hash')) {
                obj['hash'] = ApiClient.convertToType(data['hash'], 'String');
            }
            if (data.hasOwnProperty('updatedAt')) {
                obj['updatedAt'] = ApiClient.convertToType(data['updatedAt'], 'String');
            }
            if (data.hasOwnProperty('createdAt')) {
                obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'String');
            }
        }
        return obj;
    }


}

/**
 * This field has not had a description added.
 * @member {String} id
 */
TransactionModel.prototype['id'] = undefined;

/**
 * This field has not had a description added.
 * @member {String} contractId
 */
TransactionModel.prototype['contractId'] = undefined;

/**
 * This field has not had a description added.
 * @member {String} walletId
 */
TransactionModel.prototype['walletId'] = undefined;

/**
 * This field has not had a description added.
 * @member {String} function
 */
TransactionModel.prototype['function'] = undefined;

/**
 * This field has not had a description added.
 * @member {Object} args
 */
TransactionModel.prototype['args'] = undefined;

/**
 * This field has not had a description added.
 * @member {String} hash
 */
TransactionModel.prototype['hash'] = undefined;

/**
 * This field has not had a description added.
 * @member {String} updatedAt
 */
TransactionModel.prototype['updatedAt'] = undefined;

/**
 * This field has not had a description added.
 * @member {String} createdAt
 */
TransactionModel.prototype['createdAt'] = undefined;






export default TransactionModel;

