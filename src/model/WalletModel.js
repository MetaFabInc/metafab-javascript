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
 * The WalletModel model module.
 * @module model/WalletModel
 * @version 1.4.1
 */
class WalletModel {
    /**
     * Constructs a new <code>WalletModel</code>.
     * @alias module:model/WalletModel
     */
    constructor() { 
        
        WalletModel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WalletModel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WalletModel} obj Optional instance to populate.
     * @return {module:model/WalletModel} The populated <code>WalletModel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WalletModel();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
        }
        return obj;
    }


}

/**
 * This field has not had a description added.
 * @member {String} id
 */
WalletModel.prototype['id'] = undefined;

/**
 * This field has not had a description added.
 * @member {String} address
 */
WalletModel.prototype['address'] = undefined;






export default WalletModel;

