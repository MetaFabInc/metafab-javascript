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


import ApiClient from './ApiClient';
import AuthGame200Response from './model/AuthGame200Response';
import AuthGame200ResponseAllOf from './model/AuthGame200ResponseAllOf';
import AuthGame200ResponseAllOf1 from './model/AuthGame200ResponseAllOf1';
import AuthPlayer200Response from './model/AuthPlayer200Response';
import BatchMintCollectionItemsRequest from './model/BatchMintCollectionItemsRequest';
import BatchTransferCollectionItemsRequest from './model/BatchTransferCollectionItemsRequest';
import BatchTransferCurrencyRequest from './model/BatchTransferCurrencyRequest';
import BurnCollectionItemRequest from './model/BurnCollectionItemRequest';
import BurnCurrencyRequest from './model/BurnCurrencyRequest';
import CollectionModel from './model/CollectionModel';
import ContractModel from './model/ContractModel';
import CreateCollection200Response from './model/CreateCollection200Response';
import CreateCollection200ResponseAllOf from './model/CreateCollection200ResponseAllOf';
import CreateCollection200ResponseAllOfContract from './model/CreateCollection200ResponseAllOfContract';
import CreateCollection200ResponseAllOfContractAllOf from './model/CreateCollection200ResponseAllOfContractAllOf';
import CreateCollectionItemRequest from './model/CreateCollectionItemRequest';
import CreateCollectionItemRequestAttributesInner from './model/CreateCollectionItemRequestAttributesInner';
import CreateCollectionRequest from './model/CreateCollectionRequest';
import CreateContractRequest from './model/CreateContractRequest';
import CreateCurrency200Response from './model/CreateCurrency200Response';
import CreateCurrencyRequest from './model/CreateCurrencyRequest';
import CreateGameRequest from './model/CreateGameRequest';
import CreateLootboxManager200Response from './model/CreateLootboxManager200Response';
import CreateLootboxManagerRequest from './model/CreateLootboxManagerRequest';
import CreatePlayerRequest from './model/CreatePlayerRequest';
import CreateShop200Response from './model/CreateShop200Response';
import CreateShopRequest from './model/CreateShopRequest';
import CurrencyModel from './model/CurrencyModel';
import GameModel from './model/GameModel';
import GetCollections200ResponseInner from './model/GetCollections200ResponseInner';
import GetCollections200ResponseInnerAllOf from './model/GetCollections200ResponseInnerAllOf';
import GetCurrencies200ResponseInner from './model/GetCurrencies200ResponseInner';
import GetCurrencyFees200Response from './model/GetCurrencyFees200Response';
import GetLootboxManagers200ResponseInner from './model/GetLootboxManagers200ResponseInner';
import GetPlayerData200Response from './model/GetPlayerData200Response';
import GetShops200ResponseInner from './model/GetShops200ResponseInner';
import GrantCollectionRoleRequest from './model/GrantCollectionRoleRequest';
import GrantCurrencyRoleRequest from './model/GrantCurrencyRoleRequest';
import LootboxManagerLootbox from './model/LootboxManagerLootbox';
import LootboxManagerModel from './model/LootboxManagerModel';
import MintCollectionItemRequest from './model/MintCollectionItemRequest';
import MintCurrencyRequest from './model/MintCurrencyRequest';
import PlayerModel from './model/PlayerModel';
import PublicGame from './model/PublicGame';
import PublicPlayer from './model/PublicPlayer';
import PublicPlayerWallet from './model/PublicPlayerWallet';
import RemovePlayerConnectedWalletRequest from './model/RemovePlayerConnectedWalletRequest';
import RevokeCollectionRoleRequest from './model/RevokeCollectionRoleRequest';
import SetCollectionApprovalRequest from './model/SetCollectionApprovalRequest';
import SetCollectionItemTimelockRequest from './model/SetCollectionItemTimelockRequest';
import SetCurrencyFeesRequest from './model/SetCurrencyFeesRequest';
import SetLootboxManagerLootboxRequest from './model/SetLootboxManagerLootboxRequest';
import SetPlayerConnectedWallet200Response from './model/SetPlayerConnectedWallet200Response';
import SetPlayerConnectedWalletRequest from './model/SetPlayerConnectedWalletRequest';
import SetPlayerDataRequest from './model/SetPlayerDataRequest';
import SetShopOfferRequest from './model/SetShopOfferRequest';
import ShopModel from './model/ShopModel';
import ShopOffer from './model/ShopOffer';
import TransactionModel from './model/TransactionModel';
import TransferCollectionItemRequest from './model/TransferCollectionItemRequest';
import TransferContractOwnershipRequest from './model/TransferContractOwnershipRequest';
import TransferCurrencyRequest from './model/TransferCurrencyRequest';
import UpdateGameRequest from './model/UpdateGameRequest';
import UpdatePlayerRequest from './model/UpdatePlayerRequest';
import UpgradeContractTrustedForwarderRequest from './model/UpgradeContractTrustedForwarderRequest';
import WalletModel from './model/WalletModel';
import WithdrawFromShopRequest from './model/WithdrawFromShopRequest';
import WriteContractRequest from './model/WriteContractRequest';
import WriteContractRequestArgsInner from './model/WriteContractRequestArgsInner';
import ContractsApi from './api/ContractsApi';
import CurrenciesApi from './api/CurrenciesApi';
import GamesApi from './api/GamesApi';
import ItemsApi from './api/ItemsApi';
import LootboxesApi from './api/LootboxesApi';
import PlayersApi from './api/PlayersApi';
import ShopsApi from './api/ShopsApi';
import TransactionsApi from './api/TransactionsApi';
import WalletsApi from './api/WalletsApi';


