/**
 * MetaFab API
 * Complete MetaFab API references and guides can be found at: https://trymetafab.com
 *
 * The version of the OpenAPI document: 1.5.0
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
    instance = new MetafabJavascript.EcosystemGameModel();
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

  describe('EcosystemGameModel', function() {
    it('should create an instance of EcosystemGameModel', function() {
      // uncomment below and update the code to test EcosystemGameModel
      //var instance = new MetafabJavascript.EcosystemGameModel();
      //expect(instance).to.be.a(MetafabJavascript.EcosystemGameModel);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new MetafabJavascript.EcosystemGameModel();
      //expect(instance).to.be();
    });

    it('should have the property ecosystemId (base name: "ecosystemId")', function() {
      // uncomment below and update the code to test the property ecosystemId
      //var instance = new MetafabJavascript.EcosystemGameModel();
      //expect(instance).to.be();
    });

    it('should have the property gameId (base name: "gameId")', function() {
      // uncomment below and update the code to test the property gameId
      //var instance = new MetafabJavascript.EcosystemGameModel();
      //expect(instance).to.be();
    });

    it('should have the property updatedAt (base name: "updatedAt")', function() {
      // uncomment below and update the code to test the property updatedAt
      //var instance = new MetafabJavascript.EcosystemGameModel();
      //expect(instance).to.be();
    });

    it('should have the property createdAt (base name: "createdAt")', function() {
      // uncomment below and update the code to test the property createdAt
      //var instance = new MetafabJavascript.EcosystemGameModel();
      //expect(instance).to.be();
    });

  });

}));
