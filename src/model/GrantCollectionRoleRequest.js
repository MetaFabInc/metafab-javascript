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
 * The GrantCollectionRoleRequest model module.
 * @module model/GrantCollectionRoleRequest
 * @version 1.5.1
 */
class GrantCollectionRoleRequest {
    /**
     * Constructs a new <code>GrantCollectionRoleRequest</code>.
     * @alias module:model/GrantCollectionRoleRequest
     * @param role {String} A valid MetaFab role or bytes string representing a role, such as `minter` or `0xc9eb32e43bf5ecbceacf00b32281dfc5d6d700a0db676ea26ccf938a385ac3b7`
     */
    constructor(role) { 
        
        GrantCollectionRoleRequest.initialize(this, role);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, role) { 
        obj['role'] = role;
    }

    /**
     * Constructs a <code>GrantCollectionRoleRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GrantCollectionRoleRequest} obj Optional instance to populate.
     * @return {module:model/GrantCollectionRoleRequest} The populated <code>GrantCollectionRoleRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GrantCollectionRoleRequest();

            if (data.hasOwnProperty('role')) {
                obj['role'] = ApiClient.convertToType(data['role'], 'String');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('walletId')) {
                obj['walletId'] = ApiClient.convertToType(data['walletId'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GrantCollectionRoleRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GrantCollectionRoleRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of GrantCollectionRoleRequest.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['role'] && !(typeof data['role'] === 'string' || data['role'] instanceof String)) {
            throw new Error("Expected the field `role` to be a primitive type in the JSON string but got " + data['role']);
        }
        // ensure the json data is a string
        if (data['address'] && !(typeof data['address'] === 'string' || data['address'] instanceof String)) {
            throw new Error("Expected the field `address` to be a primitive type in the JSON string but got " + data['address']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['walletId'])) {
            throw new Error("Expected the field `walletId` to be an array in the JSON data but got " + data['walletId']);
        }

        return true;
    }


}

GrantCollectionRoleRequest.RequiredProperties = ["role"];

/**
 * A valid MetaFab role or bytes string representing a role, such as `minter` or `0xc9eb32e43bf5ecbceacf00b32281dfc5d6d700a0db676ea26ccf938a385ac3b7`
 * @member {String} role
 */
GrantCollectionRoleRequest.prototype['role'] = undefined;

/**
 * A valid EVM based address grant the role to.
 * @member {String} address
 */
GrantCollectionRoleRequest.prototype['address'] = undefined;

/**
 * A wallet id within the MetaFab ecosystem to grant the role to.
 * @member {Array.<String>} walletId
 */
GrantCollectionRoleRequest.prototype['walletId'] = undefined;






export default GrantCollectionRoleRequest;

