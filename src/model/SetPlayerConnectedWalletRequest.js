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
 * The SetPlayerConnectedWalletRequest model module.
 * @module model/SetPlayerConnectedWalletRequest
 * @version 1.4.1
 */
class SetPlayerConnectedWalletRequest {
    /**
     * Constructs a new <code>SetPlayerConnectedWalletRequest</code>.
     * @alias module:model/SetPlayerConnectedWalletRequest
     * @param address {String} The address of the external wallet to connect to the player.
     * @param nonce {Number} Any positive integer that hasn't been used previously to connect or disconnect this external wallet. Must be the same nonce used to generate the `signature`.
     * @param signature {String} A signature string generated by signing a keccak256 hash generated with abiCoder encode arguments of `[ 'bytes32', 'address', 'bool', 'address', 'uint256' ]` and `[ keccak256(gameId), delegate wallet approved (player's custodial wallet address), true, external wallet address, any unused nonce number ]`.
     * @param chain {module:model/SetPlayerConnectedWalletRequest.ChainEnum} The blockchain you want to support this wallet connection on. If you need to support multiple blockchains, make multiple requests using different `chain` arguments. Support for new blockchains are added over time.
     */
    constructor(address, nonce, signature, chain) { 
        
        SetPlayerConnectedWalletRequest.initialize(this, address, nonce, signature, chain);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, address, nonce, signature, chain) { 
        obj['address'] = address;
        obj['nonce'] = nonce;
        obj['signature'] = signature;
        obj['chain'] = chain;
    }

    /**
     * Constructs a <code>SetPlayerConnectedWalletRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SetPlayerConnectedWalletRequest} obj Optional instance to populate.
     * @return {module:model/SetPlayerConnectedWalletRequest} The populated <code>SetPlayerConnectedWalletRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SetPlayerConnectedWalletRequest();

            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('nonce')) {
                obj['nonce'] = ApiClient.convertToType(data['nonce'], 'Number');
            }
            if (data.hasOwnProperty('signature')) {
                obj['signature'] = ApiClient.convertToType(data['signature'], 'String');
            }
            if (data.hasOwnProperty('chain')) {
                obj['chain'] = ApiClient.convertToType(data['chain'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The address of the external wallet to connect to the player.
 * @member {String} address
 */
SetPlayerConnectedWalletRequest.prototype['address'] = undefined;

/**
 * Any positive integer that hasn't been used previously to connect or disconnect this external wallet. Must be the same nonce used to generate the `signature`.
 * @member {Number} nonce
 */
SetPlayerConnectedWalletRequest.prototype['nonce'] = undefined;

/**
 * A signature string generated by signing a keccak256 hash generated with abiCoder encode arguments of `[ 'bytes32', 'address', 'bool', 'address', 'uint256' ]` and `[ keccak256(gameId), delegate wallet approved (player's custodial wallet address), true, external wallet address, any unused nonce number ]`.
 * @member {String} signature
 */
SetPlayerConnectedWalletRequest.prototype['signature'] = undefined;

/**
 * The blockchain you want to support this wallet connection on. If you need to support multiple blockchains, make multiple requests using different `chain` arguments. Support for new blockchains are added over time.
 * @member {module:model/SetPlayerConnectedWalletRequest.ChainEnum} chain
 */
SetPlayerConnectedWalletRequest.prototype['chain'] = undefined;





/**
 * Allowed values for the <code>chain</code> property.
 * @enum {String}
 * @readonly
 */
SetPlayerConnectedWalletRequest['ChainEnum'] = {

    /**
     * value: "ETHEREUM"
     * @const
     */
    "ETHEREUM": "ETHEREUM",

    /**
     * value: "GOERLI"
     * @const
     */
    "GOERLI": "GOERLI",

    /**
     * value: "MATIC"
     * @const
     */
    "MATIC": "MATIC",

    /**
     * value: "MATICMUMBAI"
     * @const
     */
    "MATICMUMBAI": "MATICMUMBAI",

    /**
     * value: "ARBITRUM"
     * @const
     */
    "ARBITRUM": "ARBITRUM",

    /**
     * value: "ARBITRUMGOERLI"
     * @const
     */
    "ARBITRUMGOERLI": "ARBITRUMGOERLI"
};



export default SetPlayerConnectedWalletRequest;

