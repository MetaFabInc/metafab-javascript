/**
 * MetaFab API
 *  Complete MetaFab API references and guides can be found at: https://trymetafab.com
 *
 * The version of the OpenAPI document: 1.2.0
 * Contact: metafabproject@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import CreateCollectionItemRequestAttributesInner from './CreateCollectionItemRequestAttributesInner';

/**
 * The CreateCollectionItemRequest model module.
 * @module model/CreateCollectionItemRequest
 * @version 1.2.0
 */
class CreateCollectionItemRequest {
    /**
     * Constructs a new <code>CreateCollectionItemRequest</code>.
     * @alias module:model/CreateCollectionItemRequest
     * @param id {Number} A unique itemId to use for this item within the collection. If an existing itemId is used, the current metadata will be overriden. Any number may be used.  The terms `itemId` and `collectionItemId` are used interchangeably and equivalent to one another throughout MetaFab documentation.
     * @param name {String} The name of this item.
     * @param description {String} A text description of this item. This is a great spot to include lore, game mechanics and more related to this item.
     */
    constructor(id, name, description) { 
        
        CreateCollectionItemRequest.initialize(this, id, name, description);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, name, description) { 
        obj['id'] = id;
        obj['name'] = name;
        obj['description'] = description;
    }

    /**
     * Constructs a <code>CreateCollectionItemRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateCollectionItemRequest} obj Optional instance to populate.
     * @return {module:model/CreateCollectionItemRequest} The populated <code>CreateCollectionItemRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateCollectionItemRequest();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('imageBase64')) {
                obj['imageBase64'] = ApiClient.convertToType(data['imageBase64'], 'Blob');
            }
            if (data.hasOwnProperty('imageUrl')) {
                obj['imageUrl'] = ApiClient.convertToType(data['imageUrl'], 'String');
            }
            if (data.hasOwnProperty('externalUrl')) {
                obj['externalUrl'] = ApiClient.convertToType(data['externalUrl'], 'String');
            }
            if (data.hasOwnProperty('attributes')) {
                obj['attributes'] = ApiClient.convertToType(data['attributes'], [CreateCollectionItemRequestAttributesInner]);
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], Object);
            }
        }
        return obj;
    }


}

/**
 * A unique itemId to use for this item within the collection. If an existing itemId is used, the current metadata will be overriden. Any number may be used.  The terms `itemId` and `collectionItemId` are used interchangeably and equivalent to one another throughout MetaFab documentation.
 * @member {Number} id
 */
CreateCollectionItemRequest.prototype['id'] = undefined;

/**
 * The name of this item.
 * @member {String} name
 */
CreateCollectionItemRequest.prototype['name'] = undefined;

/**
 * A text description of this item. This is a great spot to include lore, game mechanics and more related to this item.
 * @member {String} description
 */
CreateCollectionItemRequest.prototype['description'] = undefined;

/**
 * A base64 string of the image for this item. Either `imageBase64` or `imageUrl` must be provided. Supported image formats are `jpg`, `jpeg`, `png`, `gif`. Recommended size of 1:1 aspect ratio and no more than 1500x1500 pixels.
 * @member {Blob} imageBase64
 */
CreateCollectionItemRequest.prototype['imageBase64'] = undefined;

/**
 * An external url that resolves to an image to use for this item. This can also be set to an ipfs:// uri. Recommended size of 1:1 aspect ratio and no more than 1500x1500 pixels.
 * @member {String} imageUrl
 */
CreateCollectionItemRequest.prototype['imageUrl'] = undefined;

/**
 * An optional URL where players can go to learn more about this item specifically, or your game, or any other link.
 * @member {String} externalUrl
 */
CreateCollectionItemRequest.prototype['externalUrl'] = undefined;

/**
 * An array of objects that conform with the [metadata attributes standard that can be found here](https://docs.opensea.io/docs/metadata-standards#attributes)
 * @member {Array.<module:model/CreateCollectionItemRequestAttributesInner>} attributes
 */
CreateCollectionItemRequest.prototype['attributes'] = undefined;

/**
 * An arbitrary object of data attached to the top level metadata object. This is useful for including data or resource URLs specific to your game. Such as URLs that point to 3D models, music files, bitmaps, or anything else you need to reference.
 * @member {Object} data
 */
CreateCollectionItemRequest.prototype['data'] = undefined;






export default CreateCollectionItemRequest;

