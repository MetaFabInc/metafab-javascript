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
import AuthGame200ResponseAllOf from './AuthGame200ResponseAllOf';
import GameModel from './GameModel';
import WalletModel from './WalletModel';

/**
 * The AuthGame200Response model module.
 * @module model/AuthGame200Response
 * @version 1.5.1
 */
class AuthGame200Response {
    /**
     * Constructs a new <code>AuthGame200Response</code>.
     * @alias module:model/AuthGame200Response
     * @implements module:model/GameModel
     * @implements module:model/AuthGame200ResponseAllOf
     */
    constructor() { 
        GameModel.initialize(this);AuthGame200ResponseAllOf.initialize(this);
        AuthGame200Response.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AuthGame200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AuthGame200Response} obj Optional instance to populate.
     * @return {module:model/AuthGame200Response} The populated <code>AuthGame200Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AuthGame200Response();
            GameModel.constructFromObject(data, obj);
            AuthGame200ResponseAllOf.constructFromObject(data, obj);

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
            if (data.hasOwnProperty('redirectUris')) {
                obj['redirectUris'] = ApiClient.convertToType(data['redirectUris'], Object);
            }
            if (data.hasOwnProperty('iconImageUrl')) {
                obj['iconImageUrl'] = ApiClient.convertToType(data['iconImageUrl'], 'String');
            }
            if (data.hasOwnProperty('coverImageUrl')) {
                obj['coverImageUrl'] = ApiClient.convertToType(data['coverImageUrl'], 'String');
            }
            if (data.hasOwnProperty('primaryColorHex')) {
                obj['primaryColorHex'] = ApiClient.convertToType(data['primaryColorHex'], 'String');
            }
            if (data.hasOwnProperty('publishedKey')) {
                obj['publishedKey'] = ApiClient.convertToType(data['publishedKey'], 'String');
            }
            if (data.hasOwnProperty('secretKey')) {
                obj['secretKey'] = ApiClient.convertToType(data['secretKey'], 'String');
            }
            if (data.hasOwnProperty('verified')) {
                obj['verified'] = ApiClient.convertToType(data['verified'], 'Boolean');
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
            if (data.hasOwnProperty('wallet')) {
                obj['wallet'] = WalletModel.constructFromObject(data['wallet']);
            }
            if (data.hasOwnProperty('fundingWallet')) {
                obj['fundingWallet'] = WalletModel.constructFromObject(data['fundingWallet']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AuthGame200Response</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AuthGame200Response</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['walletId'] && !(typeof data['walletId'] === 'string' || data['walletId'] instanceof String)) {
            throw new Error("Expected the field `walletId` to be a primitive type in the JSON string but got " + data['walletId']);
        }
        // ensure the json data is a string
        if (data['fundingWalletId'] && !(typeof data['fundingWalletId'] === 'string' || data['fundingWalletId'] instanceof String)) {
            throw new Error("Expected the field `fundingWalletId` to be a primitive type in the JSON string but got " + data['fundingWalletId']);
        }
        // ensure the json data is a string
        if (data['email'] && !(typeof data['email'] === 'string' || data['email'] instanceof String)) {
            throw new Error("Expected the field `email` to be a primitive type in the JSON string but got " + data['email']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['iconImageUrl'] && !(typeof data['iconImageUrl'] === 'string' || data['iconImageUrl'] instanceof String)) {
            throw new Error("Expected the field `iconImageUrl` to be a primitive type in the JSON string but got " + data['iconImageUrl']);
        }
        // ensure the json data is a string
        if (data['coverImageUrl'] && !(typeof data['coverImageUrl'] === 'string' || data['coverImageUrl'] instanceof String)) {
            throw new Error("Expected the field `coverImageUrl` to be a primitive type in the JSON string but got " + data['coverImageUrl']);
        }
        // ensure the json data is a string
        if (data['primaryColorHex'] && !(typeof data['primaryColorHex'] === 'string' || data['primaryColorHex'] instanceof String)) {
            throw new Error("Expected the field `primaryColorHex` to be a primitive type in the JSON string but got " + data['primaryColorHex']);
        }
        // ensure the json data is a string
        if (data['publishedKey'] && !(typeof data['publishedKey'] === 'string' || data['publishedKey'] instanceof String)) {
            throw new Error("Expected the field `publishedKey` to be a primitive type in the JSON string but got " + data['publishedKey']);
        }
        // ensure the json data is a string
        if (data['secretKey'] && !(typeof data['secretKey'] === 'string' || data['secretKey'] instanceof String)) {
            throw new Error("Expected the field `secretKey` to be a primitive type in the JSON string but got " + data['secretKey']);
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
        // validate the optional field `wallet`
        if (data['wallet']) { // data not null
          WalletModel.validateJSON(data['wallet']);
        }
        // validate the optional field `fundingWallet`
        if (data['fundingWallet']) { // data not null
          WalletModel.validateJSON(data['fundingWallet']);
        }

        return true;
    }


}



/**
 * This field has not had a description added.
 * @member {String} id
 */
AuthGame200Response.prototype['id'] = undefined;

/**
 * This field has not had a description added.
 * @member {String} walletId
 */
AuthGame200Response.prototype['walletId'] = undefined;

/**
 * This field has not had a description added.
 * @member {String} fundingWalletId
 */
AuthGame200Response.prototype['fundingWalletId'] = undefined;

/**
 * This field has not had a description added.
 * @member {String} email
 */
AuthGame200Response.prototype['email'] = undefined;

/**
 * This field has not had a description added.
 * @member {String} name
 */
AuthGame200Response.prototype['name'] = undefined;

/**
 * This field has not had a description added.
 * @member {Object} rpcs
 */
AuthGame200Response.prototype['rpcs'] = undefined;

/**
 * This field has not had a description added.
 * @member {Object} redirectUris
 */
AuthGame200Response.prototype['redirectUris'] = undefined;

/**
 * This field has not had a description added.
 * @member {String} iconImageUrl
 */
AuthGame200Response.prototype['iconImageUrl'] = undefined;

/**
 * This field has not had a description added.
 * @member {String} coverImageUrl
 */
AuthGame200Response.prototype['coverImageUrl'] = undefined;

/**
 * This field has not had a description added.
 * @member {String} primaryColorHex
 */
AuthGame200Response.prototype['primaryColorHex'] = undefined;

/**
 * This field has not had a description added.
 * @member {String} publishedKey
 */
AuthGame200Response.prototype['publishedKey'] = undefined;

/**
 * This field has not had a description added.
 * @member {String} secretKey
 */
AuthGame200Response.prototype['secretKey'] = undefined;

/**
 * This field has not had a description added.
 * @member {Boolean} verified
 */
AuthGame200Response.prototype['verified'] = undefined;

/**
 * This field has not had a description added.
 * @member {String} updatedAt
 */
AuthGame200Response.prototype['updatedAt'] = undefined;

/**
 * This field has not had a description added.
 * @member {String} createdAt
 */
AuthGame200Response.prototype['createdAt'] = undefined;

/**
 * This field has not had a description added.
 * @member {String} walletDecryptKey
 */
AuthGame200Response.prototype['walletDecryptKey'] = undefined;

/**
 * @member {module:model/WalletModel} wallet
 */
AuthGame200Response.prototype['wallet'] = undefined;

/**
 * @member {module:model/WalletModel} fundingWallet
 */
AuthGame200Response.prototype['fundingWallet'] = undefined;


// Implement GameModel interface:
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
 * @member {Object} redirectUris
 */
GameModel.prototype['redirectUris'] = undefined;
/**
 * This field has not had a description added.
 * @member {String} iconImageUrl
 */
GameModel.prototype['iconImageUrl'] = undefined;
/**
 * This field has not had a description added.
 * @member {String} coverImageUrl
 */
GameModel.prototype['coverImageUrl'] = undefined;
/**
 * This field has not had a description added.
 * @member {String} primaryColorHex
 */
GameModel.prototype['primaryColorHex'] = undefined;
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
 * @member {Boolean} verified
 */
GameModel.prototype['verified'] = undefined;
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
// Implement AuthGame200ResponseAllOf interface:
/**
 * This field has not had a description added.
 * @member {String} walletDecryptKey
 */
AuthGame200ResponseAllOf.prototype['walletDecryptKey'] = undefined;
/**
 * @member {module:model/WalletModel} wallet
 */
AuthGame200ResponseAllOf.prototype['wallet'] = undefined;
/**
 * @member {module:model/WalletModel} fundingWallet
 */
AuthGame200ResponseAllOf.prototype['fundingWallet'] = undefined;




export default AuthGame200Response;

