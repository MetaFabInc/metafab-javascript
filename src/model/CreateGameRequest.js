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
 * The CreateGameRequest model module.
 * @module model/CreateGameRequest
 * @version 1.0.1
 */
class CreateGameRequest {
    /**
     * Constructs a new <code>CreateGameRequest</code>.
     * @alias module:model/CreateGameRequest
     * @param name {String} The name of the game you're creating.
     * @param email {String} The email address associated with this game and used to login/authenticate as the game.
     * @param password {String} The password to authenticate as the game. Additionally, this password is used to encrypt/decrypt your game's primary wallet and must be provided anytime this game makes blockchain interactions through various endpoints.
     */
    constructor(name, email, password) { 
        
        CreateGameRequest.initialize(this, name, email, password);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, email, password) { 
        obj['name'] = name;
        obj['email'] = email;
        obj['password'] = password;
    }

    /**
     * Constructs a <code>CreateGameRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateGameRequest} obj Optional instance to populate.
     * @return {module:model/CreateGameRequest} The populated <code>CreateGameRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateGameRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The name of the game you're creating.
 * @member {String} name
 */
CreateGameRequest.prototype['name'] = undefined;

/**
 * The email address associated with this game and used to login/authenticate as the game.
 * @member {String} email
 */
CreateGameRequest.prototype['email'] = undefined;

/**
 * The password to authenticate as the game. Additionally, this password is used to encrypt/decrypt your game's primary wallet and must be provided anytime this game makes blockchain interactions through various endpoints.
 * @member {String} password
 */
CreateGameRequest.prototype['password'] = undefined;






export default CreateGameRequest;

