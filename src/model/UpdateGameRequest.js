/**
 * MetaFab API
 *  Complete MetaFab API references and guides can be found at: https://trymetafab.com
 *
 * The version of the OpenAPI document: 1.1.0
 * Contact: metafabproject@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The UpdateGameRequest model module.
 * @module model/UpdateGameRequest
 * @version 1.1.0
 */
class UpdateGameRequest {
    /**
     * Constructs a new <code>UpdateGameRequest</code>.
     * @alias module:model/UpdateGameRequest
     */
    constructor() { 
        
        UpdateGameRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateGameRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateGameRequest} obj Optional instance to populate.
     * @return {module:model/UpdateGameRequest} The populated <code>UpdateGameRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateGameRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('currentPassword')) {
                obj['currentPassword'] = ApiClient.convertToType(data['currentPassword'], 'String');
            }
            if (data.hasOwnProperty('newPassword')) {
                obj['newPassword'] = ApiClient.convertToType(data['newPassword'], 'String');
            }
            if (data.hasOwnProperty('rpcs')) {
                obj['rpcs'] = ApiClient.convertToType(data['rpcs'], {'String': 'String'});
            }
            if (data.hasOwnProperty('resetPublishedKey')) {
                obj['resetPublishedKey'] = ApiClient.convertToType(data['resetPublishedKey'], 'Boolean');
            }
            if (data.hasOwnProperty('resetSecretKey')) {
                obj['resetSecretKey'] = ApiClient.convertToType(data['resetSecretKey'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * A new name. Replaces the game's current name.
 * @member {String} name
 */
UpdateGameRequest.prototype['name'] = undefined;

/**
 * A new email address. The game's old email will no longer be valid for account authentication. `currentPassword` must also be provided.
 * @member {String} email
 */
UpdateGameRequest.prototype['email'] = undefined;

/**
 * The game's current password. Must be provided if setting `newPassword` or `email`.
 * @member {String} currentPassword
 */
UpdateGameRequest.prototype['currentPassword'] = undefined;

/**
 * A new password. The game's old password will no longer be valid.
 * @member {String} newPassword
 */
UpdateGameRequest.prototype['newPassword'] = undefined;

/**
 * Sets a custom RPC for your game to use instead of MetaFab's default RPCs for the chain(s) you specify.  Expects a JSON object containing key value pairs of supported `chain` -> `rpc url`. Only the chain names provided as keys in the object will be explicitly overriden. To delete a custom RPC for your game, provide the chain name to delete as a key in the provided object and `null` as the value.  Set RPC example, `{ MATIC: 'https://polygon-rpc.com' }` Delete RPC example, `{ MATIC: null }`
 * @member {Object.<String, String>} rpcs
 */
UpdateGameRequest.prototype['rpcs'] = undefined;

/**
 * Revokes the game's previous published key and returns a new one if true.
 * @member {Boolean} resetPublishedKey
 */
UpdateGameRequest.prototype['resetPublishedKey'] = undefined;

/**
 * Revokes the game's previous secret key and returns a new on if true.
 * @member {Boolean} resetSecretKey
 */
UpdateGameRequest.prototype['resetSecretKey'] = undefined;






export default UpdateGameRequest;

