/**
 * MetaFab API
 *  Complete MetaFab API references and guides can be found at: https://trymetafab.com
 *
 * The version of the OpenAPI document: 1.1.43
 * Contact: metafabproject@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import AuthGame200Response from '../model/AuthGame200Response';
import CreateGameRequest from '../model/CreateGameRequest';
import GameModel from '../model/GameModel';
import UpdateGameRequest from '../model/UpdateGameRequest';

/**
* Games service.
* @module api/GamesApi
* @version 1.1.43
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
     * Authenticate game
     * Returns an existing game object containing authorization keys and credentials when provided a valid email (in place of username) and password login using Basic Auth.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AuthGame200Response} and HTTP response
     */
    authGameWithHttpInfo() {
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
      let returnType = AuthGame200Response;
      return this.apiClient.callApi(
        '/v1/games', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Authenticate game
     * Returns an existing game object containing authorization keys and credentials when provided a valid email (in place of username) and password login using Basic Auth.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AuthGame200Response}
     */
    authGame() {
      return this.authGameWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create game
     * Create a new game. A game is the root entity required for all API interactions. Contracts, currencies, items and more are deployed by games, player accounts are created and registered to games, etc.  To use any of MetaFab's services, you must first create a game through this endpoint.  **Game creation is limited during our closed beta. Please contact ArkDev#4501 on Discord to be a part of our beta.**
     * @param {module:model/CreateGameRequest} createGameRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AuthGame200Response} and HTTP response
     */
    createGameWithHttpInfo(createGameRequest) {
      let postBody = createGameRequest;
      // verify the required parameter 'createGameRequest' is set
      if (createGameRequest === undefined || createGameRequest === null) {
        throw new Error("Missing the required parameter 'createGameRequest' when calling createGame");
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
      let returnType = AuthGame200Response;
      return this.apiClient.callApi(
        '/v1/games', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create game
     * Create a new game. A game is the root entity required for all API interactions. Contracts, currencies, items and more are deployed by games, player accounts are created and registered to games, etc.  To use any of MetaFab's services, you must first create a game through this endpoint.  **Game creation is limited during our closed beta. Please contact ArkDev#4501 on Discord to be a part of our beta.**
     * @param {module:model/CreateGameRequest} createGameRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AuthGame200Response}
     */
    createGame(createGameRequest) {
      return this.createGameWithHttpInfo(createGameRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update game
     * Update various fields specific to a game. Such as changing its password, resetting its published or secret key, or updating its RPCs.
     * @param {String} gameId Any game id within the MetaFab ecosystem.
     * @param {String} xAuthorization The `secretKey` of the authenticating game.
     * @param {module:model/UpdateGameRequest} updateGameRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GameModel} and HTTP response
     */
    updateGameWithHttpInfo(gameId, xAuthorization, updateGameRequest) {
      let postBody = updateGameRequest;
      // verify the required parameter 'gameId' is set
      if (gameId === undefined || gameId === null) {
        throw new Error("Missing the required parameter 'gameId' when calling updateGame");
      }
      // verify the required parameter 'xAuthorization' is set
      if (xAuthorization === undefined || xAuthorization === null) {
        throw new Error("Missing the required parameter 'xAuthorization' when calling updateGame");
      }
      // verify the required parameter 'updateGameRequest' is set
      if (updateGameRequest === undefined || updateGameRequest === null) {
        throw new Error("Missing the required parameter 'updateGameRequest' when calling updateGame");
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
     * @param {module:model/UpdateGameRequest} updateGameRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GameModel}
     */
    updateGame(gameId, xAuthorization, updateGameRequest) {
      return this.updateGameWithHttpInfo(gameId, xAuthorization, updateGameRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
