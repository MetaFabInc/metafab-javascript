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
 * The CreateProfileRequest model module.
 * @module model/CreateProfileRequest
 * @version 1.5.1
 */
class CreateProfileRequest {
    /**
     * Constructs a new <code>CreateProfileRequest</code>.
     * @alias module:model/CreateProfileRequest
     * @param username {String} The profile's username, used to authenticate the profile. Profile usernames are globally unique across MetaFab. There cannot be 2 profiles with the same username created.
     * @param password {String} The password to authenticate as the profile. Additionally, this password is used to encrypt/decrypt a profile's primary wallet and must be provided anytime this profile makes blockchain interactions through various endpoints.
     */
    constructor(username, password) { 
        
        CreateProfileRequest.initialize(this, username, password);
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
     * Constructs a <code>CreateProfileRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateProfileRequest} obj Optional instance to populate.
     * @return {module:model/CreateProfileRequest} The populated <code>CreateProfileRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateProfileRequest();

            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateProfileRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateProfileRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreateProfileRequest.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['username'] && !(typeof data['username'] === 'string' || data['username'] instanceof String)) {
            throw new Error("Expected the field `username` to be a primitive type in the JSON string but got " + data['username']);
        }
        // ensure the json data is a string
        if (data['password'] && !(typeof data['password'] === 'string' || data['password'] instanceof String)) {
            throw new Error("Expected the field `password` to be a primitive type in the JSON string but got " + data['password']);
        }

        return true;
    }


}

CreateProfileRequest.RequiredProperties = ["username", "password"];

/**
 * The profile's username, used to authenticate the profile. Profile usernames are globally unique across MetaFab. There cannot be 2 profiles with the same username created.
 * @member {String} username
 */
CreateProfileRequest.prototype['username'] = undefined;

/**
 * The password to authenticate as the profile. Additionally, this password is used to encrypt/decrypt a profile's primary wallet and must be provided anytime this profile makes blockchain interactions through various endpoints.
 * @member {String} password
 */
CreateProfileRequest.prototype['password'] = undefined;






export default CreateProfileRequest;

