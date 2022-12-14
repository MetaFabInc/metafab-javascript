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
import CollectionModel from './CollectionModel';
import ContractModel from './ContractModel';
import GetCollections200ResponseInnerAllOf from './GetCollections200ResponseInnerAllOf';

/**
 * The GetCollections200ResponseInner model module.
 * @module model/GetCollections200ResponseInner
 * @version 1.4.1
 */
class GetCollections200ResponseInner {
    /**
     * Constructs a new <code>GetCollections200ResponseInner</code>.
     * @alias module:model/GetCollections200ResponseInner
     * @implements module:model/CollectionModel
     * @implements module:model/GetCollections200ResponseInnerAllOf
     */
    constructor() { 
        CollectionModel.initialize(this);GetCollections200ResponseInnerAllOf.initialize(this);
        GetCollections200ResponseInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetCollections200ResponseInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetCollections200ResponseInner} obj Optional instance to populate.
     * @return {module:model/GetCollections200ResponseInner} The populated <code>GetCollections200ResponseInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetCollections200ResponseInner();
            CollectionModel.constructFromObject(data, obj);
            GetCollections200ResponseInnerAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('gameId')) {
                obj['gameId'] = ApiClient.convertToType(data['gameId'], 'String');
            }
            if (data.hasOwnProperty('contractId')) {
                obj['contractId'] = ApiClient.convertToType(data['contractId'], 'String');
            }
            if (data.hasOwnProperty('updatedAt')) {
                obj['updatedAt'] = ApiClient.convertToType(data['updatedAt'], 'String');
            }
            if (data.hasOwnProperty('createdAt')) {
                obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'String');
            }
            if (data.hasOwnProperty('contract')) {
                obj['contract'] = ContractModel.constructFromObject(data['contract']);
            }
        }
        return obj;
    }


}

/**
 * This field has not had a description added.
 * @member {String} id
 */
GetCollections200ResponseInner.prototype['id'] = undefined;

/**
 * This field has not had a description added.
 * @member {String} gameId
 */
GetCollections200ResponseInner.prototype['gameId'] = undefined;

/**
 * This field has not had a description added.
 * @member {String} contractId
 */
GetCollections200ResponseInner.prototype['contractId'] = undefined;

/**
 * This field has not had a description added.
 * @member {String} updatedAt
 */
GetCollections200ResponseInner.prototype['updatedAt'] = undefined;

/**
 * This field has not had a description added.
 * @member {String} createdAt
 */
GetCollections200ResponseInner.prototype['createdAt'] = undefined;

/**
 * @member {module:model/ContractModel} contract
 */
GetCollections200ResponseInner.prototype['contract'] = undefined;


// Implement CollectionModel interface:
/**
 * This field has not had a description added.
 * @member {String} id
 */
CollectionModel.prototype['id'] = undefined;
/**
 * This field has not had a description added.
 * @member {String} gameId
 */
CollectionModel.prototype['gameId'] = undefined;
/**
 * This field has not had a description added.
 * @member {String} contractId
 */
CollectionModel.prototype['contractId'] = undefined;
/**
 * This field has not had a description added.
 * @member {String} updatedAt
 */
CollectionModel.prototype['updatedAt'] = undefined;
/**
 * This field has not had a description added.
 * @member {String} createdAt
 */
CollectionModel.prototype['createdAt'] = undefined;
// Implement GetCollections200ResponseInnerAllOf interface:
/**
 * @member {module:model/ContractModel} contract
 */
GetCollections200ResponseInnerAllOf.prototype['contract'] = undefined;




export default GetCollections200ResponseInner;

