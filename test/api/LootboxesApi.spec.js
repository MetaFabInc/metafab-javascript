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
    instance = new MetafabJavascript.LootboxesApi();
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

  describe('LootboxesApi', function() {
    describe('createLootboxManager', function() {
      it('should call createLootboxManager successfully', function(done) {
        //uncomment below and update the code to test createLootboxManager
        //instance.createLootboxManager(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getLootboxManagerLootbox', function() {
      it('should call getLootboxManagerLootbox successfully', function(done) {
        //uncomment below and update the code to test getLootboxManagerLootbox
        //instance.getLootboxManagerLootbox(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getLootboxManagerLootboxes', function() {
      it('should call getLootboxManagerLootboxes successfully', function(done) {
        //uncomment below and update the code to test getLootboxManagerLootboxes
        //instance.getLootboxManagerLootboxes(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getLootboxManagers', function() {
      it('should call getLootboxManagers successfully', function(done) {
        //uncomment below and update the code to test getLootboxManagers
        //instance.getLootboxManagers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('openLootboxManagerLootbox', function() {
      it('should call openLootboxManagerLootbox successfully', function(done) {
        //uncomment below and update the code to test openLootboxManagerLootbox
        //instance.openLootboxManagerLootbox(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('removeLootboxManagerLootbox', function() {
      it('should call removeLootboxManagerLootbox successfully', function(done) {
        //uncomment below and update the code to test removeLootboxManagerLootbox
        //instance.removeLootboxManagerLootbox(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('setLootboxManagerLootbox', function() {
      it('should call setLootboxManagerLootbox successfully', function(done) {
        //uncomment below and update the code to test setLootboxManagerLootbox
        //instance.setLootboxManagerLootbox(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
