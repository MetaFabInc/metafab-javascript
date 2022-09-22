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
 * The PlayerModel model module.
 * @module model/PlayerModel
 * @version 1.0.1
 */
class PlayerModel {
    /**
     * Constructs a new <code>PlayerModel</code>.
     * @alias module:model/PlayerModel
     */
    constructor() { 
        
        PlayerModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PlayerModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PlayerModel} obj Optional instance to populate.
     * @return {module:model/PlayerModel} The populated <code>PlayerModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PlayerModel();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('gameId')) {
                obj['gameId'] = ApiClient.convertToType(data['gameId'], 'String');
            }
            if (data.hasOwnProperty('walletId')) {
                obj['walletId'] = ApiClient.convertToType(data['walletId'], 'String');
            }
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
            if (data.hasOwnProperty('accessToken')) {
                obj['accessToken'] = ApiClient.convertToType(data['accessToken'], 'String');
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
PlayerModel.prototype['id'] = undefined;

/**
 * This field has not had a description added.
 * @member {String} gameId
 */
PlayerModel.prototype['gameId'] = undefined;

/**
 * This field has not had a description added.
 * @member {String} walletId
 */
PlayerModel.prototype['walletId'] = undefined;

/**
 * This field has not had a description added.
 * @member {String} username
 */
PlayerModel.prototype['username'] = undefined;

/**
 * This field has not had a description added.
 * @member {String} accessToken
 */
PlayerModel.prototype['accessToken'] = undefined;

/**
 * This field has not had a description added.
 * @member {String} updatedAt
 */
PlayerModel.prototype['updatedAt'] = undefined;

/**
 * This field has not had a description added.
 * @member {String} createdAt
 */
PlayerModel.prototype['createdAt'] = undefined;






export default PlayerModel;

