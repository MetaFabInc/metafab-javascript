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
import CreateCollection200ResponseAllOf from './CreateCollection200ResponseAllOf';
import CreateCollection200ResponseAllOfContract from './CreateCollection200ResponseAllOfContract';
import ShopModel from './ShopModel';

/**
 * The CreateShop200Response model module.
 * @module model/CreateShop200Response
 * @version 1.4.1
 */
class CreateShop200Response {
    /**
     * Constructs a new <code>CreateShop200Response</code>.
     * @alias module:model/CreateShop200Response
     * @implements module:model/ShopModel
     * @implements module:model/CreateCollection200ResponseAllOf
     */
    constructor() { 
        ShopModel.initialize(this);CreateCollection200ResponseAllOf.initialize(this);
        CreateShop200Response.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateShop200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateShop200Response} obj Optional instance to populate.
     * @return {module:model/CreateShop200Response} The populated <code>CreateShop200Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateShop200Response();
            ShopModel.constructFromObject(data, obj);
            CreateCollection200ResponseAllOf.constructFromObject(data, obj);

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
                obj['contract'] = CreateCollection200ResponseAllOfContract.constructFromObject(data['contract']);
            }
        }
        return obj;
    }


}

/**
 * This field has not had a description added.
 * @member {String} id
 */
CreateShop200Response.prototype['id'] = undefined;

/**
 * This field has not had a description added.
 * @member {String} gameId
 */
CreateShop200Response.prototype['gameId'] = undefined;

/**
 * This field has not had a description added.
 * @member {String} contractId
 */
CreateShop200Response.prototype['contractId'] = undefined;

/**
 * This field has not had a description added.
 * @member {String} updatedAt
 */
CreateShop200Response.prototype['updatedAt'] = undefined;

/**
 * This field has not had a description added.
 * @member {String} createdAt
 */
CreateShop200Response.prototype['createdAt'] = undefined;

/**
 * @member {module:model/CreateCollection200ResponseAllOfContract} contract
 */
CreateShop200Response.prototype['contract'] = undefined;


// Implement ShopModel interface:
/**
 * This field has not had a description added.
 * @member {String} id
 */
ShopModel.prototype['id'] = undefined;
/**
 * This field has not had a description added.
 * @member {String} gameId
 */
ShopModel.prototype['gameId'] = undefined;
/**
 * This field has not had a description added.
 * @member {String} contractId
 */
ShopModel.prototype['contractId'] = undefined;
/**
 * This field has not had a description added.
 * @member {String} updatedAt
 */
ShopModel.prototype['updatedAt'] = undefined;
/**
 * This field has not had a description added.
 * @member {String} createdAt
 */
ShopModel.prototype['createdAt'] = undefined;
// Implement CreateCollection200ResponseAllOf interface:
/**
 * @member {module:model/CreateCollection200ResponseAllOfContract} contract
 */
CreateCollection200ResponseAllOf.prototype['contract'] = undefined;




export default CreateShop200Response;

