/**
 * MetaFab API
 *  Complete MetaFab API references and guides can be found at: https://trymetafab.com
 *
 * The version of the OpenAPI document: 1.3.0
 * Contact: metafabproject@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.MetafabJavascript);
  }
}(this, function(expect, MetafabJavascript) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new MetafabJavascript.AuthGame200Response();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('AuthGame200Response', function() {
    it('should create an instance of AuthGame200Response', function() {
      // uncomment below and update the code to test AuthGame200Response
      //var instance = new MetafabJavascript.AuthGame200Response();
      //expect(instance).to.be.a(MetafabJavascript.AuthGame200Response);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new MetafabJavascript.AuthGame200Response();
      //expect(instance).to.be();
    });

    it('should have the property walletId (base name: "walletId")', function() {
      // uncomment below and update the code to test the property walletId
      //var instance = new MetafabJavascript.AuthGame200Response();
      //expect(instance).to.be();
    });

    it('should have the property fundingWalletId (base name: "fundingWalletId")', function() {
      // uncomment below and update the code to test the property fundingWalletId
      //var instance = new MetafabJavascript.AuthGame200Response();
      //expect(instance).to.be();
    });

    it('should have the property email (base name: "email")', function() {
      // uncomment below and update the code to test the property email
      //var instance = new MetafabJavascript.AuthGame200Response();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new MetafabJavascript.AuthGame200Response();
      //expect(instance).to.be();
    });

    it('should have the property rpcs (base name: "rpcs")', function() {
      // uncomment below and update the code to test the property rpcs
      //var instance = new MetafabJavascript.AuthGame200Response();
      //expect(instance).to.be();
    });

    it('should have the property publishedKey (base name: "publishedKey")', function() {
      // uncomment below and update the code to test the property publishedKey
      //var instance = new MetafabJavascript.AuthGame200Response();
      //expect(instance).to.be();
    });

    it('should have the property secretKey (base name: "secretKey")', function() {
      // uncomment below and update the code to test the property secretKey
      //var instance = new MetafabJavascript.AuthGame200Response();
      //expect(instance).to.be();
    });

    it('should have the property verified (base name: "verified")', function() {
      // uncomment below and update the code to test the property verified
      //var instance = new MetafabJavascript.AuthGame200Response();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updatedAt")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instance = new MetafabJavascript.AuthGame200Response();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "createdAt")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new MetafabJavascript.AuthGame200Response();
      //expect(instance).to.be();
    });

    it('should have the property wallet (base name: "wallet")', function() {
      // uncomment below and update the code to test the property wallet
      //var instance = new MetafabJavascript.AuthGame200Response();
      //expect(instance).to.be();
    });

    it('should have the property fundingWallet (base name: "fundingWallet")', function() {
      // uncomment below and update the code to test the property fundingWallet
      //var instance = new MetafabJavascript.AuthGame200Response();
      //expect(instance).to.be();
    });

  });

}));
