/**
 * MetaFab API
 *  Complete MetaFab API references and guides can be found at: https://trymetafab.com
 *
 * The version of the OpenAPI document: 1.4.0
 * Contact: metafabproject@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import AuthPlayer200Response from '../model/AuthPlayer200Response';
import CreatePlayerRequest from '../model/CreatePlayerRequest';
import GetPlayerData200Response from '../model/GetPlayerData200Response';
import PlayerModel from '../model/PlayerModel';
import PublicPlayer from '../model/PublicPlayer';
import RemovePlayerConnectedWalletRequest from '../model/RemovePlayerConnectedWalletRequest';
import SetPlayerConnectedWallet200Response from '../model/SetPlayerConnectedWallet200Response';
import SetPlayerConnectedWalletRequest from '../model/SetPlayerConnectedWalletRequest';
import SetPlayerDataRequest from '../model/SetPlayerDataRequest';
import UpdatePlayerRequest from '../model/UpdatePlayerRequest';

/**
* Players service.
* @module api/PlayersApi
* @version 1.4.0
*/
export default class PlayersApi {

    /**
    * Constructs a new PlayersApi. 
    * @alias module:api/PlayersApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Authenticate player
     * Returns an existing player object containing access token, wallet, and other details for a game when provided a valid username and password login using Basic Auth.
     * @param {String} xGameKey The `publishedKey` of a specific game. This can be shared or included in game clients, websites, etc.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AuthPlayer200Response} and HTTP response
     */
    authPlayerWithHttpInfo(xGameKey) {
      let postBody = null;
      // verify the required parameter 'xGameKey' is set
      if (xGameKey === undefined || xGameKey === null) {
        throw new Error("Missing the required parameter 'xGameKey' when calling authPlayer");
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

      let authNames = ['basicAuth'];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = AuthPlayer200Response;
      return this.apiClient.callApi(
        '/v1/players/auth', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Authenticate player
     * Returns an existing player object containing access token, wallet, and other details for a game when provided a valid username and password login using Basic Auth.
     * @param {String} xGameKey The `publishedKey` of a specific game. This can be shared or included in game clients, websites, etc.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AuthPlayer200Response}
     */
    authPlayer(xGameKey) {
      return this.authPlayerWithHttpInfo(xGameKey)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Create player
     * Create a new player for a game. Players are automatically associated with an internally managed wallet.  Player access tokens can be used to directly interact with any MetaFab managed contracts, currencies, items collections, marketplaces and more. Player interactions are also gasless by default, completely removing all crypto friction for players to engage with your MetaFab supported games.
     * @param {String} xGameKey The `publishedKey` of a specific game. This can be shared or included in game clients, websites, etc.
     * @param {module:model/CreatePlayerRequest} createPlayerRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/AuthPlayer200Response} and HTTP response
     */
    createPlayerWithHttpInfo(xGameKey, createPlayerRequest) {
      let postBody = createPlayerRequest;
      // verify the required parameter 'xGameKey' is set
      if (xGameKey === undefined || xGameKey === null) {
        throw new Error("Missing the required parameter 'xGameKey' when calling createPlayer");
      }
      // verify the required parameter 'createPlayerRequest' is set
      if (createPlayerRequest === undefined || createPlayerRequest === null) {
        throw new Error("Missing the required parameter 'createPlayerRequest' when calling createPlayer");
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
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = AuthPlayer200Response;
      return this.apiClient.callApi(
        '/v1/players', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create player
     * Create a new player for a game. Players are automatically associated with an internally managed wallet.  Player access tokens can be used to directly interact with any MetaFab managed contracts, currencies, items collections, marketplaces and more. Player interactions are also gasless by default, completely removing all crypto friction for players to engage with your MetaFab supported games.
     * @param {String} xGameKey The `publishedKey` of a specific game. This can be shared or included in game clients, websites, etc.
     * @param {module:model/CreatePlayerRequest} createPlayerRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/AuthPlayer200Response}
     */
    createPlayer(xGameKey, createPlayerRequest) {
      return this.createPlayerWithHttpInfo(xGameKey, createPlayerRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get player
     * Returns a player object for the provided player id.
     * @param {String} playerId Any player id within the MetaFab ecosystem.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PublicPlayer} and HTTP response
     */
    getPlayerWithHttpInfo(playerId) {
      let postBody = null;
      // verify the required parameter 'playerId' is set
      if (playerId === undefined || playerId === null) {
        throw new Error("Missing the required parameter 'playerId' when calling getPlayer");
      }

      let pathParams = {
        'playerId': playerId
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
      let returnType = PublicPlayer;
      return this.apiClient.callApi(
        '/v1/players/{playerId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get player
     * Returns a player object for the provided player id.
     * @param {String} playerId Any player id within the MetaFab ecosystem.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PublicPlayer}
     */
    getPlayer(playerId) {
      return this.getPlayerWithHttpInfo(playerId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get player data
     * Returns the latest public and protected data as an object for the provided playerId.
     * @param {String} playerId Any player id within the MetaFab ecosystem.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetPlayerData200Response} and HTTP response
     */
    getPlayerDataWithHttpInfo(playerId) {
      let postBody = null;
      // verify the required parameter 'playerId' is set
      if (playerId === undefined || playerId === null) {
        throw new Error("Missing the required parameter 'playerId' when calling getPlayerData");
      }

      let pathParams = {
        'playerId': playerId
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
      let returnType = GetPlayerData200Response;
      return this.apiClient.callApi(
        '/v1/players/{playerId}/data', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get player data
     * Returns the latest public and protected data as an object for the provided playerId.
     * @param {String} playerId Any player id within the MetaFab ecosystem.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetPlayerData200Response}
     */
    getPlayerData(playerId) {
      return this.getPlayerDataWithHttpInfo(playerId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get players
     * Returns all players for the authenticated game as an array of player objects.
     * @param {String} xAuthorization The `secretKey` of the authenticating game.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/PublicPlayer>} and HTTP response
     */
    getPlayersWithHttpInfo(xAuthorization) {
      let postBody = null;
      // verify the required parameter 'xAuthorization' is set
      if (xAuthorization === undefined || xAuthorization === null) {
        throw new Error("Missing the required parameter 'xAuthorization' when calling getPlayers");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
        'X-Authorization': xAuthorization
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [PublicPlayer];
      return this.apiClient.callApi(
        '/v1/players', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get players
     * Returns all players for the authenticated game as an array of player objects.
     * @param {String} xAuthorization The `secretKey` of the authenticating game.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/PublicPlayer>}
     */
    getPlayers(xAuthorization) {
      return this.getPlayersWithHttpInfo(xAuthorization)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Remove player connected wallet
     * Removes an external wallet from a player account. The player's wallet is reverted to their custodial wallet.
     * @param {String} playerId Any player id within the MetaFab ecosystem.
     * @param {String} playerWalletId Any player wallet id within the MetaFab ecosystem.
     * @param {module:model/RemovePlayerConnectedWalletRequest} removePlayerConnectedWalletRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    removePlayerConnectedWalletWithHttpInfo(playerId, playerWalletId, removePlayerConnectedWalletRequest) {
      let postBody = removePlayerConnectedWalletRequest;
      // verify the required parameter 'playerId' is set
      if (playerId === undefined || playerId === null) {
        throw new Error("Missing the required parameter 'playerId' when calling removePlayerConnectedWallet");
      }
      // verify the required parameter 'playerWalletId' is set
      if (playerWalletId === undefined || playerWalletId === null) {
        throw new Error("Missing the required parameter 'playerWalletId' when calling removePlayerConnectedWallet");
      }
      // verify the required parameter 'removePlayerConnectedWalletRequest' is set
      if (removePlayerConnectedWalletRequest === undefined || removePlayerConnectedWalletRequest === null) {
        throw new Error("Missing the required parameter 'removePlayerConnectedWalletRequest' when calling removePlayerConnectedWallet");
      }

      let pathParams = {
        'playerId': playerId,
        'playerWalletId': playerWalletId
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
      let returnType = null;
      return this.apiClient.callApi(
        '/v1/players/{playerId}/wallets/{playerWalletId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Remove player connected wallet
     * Removes an external wallet from a player account. The player's wallet is reverted to their custodial wallet.
     * @param {String} playerId Any player id within the MetaFab ecosystem.
     * @param {String} playerWalletId Any player wallet id within the MetaFab ecosystem.
     * @param {module:model/RemovePlayerConnectedWalletRequest} removePlayerConnectedWalletRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    removePlayerConnectedWallet(playerId, playerWalletId, removePlayerConnectedWalletRequest) {
      return this.removePlayerConnectedWalletWithHttpInfo(playerId, playerWalletId, removePlayerConnectedWalletRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Set player connected wallet
     * Sets an external wallet as the wallet for a player account. The set wallet can transact gaslessly with all MetaFab related systems through the same MetaFab API calls as custodial wallets without requiring transaction signing or private keys.  This is done through an internal system MetaFab has created that allows an external connected wallet to delegate transaction signing for a specific game's set of contracts to a player's password protected custodial wallet. This allow the custodial wallet to sign and submit transactions to a specific game's related contracts as if they were signed and submitted by the connected external wallet. This also means that all earned tokens, purchased items and any interactions happen and are recorded on chain as the external connected wallet. No additional logic needs to be writted by developers to support both custodial and external wallets, everything just works.  Finally, this endpoint is meant for advanced users. The majority of developers who want to implement external wallet support for their game can do so without any extra work through our whitelabeled wallet connection feature that implements this endpoint underneath the hood without any required work.
     * @param {String} playerId Any player id within the MetaFab ecosystem.
     * @param {String} xAuthorization The `accessToken` of the authenticating player.
     * @param {module:model/SetPlayerConnectedWalletRequest} setPlayerConnectedWalletRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/SetPlayerConnectedWallet200Response} and HTTP response
     */
    setPlayerConnectedWalletWithHttpInfo(playerId, xAuthorization, setPlayerConnectedWalletRequest) {
      let postBody = setPlayerConnectedWalletRequest;
      // verify the required parameter 'playerId' is set
      if (playerId === undefined || playerId === null) {
        throw new Error("Missing the required parameter 'playerId' when calling setPlayerConnectedWallet");
      }
      // verify the required parameter 'xAuthorization' is set
      if (xAuthorization === undefined || xAuthorization === null) {
        throw new Error("Missing the required parameter 'xAuthorization' when calling setPlayerConnectedWallet");
      }
      // verify the required parameter 'setPlayerConnectedWalletRequest' is set
      if (setPlayerConnectedWalletRequest === undefined || setPlayerConnectedWalletRequest === null) {
        throw new Error("Missing the required parameter 'setPlayerConnectedWalletRequest' when calling setPlayerConnectedWallet");
      }

      let pathParams = {
        'playerId': playerId
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
      let returnType = SetPlayerConnectedWallet200Response;
      return this.apiClient.callApi(
        '/v1/players/{playerId}/wallets', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Set player connected wallet
     * Sets an external wallet as the wallet for a player account. The set wallet can transact gaslessly with all MetaFab related systems through the same MetaFab API calls as custodial wallets without requiring transaction signing or private keys.  This is done through an internal system MetaFab has created that allows an external connected wallet to delegate transaction signing for a specific game's set of contracts to a player's password protected custodial wallet. This allow the custodial wallet to sign and submit transactions to a specific game's related contracts as if they were signed and submitted by the connected external wallet. This also means that all earned tokens, purchased items and any interactions happen and are recorded on chain as the external connected wallet. No additional logic needs to be writted by developers to support both custodial and external wallets, everything just works.  Finally, this endpoint is meant for advanced users. The majority of developers who want to implement external wallet support for their game can do so without any extra work through our whitelabeled wallet connection feature that implements this endpoint underneath the hood without any required work.
     * @param {String} playerId Any player id within the MetaFab ecosystem.
     * @param {String} xAuthorization The `accessToken` of the authenticating player.
     * @param {module:model/SetPlayerConnectedWalletRequest} setPlayerConnectedWalletRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/SetPlayerConnectedWallet200Response}
     */
    setPlayerConnectedWallet(playerId, xAuthorization, setPlayerConnectedWalletRequest) {
      return this.setPlayerConnectedWalletWithHttpInfo(playerId, xAuthorization, setPlayerConnectedWalletRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Set player data
     * Creates or updates public and/or protected data for the provided playerId. Data updates are performed using deep merging. This means that when you update any top level or nested properties specific to player public or protected data, you only need to include the properties you are making changes to. Any existing properties not included in request body arguments will be retained on the player data object.  Please note, When writing an array type for a player, arrays do not follow the deep merge approach. If you add or remove an item from an array, the entire array must be passed as an argument when updating the related property for player public or protected data.
     * @param {String} playerId Any player id within the MetaFab ecosystem.
     * @param {String} xAuthorization The `secretKey` of a specific game or the `accessToken` of a specific player.
     * @param {module:model/SetPlayerDataRequest} setPlayerDataRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/GetPlayerData200Response} and HTTP response
     */
    setPlayerDataWithHttpInfo(playerId, xAuthorization, setPlayerDataRequest) {
      let postBody = setPlayerDataRequest;
      // verify the required parameter 'playerId' is set
      if (playerId === undefined || playerId === null) {
        throw new Error("Missing the required parameter 'playerId' when calling setPlayerData");
      }
      // verify the required parameter 'xAuthorization' is set
      if (xAuthorization === undefined || xAuthorization === null) {
        throw new Error("Missing the required parameter 'xAuthorization' when calling setPlayerData");
      }
      // verify the required parameter 'setPlayerDataRequest' is set
      if (setPlayerDataRequest === undefined || setPlayerDataRequest === null) {
        throw new Error("Missing the required parameter 'setPlayerDataRequest' when calling setPlayerData");
      }

      let pathParams = {
        'playerId': playerId
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
      let returnType = GetPlayerData200Response;
      return this.apiClient.callApi(
        '/v1/players/{playerId}/data', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Set player data
     * Creates or updates public and/or protected data for the provided playerId. Data updates are performed using deep merging. This means that when you update any top level or nested properties specific to player public or protected data, you only need to include the properties you are making changes to. Any existing properties not included in request body arguments will be retained on the player data object.  Please note, When writing an array type for a player, arrays do not follow the deep merge approach. If you add or remove an item from an array, the entire array must be passed as an argument when updating the related property for player public or protected data.
     * @param {String} playerId Any player id within the MetaFab ecosystem.
     * @param {String} xAuthorization The `secretKey` of a specific game or the `accessToken` of a specific player.
     * @param {module:model/SetPlayerDataRequest} setPlayerDataRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/GetPlayerData200Response}
     */
    setPlayerData(playerId, xAuthorization, setPlayerDataRequest) {
      return this.setPlayerDataWithHttpInfo(playerId, xAuthorization, setPlayerDataRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update player
     * Update various fields specific to a player. Such as changing its password and resetting its access token.
     * @param {String} playerId Any player id within the MetaFab ecosystem.
     * @param {String} xAuthorization The `accessToken` of the authenticating player.
     * @param {module:model/UpdatePlayerRequest} updatePlayerRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/PlayerModel} and HTTP response
     */
    updatePlayerWithHttpInfo(playerId, xAuthorization, updatePlayerRequest) {
      let postBody = updatePlayerRequest;
      // verify the required parameter 'playerId' is set
      if (playerId === undefined || playerId === null) {
        throw new Error("Missing the required parameter 'playerId' when calling updatePlayer");
      }
      // verify the required parameter 'xAuthorization' is set
      if (xAuthorization === undefined || xAuthorization === null) {
        throw new Error("Missing the required parameter 'xAuthorization' when calling updatePlayer");
      }
      // verify the required parameter 'updatePlayerRequest' is set
      if (updatePlayerRequest === undefined || updatePlayerRequest === null) {
        throw new Error("Missing the required parameter 'updatePlayerRequest' when calling updatePlayer");
      }

      let pathParams = {
        'playerId': playerId
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
      let returnType = PlayerModel;
      return this.apiClient.callApi(
        '/v1/players/{playerId}', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update player
     * Update various fields specific to a player. Such as changing its password and resetting its access token.
     * @param {String} playerId Any player id within the MetaFab ecosystem.
     * @param {String} xAuthorization The `accessToken` of the authenticating player.
     * @param {module:model/UpdatePlayerRequest} updatePlayerRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PlayerModel}
     */
    updatePlayer(playerId, xAuthorization, updatePlayerRequest) {
      return this.updatePlayerWithHttpInfo(playerId, xAuthorization, updatePlayerRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
