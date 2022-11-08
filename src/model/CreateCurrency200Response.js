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
import CreateCollection200ResponseAllOf from './CreateCollection200ResponseAllOf';
import CreateCollection200ResponseAllOfContract from './CreateCollection200ResponseAllOfContract';
import CurrencyModel from './CurrencyModel';

/**
 * The CreateCurrency200Response model module.
 * @module model/CreateCurrency200Response
 * @version 1.2.0
 */
class CreateCurrency200Response {
    /**
     * Constructs a new <code>CreateCurrency200Response</code>.
     * @alias module:model/CreateCurrency200Response
     * @implements module:model/CurrencyModel
     * @implements module:model/CreateCollection200ResponseAllOf
     */
    constructor() { 
        CurrencyModel.initialize(this);CreateCollection200ResponseAllOf.initialize(this);
        CreateCurrency200Response.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateCurrency200Response</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateCurrency200Response} obj Optional instance to populate.
     * @return {module:model/CreateCurrency200Response} The populated <code>CreateCurrency200Response</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateCurrency200Response();
            CurrencyModel.constructFromObject(data, obj);
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
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('supplyCap')) {
                obj['supplyCap'] = ApiClient.convertToType(data['supplyCap'], 'Number');
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
CreateCurrency200Response.prototype['id'] = undefined;

/**
 * This field has not had a description added.
 * @member {String} gameId
 */
CreateCurrency200Response.prototype['gameId'] = undefined;

/**
 * This field has not had a description added.
 * @member {String} contractId
 */
CreateCurrency200Response.prototype['contractId'] = undefined;

/**
 * This field has not had a description added.
 * @member {String} name
 */
CreateCurrency200Response.prototype['name'] = undefined;

/**
 * This field has not had a description added.
 * @member {String} symbol
 */
CreateCurrency200Response.prototype['symbol'] = undefined;

/**
 * This field has not had a description added.
 * @member {Number} supplyCap
 */
CreateCurrency200Response.prototype['supplyCap'] = undefined;

/**
 * This field has not had a description added.
 * @member {String} updatedAt
 */
CreateCurrency200Response.prototype['updatedAt'] = undefined;

/**
 * This field has not had a description added.
 * @member {String} createdAt
 */
CreateCurrency200Response.prototype['createdAt'] = undefined;

/**
 * @member {module:model/CreateCollection200ResponseAllOfContract} contract
 */
CreateCurrency200Response.prototype['contract'] = undefined;


// Implement CurrencyModel interface:
/**
 * This field has not had a description added.
 * @member {String} id
 */
CurrencyModel.prototype['id'] = undefined;
/**
 * This field has not had a description added.
 * @member {String} gameId
 */
CurrencyModel.prototype['gameId'] = undefined;
/**
 * This field has not had a description added.
 * @member {String} contractId
 */
CurrencyModel.prototype['contractId'] = undefined;
/**
 * This field has not had a description added.
 * @member {String} name
 */
CurrencyModel.prototype['name'] = undefined;
/**
 * This field has not had a description added.
 * @member {String} symbol
 */
CurrencyModel.prototype['symbol'] = undefined;
/**
 * This field has not had a description added.
 * @member {Number} supplyCap
 */
CurrencyModel.prototype['supplyCap'] = undefined;
/**
 * This field has not had a description added.
 * @member {String} updatedAt
 */
CurrencyModel.prototype['updatedAt'] = undefined;
/**
 * This field has not had a description added.
 * @member {String} createdAt
 */
CurrencyModel.prototype['createdAt'] = undefined;
// Implement CreateCollection200ResponseAllOf interface:
/**
 * @member {module:model/CreateCollection200ResponseAllOfContract} contract
 */
CreateCollection200ResponseAllOf.prototype['contract'] = undefined;




export default CreateCurrency200Response;

