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
 * The CreatePlayerRequest model module.
 * @module model/CreatePlayerRequest
 * @version 1.0.0
 */
class CreatePlayerRequest {
    /**
     * Constructs a new <code>CreatePlayerRequest</code>.
     * @alias module:model/CreatePlayerRequest
     * @param username {String} The players username, used to authenticate the player and if desired represent them in game. Usernames are unique. There cannot be 2 users with the same username created for a game.
     * @param password {String} The password to authenticate as the player. Additionally, this password is used to encrypt/decrypt a player's primary wallet and must be provided anytime this player makes blockchain interactions through various endpoints.
     */
    constructor(username, password) { 
        
        CreatePlayerRequest.initialize(this, username, password);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, username, password) { 
        obj['username'] = username;
        obj['password'] = password;
    }

    /**
     * Constructs a <code>CreatePlayerRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreatePlayerRequest} obj Optional instance to populate.
     * @return {module:model/CreatePlayerRequest} The populated <code>CreatePlayerRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreatePlayerRequest();

            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The players username, used to authenticate the player and if desired represent them in game. Usernames are unique. There cannot be 2 users with the same username created for a game.
 * @member {String} username
 */
CreatePlayerRequest.prototype['username'] = undefined;

/**
 * The password to authenticate as the player. Additionally, this password is used to encrypt/decrypt a player's primary wallet and must be provided anytime this player makes blockchain interactions through various endpoints.
 * @member {String} password
 */
CreatePlayerRequest.prototype['password'] = undefined;






export default CreatePlayerRequest;

