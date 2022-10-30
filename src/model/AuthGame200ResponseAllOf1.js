/**
 * MetaFab API
 *  Complete MetaFab API references and guides can be found at: https://trymetafab.com
 *
 * The version of the OpenAPI document: 1.1.4
 * Contact: metafabproject@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import WalletModel from './WalletModel';

/**
 * The AuthGame200ResponseAllOf1 model module.
 * @module model/AuthGame200ResponseAllOf1
 * @version 1.1.4
 */
class AuthGame200ResponseAllOf1 {
    /**
     * Constructs a new <code>AuthGame200ResponseAllOf1</code>.
     * @alias module:model/AuthGame200ResponseAllOf1
     */
    constructor() { 
        
        AuthGame200ResponseAllOf1.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AuthGame200ResponseAllOf1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AuthGame200ResponseAllOf1} obj Optional instance to populate.
     * @return {module:model/AuthGame200ResponseAllOf1} The populated <code>AuthGame200ResponseAllOf1</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AuthGame200ResponseAllOf1();

            if (data.hasOwnProperty('fundingWallet')) {
                obj['fundingWallet'] = WalletModel.constructFromObject(data['fundingWallet']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/WalletModel} fundingWallet
 */
AuthGame200ResponseAllOf1.prototype['fundingWallet'] = undefined;






export default AuthGame200ResponseAllOf1;