/**
* Official JavaScript client for MetaFab..<br>
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
* @version 1.4.1
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The AuthGame200Response model constructor.
     * @property {module:model/AuthGame200Response}
     */
    AuthGame200Response,

    /**
     * The AuthGame200ResponseAllOf model constructor.
     * @property {module:model/AuthGame200ResponseAllOf}
     */
    AuthGame200ResponseAllOf,

    /**
     * The AuthGame200ResponseAllOf1 model constructor.
     * @property {module:model/AuthGame200ResponseAllOf1}
     */
    AuthGame200ResponseAllOf1,

    /**
     * The AuthPlayer200Response model constructor.
     * @property {module:model/AuthPlayer200Response}
     */
    AuthPlayer200Response,

    /**
     * The BatchMintCollectionItemsRequest model constructor.
     * @property {module:model/BatchMintCollectionItemsRequest}
     */
    BatchMintCollectionItemsRequest,

    /**
     * The BatchTransferCollectionItemsRequest model constructor.
     * @property {module:model/BatchTransferCollectionItemsRequest}
     */
    BatchTransferCollectionItemsRequest,

    /**
     * The BatchTransferCurrencyRequest model constructor.
     * @property {module:model/BatchTransferCurrencyRequest}
     */
    BatchTransferCurrencyRequest,

    /**
     * The BurnCollectionItemRequest model constructor.
     * @property {module:model/BurnCollectionItemRequest}
     */
    BurnCollectionItemRequest,

    /**
     * The BurnCurrencyRequest model constructor.
     * @property {module:model/BurnCurrencyRequest}
     */
    BurnCurrencyRequest,

    /**
     * The CollectionModel model constructor.
     * @property {module:model/CollectionModel}
     */
    CollectionModel,

    /**
     * The ContractModel model constructor.
     * @property {module:model/ContractModel}
     */
    ContractModel,

    /**
     * The CreateCollection200Response model constructor.
     * @property {module:model/CreateCollection200Response}
     */
    CreateCollection200Response,

    /**
     * The CreateCollection200ResponseAllOf model constructor.
     * @property {module:model/CreateCollection200ResponseAllOf}
     */
    CreateCollection200ResponseAllOf,

    /**
     * The CreateCollection200ResponseAllOfContract model constructor.
     * @property {module:model/CreateCollection200ResponseAllOfContract}
     */
    CreateCollection200ResponseAllOfContract,

    /**
     * The CreateCollection200ResponseAllOfContractAllOf model constructor.
     * @property {module:model/CreateCollection200ResponseAllOfContractAllOf}
     */
    CreateCollection200ResponseAllOfContractAllOf,

    /**
     * The CreateCollectionItemRequest model constructor.
     * @property {module:model/CreateCollectionItemRequest}
     */
    CreateCollectionItemRequest,

    /**
     * The CreateCollectionItemRequestAttributesInner model constructor.
     * @property {module:model/CreateCollectionItemRequestAttributesInner}
     */
    CreateCollectionItemRequestAttributesInner,

    /**
     * The CreateCollectionRequest model constructor.
     * @property {module:model/CreateCollectionRequest}
     */
    CreateCollectionRequest,

    /**
     * The CreateContractRequest model constructor.
     * @property {module:model/CreateContractRequest}
     */
    CreateContractRequest,

    /**
     * The CreateCurrency200Response model constructor.
     * @property {module:model/CreateCurrency200Response}
     */
    CreateCurrency200Response,

    /**
     * The CreateCurrencyRequest model constructor.
     * @property {module:model/CreateCurrencyRequest}
     */
    CreateCurrencyRequest,

    /**
     * The CreateGameRequest model constructor.
     * @property {module:model/CreateGameRequest}
     */
    CreateGameRequest,

    /**
     * The CreateLootboxManager200Response model constructor.
     * @property {module:model/CreateLootboxManager200Response}
     */
    CreateLootboxManager200Response,

    /**
     * The CreateLootboxManagerRequest model constructor.
     * @property {module:model/CreateLootboxManagerRequest}
     */
    CreateLootboxManagerRequest,

    /**
     * The CreatePlayerRequest model constructor.
     * @property {module:model/CreatePlayerRequest}
     */
    CreatePlayerRequest,

    /**
     * The CreateShop200Response model constructor.
     * @property {module:model/CreateShop200Response}
     */
    CreateShop200Response,

    /**
     * The CreateShopRequest model constructor.
     * @property {module:model/CreateShopRequest}
     */
    CreateShopRequest,

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
     * The GetCollections200ResponseInner model constructor.
     * @property {module:model/GetCollections200ResponseInner}
     */
    GetCollections200ResponseInner,

    /**
     * The GetCollections200ResponseInnerAllOf model constructor.
     * @property {module:model/GetCollections200ResponseInnerAllOf}
     */
    GetCollections200ResponseInnerAllOf,

    /**
     * The GetCurrencies200ResponseInner model constructor.
     * @property {module:model/GetCurrencies200ResponseInner}
     */
    GetCurrencies200ResponseInner,

    /**
     * The GetCurrencyFees200Response model constructor.
     * @property {module:model/GetCurrencyFees200Response}
     */
    GetCurrencyFees200Response,

    /**
     * The GetLootboxManagers200ResponseInner model constructor.
     * @property {module:model/GetLootboxManagers200ResponseInner}
     */
    GetLootboxManagers200ResponseInner,

    /**
     * The GetPlayerData200Response model constructor.
     * @property {module:model/GetPlayerData200Response}
     */
    GetPlayerData200Response,

    /**
     * The GetShops200ResponseInner model constructor.
     * @property {module:model/GetShops200ResponseInner}
     */
    GetShops200ResponseInner,

    /**
     * The GrantCollectionRoleRequest model constructor.
     * @property {module:model/GrantCollectionRoleRequest}
     */
    GrantCollectionRoleRequest,

    /**
     * The GrantCurrencyRoleRequest model constructor.
     * @property {module:model/GrantCurrencyRoleRequest}
     */
    GrantCurrencyRoleRequest,

    /**
     * The LootboxManagerLootbox model constructor.
     * @property {module:model/LootboxManagerLootbox}
     */
    LootboxManagerLootbox,

    /**
     * The LootboxManagerModel model constructor.
     * @property {module:model/LootboxManagerModel}
     */
    LootboxManagerModel,

    /**
     * The MintCollectionItemRequest model constructor.
     * @property {module:model/MintCollectionItemRequest}
     */
    MintCollectionItemRequest,

    /**
     * The MintCurrencyRequest model constructor.
     * @property {module:model/MintCurrencyRequest}
     */
    MintCurrencyRequest,

    /**
     * The PlayerModel model constructor.
     * @property {module:model/PlayerModel}
     */
    PlayerModel,

    /**
     * The PublicGame model constructor.
     * @property {module:model/PublicGame}
     */
    PublicGame,

    /**
     * The PublicPlayer model constructor.
     * @property {module:model/PublicPlayer}
     */
    PublicPlayer,

    /**
     * The PublicPlayerWallet model constructor.
     * @property {module:model/PublicPlayerWallet}
     */
    PublicPlayerWallet,

    /**
     * The RemovePlayerConnectedWalletRequest model constructor.
     * @property {module:model/RemovePlayerConnectedWalletRequest}
     */
    RemovePlayerConnectedWalletRequest,

    /**
     * The RevokeCollectionRoleRequest model constructor.
     * @property {module:model/RevokeCollectionRoleRequest}
     */
    RevokeCollectionRoleRequest,

    /**
     * The SetCollectionApprovalRequest model constructor.
     * @property {module:model/SetCollectionApprovalRequest}
     */
    SetCollectionApprovalRequest,

    /**
     * The SetCollectionItemTimelockRequest model constructor.
     * @property {module:model/SetCollectionItemTimelockRequest}
     */
    SetCollectionItemTimelockRequest,

    /**
     * The SetCurrencyFeesRequest model constructor.
     * @property {module:model/SetCurrencyFeesRequest}
     */
    SetCurrencyFeesRequest,

    /**
     * The SetLootboxManagerLootboxRequest model constructor.
     * @property {module:model/SetLootboxManagerLootboxRequest}
     */
    SetLootboxManagerLootboxRequest,

    /**
     * The SetPlayerConnectedWallet200Response model constructor.
     * @property {module:model/SetPlayerConnectedWallet200Response}
     */
    SetPlayerConnectedWallet200Response,

    /**
     * The SetPlayerConnectedWalletRequest model constructor.
     * @property {module:model/SetPlayerConnectedWalletRequest}
     */
    SetPlayerConnectedWalletRequest,

    /**
     * The SetPlayerDataRequest model constructor.
     * @property {module:model/SetPlayerDataRequest}
     */
    SetPlayerDataRequest,

    /**
     * The SetShopOfferRequest model constructor.
     * @property {module:model/SetShopOfferRequest}
     */
    SetShopOfferRequest,

    /**
     * The ShopModel model constructor.
     * @property {module:model/ShopModel}
     */
    ShopModel,

    /**
     * The ShopOffer model constructor.
     * @property {module:model/ShopOffer}
     */
    ShopOffer,

    /**
     * The TransactionModel model constructor.
     * @property {module:model/TransactionModel}
     */
    TransactionModel,

    /**
     * The TransferCollectionItemRequest model constructor.
     * @property {module:model/TransferCollectionItemRequest}
     */
    TransferCollectionItemRequest,

    /**
     * The TransferContractOwnershipRequest model constructor.
     * @property {module:model/TransferContractOwnershipRequest}
     */
    TransferContractOwnershipRequest,

    /**
     * The TransferCurrencyRequest model constructor.
     * @property {module:model/TransferCurrencyRequest}
     */
    TransferCurrencyRequest,

    /**
     * The UpdateGameRequest model constructor.
     * @property {module:model/UpdateGameRequest}
     */
    UpdateGameRequest,

    /**
     * The UpdatePlayerRequest model constructor.
     * @property {module:model/UpdatePlayerRequest}
     */
    UpdatePlayerRequest,

    /**
     * The UpgradeContractTrustedForwarderRequest model constructor.
     * @property {module:model/UpgradeContractTrustedForwarderRequest}
     */
    UpgradeContractTrustedForwarderRequest,

    /**
     * The WalletModel model constructor.
     * @property {module:model/WalletModel}
     */
    WalletModel,

    /**
     * The WithdrawFromShopRequest model constructor.
     * @property {module:model/WithdrawFromShopRequest}
     */
    WithdrawFromShopRequest,

    /**
     * The WriteContractRequest model constructor.
     * @property {module:model/WriteContractRequest}
     */
    WriteContractRequest,

    /**
     * The WriteContractRequestArgsInner model constructor.
     * @property {module:model/WriteContractRequestArgsInner}
     */
    WriteContractRequestArgsInner,

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
    * The ItemsApi service constructor.
    * @property {module:api/ItemsApi}
    */
    ItemsApi,

    /**
    * The LootboxesApi service constructor.
    * @property {module:api/LootboxesApi}
    */
    LootboxesApi,

    /**
    * The PlayersApi service constructor.
    * @property {module:api/PlayersApi}
    */
    PlayersApi,

    /**
    * The ShopsApi service constructor.
    * @property {module:api/ShopsApi}
    */
    ShopsApi,

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
