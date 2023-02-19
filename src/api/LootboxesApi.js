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


import ApiClient from "../ApiClient";
import CreateLootboxManager200Response from '../model/CreateLootboxManager200Response';
import CreateLootboxManagerRequest from '../model/CreateLootboxManagerRequest';
import GetLootboxManagers200ResponseInner from '../model/GetLootboxManagers200ResponseInner';
import LootboxManagerLootbox from '../model/LootboxManagerLootbox';
import SetLootboxManagerLootboxRequest from '../model/SetLootboxManagerLootboxRequest';
import TransactionModel from '../model/TransactionModel';

/**
* Lootboxes service.
* @module api/LootboxesApi
* @version 1.5.1
*/
export default class LootboxesApi {

    /**
    * Constructs a new LootboxesApi. 
    * @alias module:api/LootboxesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create lootbox manager
     * Creates a new game lootbox manager and deploys a lootbox manager contract on behalf of the authenticating game's primary wallet. The deployed lootbox manager contract allows you to create lootbox behavior for existing items. For example, you can define item id(s) from one of your item collections as the requirement(s) to open a \"lootbox\". The required item(s) would be burned from the interacting player's wallet and the player would receive item(s) from a weighted randomized set of possible items the lootbox can contain.
     * @param {String} xAuthorization The `secretKey` of the authenticating game.
     * @param {String} xWalletDecryptKey The `walletDecryptKey` of the authenticating game. Required to decrypt and perform blockchain transactions with the game primary wallet.
     * @param {module:model/CreateLootboxManagerRequest} createLootboxManagerRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateLootboxManager200Response} and HTTP response
     */
    createLootboxManagerWithHttpInfo(xAuthorization, xWalletDecryptKey, createLootboxManagerRequest) {
      let postBody = createLootboxManagerRequest;
      // verify the required parameter 'xAuthorization' is set
      if (xAuthorization === undefined || xAuthorization === null) {
        throw new Error("Missing the required parameter 'xAuthorization' when calling createLootboxManager");
      }
      // verify the required parameter 'xWalletDecryptKey' is set
      if (xWalletDecryptKey === undefined || xWalletDecryptKey === null) {
        throw new Error("Missing the required parameter 'xWalletDecryptKey' when calling createLootboxManager");
      }
      // verify the required parameter 'createLootboxManagerRequest' is set
      if (createLootboxManagerRequest === undefined || createLootboxManagerRequest === null) {
        throw new Error("Missing the required parameter 'createLootboxManagerRequest' when calling createLootboxManager");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'X-Authorization': xAuthorization,
        'X-Wallet-Decrypt-Key': xWalletDecryptKey
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = CreateLootboxManager200Response;
      return this.apiClient.callApi(
        '/v1/lootboxManagers', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create lootbox manager
     * Creates a new game lootbox manager and deploys a lootbox manager contract on behalf of the authenticating game's primary wallet. The deployed lootbox manager contract allows you to create lootbox behavior for existing items. For example, you can define item id(s) from one of your item collections as the requirement(s) to open a \"lootbox\". The required item(s) would be burned from the interacting player's wallet and the player would receive item(s) from a weighted randomized set of possible items the lootbox can contain.
     * @param {String} xAuthorization The `secretKey` of the authenticating game.
     * @param {String} xWalletDecryptKey The `walletDecryptKey` of the authenticating game. Required to decrypt and perform blockchain transactions with the game primary wallet.
     * @param {module:model/CreateLootboxManagerRequest} createLootboxManagerRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateLootboxManager200Response}
     */
    createLootboxManager(xAuthorization, xWalletDecryptKey, createLootboxManagerRequest) {
      return this.createLootboxManagerWithHttpInfo(xAuthorization, xWalletDecryptKey, createLootboxManagerRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get lootbox manager lootbox
     * Returns a lootbox manager lootbox object for the provided lootboxManagerLootboxId.
     * @param {String} lootboxManagerId Any lootbox manager id within the MetaFab platform.
     * @param {String} lootboxManagerLootboxId Any lootbox manager lootbox id within the MetaFab platform.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/LootboxManagerLootbox} and HTTP response
     */
    getLootboxManagerLootboxWithHttpInfo(lootboxManagerId, lootboxManagerLootboxId) {
      let postBody = null;
      // verify the required parameter 'lootboxManagerId' is set
      if (lootboxManagerId === undefined || lootboxManagerId === null) {
        throw new Error("Missing the required parameter 'lootboxManagerId' when calling getLootboxManagerLootbox");
      }
      // verify the required parameter 'lootboxManagerLootboxId' is set
      if (lootboxManagerLootboxId === undefined || lootboxManagerLootboxId === null) {
        throw new Error("Missing the required parameter 'lootboxManagerLootboxId' when calling getLootboxManagerLootbox");
      }

      let pathParams = {
        'lootboxManagerId': lootboxManagerId,
        'lootboxManagerLootboxId': lootboxManagerLootboxId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = LootboxManagerLootbox;
      return this.apiClient.callApi(
        '/v1/lootboxManagers/{lootboxManagerId}/lootboxes/{lootboxManagerLootboxId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get lootbox manager lootbox
     * Returns a lootbox manager lootbox object for the provided lootboxManagerLootboxId.
     * @param {String} lootboxManagerId Any lootbox manager id within the MetaFab platform.
     * @param {String} lootboxManagerLootboxId Any lootbox manager lootbox id within the MetaFab platform.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/LootboxManagerLootbox}
     */
    getLootboxManagerLootbox(lootboxManagerId, lootboxManagerLootboxId) {
      return this.getLootboxManagerLootboxWithHttpInfo(lootboxManagerId, lootboxManagerLootboxId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get lootbox manager lootboxes
     * Returns all lootbox manager lootboxes as an array of lootbox objects.
     * @param {String} lootboxManagerId Any lootbox manager id within the MetaFab platform.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/LootboxManagerLootbox>} and HTTP response
     */
    getLootboxManagerLootboxesWithHttpInfo(lootboxManagerId) {
      let postBody = null;
      // verify the required parameter 'lootboxManagerId' is set
      if (lootboxManagerId === undefined || lootboxManagerId === null) {
        throw new Error("Missing the required parameter 'lootboxManagerId' when calling getLootboxManagerLootboxes");
      }

      let pathParams = {
        'lootboxManagerId': lootboxManagerId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [LootboxManagerLootbox];
      return this.apiClient.callApi(
        '/v1/lootboxManagers/{lootboxManagerId}/lootboxes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get lootbox manager lootboxes
     * Returns all lootbox manager lootboxes as an array of lootbox objects.
     * @param {String} lootboxManagerId Any lootbox manager id within the MetaFab platform.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/LootboxManagerLootbox>}
     */
    getLootboxManagerLootboxes(lootboxManagerId) {
      return this.getLootboxManagerLootboxesWithHttpInfo(lootboxManagerId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get lootbox managers
     * Returns an array of active lootbox managers for the game associated with the provided `X-Game-Key`.
     * @param {String} xGameKey The `publishedKey` of a specific game. This can be shared or included in game clients, websites, etc.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/GetLootboxManagers200ResponseInner>} and HTTP response
     */
    getLootboxManagersWithHttpInfo(xGameKey) {
      let postBody = null;
      // verify the required parameter 'xGameKey' is set
      if (xGameKey === undefined || xGameKey === null) {
        throw new Error("Missing the required parameter 'xGameKey' when calling getLootboxManagers");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'X-Game-Key': xGameKey
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [GetLootboxManagers200ResponseInner];
      return this.apiClient.callApi(
        '/v1/lootboxManagers', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get lootbox managers
     * Returns an array of active lootbox managers for the game associated with the provided `X-Game-Key`.
     * @param {String} xGameKey The `publishedKey` of a specific game. This can be shared or included in game clients, websites, etc.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/GetLootboxManagers200ResponseInner>}
     */
    getLootboxManagers(xGameKey) {
      return this.getLootboxManagersWithHttpInfo(xGameKey)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Open lootbox manager lootbox
     * Opens a lootbox manager lootbox. The required input item(s) are burned from the wallet or player wallet opening the lootbox. The given output item(s) are given to the wallet or player wallet opening the lootbox.
     * @param {String} lootboxManagerId Any lootbox manager id within the MetaFab platform.
     * @param {String} lootboxManagerLootboxId Any lootbox manager lootbox id within the MetaFab platform.
     * @param {String} xAuthorization The `secretKey` of a specific game or the `accessToken` of a specific player.
     * @param {String} xWalletDecryptKey The `walletDecryptKey` of the authenticating game or player. Required to decrypt and perform blockchain transactions with the game or player primary wallet.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/TransactionModel>} and HTTP response
     */
    openLootboxManagerLootboxWithHttpInfo(lootboxManagerId, lootboxManagerLootboxId, xAuthorization, xWalletDecryptKey) {
      let postBody = null;
      // verify the required parameter 'lootboxManagerId' is set
      if (lootboxManagerId === undefined || lootboxManagerId === null) {
        throw new Error("Missing the required parameter 'lootboxManagerId' when calling openLootboxManagerLootbox");
      }
      // verify the required parameter 'lootboxManagerLootboxId' is set
      if (lootboxManagerLootboxId === undefined || lootboxManagerLootboxId === null) {
        throw new Error("Missing the required parameter 'lootboxManagerLootboxId' when calling openLootboxManagerLootbox");
      }
      // verify the required parameter 'xAuthorization' is set
      if (xAuthorization === undefined || xAuthorization === null) {
        throw new Error("Missing the required parameter 'xAuthorization' when calling openLootboxManagerLootbox");
      }
      // verify the required parameter 'xWalletDecryptKey' is set
      if (xWalletDecryptKey === undefined || xWalletDecryptKey === null) {
        throw new Error("Missing the required parameter 'xWalletDecryptKey' when calling openLootboxManagerLootbox");
      }

      let pathParams = {
        'lootboxManagerId': lootboxManagerId,
        'lootboxManagerLootboxId': lootboxManagerLootboxId
      };
      let queryParams = {
      };
      let headerParams = {
        'X-Authorization': xAuthorization,
        'X-Wallet-Decrypt-Key': xWalletDecryptKey
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [TransactionModel];
      return this.apiClient.callApi(
        '/v1/lootboxManagers/{lootboxManagerId}/lootboxes/{lootboxManagerLootboxId}/opens', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Open lootbox manager lootbox
     * Opens a lootbox manager lootbox. The required input item(s) are burned from the wallet or player wallet opening the lootbox. The given output item(s) are given to the wallet or player wallet opening the lootbox.
     * @param {String} lootboxManagerId Any lootbox manager id within the MetaFab platform.
     * @param {String} lootboxManagerLootboxId Any lootbox manager lootbox id within the MetaFab platform.
     * @param {String} xAuthorization The `secretKey` of a specific game or the `accessToken` of a specific player.
     * @param {String} xWalletDecryptKey The `walletDecryptKey` of the authenticating game or player. Required to decrypt and perform blockchain transactions with the game or player primary wallet.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/TransactionModel>}
     */
    openLootboxManagerLootbox(lootboxManagerId, lootboxManagerLootboxId, xAuthorization, xWalletDecryptKey) {
      return this.openLootboxManagerLootboxWithHttpInfo(lootboxManagerId, lootboxManagerLootboxId, xAuthorization, xWalletDecryptKey)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Remove lootbox manager lootbox
     * Removes the provided lootbox by lootboxId from the provided lootbox manager. Removed lootboxes can no longer be used.
     * @param {String} lootboxManagerId Any lootbox manager id within the MetaFab platform.
     * @param {String} lootboxManagerLootboxId Any lootbox manager lootbox id within the MetaFab platform.
     * @param {String} xAuthorization The `secretKey` of the authenticating game.
     * @param {String} xWalletDecryptKey The `walletDecryptKey` of the authenticating game. Required to decrypt and perform blockchain transactions with the game primary wallet.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TransactionModel} and HTTP response
     */
    removeLootboxManagerLootboxWithHttpInfo(lootboxManagerId, lootboxManagerLootboxId, xAuthorization, xWalletDecryptKey) {
      let postBody = null;
      // verify the required parameter 'lootboxManagerId' is set
      if (lootboxManagerId === undefined || lootboxManagerId === null) {
        throw new Error("Missing the required parameter 'lootboxManagerId' when calling removeLootboxManagerLootbox");
      }
      // verify the required parameter 'lootboxManagerLootboxId' is set
      if (lootboxManagerLootboxId === undefined || lootboxManagerLootboxId === null) {
        throw new Error("Missing the required parameter 'lootboxManagerLootboxId' when calling removeLootboxManagerLootbox");
      }
      // verify the required parameter 'xAuthorization' is set
      if (xAuthorization === undefined || xAuthorization === null) {
        throw new Error("Missing the required parameter 'xAuthorization' when calling removeLootboxManagerLootbox");
      }
      // verify the required parameter 'xWalletDecryptKey' is set
      if (xWalletDecryptKey === undefined || xWalletDecryptKey === null) {
        throw new Error("Missing the required parameter 'xWalletDecryptKey' when calling removeLootboxManagerLootbox");
      }

      let pathParams = {
        'lootboxManagerId': lootboxManagerId,
        'lootboxManagerLootboxId': lootboxManagerLootboxId
      };
      let queryParams = {
      };
      let headerParams = {
        'X-Authorization': xAuthorization,
        'X-Wallet-Decrypt-Key': xWalletDecryptKey
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = TransactionModel;
      return this.apiClient.callApi(
        '/v1/lootboxManagers/{lootboxManagerId}/lootboxes/{lootboxManagerLootboxId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Remove lootbox manager lootbox
     * Removes the provided lootbox by lootboxId from the provided lootbox manager. Removed lootboxes can no longer be used.
     * @param {String} lootboxManagerId Any lootbox manager id within the MetaFab platform.
     * @param {String} lootboxManagerLootboxId Any lootbox manager lootbox id within the MetaFab platform.
     * @param {String} xAuthorization The `secretKey` of the authenticating game.
     * @param {String} xWalletDecryptKey The `walletDecryptKey` of the authenticating game. Required to decrypt and perform blockchain transactions with the game primary wallet.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TransactionModel}
     */
    removeLootboxManagerLootbox(lootboxManagerId, lootboxManagerLootboxId, xAuthorization, xWalletDecryptKey) {
      return this.removeLootboxManagerLootboxWithHttpInfo(lootboxManagerId, lootboxManagerLootboxId, xAuthorization, xWalletDecryptKey)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Set lootbox manager lootbox
     * Sets a new lootbox manager lootbox or updates an existing one for the provided id. Lootboxes allow item(s) to be burned to receive a random set of possible item(s) based on probability weight.  Lootboxes can require any number of unique types of items and quantities to open a created lootbox type within the system. A common pattern with lootboxes is to create a lootbox item type within an item collection, and require it as the input item type.
     * @param {String} lootboxManagerId Any lootbox manager id within the MetaFab platform.
     * @param {String} xAuthorization The `secretKey` of the authenticating game.
     * @param {String} xWalletDecryptKey The `walletDecryptKey` of the authenticating game. Required to decrypt and perform blockchain transactions with the game primary wallet.
     * @param {module:model/SetLootboxManagerLootboxRequest} setLootboxManagerLootboxRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TransactionModel} and HTTP response
     */
    setLootboxManagerLootboxWithHttpInfo(lootboxManagerId, xAuthorization, xWalletDecryptKey, setLootboxManagerLootboxRequest) {
      let postBody = setLootboxManagerLootboxRequest;
      // verify the required parameter 'lootboxManagerId' is set
      if (lootboxManagerId === undefined || lootboxManagerId === null) {
        throw new Error("Missing the required parameter 'lootboxManagerId' when calling setLootboxManagerLootbox");
      }
      // verify the required parameter 'xAuthorization' is set
      if (xAuthorization === undefined || xAuthorization === null) {
        throw new Error("Missing the required parameter 'xAuthorization' when calling setLootboxManagerLootbox");
      }
      // verify the required parameter 'xWalletDecryptKey' is set
      if (xWalletDecryptKey === undefined || xWalletDecryptKey === null) {
        throw new Error("Missing the required parameter 'xWalletDecryptKey' when calling setLootboxManagerLootbox");
      }
      // verify the required parameter 'setLootboxManagerLootboxRequest' is set
      if (setLootboxManagerLootboxRequest === undefined || setLootboxManagerLootboxRequest === null) {
        throw new Error("Missing the required parameter 'setLootboxManagerLootboxRequest' when calling setLootboxManagerLootbox");
      }

      let pathParams = {
        'lootboxManagerId': lootboxManagerId
      };
      let queryParams = {
      };
      let headerParams = {
        'X-Authorization': xAuthorization,
        'X-Wallet-Decrypt-Key': xWalletDecryptKey
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = TransactionModel;
      return this.apiClient.callApi(
        '/v1/lootboxManagers/{lootboxManagerId}/lootboxes', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Set lootbox manager lootbox
     * Sets a new lootbox manager lootbox or updates an existing one for the provided id. Lootboxes allow item(s) to be burned to receive a random set of possible item(s) based on probability weight.  Lootboxes can require any number of unique types of items and quantities to open a created lootbox type within the system. A common pattern with lootboxes is to create a lootbox item type within an item collection, and require it as the input item type.
     * @param {String} lootboxManagerId Any lootbox manager id within the MetaFab platform.
     * @param {String} xAuthorization The `secretKey` of the authenticating game.
     * @param {String} xWalletDecryptKey The `walletDecryptKey` of the authenticating game. Required to decrypt and perform blockchain transactions with the game primary wallet.
     * @param {module:model/SetLootboxManagerLootboxRequest} setLootboxManagerLootboxRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TransactionModel}
     */
    setLootboxManagerLootbox(lootboxManagerId, xAuthorization, xWalletDecryptKey, setLootboxManagerLootboxRequest) {
      return this.setLootboxManagerLootboxWithHttpInfo(lootboxManagerId, xAuthorization, xWalletDecryptKey, setLootboxManagerLootboxRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
