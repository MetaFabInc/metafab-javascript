/**
 * MetaFab API
 *  Complete MetaFab API references and guides can be found at: https://trymetafab.com
 *
 * The version of the OpenAPI document: 1.4.1
 * Contact: metafabproject@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The RevokeCollectionRoleRequest model module.
 * @module model/RevokeCollectionRoleRequest
 * @version 1.4.1
 */
class RevokeCollectionRoleRequest {
    /**
     * Constructs a new <code>RevokeCollectionRoleRequest</code>.
     * @alias module:model/RevokeCollectionRoleRequest
     * @param role {String} A valid MetaFab role or bytes string representing a role, such as `minter` or `0xc9eb32e43bf5ecbceacf00b32281dfc5d6d700a0db676ea26ccf938a385ac3b7`
     */
    constructor(role) { 
        
        RevokeCollectionRoleRequest.initialize(this, role);
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
     * Constructs a <code>RevokeCollectionRoleRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RevokeCollectionRoleRequest} obj Optional instance to populate.
     * @return {module:model/RevokeCollectionRoleRequest} The populated <code>RevokeCollectionRoleRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RevokeCollectionRoleRequest();

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


}

/**
 * A valid MetaFab role or bytes string representing a role, such as `minter` or `0xc9eb32e43bf5ecbceacf00b32281dfc5d6d700a0db676ea26ccf938a385ac3b7`
 * @member {String} role
 */
RevokeCollectionRoleRequest.prototype['role'] = undefined;

/**
 * A valid EVM based address to revoke the role from.
 * @member {String} address
 */
RevokeCollectionRoleRequest.prototype['address'] = undefined;

/**
 * A wallet id within the MetaFab ecosystem to revoke the role from.
 * @member {Array.<String>} walletId
 */
RevokeCollectionRoleRequest.prototype['walletId'] = undefined;






export default RevokeCollectionRoleRequest;

