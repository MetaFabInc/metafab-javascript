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
import ContractModel from '../model/ContractModel';
import CreateContractRequest from '../model/CreateContractRequest';
import TransactionModel from '../model/TransactionModel';
import TransferContractOwnershipRequest from '../model/TransferContractOwnershipRequest';
import UpgradeContractTrustedForwarderRequest from '../model/UpgradeContractTrustedForwarderRequest';
import WriteContractRequest from '../model/WriteContractRequest';

/**
* Contracts service.
* @module api/ContractsApi
* @version 1.5.1
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
     * @param {String} contractId Any contract id within the MetaFab platform.
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
     * @param {String} contractId Any contract id within the MetaFab platform.
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
     * Transfer contract ownership
     * Transfer ownership and control of a MetaFab deployed smart contract to another wallet you control. Transferring control does not disrupt your usage of MetaFab APIs and can be done so without causing any service outages for your game. The new owner wallet will have full control over any relevant item collections and marketplace related pages this contract may be associated with, such as for MetaFab item or NFT contracts.  Your game's custodial wallet will retain a `MANAGER_ROLE` on your contracts, allowing you to still use MetaFab APIs without issue while you retain full contract ownership and the contract's administrator role. If ever you want eject from using the MetaFab APIs but still retain your deployed smart contracts, you can revoke the `MANAGER_ROLE` from your game's custodial wallet address for your contract. We do not lock you into our systems.  Please be certain that the wallet address you transfer ownership to is one you control. Once ownership and admin permissions are transferred, your game's custodial wallet no longer has permission to reassign ownership or administrative priveleges for your contract.
     * @param {String} contractId Any contract id within the MetaFab platform.
     * @param {String} xAuthorization The `secretKey` of the authenticating game.
     * @param {String} xWalletDecryptKey The `walletDecryptKey` of the authenticating game. Required to decrypt and perform blockchain transactions with the game primary wallet.
     * @param {module:model/TransferContractOwnershipRequest} transferContractOwnershipRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TransactionModel} and HTTP response
     */
    transferContractOwnershipWithHttpInfo(contractId, xAuthorization, xWalletDecryptKey, transferContractOwnershipRequest) {
      let postBody = transferContractOwnershipRequest;
      // verify the required parameter 'contractId' is set
      if (contractId === undefined || contractId === null) {
        throw new Error("Missing the required parameter 'contractId' when calling transferContractOwnership");
      }
      // verify the required parameter 'xAuthorization' is set
      if (xAuthorization === undefined || xAuthorization === null) {
        throw new Error("Missing the required parameter 'xAuthorization' when calling transferContractOwnership");
      }
      // verify the required parameter 'xWalletDecryptKey' is set
      if (xWalletDecryptKey === undefined || xWalletDecryptKey === null) {
        throw new Error("Missing the required parameter 'xWalletDecryptKey' when calling transferContractOwnership");
      }
      // verify the required parameter 'transferContractOwnershipRequest' is set
      if (transferContractOwnershipRequest === undefined || transferContractOwnershipRequest === null) {
        throw new Error("Missing the required parameter 'transferContractOwnershipRequest' when calling transferContractOwnership");
      }

      let pathParams = {
        'contractId': contractId
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
        '/v1/contracts/{contractId}/owners', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Transfer contract ownership
     * Transfer ownership and control of a MetaFab deployed smart contract to another wallet you control. Transferring control does not disrupt your usage of MetaFab APIs and can be done so without causing any service outages for your game. The new owner wallet will have full control over any relevant item collections and marketplace related pages this contract may be associated with, such as for MetaFab item or NFT contracts.  Your game's custodial wallet will retain a `MANAGER_ROLE` on your contracts, allowing you to still use MetaFab APIs without issue while you retain full contract ownership and the contract's administrator role. If ever you want eject from using the MetaFab APIs but still retain your deployed smart contracts, you can revoke the `MANAGER_ROLE` from your game's custodial wallet address for your contract. We do not lock you into our systems.  Please be certain that the wallet address you transfer ownership to is one you control. Once ownership and admin permissions are transferred, your game's custodial wallet no longer has permission to reassign ownership or administrative priveleges for your contract.
     * @param {String} contractId Any contract id within the MetaFab platform.
     * @param {String} xAuthorization The `secretKey` of the authenticating game.
     * @param {String} xWalletDecryptKey The `walletDecryptKey` of the authenticating game. Required to decrypt and perform blockchain transactions with the game primary wallet.
     * @param {module:model/TransferContractOwnershipRequest} transferContractOwnershipRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TransactionModel}
     */
    transferContractOwnership(contractId, xAuthorization, xWalletDecryptKey, transferContractOwnershipRequest) {
      return this.transferContractOwnershipWithHttpInfo(contractId, xAuthorization, xWalletDecryptKey, transferContractOwnershipRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Upgrade contract trusted forwarder
     * In rare circumstances, you may need to upgrade the underlying trusted forwarder contract address attached to your game's contracts. Using this endpoint, you can provide a new trusted forwarder contract address to assign to any of your contracts that implement the `upgradeTrustedForwarder` function.
     * @param {String} contractId Any contract id within the MetaFab platform.
     * @param {String} xAuthorization The `secretKey` of the authenticating game.
     * @param {String} xWalletDecryptKey The `walletDecryptKey` of the authenticating game. Required to decrypt and perform blockchain transactions with the game primary wallet.
     * @param {module:model/UpgradeContractTrustedForwarderRequest} upgradeContractTrustedForwarderRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TransactionModel} and HTTP response
     */
    upgradeContractTrustedForwarderWithHttpInfo(contractId, xAuthorization, xWalletDecryptKey, upgradeContractTrustedForwarderRequest) {
      let postBody = upgradeContractTrustedForwarderRequest;
      // verify the required parameter 'contractId' is set
      if (contractId === undefined || contractId === null) {
        throw new Error("Missing the required parameter 'contractId' when calling upgradeContractTrustedForwarder");
      }
      // verify the required parameter 'xAuthorization' is set
      if (xAuthorization === undefined || xAuthorization === null) {
        throw new Error("Missing the required parameter 'xAuthorization' when calling upgradeContractTrustedForwarder");
      }
      // verify the required parameter 'xWalletDecryptKey' is set
      if (xWalletDecryptKey === undefined || xWalletDecryptKey === null) {
        throw new Error("Missing the required parameter 'xWalletDecryptKey' when calling upgradeContractTrustedForwarder");
      }
      // verify the required parameter 'upgradeContractTrustedForwarderRequest' is set
      if (upgradeContractTrustedForwarderRequest === undefined || upgradeContractTrustedForwarderRequest === null) {
        throw new Error("Missing the required parameter 'upgradeContractTrustedForwarderRequest' when calling upgradeContractTrustedForwarder");
      }

      let pathParams = {
        'contractId': contractId
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
        '/v1/contracts/{contractId}/forwarders', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Upgrade contract trusted forwarder
     * In rare circumstances, you may need to upgrade the underlying trusted forwarder contract address attached to your game's contracts. Using this endpoint, you can provide a new trusted forwarder contract address to assign to any of your contracts that implement the `upgradeTrustedForwarder` function.
     * @param {String} contractId Any contract id within the MetaFab platform.
     * @param {String} xAuthorization The `secretKey` of the authenticating game.
     * @param {String} xWalletDecryptKey The `walletDecryptKey` of the authenticating game. Required to decrypt and perform blockchain transactions with the game primary wallet.
     * @param {module:model/UpgradeContractTrustedForwarderRequest} upgradeContractTrustedForwarderRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TransactionModel}
     */
    upgradeContractTrustedForwarder(contractId, xAuthorization, xWalletDecryptKey, upgradeContractTrustedForwarderRequest) {
      return this.upgradeContractTrustedForwarderWithHttpInfo(contractId, xAuthorization, xWalletDecryptKey, upgradeContractTrustedForwarderRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Write contract data
     * MetaFab's convenience endpoints for contract interactions may not be flexible enough depending on your use case. For these situations, you can interact with contracts and create transactions directly.  Using this endpoint, you can execute a transaction for any writeable contract method as defined in the contract's ABI for the MetaFab contractId provided. Both Games and Player resources have authority to use this endpoint to execute transactions against any valid MetaFab contractId.  Additionally, MetaFab will automatically attempt to perform a gasless transaction for players interacting with a contract through this endpoint. Gasless transactions by players through this endpoint will only work if the target contract was deployed through MetaFab or supports MetaFab's ERC2771 trusted forwarder contract.
     * @param {String} contractId Any contract id within the MetaFab platform.
     * @param {String} xAuthorization The `secretKey` of a specific game or the `accessToken` of a specific player.
     * @param {String} xWalletDecryptKey The `walletDecryptKey` of the authenticating game or player. Required to decrypt and perform blockchain transactions with the game or player primary wallet.
     * @param {module:model/WriteContractRequest} writeContractRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/TransactionModel} and HTTP response
     */
    writeContractWithHttpInfo(contractId, xAuthorization, xWalletDecryptKey, writeContractRequest) {
      let postBody = writeContractRequest;
      // verify the required parameter 'contractId' is set
      if (contractId === undefined || contractId === null) {
        throw new Error("Missing the required parameter 'contractId' when calling writeContract");
      }
      // verify the required parameter 'xAuthorization' is set
      if (xAuthorization === undefined || xAuthorization === null) {
        throw new Error("Missing the required parameter 'xAuthorization' when calling writeContract");
      }
      // verify the required parameter 'xWalletDecryptKey' is set
      if (xWalletDecryptKey === undefined || xWalletDecryptKey === null) {
        throw new Error("Missing the required parameter 'xWalletDecryptKey' when calling writeContract");
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
        'X-Wallet-Decrypt-Key': xWalletDecryptKey
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
     * @param {String} contractId Any contract id within the MetaFab platform.
     * @param {String} xAuthorization The `secretKey` of a specific game or the `accessToken` of a specific player.
     * @param {String} xWalletDecryptKey The `walletDecryptKey` of the authenticating game or player. Required to decrypt and perform blockchain transactions with the game or player primary wallet.
     * @param {module:model/WriteContractRequest} writeContractRequest 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/TransactionModel}
     */
    writeContract(contractId, xAuthorization, xWalletDecryptKey, writeContractRequest) {
      return this.writeContractWithHttpInfo(contractId, xAuthorization, xWalletDecryptKey, writeContractRequest)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
