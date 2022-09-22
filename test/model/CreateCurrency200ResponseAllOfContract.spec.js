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
    instance = new MetafabJavascript.CreateCurrency200ResponseAllOfContract();
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

  describe('CreateCurrency200ResponseAllOfContract', function() {
    it('should create an instance of CreateCurrency200ResponseAllOfContract', function() {
      // uncomment below and update the code to test CreateCurrency200ResponseAllOfContract
      //var instance = new MetafabJavascript.CreateCurrency200ResponseAllOfContract();
      //expect(instance).to.be.a(MetafabJavascript.CreateCurrency200ResponseAllOfContract);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new MetafabJavascript.CreateCurrency200ResponseAllOfContract();
      //expect(instance).to.be();
    });

    it('should have the property gameId (base name: "gameId")', function() {
      // uncomment below and update the code to test the property gameId
      //var instance = new MetafabJavascript.CreateCurrency200ResponseAllOfContract();
      //expect(instance).to.be();
    });

    it('should have the property chain (base name: "chain")', function() {
      // uncomment below and update the code to test the property chain
      //var instance = new MetafabJavascript.CreateCurrency200ResponseAllOfContract();
      //expect(instance).to.be();
    });

    it('should have the property abi (base name: "abi")', function() {
      // uncomment below and update the code to test the property abi
      //var instance = new MetafabJavascript.CreateCurrency200ResponseAllOfContract();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new MetafabJavascript.CreateCurrency200ResponseAllOfContract();
      //expect(instance).to.be();
    });

    it('should have the property address (base name: "address")', function() {
      // uncomment below and update the code to test the property address
      //var instance = new MetafabJavascript.CreateCurrency200ResponseAllOfContract();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updatedAt")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instance = new MetafabJavascript.CreateCurrency200ResponseAllOfContract();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "createdAt")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new MetafabJavascript.CreateCurrency200ResponseAllOfContract();
      //expect(instance).to.be();
    });

    it('should have the property transactions (base name: "transactions")', function() {
      // uncomment below and update the code to test the property transactions
      //var instance = new MetafabJavascript.CreateCurrency200ResponseAllOfContract();
      //expect(instance).to.be();
    });

  });

}));
