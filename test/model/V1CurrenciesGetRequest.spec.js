/**
 * MetaFab API
 * Documentation for the MetaFab API. Complete API references and guides can be found at: https://trymetafab.com
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
    factory(root.expect, root.MetaFabApi);
  }
}(this, function(expect, MetaFabApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new MetaFabApi.V1CurrenciesGetRequest();
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

  describe('V1CurrenciesGetRequest', function() {
    it('should create an instance of V1CurrenciesGetRequest', function() {
      // uncomment below and update the code to test V1CurrenciesGetRequest
      //var instance = new MetaFabApi.V1CurrenciesGetRequest();
      //expect(instance).to.be.a(MetaFabApi.V1CurrenciesGetRequest);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new MetaFabApi.V1CurrenciesGetRequest();
      //expect(instance).to.be();
    });

    it('should have the property symbol (base name: "symbol")', function() {
      // uncomment below and update the code to test the property symbol
      //var instance = new MetaFabApi.V1CurrenciesGetRequest();
      //expect(instance).to.be();
    });

    it('should have the property supplyCap (base name: "supplyCap")', function() {
      // uncomment below and update the code to test the property supplyCap
      //var instance = new MetaFabApi.V1CurrenciesGetRequest();
      //expect(instance).to.be();
    });

    it('should have the property chain (base name: "chain")', function() {
      // uncomment below and update the code to test the property chain
      //var instance = new MetaFabApi.V1CurrenciesGetRequest();
      //expect(instance).to.be();
    });

  });

}));
