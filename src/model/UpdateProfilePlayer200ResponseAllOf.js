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
import WalletModel from './WalletModel';

/**
 * The UpdateProfilePlayer200ResponseAllOf model module.
 * @module model/UpdateProfilePlayer200ResponseAllOf
 * @version 1.5.1
 */
class UpdateProfilePlayer200ResponseAllOf {
    /**
     * Constructs a new <code>UpdateProfilePlayer200ResponseAllOf</code>.
     * @alias module:model/UpdateProfilePlayer200ResponseAllOf
     */
    constructor() { 
        
        UpdateProfilePlayer200ResponseAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UpdateProfilePlayer200ResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateProfilePlayer200ResponseAllOf} obj Optional instance to populate.
     * @return {module:model/UpdateProfilePlayer200ResponseAllOf} The populated <code>UpdateProfilePlayer200ResponseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateProfilePlayer200ResponseAllOf();

            if (data.hasOwnProperty('wallet')) {
                obj['wallet'] = WalletModel.constructFromObject(data['wallet']);
            }
            if (data.hasOwnProperty('custodialWallet')) {
                obj['custodialWallet'] = WalletModel.constructFromObject(data['custodialWallet']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UpdateProfilePlayer200ResponseAllOf</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdateProfilePlayer200ResponseAllOf</code>.
     */
    static validateJSON(data) {
        // validate the optional field `wallet`
        if (data['wallet']) { // data not null
          WalletModel.validateJSON(data['wallet']);
        }
        // validate the optional field `custodialWallet`
        if (data['custodialWallet']) { // data not null
          WalletModel.validateJSON(data['custodialWallet']);
        }

        return true;
    }


}



/**
 * @member {module:model/WalletModel} wallet
 */
UpdateProfilePlayer200ResponseAllOf.prototype['wallet'] = undefined;

/**
 * @member {module:model/WalletModel} custodialWallet
 */
UpdateProfilePlayer200ResponseAllOf.prototype['custodialWallet'] = undefined;






export default UpdateProfilePlayer200ResponseAllOf;

