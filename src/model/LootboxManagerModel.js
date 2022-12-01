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
 * The LootboxManagerModel model module.
 * @module model/LootboxManagerModel
 * @version 1.3.0
 */
class LootboxManagerModel {
    /**
     * Constructs a new <code>LootboxManagerModel</code>.
     * @alias module:model/LootboxManagerModel
     */
    constructor() { 
        
        LootboxManagerModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LootboxManagerModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LootboxManagerModel} obj Optional instance to populate.
     * @return {module:model/LootboxManagerModel} The populated <code>LootboxManagerModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LootboxManagerModel();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('gameId')) {
                obj['gameId'] = ApiClient.convertToType(data['gameId'], 'String');
            }
            if (data.hasOwnProperty('contractId')) {
                obj['contractId'] = ApiClient.convertToType(data['contractId'], 'String');
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
LootboxManagerModel.prototype['id'] = undefined;

/**
 * This field has not had a description added.
 * @member {String} gameId
 */
LootboxManagerModel.prototype['gameId'] = undefined;

/**
 * This field has not had a description added.
 * @member {String} contractId
 */
LootboxManagerModel.prototype['contractId'] = undefined;

/**
 * This field has not had a description added.
 * @member {String} updatedAt
 */
LootboxManagerModel.prototype['updatedAt'] = undefined;

/**
 * This field has not had a description added.
 * @member {String} createdAt
 */
LootboxManagerModel.prototype['createdAt'] = undefined;






export default LootboxManagerModel;

