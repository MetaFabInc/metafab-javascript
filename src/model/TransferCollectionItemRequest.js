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
 * The TransferCollectionItemRequest model module.
 * @module model/TransferCollectionItemRequest
 * @version 1.4.1
 */
class TransferCollectionItemRequest {
    /**
     * Constructs a new <code>TransferCollectionItemRequest</code>.
     * @alias module:model/TransferCollectionItemRequest
     * @param quantity {Number} The quantity of the collectionItemId to transfer.
     */
    constructor(quantity) { 
        
        TransferCollectionItemRequest.initialize(this, quantity);
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
     * Constructs a <code>TransferCollectionItemRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TransferCollectionItemRequest} obj Optional instance to populate.
     * @return {module:model/TransferCollectionItemRequest} The populated <code>TransferCollectionItemRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TransferCollectionItemRequest();

            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('walletId')) {
                obj['walletId'] = ApiClient.convertToType(data['walletId'], ['String']);
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * A valid EVM based addresses to transfer items to.
 * @member {String} address
 */
TransferCollectionItemRequest.prototype['address'] = undefined;

/**
 * A wallet id within the MetaFab ecosystem to transfer items to.
 * @member {Array.<String>} walletId
 */
TransferCollectionItemRequest.prototype['walletId'] = undefined;

/**
 * The quantity of the collectionItemId to transfer.
 * @member {Number} quantity
 */
TransferCollectionItemRequest.prototype['quantity'] = undefined;






export default TransferCollectionItemRequest;

