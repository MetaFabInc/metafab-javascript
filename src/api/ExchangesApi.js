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


import ApiClient from "../ApiClient";
import CreateExchange200Response from '../model/CreateExchange200Response';
import CreateExchangeRequest from '../model/CreateExchangeRequest';
import ExchangeOffer from '../model/ExchangeOffer';
import GetExchanges200ResponseInner from '../model/GetExchanges200ResponseInner';
import SetExchangeOfferRequest from '../model/SetExchangeOfferRequest';
import TransactionModel from '../model/TransactionModel';
import WithdrawFromExchangeRequest from '../model/WithdrawFromExchangeRequest';

/**
* Exchanges service.
* @module api/ExchangesApi
* @version 1.2.0
*/
export default class ExchangesApi {

    /**
    * Constructs a new ExchangesApi. 
    * @alias module:api/ExchangesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create exchange
     * Creates a new game exchange and deploys a exchange contract on behalf of the authenticating game's primary wallet. The deployed exchange contract allows you to create fixed price rates for players to buy specific items from any item collection or ERC1155 contract. Additionally, an exchange allows you to create exchange offers for some set of item(s) to another set of item(s) or any mix of currency. Exchanges completely supports gasless player transactions.
     * @param {String} xAuthorization The `secretKey` of the authenticating game.
     * @param {String} xPassword The password of the authenticating game. Required to decrypt and perform blockchain transactions with the game primary wallet.
     * @param {module:model/CreateExchangeRequest} createExchangeRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/CreateExchange200Response} and HTTP response
     */
    createExchangeWithHttpInfo(xAuthorization, xPassword, createExchangeRequest) {
      let postBody = createExchangeRequest;
      // verify the required parameter 'xAuthorization' is set
      if (xAuthorization === undefined || xAuthorization === null) {
        throw new Error("Missing the required parameter 'xAuthorization' when calling createExchange");
      }
      // verify the required parameter 'xPassword' is set
      if (xPassword === undefined || xPassword === null) {
        throw new Error("Missing the required parameter 'xPassword' when calling createExchange");
      }
      // verify the required parameter 'createExchangeRequest' is set
      if (createExchangeRequest === undefined || createExchangeRequest === null) {
        throw new Error("Missing the required parameter 'createExchangeRequest' when calling createExchange");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'X-Authorization': xAuthorization,
        'X-Password': xPassword
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = CreateExchange200Response;
      return this.apiClient.callApi(
        '/v1/exchanges', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create exchange
     * Creates a new game exchange and deploys a exchange contract on behalf of the authenticating game's primary wallet. The deployed exchange contract allows you to create fixed price rates for players to buy specific items from any item collection or ERC1155 contract. Additionally, an exchange allows you to create exchange offers for some set of item(s) to another set of item(s) or any mix of currency. Exchanges completely supports gasless player transactions.
     * @param {String} xAuthorization The `secretKey` of the authenticating game.
     * @param {String} xPassword The password of the authenticating game. Required to decrypt and perform blockchain transactions with the game primary wallet.
     * @param {module:model/CreateExchangeRequest} createExchangeRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CreateExchange200Response}
     */
    createExchange(xAuthorization, xPassword, createExchangeRequest) {
      return this.createExchangeWithHttpInfo(xAuthorization, xPassword, createExchangeRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get exchange offer
     * Returns a exchange offer object for the provided exchangeOfferId.
     * @param {String} exchangeId Any exchange id within the MetaFab ecosystem.
     * @param {String} exchangeOfferId Any offer id for the exchange. Zero, or a positive integer.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ExchangeOffer} and HTTP response
     */
    getExchangeOfferWithHttpInfo(exchangeId, exchangeOfferId) {
      let postBody = null;
      // verify the required parameter 'exchangeId' is set
      if (exchangeId === undefined || exchangeId === null) {
        throw new Error("Missing the required parameter 'exchangeId' when calling getExchangeOffer");
      }
      // verify the required parameter 'exchangeOfferId' is set
      if (exchangeOfferId === undefined || exchangeOfferId === null) {
        throw new Error("Missing the required parameter 'exchangeOfferId' when calling getExchangeOffer");
      }

      let pathParams = {
        'exchangeId': exchangeId,
        'exchangeOfferId': exchangeOfferId
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
      let returnType = ExchangeOffer;
      return this.apiClient.callApi(
        '/v1/exchanges/{exchangeId}/items/{exchangeOfferId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get exchange offer
     * Returns a exchange offer object for the provided exchangeOfferId.
     * @param {String} exchangeId Any exchange id within the MetaFab ecosystem.
     * @param {String} exchangeOfferId Any offer id for the exchange. Zero, or a positive integer.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ExchangeOffer}
     */
    getExchangeOffer(exchangeId, exchangeOfferId) {
      return this.getExchangeOfferWithHttpInfo(exchangeId, exchangeOfferId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get exchange offers
     * Returns all exchange offers as an array of exchange offer objects.
     * @param {String} exchangeId Any exchange id within the MetaFab ecosystem.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/ExchangeOffer>} and HTTP response
     */
    getExchangeOffersWithHttpInfo(exchangeId) {
      let postBody = null;
      // verify the required parameter 'exchangeId' is set
      if (exchangeId === undefined || exchangeId === null) {
        throw new Error("Missing the required parameter 'exchangeId' when calling getExchangeOffers");
      }

      let pathParams = {
        'exchangeId': exchangeId
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
      let returnType = [ExchangeOffer];
      return this.apiClient.callApi(
        '/v1/exchanges/{exchangeId}/offers', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get exchange offers
     * Returns all exchange offers as an array of exchange offer objects.
     * @param {String} exchangeId Any exchange id within the MetaFab ecosystem.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/ExchangeOffer>}
     */
    getExchangeOffers(exchangeId) {
      return this.getExchangeOffersWithHttpInfo(exchangeId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get exchanges
     * Returns an array of active exchanges for the game associated with the provided `X-Game-Key`.
     * @param {String} xGameKey The `publishedKey` of a specific game. This can be shared or included in game clients, websites, etc.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/GetExchanges200ResponseInner>} and HTTP response
     */
    getExchangesWithHttpInfo(xGameKey) {
      let postBody = null;
      // verify the required parameter 'xGameKey' is set
      if (xGameKey === undefined || xGameKey === null) {
        throw new Error("Missing the required parameter 'xGameKey' when calling getExchanges");
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
      let returnType = [GetExchanges200ResponseInner];
      return this.apiClient.callApi(
        '/v1/exchanges', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get exchanges
     * Returns an array of active exchanges for the game associated with the provided `X-Game-Key`.
     * @param {String} xGameKey The `publishedKey` of a specific game. This can be shared or included in game clients, websites, etc.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/GetExchanges200ResponseInner>}
     */
    getExchanges(xGameKey) {
      return this.getExchangesWithHttpInfo(xGameKey)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Remove exchange offer
     * Removes the provided offerId from the provided exchange. Removed offers can no longer be used.
     * @param {String} exchangeId Any exchange id within the MetaFab ecosystem.
     * @param {String} exchangeOfferId Any offer id for the exchange. Zero, or a positive integer.
     * @param {String} xAuthorization The `secretKey` of the authenticating game.
     * @param {String} xPassword The password of the authenticating game. Required to decrypt and perform blockchain transactions with the game primary wallet.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TransactionModel} and HTTP response
     */
    removeExchangeOfferWithHttpInfo(exchangeId, exchangeOfferId, xAuthorization, xPassword) {
      let postBody = null;
      // verify the required parameter 'exchangeId' is set
      if (exchangeId === undefined || exchangeId === null) {
        throw new Error("Missing the required parameter 'exchangeId' when calling removeExchangeOffer");
      }
      // verify the required parameter 'exchangeOfferId' is set
      if (exchangeOfferId === undefined || exchangeOfferId === null) {
        throw new Error("Missing the required parameter 'exchangeOfferId' when calling removeExchangeOffer");
      }
      // verify the required parameter 'xAuthorization' is set
      if (xAuthorization === undefined || xAuthorization === null) {
        throw new Error("Missing the required parameter 'xAuthorization' when calling removeExchangeOffer");
      }
      // verify the required parameter 'xPassword' is set
      if (xPassword === undefined || xPassword === null) {
        throw new Error("Missing the required parameter 'xPassword' when calling removeExchangeOffer");
      }

      let pathParams = {
        'exchangeId': exchangeId,
        'exchangeOfferId': exchangeOfferId
      };
      let queryParams = {
      };
      let headerParams = {
        'X-Authorization': xAuthorization,
        'X-Password': xPassword
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = TransactionModel;
      return this.apiClient.callApi(
        '/v1/exchanges/{exchangeId}/offers/{exchangeOfferId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Remove exchange offer
     * Removes the provided offerId from the provided exchange. Removed offers can no longer be used.
     * @param {String} exchangeId Any exchange id within the MetaFab ecosystem.
     * @param {String} exchangeOfferId Any offer id for the exchange. Zero, or a positive integer.
     * @param {String} xAuthorization The `secretKey` of the authenticating game.
     * @param {String} xPassword The password of the authenticating game. Required to decrypt and perform blockchain transactions with the game primary wallet.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TransactionModel}
     */
    removeExchangeOffer(exchangeId, exchangeOfferId, xAuthorization, xPassword) {
      return this.removeExchangeOfferWithHttpInfo(exchangeId, exchangeOfferId, xAuthorization, xPassword)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Set exchange offer
     * Sets a new exchange offer or updates an existing one for the provided id. Exchange offers allow currency to item, item to currency or item to item exchanges.  All request fields besides `id` are optional. Any optional fields omitted will not be used for the offer. This allows you to create many different combinations of offers. For example, you can create an offer that may require 3 unique item ids of specified quantities from a given item collection and gives the user 1 new unique item id in exchange.  Another example, you may want to make an exchange offer from one ERC20 token to another. This is also possible - simple set the input and output currency fields and leave the others blank.
     * @param {String} exchangeId Any exchange id within the MetaFab ecosystem.
     * @param {String} xAuthorization The `secretKey` of the authenticating game.
     * @param {String} xPassword The password of the authenticating game. Required to decrypt and perform blockchain transactions with the game primary wallet.
     * @param {module:model/SetExchangeOfferRequest} setExchangeOfferRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TransactionModel} and HTTP response
     */
    setExchangeOfferWithHttpInfo(exchangeId, xAuthorization, xPassword, setExchangeOfferRequest) {
      let postBody = setExchangeOfferRequest;
      // verify the required parameter 'exchangeId' is set
      if (exchangeId === undefined || exchangeId === null) {
        throw new Error("Missing the required parameter 'exchangeId' when calling setExchangeOffer");
      }
      // verify the required parameter 'xAuthorization' is set
      if (xAuthorization === undefined || xAuthorization === null) {
        throw new Error("Missing the required parameter 'xAuthorization' when calling setExchangeOffer");
      }
      // verify the required parameter 'xPassword' is set
      if (xPassword === undefined || xPassword === null) {
        throw new Error("Missing the required parameter 'xPassword' when calling setExchangeOffer");
      }
      // verify the required parameter 'setExchangeOfferRequest' is set
      if (setExchangeOfferRequest === undefined || setExchangeOfferRequest === null) {
        throw new Error("Missing the required parameter 'setExchangeOfferRequest' when calling setExchangeOffer");
      }

      let pathParams = {
        'exchangeId': exchangeId
      };
      let queryParams = {
      };
      let headerParams = {
        'X-Authorization': xAuthorization,
        'X-Password': xPassword
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = TransactionModel;
      return this.apiClient.callApi(
        '/v1/exchanges/{exchangeId}/offers', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Set exchange offer
     * Sets a new exchange offer or updates an existing one for the provided id. Exchange offers allow currency to item, item to currency or item to item exchanges.  All request fields besides `id` are optional. Any optional fields omitted will not be used for the offer. This allows you to create many different combinations of offers. For example, you can create an offer that may require 3 unique item ids of specified quantities from a given item collection and gives the user 1 new unique item id in exchange.  Another example, you may want to make an exchange offer from one ERC20 token to another. This is also possible - simple set the input and output currency fields and leave the others blank.
     * @param {String} exchangeId Any exchange id within the MetaFab ecosystem.
     * @param {String} xAuthorization The `secretKey` of the authenticating game.
     * @param {String} xPassword The password of the authenticating game. Required to decrypt and perform blockchain transactions with the game primary wallet.
     * @param {module:model/SetExchangeOfferRequest} setExchangeOfferRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TransactionModel}
     */
    setExchangeOffer(exchangeId, xAuthorization, xPassword, setExchangeOfferRequest) {
      return this.setExchangeOfferWithHttpInfo(exchangeId, xAuthorization, xPassword, setExchangeOfferRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Use exchange offer
     * Uses an exchange offer. The required (input) item(s) and/or currency are removed from the wallet or player wallet using the offer. The given (output) item(s) and/or currency are given to the wallet or player wallet using the offer.
     * @param {String} exchangeId Any exchange id within the MetaFab ecosystem.
     * @param {String} exchangeOfferId Any offer id for the exchange. Zero, or a positive integer.
     * @param {String} xAuthorization The `secretKey` of a specific game or the `accessToken` of a specific player.
     * @param {String} xPassword The password of the authenticating game or player. Required to decrypt and perform blockchain transactions with the game or player primary wallet.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TransactionModel} and HTTP response
     */
    useExchangeOfferWithHttpInfo(exchangeId, exchangeOfferId, xAuthorization, xPassword) {
      let postBody = null;
      // verify the required parameter 'exchangeId' is set
      if (exchangeId === undefined || exchangeId === null) {
        throw new Error("Missing the required parameter 'exchangeId' when calling useExchangeOffer");
      }
      // verify the required parameter 'exchangeOfferId' is set
      if (exchangeOfferId === undefined || exchangeOfferId === null) {
        throw new Error("Missing the required parameter 'exchangeOfferId' when calling useExchangeOffer");
      }
      // verify the required parameter 'xAuthorization' is set
      if (xAuthorization === undefined || xAuthorization === null) {
        throw new Error("Missing the required parameter 'xAuthorization' when calling useExchangeOffer");
      }
      // verify the required parameter 'xPassword' is set
      if (xPassword === undefined || xPassword === null) {
        throw new Error("Missing the required parameter 'xPassword' when calling useExchangeOffer");
      }

      let pathParams = {
        'exchangeId': exchangeId,
        'exchangeOfferId': exchangeOfferId
      };
      let queryParams = {
      };
      let headerParams = {
        'X-Authorization': xAuthorization,
        'X-Password': xPassword
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = TransactionModel;
      return this.apiClient.callApi(
        '/v1/exchanges/{exchangeId}/offers/{exchangeOfferId}/uses', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Use exchange offer
     * Uses an exchange offer. The required (input) item(s) and/or currency are removed from the wallet or player wallet using the offer. The given (output) item(s) and/or currency are given to the wallet or player wallet using the offer.
     * @param {String} exchangeId Any exchange id within the MetaFab ecosystem.
     * @param {String} exchangeOfferId Any offer id for the exchange. Zero, or a positive integer.
     * @param {String} xAuthorization The `secretKey` of a specific game or the `accessToken` of a specific player.
     * @param {String} xPassword The password of the authenticating game or player. Required to decrypt and perform blockchain transactions with the game or player primary wallet.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TransactionModel}
     */
    useExchangeOffer(exchangeId, exchangeOfferId, xAuthorization, xPassword) {
      return this.useExchangeOfferWithHttpInfo(exchangeId, exchangeOfferId, xAuthorization, xPassword)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Withdraw from exchange
     * Withdraws native token, currency or items from a exchange. Whenever an exchange offer has input requirements, the native tokens, currencies or items for the requirements of that offer are deposited into the exchange contract when the offer is used. These can be withdrawn to any other address.
     * @param {String} exchangeId Any exchange id within the MetaFab ecosystem.
     * @param {String} xAuthorization The `secretKey` of the authenticating game.
     * @param {String} xPassword The password of the authenticating game. Required to decrypt and perform blockchain transactions with the game primary wallet.
     * @param {module:model/WithdrawFromExchangeRequest} withdrawFromExchangeRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TransactionModel} and HTTP response
     */
    withdrawFromExchangeWithHttpInfo(exchangeId, xAuthorization, xPassword, withdrawFromExchangeRequest) {
      let postBody = withdrawFromExchangeRequest;
      // verify the required parameter 'exchangeId' is set
      if (exchangeId === undefined || exchangeId === null) {
        throw new Error("Missing the required parameter 'exchangeId' when calling withdrawFromExchange");
      }
      // verify the required parameter 'xAuthorization' is set
      if (xAuthorization === undefined || xAuthorization === null) {
        throw new Error("Missing the required parameter 'xAuthorization' when calling withdrawFromExchange");
      }
      // verify the required parameter 'xPassword' is set
      if (xPassword === undefined || xPassword === null) {
        throw new Error("Missing the required parameter 'xPassword' when calling withdrawFromExchange");
      }
      // verify the required parameter 'withdrawFromExchangeRequest' is set
      if (withdrawFromExchangeRequest === undefined || withdrawFromExchangeRequest === null) {
        throw new Error("Missing the required parameter 'withdrawFromExchangeRequest' when calling withdrawFromExchange");
      }

      let pathParams = {
        'exchangeId': exchangeId
      };
      let queryParams = {
      };
      let headerParams = {
        'X-Authorization': xAuthorization,
        'X-Password': xPassword
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = TransactionModel;
      return this.apiClient.callApi(
        '/v1/exchanges/{exchangeId}/withdrawals', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Withdraw from exchange
     * Withdraws native token, currency or items from a exchange. Whenever an exchange offer has input requirements, the native tokens, currencies or items for the requirements of that offer are deposited into the exchange contract when the offer is used. These can be withdrawn to any other address.
     * @param {String} exchangeId Any exchange id within the MetaFab ecosystem.
     * @param {String} xAuthorization The `secretKey` of the authenticating game.
     * @param {String} xPassword The password of the authenticating game. Required to decrypt and perform blockchain transactions with the game primary wallet.
     * @param {module:model/WithdrawFromExchangeRequest} withdrawFromExchangeRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TransactionModel}
     */
    withdrawFromExchange(exchangeId, xAuthorization, xPassword, withdrawFromExchangeRequest) {
      return this.withdrawFromExchangeWithHttpInfo(exchangeId, xAuthorization, xPassword, withdrawFromExchangeRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
