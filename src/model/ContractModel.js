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
 * The ContractModel model module.
 * @module model/ContractModel
 * @version 1.5.1
 */
class ContractModel {
    /**
     * Constructs a new <code>ContractModel</code>.
     * @alias module:model/ContractModel
     */
    constructor() { 
        
        ContractModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ContractModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContractModel} obj Optional instance to populate.
     * @return {module:model/ContractModel} The populated <code>ContractModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContractModel();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('gameId')) {
                obj['gameId'] = ApiClient.convertToType(data['gameId'], 'String');
            }
            if (data.hasOwnProperty('chain')) {
                obj['chain'] = ApiClient.convertToType(data['chain'], 'String');
            }
            if (data.hasOwnProperty('abi')) {
                obj['abi'] = ApiClient.convertToType(data['abi'], Object);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('forwarderAddress')) {
                obj['forwarderAddress'] = ApiClient.convertToType(data['forwarderAddress'], 'String');
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

    /**
     * Validates the JSON data with respect to <code>ContractModel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ContractModel</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['gameId'] && !(typeof data['gameId'] === 'string' || data['gameId'] instanceof String)) {
            throw new Error("Expected the field `gameId` to be a primitive type in the JSON string but got " + data['gameId']);
        }
        // ensure the json data is a string
        if (data['chain'] && !(typeof data['chain'] === 'string' || data['chain'] instanceof String)) {
            throw new Error("Expected the field `chain` to be a primitive type in the JSON string but got " + data['chain']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // ensure the json data is a string
        if (data['address'] && !(typeof data['address'] === 'string' || data['address'] instanceof String)) {
            throw new Error("Expected the field `address` to be a primitive type in the JSON string but got " + data['address']);
        }
        // ensure the json data is a string
        if (data['forwarderAddress'] && !(typeof data['forwarderAddress'] === 'string' || data['forwarderAddress'] instanceof String)) {
            throw new Error("Expected the field `forwarderAddress` to be a primitive type in the JSON string but got " + data['forwarderAddress']);
        }
        // ensure the json data is a string
        if (data['updatedAt'] && !(typeof data['updatedAt'] === 'string' || data['updatedAt'] instanceof String)) {
            throw new Error("Expected the field `updatedAt` to be a primitive type in the JSON string but got " + data['updatedAt']);
        }
        // ensure the json data is a string
        if (data['createdAt'] && !(typeof data['createdAt'] === 'string' || data['createdAt'] instanceof String)) {
            throw new Error("Expected the field `createdAt` to be a primitive type in the JSON string but got " + data['createdAt']);
        }

        return true;
    }


}



/**
 * This field has not had a description added.
 * @member {String} id
 */
ContractModel.prototype['id'] = undefined;

/**
 * This field has not had a description added.
 * @member {String} gameId
 */
ContractModel.prototype['gameId'] = undefined;

/**
 * This field has not had a description added.
 * @member {String} chain
 */
ContractModel.prototype['chain'] = undefined;

/**
 * This field has not had a description added.
 * @member {Object} abi
 */
ContractModel.prototype['abi'] = undefined;

/**
 * This field has not had a description added.
 * @member {String} type
 */
ContractModel.prototype['type'] = undefined;

/**
 * This field has not had a description added.
 * @member {String} address
 */
ContractModel.prototype['address'] = undefined;

/**
 * This field has not had a description added.
 * @member {String} forwarderAddress
 */
ContractModel.prototype['forwarderAddress'] = undefined;

/**
 * This field has not had a description added.
 * @member {String} updatedAt
 */
ContractModel.prototype['updatedAt'] = undefined;

/**
 * This field has not had a description added.
 * @member {String} createdAt
 */
ContractModel.prototype['createdAt'] = undefined;






export default ContractModel;

