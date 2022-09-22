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


import ApiClient from './ApiClient';
import ContractModel from './model/ContractModel';
import CurrencyModel from './model/CurrencyModel';
import GameModel from './model/GameModel';
import PlayerModel from './model/PlayerModel';
import TransactionModel from './model/TransactionModel';
import V1ContractsContractIdWritesPostRequest from './model/V1ContractsContractIdWritesPostRequest';
import V1ContractsGetRequest from './model/V1ContractsGetRequest';
import V1CurrenciesCurrencyIdBatchTransfersPostRequest from './model/V1CurrenciesCurrencyIdBatchTransfersPostRequest';
import V1CurrenciesCurrencyIdBurnsPostRequest from './model/V1CurrenciesCurrencyIdBurnsPostRequest';
import V1CurrenciesCurrencyIdFeesGet200Response from './model/V1CurrenciesCurrencyIdFeesGet200Response';
import V1CurrenciesCurrencyIdFeesGetRequest from './model/V1CurrenciesCurrencyIdFeesGetRequest';
import V1CurrenciesCurrencyIdMintsPostRequest from './model/V1CurrenciesCurrencyIdMintsPostRequest';
import V1CurrenciesCurrencyIdTransfersPostRequest from './model/V1CurrenciesCurrencyIdTransfersPostRequest';
import V1CurrenciesGet200Response from './model/V1CurrenciesGet200Response';
import V1CurrenciesGet200ResponseAllOf from './model/V1CurrenciesGet200ResponseAllOf';
import V1CurrenciesGet200ResponseAllOfContract from './model/V1CurrenciesGet200ResponseAllOfContract';
import V1CurrenciesGet200ResponseAllOfContractAllOf from './model/V1CurrenciesGet200ResponseAllOfContractAllOf';
import V1CurrenciesGet200ResponseInner from './model/V1CurrenciesGet200ResponseInner';
import V1CurrenciesGet200ResponseInnerAllOf from './model/V1CurrenciesGet200ResponseInnerAllOf';
import V1CurrenciesGetRequest from './model/V1CurrenciesGetRequest';
import V1GamesGameIdPatchRequest from './model/V1GamesGameIdPatchRequest';
import V1GamesGet200Response from './model/V1GamesGet200Response';
import V1GamesGet200ResponseAllOf from './model/V1GamesGet200ResponseAllOf';
import V1GamesGet200ResponseAllOf1 from './model/V1GamesGet200ResponseAllOf1';
import V1GamesGetRequest from './model/V1GamesGetRequest';
import V1PlayersGet200Response from './model/V1PlayersGet200Response';
import V1PlayersGetRequest from './model/V1PlayersGetRequest';
import V1PlayersPlayerIdPatchRequest from './model/V1PlayersPlayerIdPatchRequest';
import WalletModel from './model/WalletModel';
import ContractsApi from './api/ContractsApi';
import CurrenciesApi from './api/CurrenciesApi';
import GamesApi from './api/GamesApi';
import PlayersApi from './api/PlayersApi';
import TransactionsApi from './api/TransactionsApi';
import WalletsApi from './api/WalletsApi';


