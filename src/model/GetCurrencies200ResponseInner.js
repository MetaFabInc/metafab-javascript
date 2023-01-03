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
import ContractModel from './ContractModel';
import CurrencyModel from './CurrencyModel';
import GetCollections200ResponseInnerAllOf from './GetCollections200ResponseInnerAllOf';

/**
 * The GetCurrencies200ResponseInner model module.
 * @module model/GetCurrencies200ResponseInner
 * @version 1.4.1
 */
class GetCurrencies200ResponseInner {
    /**
     * Constructs a new <code>GetCurrencies200ResponseInner</code>.
     * @alias module:model/GetCurrencies200ResponseInner
     * @implements module:model/CurrencyModel
     * @implements module:model/GetCollections200ResponseInnerAllOf
     */
    constructor() { 
        CurrencyModel.initialize(this);GetCollections200ResponseInnerAllOf.initialize(this);
        GetCurrencies200ResponseInner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetCurrencies200ResponseInner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetCurrencies200ResponseInner} obj Optional instance to populate.
     * @return {module:model/GetCurrencies200ResponseInner} The populated <code>GetCurrencies200ResponseInner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetCurrencies200ResponseInner();
            CurrencyModel.constructFromObject(data, obj);
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
GetCurrencies200ResponseInner.prototype['id'] = undefined;

/**
 * This field has not had a description added.
 * @member {String} gameId
 */
GetCurrencies200ResponseInner.prototype['gameId'] = undefined;

/**
 * This field has not had a description added.
 * @member {String} contractId
 */
GetCurrencies200ResponseInner.prototype['contractId'] = undefined;

/**
 * This field has not had a description added.
 * @member {String} name
 */
GetCurrencies200ResponseInner.prototype['name'] = undefined;

/**
 * This field has not had a description added.
 * @member {String} symbol
 */
GetCurrencies200ResponseInner.prototype['symbol'] = undefined;

/**
 * This field has not had a description added.
 * @member {Number} supplyCap
 */
GetCurrencies200ResponseInner.prototype['supplyCap'] = undefined;

/**
 * This field has not had a description added.
 * @member {String} updatedAt
 */
GetCurrencies200ResponseInner.prototype['updatedAt'] = undefined;

/**
 * This field has not had a description added.
 * @member {String} createdAt
 */
GetCurrencies200ResponseInner.prototype['createdAt'] = undefined;

/**
 * @member {module:model/ContractModel} contract
 */
GetCurrencies200ResponseInner.prototype['contract'] = undefined;


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
// Implement GetCollections200ResponseInnerAllOf interface:
/**
 * @member {module:model/ContractModel} contract
 */
GetCollections200ResponseInnerAllOf.prototype['contract'] = undefined;




export default GetCurrencies200ResponseInner;

