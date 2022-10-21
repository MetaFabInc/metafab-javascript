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
import ContractModel from './ContractModel';
import CreateCollection200ResponseAllOfContractAllOf from './CreateCollection200ResponseAllOfContractAllOf';
import TransactionModel from './TransactionModel';

/**
 * The CreateCollection200ResponseAllOfContract model module.
 * @module model/CreateCollection200ResponseAllOfContract
 * @version 1.1.3
 */
class CreateCollection200ResponseAllOfContract {
    /**
     * Constructs a new <code>CreateCollection200ResponseAllOfContract</code>.
     * @alias module:model/CreateCollection200ResponseAllOfContract
     * @implements module:model/ContractModel
     * @implements module:model/CreateCollection200ResponseAllOfContractAllOf
     */
    constructor() { 
        ContractModel.initialize(this);CreateCollection200ResponseAllOfContractAllOf.initialize(this);
        CreateCollection200ResponseAllOfContract.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CreateCollection200ResponseAllOfContract</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateCollection200ResponseAllOfContract} obj Optional instance to populate.
     * @return {module:model/CreateCollection200ResponseAllOfContract} The populated <code>CreateCollection200ResponseAllOfContract</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateCollection200ResponseAllOfContract();
            ContractModel.constructFromObject(data, obj);
            CreateCollection200ResponseAllOfContractAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('gameId')) {
                obj['gameId'] = ApiClient.convertToType(data['gameId'], 'String');
            }
            if (data.hasOwnProperty('chain')) {
                obj['chain'] = ApiClient.convertToType(data['chain'], 'String');
            }
            if (data.hasOwnProperty('abi')) {
                obj['abi'] = ApiClient.convertToType(data['abi'], Object);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('updatedAt')) {
                obj['updatedAt'] = ApiClient.convertToType(data['updatedAt'], 'String');
            }
            if (data.hasOwnProperty('createdAt')) {
                obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'String');
            }
            if (data.hasOwnProperty('transactions')) {
                obj['transactions'] = ApiClient.convertToType(data['transactions'], [TransactionModel]);
            }
        }
        return obj;
    }


}

/**
 * This field has not had a description added.
 * @member {String} id
 */
CreateCollection200ResponseAllOfContract.prototype['id'] = undefined;

/**
 * This field has not had a description added.
 * @member {String} gameId
 */
CreateCollection200ResponseAllOfContract.prototype['gameId'] = undefined;

/**
 * This field has not had a description added.
 * @member {String} chain
 */
CreateCollection200ResponseAllOfContract.prototype['chain'] = undefined;

/**
 * This field has not had a description added.
 * @member {Object} abi
 */
CreateCollection200ResponseAllOfContract.prototype['abi'] = undefined;

/**
 * This field has not had a description added.
 * @member {String} type
 */
CreateCollection200ResponseAllOfContract.prototype['type'] = undefined;

/**
 * This field has not had a description added.
 * @member {String} address
 */
CreateCollection200ResponseAllOfContract.prototype['address'] = undefined;

/**
 * This field has not had a description added.
 * @member {String} updatedAt
 */
CreateCollection200ResponseAllOfContract.prototype['updatedAt'] = undefined;

/**
 * This field has not had a description added.
 * @member {String} createdAt
 */
CreateCollection200ResponseAllOfContract.prototype['createdAt'] = undefined;

/**
 * @member {Array.<module:model/TransactionModel>} transactions
 */
CreateCollection200ResponseAllOfContract.prototype['transactions'] = undefined;


// Implement ContractModel interface:
/**
 * This field has not had a description added.
 * @member {String} id
 */
ContractModel.prototype['id'] = undefined;
/**
 * This field has not had a description added.
 * @member {String} gameId
 */
ContractModel.prototype['gameId'] = undefined;
/**
 * This field has not had a description added.
 * @member {String} chain
 */
ContractModel.prototype['chain'] = undefined;
/**
 * This field has not had a description added.
 * @member {Object} abi
 */
ContractModel.prototype['abi'] = undefined;
/**
 * This field has not had a description added.
 * @member {String} type
 */
ContractModel.prototype['type'] = undefined;
/**
 * This field has not had a description added.
 * @member {String} address
 */
ContractModel.prototype['address'] = undefined;
/**
 * This field has not had a description added.
 * @member {String} updatedAt
 */
ContractModel.prototype['updatedAt'] = undefined;
/**
 * This field has not had a description added.
 * @member {String} createdAt
 */
ContractModel.prototype['createdAt'] = undefined;
// Implement CreateCollection200ResponseAllOfContractAllOf interface:
/**
 * @member {Array.<module:model/TransactionModel>} transactions
 */
CreateCollection200ResponseAllOfContractAllOf.prototype['transactions'] = undefined;




export default CreateCollection200ResponseAllOfContract;

