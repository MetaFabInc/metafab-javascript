/**
 * MetaFab API
 *  Complete MetaFab API references and guides can be found at: https://trymetafab.com
 *
 * The version of the OpenAPI document: 1.4.0
 * Contact: metafabproject@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The SetCollectionApprovalRequest model module.
 * @module model/SetCollectionApprovalRequest
 * @version 1.4.0
 */
class SetCollectionApprovalRequest {
    /**
     * Constructs a new <code>SetCollectionApprovalRequest</code>.
     * @alias module:model/SetCollectionApprovalRequest
     * @param approved {Boolean} A true or false value approves or disapproves the provided address or address associated with the provided walletId.
     */
    constructor(approved) { 
        
        SetCollectionApprovalRequest.initialize(this, approved);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, approved) { 
        obj['approved'] = approved;
    }

    /**
     * Constructs a <code>SetCollectionApprovalRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SetCollectionApprovalRequest} obj Optional instance to populate.
     * @return {module:model/SetCollectionApprovalRequest} The populated <code>SetCollectionApprovalRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SetCollectionApprovalRequest();

            if (data.hasOwnProperty('approved')) {
                obj['approved'] = ApiClient.convertToType(data['approved'], 'Boolean');
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
 * A true or false value approves or disapproves the provided address or address associated with the provided walletId.
 * @member {Boolean} approved
 */
SetCollectionApprovalRequest.prototype['approved'] = undefined;

/**
 * A valid EVM based address to allow control over the authenticating game or player's wallet items for this collection.
 * @member {String} address
 */
SetCollectionApprovalRequest.prototype['address'] = undefined;

/**
 * A wallet id within the MetaFab ecosystem to allow control over the authenticating game or player's wallet items for this collection.
 * @member {Array.<String>} walletId
 */
SetCollectionApprovalRequest.prototype['walletId'] = undefined;






export default SetCollectionApprovalRequest;

