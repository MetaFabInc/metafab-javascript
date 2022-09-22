/**
 * MetaFab API
 *  Complete MetaFab API references and guides can be found at: https://trymetafab.com
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: metafabproject@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import GameModel from '../model/GameModel';
import V1GamesGameIdPatchRequest from '../model/V1GamesGameIdPatchRequest';
import V1GamesGet200Response from '../model/V1GamesGet200Response';
import V1GamesGetRequest from '../model/V1GamesGetRequest';

/**
* Games service.
* @module api/GamesApi
* @version 1.0.0
*/
export default class GamesApi {

    /**
    * Constructs a new GamesApi. 
    * @alias module:api/GamesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Update game
     * Update various fields specific to a game. Such as changing its password, resetting its published or secret key, or updating its RPCs.
     * @param {String} gameId Any game id within the MetaFab ecosystem.
     * @param {String} xAuthorization The `secretKey` of the authenticating game.
     * @param {module:model/V1GamesGameIdPatchRequest} v1GamesGameIdPatchRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GameModel} and HTTP response
     */
    v1GamesGameIdPatchWithHttpInfo(gameId, xAuthorization, v1GamesGameIdPatchRequest) {
      let postBody = v1GamesGameIdPatchRequest;
      // verify the required parameter 'gameId' is set
      if (gameId === undefined || gameId === null) {
        throw new Error("Missing the required parameter 'gameId' when calling v1GamesGameIdPatch");
      }
      // verify the required parameter 'xAuthorization' is set
      if (xAuthorization === undefined || xAuthorization === null) {
        throw new Error("Missing the required parameter 'xAuthorization' when calling v1GamesGameIdPatch");
      }
      // verify the required parameter 'v1GamesGameIdPatchRequest' is set
      if (v1GamesGameIdPatchRequest === undefined || v1GamesGameIdPatchRequest === null) {
        throw new Error("Missing the required parameter 'v1GamesGameIdPatchRequest' when calling v1GamesGameIdPatch");
      }

      let pathParams = {
        'gameId': gameId
      };
      let queryParams = {
      };
      let headerParams = {
        'X-Authorization': xAuthorization
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = GameModel;
      return this.apiClient.callApi(
        '/v1/games/{gameId}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update game
     * Update various fields specific to a game. Such as changing its password, resetting its published or secret key, or updating its RPCs.
     * @param {String} gameId Any game id within the MetaFab ecosystem.
     * @param {String} xAuthorization The `secretKey` of the authenticating game.
     * @param {module:model/V1GamesGameIdPatchRequest} v1GamesGameIdPatchRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GameModel}
     */
    v1GamesGameIdPatch(gameId, xAuthorization, v1GamesGameIdPatchRequest) {
      return this.v1GamesGameIdPatchWithHttpInfo(gameId, xAuthorization, v1GamesGameIdPatchRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Authenticate game
     * Returns an existing game object containing authorization keys and credentials when provided a valid email (in place of username) and password login using Basic Auth.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/V1GamesGet200Response} and HTTP response
     */
    v1GamesGetWithHttpInfo() {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = V1GamesGet200Response;
      return this.apiClient.callApi(
        '/v1/games', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Authenticate game
     * Returns an existing game object containing authorization keys and credentials when provided a valid email (in place of username) and password login using Basic Auth.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/V1GamesGet200Response}
     */
    v1GamesGet() {
      return this.v1GamesGetWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create game
     * Create a new game. A game is the root entity required for all API interactions. Contracts, currencies, items and more are deployed by games, player accounts are created and registered to games, etc.  To use any of MetaFab's services, you must first create a game through this endpoint.  **Game creation is limited during our closed beta. Please contact ArkDev#4501 on Discord to be a part of our beta.**
     * @param {module:model/V1GamesGetRequest} v1GamesGetRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/V1GamesGet200Response} and HTTP response
     */
    v1GamesPostWithHttpInfo(v1GamesGetRequest) {
      let postBody = v1GamesGetRequest;
      // verify the required parameter 'v1GamesGetRequest' is set
      if (v1GamesGetRequest === undefined || v1GamesGetRequest === null) {
        throw new Error("Missing the required parameter 'v1GamesGetRequest' when calling v1GamesPost");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = V1GamesGet200Response;
      return this.apiClient.callApi(
        '/v1/games', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create game
     * Create a new game. A game is the root entity required for all API interactions. Contracts, currencies, items and more are deployed by games, player accounts are created and registered to games, etc.  To use any of MetaFab's services, you must first create a game through this endpoint.  **Game creation is limited during our closed beta. Please contact ArkDev#4501 on Discord to be a part of our beta.**
     * @param {module:model/V1GamesGetRequest} v1GamesGetRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/V1GamesGet200Response}
     */
    v1GamesPost(v1GamesGetRequest) {
      return this.v1GamesPostWithHttpInfo(v1GamesGetRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
