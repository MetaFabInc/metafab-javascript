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
import ContractModel from '../model/ContractModel';
import CreateContractRequest from '../model/CreateContractRequest';
import TransactionModel from '../model/TransactionModel';
import WriteContractRequest from '../model/WriteContractRequest';

/**
* Contracts service.
* @module api/ContractsApi
* @version 1.0.1
*/
export default class ContractsApi {

    /**
    * Constructs a new ContractsApi. 
    * @alias module:api/ContractsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Create custom contract
     * Create a MetaFab custom contract entry from an existing contract address and contract abi. This allows the game and players belonging to the authenticated game to interact with the contract's read and write functions through MetaFab's read and write contract endpoints.
     * @param {String} xAuthorization The `secretKey` of the authenticating game.
     * @param {module:model/CreateContractRequest} createContractRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ContractModel} and HTTP response
     */
    createContractWithHttpInfo(xAuthorization, createContractRequest) {
      let postBody = createContractRequest;
      // verify the required parameter 'xAuthorization' is set
      if (xAuthorization === undefined || xAuthorization === null) {
        throw new Error("Missing the required parameter 'xAuthorization' when calling createContract");
      }
      // verify the required parameter 'createContractRequest' is set
      if (createContractRequest === undefined || createContractRequest === null) {
        throw new Error("Missing the required parameter 'createContractRequest' when calling createContract");
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
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = ContractModel;
      return this.apiClient.callApi(
        '/v1/contracts', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Create custom contract
     * Create a MetaFab custom contract entry from an existing contract address and contract abi. This allows the game and players belonging to the authenticated game to interact with the contract's read and write functions through MetaFab's read and write contract endpoints.
     * @param {String} xAuthorization The `secretKey` of the authenticating game.
     * @param {module:model/CreateContractRequest} createContractRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ContractModel}
     */
    createContract(xAuthorization, createContractRequest) {
      return this.createContractWithHttpInfo(xAuthorization, createContractRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Get contracts
     * Returns an array of active contracts deployed by the game associated with the provided `X-Game-Key`.
     * @param {String} xGameKey The `publishedKey` of a specific game. This can be shared or included in game clients, websites, etc.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/ContractModel>} and HTTP response
     */
    getContractsWithHttpInfo(xGameKey) {
      let postBody = null;
      // verify the required parameter 'xGameKey' is set
      if (xGameKey === undefined || xGameKey === null) {
        throw new Error("Missing the required parameter 'xGameKey' when calling getContracts");
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
      let returnType = [ContractModel];
      return this.apiClient.callApi(
        '/v1/contracts', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Get contracts
     * Returns an array of active contracts deployed by the game associated with the provided `X-Game-Key`.
     * @param {String} xGameKey The `publishedKey` of a specific game. This can be shared or included in game clients, websites, etc.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/ContractModel>}
     */
    getContracts(xGameKey) {
      return this.getContractsWithHttpInfo(xGameKey)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Read contract data
     * Oftentimes you'll want to query and retrieve some data from a contract. This is incredibly easy to do for any contract deployed through MetaFab.  Using this endpoint, you can get the data returned by any readable function listed in a contracts ABI. This could be things like querying the totalSupply of a currency contract, the number of owners of an items contract, and more.
     * @param {String} contractId Any contract id within the MetaFab ecosystem.
     * @param {String} func A contract function name. This can be any valid function from the the ABI of the contract you are interacting with. For example, `balanceOf`.
     * @param {Object} opts Optional parameters
     * @param {String} opts.args A comma seperated list of basic data type arguments. This is optional and only necessary if the function being invoked requires arguments per the contract ABI. For example, `123,\"Hello\",false`.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Object} and HTTP response
     */
    readContractWithHttpInfo(contractId, func, opts) {
      opts = opts || {};
      let postBody = null;
      // verify the required parameter 'contractId' is set
      if (contractId === undefined || contractId === null) {
        throw new Error("Missing the required parameter 'contractId' when calling readContract");
      }
      // verify the required parameter 'func' is set
      if (func === undefined || func === null) {
        throw new Error("Missing the required parameter 'func' when calling readContract");
      }

      let pathParams = {
        'contractId': contractId
      };
      let queryParams = {
        'func': func,
        'args': opts['args']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = Object;
      return this.apiClient.callApi(
        '/v1/contracts/{contractId}/reads', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Read contract data
     * Oftentimes you'll want to query and retrieve some data from a contract. This is incredibly easy to do for any contract deployed through MetaFab.  Using this endpoint, you can get the data returned by any readable function listed in a contracts ABI. This could be things like querying the totalSupply of a currency contract, the number of owners of an items contract, and more.
     * @param {String} contractId Any contract id within the MetaFab ecosystem.
     * @param {String} func A contract function name. This can be any valid function from the the ABI of the contract you are interacting with. For example, `balanceOf`.
     * @param {Object} opts Optional parameters
     * @param {String} opts.args A comma seperated list of basic data type arguments. This is optional and only necessary if the function being invoked requires arguments per the contract ABI. For example, `123,\"Hello\",false`.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Object}
     */
    readContract(contractId, func, opts) {
      return this.readContractWithHttpInfo(contractId, func, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Write contract data
     * MetaFab's convenience endpoints for contract interactions may not be flexible enough depending on your use case. For these situations, you can interact with contracts and create transactions directly.  Using this endpoint, you can execute a transaction for any writeable contract method as defined in the contract's ABI for the MetaFab contractId provided. Both Games and Player resources have authority to use this endpoint to execute transactions against any valid MetaFab contractId.  Additionally, MetaFab will automatically attempt to perform a gasless transaction for players interacting with a contract through this endpoint. Gasless transactions by players through this endpoint will only work if the target contract was deployed through MetaFab or supports MetaFab's ERC2771 trusted forwarder contract.
     * @param {String} contractId Any contract id within the MetaFab ecosystem.
     * @param {String} xAuthorization The `secretKey` of a specific game or the `accessToken` of a specific player.
     * @param {String} xPassword The password of the authenticating game or player. Required to decrypt and perform blockchain transactions with the game or player primary wallet.
     * @param {module:model/WriteContractRequest} writeContractRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TransactionModel} and HTTP response
     */
    writeContractWithHttpInfo(contractId, xAuthorization, xPassword, writeContractRequest) {
      let postBody = writeContractRequest;
      // verify the required parameter 'contractId' is set
      if (contractId === undefined || contractId === null) {
        throw new Error("Missing the required parameter 'contractId' when calling writeContract");
      }
      // verify the required parameter 'xAuthorization' is set
      if (xAuthorization === undefined || xAuthorization === null) {
        throw new Error("Missing the required parameter 'xAuthorization' when calling writeContract");
      }
      // verify the required parameter 'xPassword' is set
      if (xPassword === undefined || xPassword === null) {
        throw new Error("Missing the required parameter 'xPassword' when calling writeContract");
      }
      // verify the required parameter 'writeContractRequest' is set
      if (writeContractRequest === undefined || writeContractRequest === null) {
        throw new Error("Missing the required parameter 'writeContractRequest' when calling writeContract");
      }

      let pathParams = {
        'contractId': contractId
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
        '/v1/contracts/{contractId}/writes', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Write contract data
     * MetaFab's convenience endpoints for contract interactions may not be flexible enough depending on your use case. For these situations, you can interact with contracts and create transactions directly.  Using this endpoint, you can execute a transaction for any writeable contract method as defined in the contract's ABI for the MetaFab contractId provided. Both Games and Player resources have authority to use this endpoint to execute transactions against any valid MetaFab contractId.  Additionally, MetaFab will automatically attempt to perform a gasless transaction for players interacting with a contract through this endpoint. Gasless transactions by players through this endpoint will only work if the target contract was deployed through MetaFab or supports MetaFab's ERC2771 trusted forwarder contract.
     * @param {String} contractId Any contract id within the MetaFab ecosystem.
     * @param {String} xAuthorization The `secretKey` of a specific game or the `accessToken` of a specific player.
     * @param {String} xPassword The password of the authenticating game or player. Required to decrypt and perform blockchain transactions with the game or player primary wallet.
     * @param {module:model/WriteContractRequest} writeContractRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TransactionModel}
     */
    writeContract(contractId, xAuthorization, xPassword, writeContractRequest) {
      return this.writeContractWithHttpInfo(contractId, xAuthorization, xPassword, writeContractRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
