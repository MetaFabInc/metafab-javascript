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
import PlayerModel from './PlayerModel';
import UpdateGame200ResponseAllOf from './UpdateGame200ResponseAllOf';

/**
 * The UpdatePlayer200Response model module.
 * @module model/UpdatePlayer200Response
 * @version 1.5.1
 */
class UpdatePlayer200Response {
    /**
     * Constructs a new <code>UpdatePlayer200Response</code>.
     * @alias module:model/UpdatePlayer200Response
     * @implements module:model/PlayerModel
     * @implements module:model/UpdateGame200ResponseAllOf
     */
    constructor() { 
        PlayerModel.initialize(this);UpdateGame200ResponseAllOf.initialize(this);
        UpdatePlayer200Response.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdatePlayer200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdatePlayer200Response} obj Optional instance to populate.
     * @return {module:model/UpdatePlayer200Response} The populated <code>UpdatePlayer200Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdatePlayer200Response();
            PlayerModel.constructFromObject(data, obj);
            UpdateGame200ResponseAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('gameId')) {
                obj['gameId'] = ApiClient.convertToType(data['gameId'], 'String');
            }
            if (data.hasOwnProperty('walletId')) {
                obj['walletId'] = ApiClient.convertToType(data['walletId'], 'String');
            }
            if (data.hasOwnProperty('connectedWalletId')) {
                obj['connectedWalletId'] = ApiClient.convertToType(data['connectedWalletId'], 'String');
            }
            if (data.hasOwnProperty('profileId')) {
                obj['profileId'] = ApiClient.convertToType(data['profileId'], 'String');
            }
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
            if (data.hasOwnProperty('accessToken')) {
                obj['accessToken'] = ApiClient.convertToType(data['accessToken'], 'String');
            }
            if (data.hasOwnProperty('profilePermissions')) {
                obj['profilePermissions'] = ApiClient.convertToType(data['profilePermissions'], Object);
            }
            if (data.hasOwnProperty('updatedAt')) {
                obj['updatedAt'] = ApiClient.convertToType(data['updatedAt'], 'String');
            }
            if (data.hasOwnProperty('createdAt')) {
                obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'String');
            }
            if (data.hasOwnProperty('walletDecryptKey')) {
                obj['walletDecryptKey'] = ApiClient.convertToType(data['walletDecryptKey'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UpdatePlayer200Response</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdatePlayer200Response</code>.
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
        if (data['walletId'] && !(typeof data['walletId'] === 'string' || data['walletId'] instanceof String)) {
            throw new Error("Expected the field `walletId` to be a primitive type in the JSON string but got " + data['walletId']);
        }
        // ensure the json data is a string
        if (data['connectedWalletId'] && !(typeof data['connectedWalletId'] === 'string' || data['connectedWalletId'] instanceof String)) {
            throw new Error("Expected the field `connectedWalletId` to be a primitive type in the JSON string but got " + data['connectedWalletId']);
        }
        // ensure the json data is a string
        if (data['profileId'] && !(typeof data['profileId'] === 'string' || data['profileId'] instanceof String)) {
            throw new Error("Expected the field `profileId` to be a primitive type in the JSON string but got " + data['profileId']);
        }
        // ensure the json data is a string
        if (data['username'] && !(typeof data['username'] === 'string' || data['username'] instanceof String)) {
            throw new Error("Expected the field `username` to be a primitive type in the JSON string but got " + data['username']);
        }
        // ensure the json data is a string
        if (data['accessToken'] && !(typeof data['accessToken'] === 'string' || data['accessToken'] instanceof String)) {
            throw new Error("Expected the field `accessToken` to be a primitive type in the JSON string but got " + data['accessToken']);
        }
        // ensure the json data is a string
        if (data['updatedAt'] && !(typeof data['updatedAt'] === 'string' || data['updatedAt'] instanceof String)) {
            throw new Error("Expected the field `updatedAt` to be a primitive type in the JSON string but got " + data['updatedAt']);
        }
        // ensure the json data is a string
        if (data['createdAt'] && !(typeof data['createdAt'] === 'string' || data['createdAt'] instanceof String)) {
            throw new Error("Expected the field `createdAt` to be a primitive type in the JSON string but got " + data['createdAt']);
        }
        // ensure the json data is a string
        if (data['walletDecryptKey'] && !(typeof data['walletDecryptKey'] === 'string' || data['walletDecryptKey'] instanceof String)) {
            throw new Error("Expected the field `walletDecryptKey` to be a primitive type in the JSON string but got " + data['walletDecryptKey']);
        }

        return true;
    }


}



/**
 * This field has not had a description added.
 * @member {String} id
 */
UpdatePlayer200Response.prototype['id'] = undefined;

/**
 * This field has not had a description added.
 * @member {String} gameId
 */
UpdatePlayer200Response.prototype['gameId'] = undefined;

/**
 * This field has not had a description added.
 * @member {String} walletId
 */
UpdatePlayer200Response.prototype['walletId'] = undefined;

/**
 * This field has not had a description added.
 * @member {String} connectedWalletId
 */
UpdatePlayer200Response.prototype['connectedWalletId'] = undefined;

/**
 * This field has not had a description added.
 * @member {String} profileId
 */
UpdatePlayer200Response.prototype['profileId'] = undefined;

/**
 * This field has not had a description added.
 * @member {String} username
 */
UpdatePlayer200Response.prototype['username'] = undefined;

/**
 * This field has not had a description added.
 * @member {String} accessToken
 */
UpdatePlayer200Response.prototype['accessToken'] = undefined;

/**
 * This field has not had a description added.
 * @member {Object} profilePermissions
 */
UpdatePlayer200Response.prototype['profilePermissions'] = undefined;

/**
 * This field has not had a description added.
 * @member {String} updatedAt
 */
UpdatePlayer200Response.prototype['updatedAt'] = undefined;

/**
 * This field has not had a description added.
 * @member {String} createdAt
 */
UpdatePlayer200Response.prototype['createdAt'] = undefined;

/**
 * This field has not had a description added.
 * @member {String} walletDecryptKey
 */
UpdatePlayer200Response.prototype['walletDecryptKey'] = undefined;


// Implement PlayerModel interface:
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
 * @member {String} connectedWalletId
 */
PlayerModel.prototype['connectedWalletId'] = undefined;
/**
 * This field has not had a description added.
 * @member {String} profileId
 */
PlayerModel.prototype['profileId'] = undefined;
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
 * @member {Object} profilePermissions
 */
PlayerModel.prototype['profilePermissions'] = undefined;
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
// Implement UpdateGame200ResponseAllOf interface:
/**
 * This field has not had a description added.
 * @member {String} walletDecryptKey
 */
UpdateGame200ResponseAllOf.prototype['walletDecryptKey'] = undefined;




export default UpdatePlayer200Response;
