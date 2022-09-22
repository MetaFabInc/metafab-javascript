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
import AuthGame200ResponseAllOf from './AuthGame200ResponseAllOf';
import AuthGame200ResponseAllOf1 from './AuthGame200ResponseAllOf1';
import GameModel from './GameModel';
import WalletModel from './WalletModel';

/**
 * The AuthGame200Response model module.
 * @module model/AuthGame200Response
 * @version 1.0.0
 */
class AuthGame200Response {
    /**
     * Constructs a new <code>AuthGame200Response</code>.
     * @alias module:model/AuthGame200Response
     * @implements module:model/GameModel
     * @implements module:model/AuthGame200ResponseAllOf
     * @implements module:model/AuthGame200ResponseAllOf1
     */
    constructor() { 
        GameModel.initialize(this);AuthGame200ResponseAllOf.initialize(this);AuthGame200ResponseAllOf1.initialize(this);
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
            AuthGame200ResponseAllOf1.constructFromObject(data, obj);

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
            if (data.hasOwnProperty('wallet')) {
                obj['wallet'] = WalletModel.constructFromObject(data['wallet']);
            }
            if (data.hasOwnProperty('fundingWallet')) {
                obj['fundingWallet'] = WalletModel.constructFromObject(data['fundingWallet']);
            }
        }
        return obj;
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
 * @member {String} updatedAt
 */
AuthGame200Response.prototype['updatedAt'] = undefined;

/**
 * This field has not had a description added.
 * @member {String} createdAt
 */
AuthGame200Response.prototype['createdAt'] = undefined;

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
// Implement AuthGame200ResponseAllOf interface:
/**
 * @member {module:model/WalletModel} wallet
 */
AuthGame200ResponseAllOf.prototype['wallet'] = undefined;
// Implement AuthGame200ResponseAllOf1 interface:
/**
 * @member {module:model/WalletModel} fundingWallet
 */
AuthGame200ResponseAllOf1.prototype['fundingWallet'] = undefined;




export default AuthGame200Response;

