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
 * The BatchMintCollectionItemsRequest model module.
 * @module model/BatchMintCollectionItemsRequest
 * @version 1.4.1
 */
class BatchMintCollectionItemsRequest {
    /**
     * Constructs a new <code>BatchMintCollectionItemsRequest</code>.
     * @alias module:model/BatchMintCollectionItemsRequest
     * @param itemIds {Array.<Number>} An array of unique itemIds to create (mint).
     * @param quantities {Array.<Number>} An array of the quantities of each of the unique itemIds provided to create (mint). The quantity of each itemId in itemIds should be at the same index as the specific itemId in the itemIds array. For example, quantities[2] defines the quantity to mint for itemIds[2], etc.
     */
    constructor(itemIds, quantities) { 
        
        BatchMintCollectionItemsRequest.initialize(this, itemIds, quantities);
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
     * Constructs a <code>BatchMintCollectionItemsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BatchMintCollectionItemsRequest} obj Optional instance to populate.
     * @return {module:model/BatchMintCollectionItemsRequest} The populated <code>BatchMintCollectionItemsRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BatchMintCollectionItemsRequest();

            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('itemIds')) {
                obj['itemIds'] = ApiClient.convertToType(data['itemIds'], ['Number']);
            }
            if (data.hasOwnProperty('quantities')) {
                obj['quantities'] = ApiClient.convertToType(data['quantities'], ['Number']);
            }
            if (data.hasOwnProperty('walletId')) {
                obj['walletId'] = ApiClient.convertToType(data['walletId'], 'String');
            }
        }
        return obj;
    }


}

/**
 * A valid EVM based address to create (mint) the items for. For example, `0x39cb70F972E0EE920088AeF97Dbe5c6251a9c25D`.
 * @member {String} address
 */
BatchMintCollectionItemsRequest.prototype['address'] = undefined;

/**
 * An array of unique itemIds to create (mint).
 * @member {Array.<Number>} itemIds
 */
BatchMintCollectionItemsRequest.prototype['itemIds'] = undefined;

/**
 * An array of the quantities of each of the unique itemIds provided to create (mint). The quantity of each itemId in itemIds should be at the same index as the specific itemId in the itemIds array. For example, quantities[2] defines the quantity to mint for itemIds[2], etc.
 * @member {Array.<Number>} quantities
 */
BatchMintCollectionItemsRequest.prototype['quantities'] = undefined;

/**
 * Any wallet id within the MetaFab ecosystem to create (mint) the items for.
 * @member {String} walletId
 */
BatchMintCollectionItemsRequest.prototype['walletId'] = undefined;






export default BatchMintCollectionItemsRequest;

