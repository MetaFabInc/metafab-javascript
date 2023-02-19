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
import CollectionItemAttributesInnerValue from './CollectionItemAttributesInnerValue';

/**
 * The CollectionItemAttributesInner model module.
 * @module model/CollectionItemAttributesInner
 * @version 1.5.1
 */
class CollectionItemAttributesInner {
    /**
     * Constructs a new <code>CollectionItemAttributesInner</code>.
     * @alias module:model/CollectionItemAttributesInner
     */
    constructor() { 
        
        CollectionItemAttributesInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CollectionItemAttributesInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CollectionItemAttributesInner} obj Optional instance to populate.
     * @return {module:model/CollectionItemAttributesInner} The populated <code>CollectionItemAttributesInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CollectionItemAttributesInner();

            if (data.hasOwnProperty('trait_type')) {
                obj['trait_type'] = ApiClient.convertToType(data['trait_type'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = CollectionItemAttributesInnerValue.constructFromObject(data['value']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CollectionItemAttributesInner</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CollectionItemAttributesInner</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['trait_type'] && !(typeof data['trait_type'] === 'string' || data['trait_type'] instanceof String)) {
            throw new Error("Expected the field `trait_type` to be a primitive type in the JSON string but got " + data['trait_type']);
        }
        // validate the optional field `value`
        if (data['value']) { // data not null
          CollectionItemAttributesInnerValue.validateJSON(data['value']);
        }

        return true;
    }


}



/**
 * This field has not had a description added.
 * @member {String} trait_type
 */
CollectionItemAttributesInner.prototype['trait_type'] = undefined;

/**
 * @member {module:model/CollectionItemAttributesInnerValue} value
 */
CollectionItemAttributesInner.prototype['value'] = undefined;






export default CollectionItemAttributesInner;
