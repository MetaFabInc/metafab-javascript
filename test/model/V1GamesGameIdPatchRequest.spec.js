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
    instance = new MetaFabApi.V1GamesGameIdPatchRequest();
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

  describe('V1GamesGameIdPatchRequest', function() {
    it('should create an instance of V1GamesGameIdPatchRequest', function() {
      // uncomment below and update the code to test V1GamesGameIdPatchRequest
      //var instance = new MetaFabApi.V1GamesGameIdPatchRequest();
      //expect(instance).to.be.a(MetaFabApi.V1GamesGameIdPatchRequest);
    });

    it('should have the property currentPassword (base name: "currentPassword")', function() {
      // uncomment below and update the code to test the property currentPassword
      //var instance = new MetaFabApi.V1GamesGameIdPatchRequest();
      //expect(instance).to.be();
    });

    it('should have the property newPassword (base name: "newPassword")', function() {
      // uncomment below and update the code to test the property newPassword
      //var instance = new MetaFabApi.V1GamesGameIdPatchRequest();
      //expect(instance).to.be();
    });

    it('should have the property rpcs (base name: "rpcs")', function() {
      // uncomment below and update the code to test the property rpcs
      //var instance = new MetaFabApi.V1GamesGameIdPatchRequest();
      //expect(instance).to.be();
    });

    it('should have the property resetPublishedKey (base name: "resetPublishedKey")', function() {
      // uncomment below and update the code to test the property resetPublishedKey
      //var instance = new MetaFabApi.V1GamesGameIdPatchRequest();
      //expect(instance).to.be();
    });

    it('should have the property resetSecretKey (base name: "resetSecretKey")', function() {
      // uncomment below and update the code to test the property resetSecretKey
      //var instance = new MetaFabApi.V1GamesGameIdPatchRequest();
      //expect(instance).to.be();
    });

  });

}));