/**
*  Complete MetaFab API references and guides can be found at: https://trymetafab.com.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var MetafabJavascript = require('index'); // See note below*.
* var xxxSvc = new MetafabJavascript.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new MetafabJavascript.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new MetafabJavascript.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new MetafabJavascript.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The ContractModel model constructor.
     * @property {module:model/ContractModel}
     */
    ContractModel,

    /**
     * The CurrencyModel model constructor.
     * @property {module:model/CurrencyModel}
     */
    CurrencyModel,

    /**
     * The GameModel model constructor.
     * @property {module:model/GameModel}
     */
    GameModel,

    /**
     * The PlayerModel model constructor.
     * @property {module:model/PlayerModel}
     */
    PlayerModel,

    /**
     * The TransactionModel model constructor.
     * @property {module:model/TransactionModel}
     */
    TransactionModel,

    /**
     * The V1ContractsContractIdWritesPostRequest model constructor.
     * @property {module:model/V1ContractsContractIdWritesPostRequest}
     */
    V1ContractsContractIdWritesPostRequest,

    /**
     * The V1ContractsGetRequest model constructor.
     * @property {module:model/V1ContractsGetRequest}
     */
    V1ContractsGetRequest,

    /**
     * The V1CurrenciesCurrencyIdBatchTransfersPostRequest model constructor.
     * @property {module:model/V1CurrenciesCurrencyIdBatchTransfersPostRequest}
     */
    V1CurrenciesCurrencyIdBatchTransfersPostRequest,

    /**
     * The V1CurrenciesCurrencyIdBurnsPostRequest model constructor.
     * @property {module:model/V1CurrenciesCurrencyIdBurnsPostRequest}
     */
    V1CurrenciesCurrencyIdBurnsPostRequest,

    /**
     * The V1CurrenciesCurrencyIdFeesGet200Response model constructor.
     * @property {module:model/V1CurrenciesCurrencyIdFeesGet200Response}
     */
    V1CurrenciesCurrencyIdFeesGet200Response,

    /**
     * The V1CurrenciesCurrencyIdFeesGetRequest model constructor.
     * @property {module:model/V1CurrenciesCurrencyIdFeesGetRequest}
     */
    V1CurrenciesCurrencyIdFeesGetRequest,

    /**
     * The V1CurrenciesCurrencyIdMintsPostRequest model constructor.
     * @property {module:model/V1CurrenciesCurrencyIdMintsPostRequest}
     */
    V1CurrenciesCurrencyIdMintsPostRequest,

    /**
     * The V1CurrenciesCurrencyIdTransfersPostRequest model constructor.
     * @property {module:model/V1CurrenciesCurrencyIdTransfersPostRequest}
     */
    V1CurrenciesCurrencyIdTransfersPostRequest,

    /**
     * The V1CurrenciesGet200Response model constructor.
     * @property {module:model/V1CurrenciesGet200Response}
     */
    V1CurrenciesGet200Response,

    /**
     * The V1CurrenciesGet200ResponseAllOf model constructor.
     * @property {module:model/V1CurrenciesGet200ResponseAllOf}
     */
    V1CurrenciesGet200ResponseAllOf,

    /**
     * The V1CurrenciesGet200ResponseAllOfContract model constructor.
     * @property {module:model/V1CurrenciesGet200ResponseAllOfContract}
     */
    V1CurrenciesGet200ResponseAllOfContract,

    /**
     * The V1CurrenciesGet200ResponseAllOfContractAllOf model constructor.
     * @property {module:model/V1CurrenciesGet200ResponseAllOfContractAllOf}
     */
    V1CurrenciesGet200ResponseAllOfContractAllOf,

    /**
     * The V1CurrenciesGet200ResponseInner model constructor.
     * @property {module:model/V1CurrenciesGet200ResponseInner}
     */
    V1CurrenciesGet200ResponseInner,

    /**
     * The V1CurrenciesGet200ResponseInnerAllOf model constructor.
     * @property {module:model/V1CurrenciesGet200ResponseInnerAllOf}
     */
    V1CurrenciesGet200ResponseInnerAllOf,

    /**
     * The V1CurrenciesGetRequest model constructor.
     * @property {module:model/V1CurrenciesGetRequest}
     */
    V1CurrenciesGetRequest,

    /**
     * The V1GamesGameIdPatchRequest model constructor.
     * @property {module:model/V1GamesGameIdPatchRequest}
     */
    V1GamesGameIdPatchRequest,

    /**
     * The V1GamesGet200Response model constructor.
     * @property {module:model/V1GamesGet200Response}
     */
    V1GamesGet200Response,

    /**
     * The V1GamesGet200ResponseAllOf model constructor.
     * @property {module:model/V1GamesGet200ResponseAllOf}
     */
    V1GamesGet200ResponseAllOf,

    /**
     * The V1GamesGet200ResponseAllOf1 model constructor.
     * @property {module:model/V1GamesGet200ResponseAllOf1}
     */
    V1GamesGet200ResponseAllOf1,

    /**
     * The V1GamesGetRequest model constructor.
     * @property {module:model/V1GamesGetRequest}
     */
    V1GamesGetRequest,

    /**
     * The V1PlayersGet200Response model constructor.
     * @property {module:model/V1PlayersGet200Response}
     */
    V1PlayersGet200Response,

    /**
     * The V1PlayersGetRequest model constructor.
     * @property {module:model/V1PlayersGetRequest}
     */
    V1PlayersGetRequest,

    /**
     * The V1PlayersPlayerIdPatchRequest model constructor.
     * @property {module:model/V1PlayersPlayerIdPatchRequest}
     */
    V1PlayersPlayerIdPatchRequest,

    /**
     * The WalletModel model constructor.
     * @property {module:model/WalletModel}
     */
    WalletModel,

    /**
    * The ContractsApi service constructor.
    * @property {module:api/ContractsApi}
    */
    ContractsApi,

    /**
    * The CurrenciesApi service constructor.
    * @property {module:api/CurrenciesApi}
    */
    CurrenciesApi,

    /**
    * The GamesApi service constructor.
    * @property {module:api/GamesApi}
    */
    GamesApi,

    /**
    * The PlayersApi service constructor.
    * @property {module:api/PlayersApi}
    */
    PlayersApi,

    /**
    * The TransactionsApi service constructor.
    * @property {module:api/TransactionsApi}
    */
    TransactionsApi,

    /**
    * The WalletsApi service constructor.
    * @property {module:api/WalletsApi}
    */
    WalletsApi
};
