/**
 * MetaFab API
 *  Complete MetaFab API references and guides can be found at: https://trymetafab.com
 *
 * The version of the OpenAPI document: 1.1.3
 * Contact: metafabproject@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The BatchTransferCollectionItemsRequest model module.
 * @module model/BatchTransferCollectionItemsRequest
 * @version 1.1.3
 */
class BatchTransferCollectionItemsRequest {
    /**
     * Constructs a new <code>BatchTransferCollectionItemsRequest</code>.
     * @alias module:model/BatchTransferCollectionItemsRequest
     * @param itemIds {Array.<Number>} An array of unique itemIds to transfer. Each recipient will receive the same set of items provided.
     * @param quantities {Array.<Number>} The quantities of each unique itemId to transfer. Each recipient will receive the same quantities of items provided.
     */
    constructor(itemIds, quantities) { 
        
        BatchTransferCollectionItemsRequest.initialize(this, itemIds, quantities);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, itemIds, quantities) { 
        obj['itemIds'] = itemIds;
        obj['quantities'] = quantities;
    }

    /**
     * Constructs a <code>BatchTransferCollectionItemsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BatchTransferCollectionItemsRequest} obj Optional instance to populate.
     * @return {module:model/BatchTransferCollectionItemsRequest} The populated <code>BatchTransferCollectionItemsRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BatchTransferCollectionItemsRequest();

            if (data.hasOwnProperty('addresses')) {
                obj['addresses'] = ApiClient.convertToType(data['addresses'], ['String']);
            }
            if (data.hasOwnProperty('walletIds')) {
                obj['walletIds'] = ApiClient.convertToType(data['walletIds'], ['String']);
            }
            if (data.hasOwnProperty('itemIds')) {
                obj['itemIds'] = ApiClient.convertToType(data['itemIds'], ['Number']);
            }
            if (data.hasOwnProperty('quantities')) {
                obj['quantities'] = ApiClient.convertToType(data['quantities'], ['Number']);
            }
        }
        return obj;
    }


}

/**
 * An array of valid EVM based addresses to transfer items to.
 * @member {Array.<String>} addresses
 */
BatchTransferCollectionItemsRequest.prototype['addresses'] = undefined;

/**
 * An array of wallet ids within the MetaFab ecosystem to transfer items to.
 * @member {Array.<String>} walletIds
 */
BatchTransferCollectionItemsRequest.prototype['walletIds'] = undefined;

/**
 * An array of unique itemIds to transfer. Each recipient will receive the same set of items provided.
 * @member {Array.<Number>} itemIds
 */
BatchTransferCollectionItemsRequest.prototype['itemIds'] = undefined;

/**
 * The quantities of each unique itemId to transfer. Each recipient will receive the same quantities of items provided.
 * @member {Array.<Number>} quantities
 */
BatchTransferCollectionItemsRequest.prototype['quantities'] = undefined;






export default BatchTransferCollectionItemsRequest;

