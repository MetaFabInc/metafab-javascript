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
    instance = new MetafabJavascript.TransferCollectionItemRequest();
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

  describe('TransferCollectionItemRequest', function() {
    it('should create an instance of TransferCollectionItemRequest', function() {
      // uncomment below and update the code to test TransferCollectionItemRequest
      //var instance = new MetafabJavascript.TransferCollectionItemRequest();
      //expect(instance).to.be.a(MetafabJavascript.TransferCollectionItemRequest);
    });

    it('should have the property address (base name: "address")', function() {
      // uncomment below and update the code to test the property address
      //var instance = new MetafabJavascript.TransferCollectionItemRequest();
      //expect(instance).to.be();
    });

    it('should have the property walletId (base name: "walletId")', function() {
      // uncomment below and update the code to test the property walletId
      //var instance = new MetafabJavascript.TransferCollectionItemRequest();
      //expect(instance).to.be();
    });

    it('should have the property quantity (base name: "quantity")', function() {
      // uncomment below and update the code to test the property quantity
      //var instance = new MetafabJavascript.TransferCollectionItemRequest();
      //expect(instance).to.be();
    });

  });

}));
