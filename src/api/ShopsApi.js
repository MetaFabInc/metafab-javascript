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
import CreateShop200Response from '../model/CreateShop200Response';
import CreateShopRequest from '../model/CreateShopRequest';
import GetShops200ResponseInner from '../model/GetShops200ResponseInner';
import SetShopOfferRequest from '../model/SetShopOfferRequest';
import ShopOffer from '../model/ShopOffer';
import TransactionModel from '../model/TransactionModel';
import WithdrawFromShopRequest from '../model/WithdrawFromShopRequest';

/**
* Shops service.
* @module api/ShopsApi
* @version 1.5.1
*/
export default class ShopsApi {

    /**
    * Constructs a new ShopsApi. 
    * @alias module:api/ShopsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create shop
     * Creates a new game shop and deploys a shop contract on behalf of the authenticating game's primary wallet. The deployed shop contract allows you to create fixed price rates for players to buy specific items from any item collection or ERC1155 contract. Additionally, a shop allows you to create shop offers for some set of item(s) to another set of item(s) or any mix of currency. Shops completely support gasless player transactions.
     * @param {String} xAuthorization The `secretKey` of the authenticating game.
     * @param {String} xWalletDecryptKey The `walletDecryptKey` of the authenticating game. Required to decrypt and perform blockchain transactions with the game primary wallet.
     * @param {module:model/CreateShopRequest} createShopRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateShop200Response} and HTTP response
     */
    createShopWithHttpInfo(xAuthorization, xWalletDecryptKey, createShopRequest) {
      let postBody = createShopRequest;
      // verify the required parameter 'xAuthorization' is set
      if (xAuthorization === undefined || xAuthorization === null) {
        throw new Error("Missing the required parameter 'xAuthorization' when calling createShop");
      }
      // verify the required parameter 'xWalletDecryptKey' is set
      if (xWalletDecryptKey === undefined || xWalletDecryptKey === null) {
        throw new Error("Missing the required parameter 'xWalletDecryptKey' when calling createShop");
      }
      // verify the required parameter 'createShopRequest' is set
      if (createShopRequest === undefined || createShopRequest === null) {
        throw new Error("Missing the required parameter 'createShopRequest' when calling createShop");
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
      let returnType = CreateShop200Response;
      return this.apiClient.callApi(
        '/v1/shops', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create shop
     * Creates a new game shop and deploys a shop contract on behalf of the authenticating game's primary wallet. The deployed shop contract allows you to create fixed price rates for players to buy specific items from any item collection or ERC1155 contract. Additionally, a shop allows you to create shop offers for some set of item(s) to another set of item(s) or any mix of currency. Shops completely support gasless player transactions.
     * @param {String} xAuthorization The `secretKey` of the authenticating game.
     * @param {String} xWalletDecryptKey The `walletDecryptKey` of the authenticating game. Required to decrypt and perform blockchain transactions with the game primary wallet.
     * @param {module:model/CreateShopRequest} createShopRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateShop200Response}
     */
    createShop(xAuthorization, xWalletDecryptKey, createShopRequest) {
      return this.createShopWithHttpInfo(xAuthorization, xWalletDecryptKey, createShopRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get shop offer
     * Returns a shop offer object for the provided shopOfferId.
     * @param {String} shopId Any shop id within the MetaFab platform.
     * @param {String} shopOfferId Any offer id for the shop. Zero, or a positive integer.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ShopOffer} and HTTP response
     */
    getShopOfferWithHttpInfo(shopId, shopOfferId) {
      let postBody = null;
      // verify the required parameter 'shopId' is set
      if (shopId === undefined || shopId === null) {
        throw new Error("Missing the required parameter 'shopId' when calling getShopOffer");
      }
      // verify the required parameter 'shopOfferId' is set
      if (shopOfferId === undefined || shopOfferId === null) {
        throw new Error("Missing the required parameter 'shopOfferId' when calling getShopOffer");
      }

      let pathParams = {
        'shopId': shopId,
        'shopOfferId': shopOfferId
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
      let returnType = ShopOffer;
      return this.apiClient.callApi(
        '/v1/shops/{shopId}/offers/{shopOfferId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get shop offer
     * Returns a shop offer object for the provided shopOfferId.
     * @param {String} shopId Any shop id within the MetaFab platform.
     * @param {String} shopOfferId Any offer id for the shop. Zero, or a positive integer.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ShopOffer}
     */
    getShopOffer(shopId, shopOfferId) {
      return this.getShopOfferWithHttpInfo(shopId, shopOfferId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get shop offers
     * Returns all shop offers as an array of shop offer objects.
     * @param {String} shopId Any shop id within the MetaFab platform.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/ShopOffer>} and HTTP response
     */
    getShopOffersWithHttpInfo(shopId) {
      let postBody = null;
      // verify the required parameter 'shopId' is set
      if (shopId === undefined || shopId === null) {
        throw new Error("Missing the required parameter 'shopId' when calling getShopOffers");
      }

      let pathParams = {
        'shopId': shopId
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
      let returnType = [ShopOffer];
      return this.apiClient.callApi(
        '/v1/shops/{shopId}/offers', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get shop offers
     * Returns all shop offers as an array of shop offer objects.
     * @param {String} shopId Any shop id within the MetaFab platform.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/ShopOffer>}
     */
    getShopOffers(shopId) {
      return this.getShopOffersWithHttpInfo(shopId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get shops
     * Returns an array of active shops for the game associated with the provided `X-Game-Key`.
     * @param {String} xGameKey The `publishedKey` of a specific game. This can be shared or included in game clients, websites, etc.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/GetShops200ResponseInner>} and HTTP response
     */
    getShopsWithHttpInfo(xGameKey) {
      let postBody = null;
      // verify the required parameter 'xGameKey' is set
      if (xGameKey === undefined || xGameKey === null) {
        throw new Error("Missing the required parameter 'xGameKey' when calling getShops");
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
      let returnType = [GetShops200ResponseInner];
      return this.apiClient.callApi(
        '/v1/shops', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get shops
     * Returns an array of active shops for the game associated with the provided `X-Game-Key`.
     * @param {String} xGameKey The `publishedKey` of a specific game. This can be shared or included in game clients, websites, etc.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/GetShops200ResponseInner>}
     */
    getShops(xGameKey) {
      return this.getShopsWithHttpInfo(xGameKey)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Remove shop offer
     * Removes the provided offer by offerId from the provided shop. Removed offers can no longer be used.
     * @param {String} shopId Any shop id within the MetaFab platform.
     * @param {String} shopOfferId Any offer id for the shop. Zero, or a positive integer.
     * @param {String} xAuthorization The `secretKey` of the authenticating game.
     * @param {String} xWalletDecryptKey The `walletDecryptKey` of the authenticating game. Required to decrypt and perform blockchain transactions with the game primary wallet.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TransactionModel} and HTTP response
     */
    removeShopOfferWithHttpInfo(shopId, shopOfferId, xAuthorization, xWalletDecryptKey) {
      let postBody = null;
      // verify the required parameter 'shopId' is set
      if (shopId === undefined || shopId === null) {
        throw new Error("Missing the required parameter 'shopId' when calling removeShopOffer");
      }
      // verify the required parameter 'shopOfferId' is set
      if (shopOfferId === undefined || shopOfferId === null) {
        throw new Error("Missing the required parameter 'shopOfferId' when calling removeShopOffer");
      }
      // verify the required parameter 'xAuthorization' is set
      if (xAuthorization === undefined || xAuthorization === null) {
        throw new Error("Missing the required parameter 'xAuthorization' when calling removeShopOffer");
      }
      // verify the required parameter 'xWalletDecryptKey' is set
      if (xWalletDecryptKey === undefined || xWalletDecryptKey === null) {
        throw new Error("Missing the required parameter 'xWalletDecryptKey' when calling removeShopOffer");
      }

      let pathParams = {
        'shopId': shopId,
        'shopOfferId': shopOfferId
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
        '/v1/shops/{shopId}/offers/{shopOfferId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Remove shop offer
     * Removes the provided offer by offerId from the provided shop. Removed offers can no longer be used.
     * @param {String} shopId Any shop id within the MetaFab platform.
     * @param {String} shopOfferId Any offer id for the shop. Zero, or a positive integer.
     * @param {String} xAuthorization The `secretKey` of the authenticating game.
     * @param {String} xWalletDecryptKey The `walletDecryptKey` of the authenticating game. Required to decrypt and perform blockchain transactions with the game primary wallet.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TransactionModel}
     */
    removeShopOffer(shopId, shopOfferId, xAuthorization, xWalletDecryptKey) {
      return this.removeShopOfferWithHttpInfo(shopId, shopOfferId, xAuthorization, xWalletDecryptKey)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Set shop offer
     * Sets a new shop offer or updates an existing one for the provided id. Shop offers allow currency to item, item to currency or item to item exchanges.  All request fields besides `id` are optional. Any optional fields omitted will not be used for the offer. This allows you to create many different combinations of offers. For example, you can create an offer that may require 3 unique item ids of specified quantities from a given item collection and gives the user 1 new unique item id in exchange.  Another example, you may want to make a shop offer from one ERC20 token to another. This is also possible - simple set the input and output currency fields and leave the others blank.
     * @param {String} shopId Any shop id within the MetaFab platform.
     * @param {String} xAuthorization The `secretKey` of the authenticating game.
     * @param {String} xWalletDecryptKey The `walletDecryptKey` of the authenticating game. Required to decrypt and perform blockchain transactions with the game primary wallet.
     * @param {module:model/SetShopOfferRequest} setShopOfferRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TransactionModel} and HTTP response
     */
    setShopOfferWithHttpInfo(shopId, xAuthorization, xWalletDecryptKey, setShopOfferRequest) {
      let postBody = setShopOfferRequest;
      // verify the required parameter 'shopId' is set
      if (shopId === undefined || shopId === null) {
        throw new Error("Missing the required parameter 'shopId' when calling setShopOffer");
      }
      // verify the required parameter 'xAuthorization' is set
      if (xAuthorization === undefined || xAuthorization === null) {
        throw new Error("Missing the required parameter 'xAuthorization' when calling setShopOffer");
      }
      // verify the required parameter 'xWalletDecryptKey' is set
      if (xWalletDecryptKey === undefined || xWalletDecryptKey === null) {
        throw new Error("Missing the required parameter 'xWalletDecryptKey' when calling setShopOffer");
      }
      // verify the required parameter 'setShopOfferRequest' is set
      if (setShopOfferRequest === undefined || setShopOfferRequest === null) {
        throw new Error("Missing the required parameter 'setShopOfferRequest' when calling setShopOffer");
      }

      let pathParams = {
        'shopId': shopId
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
        '/v1/shops/{shopId}/offers', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Set shop offer
     * Sets a new shop offer or updates an existing one for the provided id. Shop offers allow currency to item, item to currency or item to item exchanges.  All request fields besides `id` are optional. Any optional fields omitted will not be used for the offer. This allows you to create many different combinations of offers. For example, you can create an offer that may require 3 unique item ids of specified quantities from a given item collection and gives the user 1 new unique item id in exchange.  Another example, you may want to make a shop offer from one ERC20 token to another. This is also possible - simple set the input and output currency fields and leave the others blank.
     * @param {String} shopId Any shop id within the MetaFab platform.
     * @param {String} xAuthorization The `secretKey` of the authenticating game.
     * @param {String} xWalletDecryptKey The `walletDecryptKey` of the authenticating game. Required to decrypt and perform blockchain transactions with the game primary wallet.
     * @param {module:model/SetShopOfferRequest} setShopOfferRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TransactionModel}
     */
    setShopOffer(shopId, xAuthorization, xWalletDecryptKey, setShopOfferRequest) {
      return this.setShopOfferWithHttpInfo(shopId, xAuthorization, xWalletDecryptKey, setShopOfferRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Use shop offer
     * Uses a shop offer. The required (input) item(s) and/or currency are removed from the wallet or player wallet using the offer. The given (output) item(s) and/or currency are given to the wallet or player wallet using the offer.
     * @param {String} shopId Any shop id within the MetaFab platform.
     * @param {String} shopOfferId Any offer id for the shop. Zero, or a positive integer.
     * @param {String} xAuthorization The `secretKey` of a specific game or the `accessToken` of a specific player.
     * @param {String} xWalletDecryptKey The `walletDecryptKey` of the authenticating game or player. Required to decrypt and perform blockchain transactions with the game or player primary wallet.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TransactionModel} and HTTP response
     */
    useShopOfferWithHttpInfo(shopId, shopOfferId, xAuthorization, xWalletDecryptKey) {
      let postBody = null;
      // verify the required parameter 'shopId' is set
      if (shopId === undefined || shopId === null) {
        throw new Error("Missing the required parameter 'shopId' when calling useShopOffer");
      }
      // verify the required parameter 'shopOfferId' is set
      if (shopOfferId === undefined || shopOfferId === null) {
        throw new Error("Missing the required parameter 'shopOfferId' when calling useShopOffer");
      }
      // verify the required parameter 'xAuthorization' is set
      if (xAuthorization === undefined || xAuthorization === null) {
        throw new Error("Missing the required parameter 'xAuthorization' when calling useShopOffer");
      }
      // verify the required parameter 'xWalletDecryptKey' is set
      if (xWalletDecryptKey === undefined || xWalletDecryptKey === null) {
        throw new Error("Missing the required parameter 'xWalletDecryptKey' when calling useShopOffer");
      }

      let pathParams = {
        'shopId': shopId,
        'shopOfferId': shopOfferId
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
        '/v1/shops/{shopId}/offers/{shopOfferId}/uses', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Use shop offer
     * Uses a shop offer. The required (input) item(s) and/or currency are removed from the wallet or player wallet using the offer. The given (output) item(s) and/or currency are given to the wallet or player wallet using the offer.
     * @param {String} shopId Any shop id within the MetaFab platform.
     * @param {String} shopOfferId Any offer id for the shop. Zero, or a positive integer.
     * @param {String} xAuthorization The `secretKey` of a specific game or the `accessToken` of a specific player.
     * @param {String} xWalletDecryptKey The `walletDecryptKey` of the authenticating game or player. Required to decrypt and perform blockchain transactions with the game or player primary wallet.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TransactionModel}
     */
    useShopOffer(shopId, shopOfferId, xAuthorization, xWalletDecryptKey) {
      return this.useShopOfferWithHttpInfo(shopId, shopOfferId, xAuthorization, xWalletDecryptKey)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Withdraw from shop
     * Withdraws native token, currency or items from a shop. Whenever a shop offer has input requirements, the native tokens, currencies or items for the requirements of that offer are deposited into the shop contract when the offer is used. These can be withdrawn to any other address.
     * @param {String} shopId Any shop id within the MetaFab platform.
     * @param {String} xAuthorization The `secretKey` of the authenticating game.
     * @param {String} xWalletDecryptKey The `walletDecryptKey` of the authenticating game. Required to decrypt and perform blockchain transactions with the game primary wallet.
     * @param {module:model/WithdrawFromShopRequest} withdrawFromShopRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TransactionModel} and HTTP response
     */
    withdrawFromShopWithHttpInfo(shopId, xAuthorization, xWalletDecryptKey, withdrawFromShopRequest) {
      let postBody = withdrawFromShopRequest;
      // verify the required parameter 'shopId' is set
      if (shopId === undefined || shopId === null) {
        throw new Error("Missing the required parameter 'shopId' when calling withdrawFromShop");
      }
      // verify the required parameter 'xAuthorization' is set
      if (xAuthorization === undefined || xAuthorization === null) {
        throw new Error("Missing the required parameter 'xAuthorization' when calling withdrawFromShop");
      }
      // verify the required parameter 'xWalletDecryptKey' is set
      if (xWalletDecryptKey === undefined || xWalletDecryptKey === null) {
        throw new Error("Missing the required parameter 'xWalletDecryptKey' when calling withdrawFromShop");
      }
      // verify the required parameter 'withdrawFromShopRequest' is set
      if (withdrawFromShopRequest === undefined || withdrawFromShopRequest === null) {
        throw new Error("Missing the required parameter 'withdrawFromShopRequest' when calling withdrawFromShop");
      }

      let pathParams = {
        'shopId': shopId
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
        '/v1/shops/{shopId}/withdrawals', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Withdraw from shop
     * Withdraws native token, currency or items from a shop. Whenever a shop offer has input requirements, the native tokens, currencies or items for the requirements of that offer are deposited into the shop contract when the offer is used. These can be withdrawn to any other address.
     * @param {String} shopId Any shop id within the MetaFab platform.
     * @param {String} xAuthorization The `secretKey` of the authenticating game.
     * @param {String} xWalletDecryptKey The `walletDecryptKey` of the authenticating game. Required to decrypt and perform blockchain transactions with the game primary wallet.
     * @param {module:model/WithdrawFromShopRequest} withdrawFromShopRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TransactionModel}
     */
    withdrawFromShop(shopId, xAuthorization, xWalletDecryptKey, withdrawFromShopRequest) {
      return this.withdrawFromShopWithHttpInfo(shopId, xAuthorization, xWalletDecryptKey, withdrawFromShopRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
