/**
 * MetaFab API
 *  Complete MetaFab API references and guides can be found at: https://trymetafab.com
 *
 * The version of the OpenAPI document: 1.2.1
 * Contact: metafabproject@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The CreateCollectionItemRequestAttributesInner model module.
 * @module model/CreateCollectionItemRequestAttributesInner
 * @version 1.2.1
 */
class CreateCollectionItemRequestAttributesInner {
    /**
     * Constructs a new <code>CreateCollectionItemRequestAttributesInner</code>.
     * @alias module:model/CreateCollectionItemRequestAttributesInner
     * @param traitType {String} 
     * @param value {Object} 
     */
    constructor(traitType, value) { 
        
        CreateCollectionItemRequestAttributesInner.initialize(this, traitType, value);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, traitType, value) { 
        obj['trait_type'] = traitType;
        obj['value'] = value;
    }

    /**
     * Constructs a <code>CreateCollectionItemRequestAttributesInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateCollectionItemRequestAttributesInner} obj Optional instance to populate.
     * @return {module:model/CreateCollectionItemRequestAttributesInner} The populated <code>CreateCollectionItemRequestAttributesInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateCollectionItemRequestAttributesInner();

            if (data.hasOwnProperty('trait_type')) {
                obj['trait_type'] = ApiClient.convertToType(data['trait_type'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], Object);
            }
        }
        return obj;
    }


}

/**
 * @member {String} trait_type
 */
CreateCollectionItemRequestAttributesInner.prototype['trait_type'] = undefined;

/**
 * @member {Object} value
 */
CreateCollectionItemRequestAttributesInner.prototype['value'] = undefined;






export default CreateCollectionItemRequestAttributesInner;

