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
 * The GameModel model module.
 * @module model/GameModel
 * @version 1.0.1
 */
class GameModel {
    /**
     * Constructs a new <code>GameModel</code>.
     * @alias module:model/GameModel
     */
    constructor() { 
        
        GameModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GameModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GameModel} obj Optional instance to populate.
     * @return {module:model/GameModel} The populated <code>GameModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GameModel();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('walletId')) {
                obj['walletId'] = ApiClient.convertToType(data['walletId'], 'String');
            }
            if (data.hasOwnProperty('fundingWalletId')) {
                obj['fundingWalletId'] = ApiClient.convertToType(data['fundingWalletId'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('rpcs')) {
                obj['rpcs'] = ApiClient.convertToType(data['rpcs'], Object);
            }
            if (data.hasOwnProperty('publishedKey')) {
                obj['publishedKey'] = ApiClient.convertToType(data['publishedKey'], 'String');
            }
            if (data.hasOwnProperty('secretKey')) {
                obj['secretKey'] = ApiClient.convertToType(data['secretKey'], 'String');
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
GameModel.prototype['id'] = undefined;

/**
 * This field has not had a description added.
 * @member {String} walletId
 */
GameModel.prototype['walletId'] = undefined;

/**
 * This field has not had a description added.
 * @member {String} fundingWalletId
 */
GameModel.prototype['fundingWalletId'] = undefined;

/**
 * This field has not had a description added.
 * @member {String} email
 */
GameModel.prototype['email'] = undefined;

/**
 * This field has not had a description added.
 * @member {String} name
 */
GameModel.prototype['name'] = undefined;

/**
 * This field has not had a description added.
 * @member {Object} rpcs
 */
GameModel.prototype['rpcs'] = undefined;

/**
 * This field has not had a description added.
 * @member {String} publishedKey
 */
GameModel.prototype['publishedKey'] = undefined;

/**
 * This field has not had a description added.
 * @member {String} secretKey
 */
GameModel.prototype['secretKey'] = undefined;

/**
 * This field has not had a description added.
 * @member {String} updatedAt
 */
GameModel.prototype['updatedAt'] = undefined;

/**
 * This field has not had a description added.
 * @member {String} createdAt
 */
GameModel.prototype['createdAt'] = undefined;






export default GameModel;

