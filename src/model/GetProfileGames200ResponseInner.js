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
import PublicPlayer from './PublicPlayer';

/**
 * The GetProfileGames200ResponseInner model module.
 * @module model/GetProfileGames200ResponseInner
 * @version 1.5.1
 */
class GetProfileGames200ResponseInner {
    /**
     * Constructs a new <code>GetProfileGames200ResponseInner</code>.
     * @alias module:model/GetProfileGames200ResponseInner
     */
    constructor() { 
        
        GetProfileGames200ResponseInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetProfileGames200ResponseInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetProfileGames200ResponseInner} obj Optional instance to populate.
     * @return {module:model/GetProfileGames200ResponseInner} The populated <code>GetProfileGames200ResponseInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetProfileGames200ResponseInner();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('publishedKey')) {
                obj['publishedKey'] = ApiClient.convertToType(data['publishedKey'], 'String');
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
            if (data.hasOwnProperty('createdAt')) {
                obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'String');
            }
            if (data.hasOwnProperty('players')) {
                obj['players'] = ApiClient.convertToType(data['players'], [PublicPlayer]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetProfileGames200ResponseInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetProfileGames200ResponseInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['publishedKey'] && !(typeof data['publishedKey'] === 'string' || data['publishedKey'] instanceof String)) {
            throw new Error("Expected the field `publishedKey` to be a primitive type in the JSON string but got " + data['publishedKey']);
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
        if (data['createdAt'] && !(typeof data['createdAt'] === 'string' || data['createdAt'] instanceof String)) {
            throw new Error("Expected the field `createdAt` to be a primitive type in the JSON string but got " + data['createdAt']);
        }
        if (data['players']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['players'])) {
                throw new Error("Expected the field `players` to be an array in the JSON data but got " + data['players']);
            }
            // validate the optional field `players` (array)
            for (const item of data['players']) {
                PublicPlayer.validateJsonObject(item);
            };
        }

        return true;
    }


}



/**
 * @member {String} id
 */
GetProfileGames200ResponseInner.prototype['id'] = undefined;

/**
 * @member {String} name
 */
GetProfileGames200ResponseInner.prototype['name'] = undefined;

/**
 * @member {String} publishedKey
 */
GetProfileGames200ResponseInner.prototype['publishedKey'] = undefined;

/**
 * @member {String} iconImageUrl
 */
GetProfileGames200ResponseInner.prototype['iconImageUrl'] = undefined;

/**
 * @member {String} coverImageUrl
 */
GetProfileGames200ResponseInner.prototype['coverImageUrl'] = undefined;

/**
 * @member {String} primaryColorHex
 */
GetProfileGames200ResponseInner.prototype['primaryColorHex'] = undefined;

/**
 * @member {String} createdAt
 */
GetProfileGames200ResponseInner.prototype['createdAt'] = undefined;

/**
 * @member {Array.<module:model/PublicPlayer>} players
 */
GetProfileGames200ResponseInner.prototype['players'] = undefined;






export default GetProfileGames200ResponseInner;

