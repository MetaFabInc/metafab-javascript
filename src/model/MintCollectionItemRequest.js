/**
 * MetaFab API
 *  Complete MetaFab API references and guides can be found at: https://trymetafab.com
 *
 * The version of the OpenAPI document: 1.1.43
 * Contact: metafabproject@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The MintCollectionItemRequest model module.
 * @module model/MintCollectionItemRequest
 * @version 1.1.43
 */
class MintCollectionItemRequest {
    /**
     * Constructs a new <code>MintCollectionItemRequest</code>.
     * @alias module:model/MintCollectionItemRequest
     * @param quantity {Number} The quantity of the specified item id to create (mint).
     */
    constructor(quantity) { 
        
        MintCollectionItemRequest.initialize(this, quantity);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, quantity) { 
        obj['quantity'] = quantity;
    }

    /**
     * Constructs a <code>MintCollectionItemRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MintCollectionItemRequest} obj Optional instance to populate.
     * @return {module:model/MintCollectionItemRequest} The populated <code>MintCollectionItemRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MintCollectionItemRequest();

            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
            }
            if (data.hasOwnProperty('walletId')) {
                obj['walletId'] = ApiClient.convertToType(data['walletId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * A valid EVM based address to create (mint) the item(s) for. For example, `0x39cb70F972E0EE920088AeF97Dbe5c6251a9c25D`.
 * @member {String} address
 */
MintCollectionItemRequest.prototype['address'] = undefined;

/**
 * The quantity of the specified item id to create (mint).
 * @member {Number} quantity
 */
MintCollectionItemRequest.prototype['quantity'] = undefined;

/**
 * Any wallet id within the MetaFab ecosystem to create (mint) the item(s) for.
 * @member {String} walletId
 */
MintCollectionItemRequest.prototype['walletId'] = undefined;






export default MintCollectionItemRequest;

