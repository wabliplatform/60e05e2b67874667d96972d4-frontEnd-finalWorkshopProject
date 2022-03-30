/**
 * TempApi
 * This is a sample openApi document
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: lampralexandros@gmail.com
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
    factory(root.expect, root.TempApi);
  }
}(this, function(expect, TempApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new TempApi.Project();
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

  describe('Project', function() {
    it('should create an instance of Project', function() {
      // uncomment below and update the code to test Project
      //var instane = new TempApi.Project();
      //expect(instance).to.be.a(TempApi.Project);
    });

    it('should have the property id (base name: "_id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new TempApi.Project();
      //expect(instance).to.be();
    });

    it('should have the property pImage (base name: "pImage")', function() {
      // uncomment below and update the code to test the property pImage
      //var instance = new TempApi.Project();
      //expect(instance).to.be();
    });

    it('should have the property pTitle (base name: "pTitle")', function() {
      // uncomment below and update the code to test the property pTitle
      //var instance = new TempApi.Project();
      //expect(instance).to.be();
    });

    it('should have the property pEnd (base name: "pEnd")', function() {
      // uncomment below and update the code to test the property pEnd
      //var instance = new TempApi.Project();
      //expect(instance).to.be();
    });

    it('should have the property pWebsite (base name: "pWebsite")', function() {
      // uncomment below and update the code to test the property pWebsite
      //var instance = new TempApi.Project();
      //expect(instance).to.be();
    });

    it('should have the property pStart (base name: "pStart")', function() {
      // uncomment below and update the code to test the property pStart
      //var instance = new TempApi.Project();
      //expect(instance).to.be();
    });

    it('should have the property pDuration (base name: "pDuration")', function() {
      // uncomment below and update the code to test the property pDuration
      //var instance = new TempApi.Project();
      //expect(instance).to.be();
    });

    it('should have the property pGA (base name: "pGA")', function() {
      // uncomment below and update the code to test the property pGA
      //var instance = new TempApi.Project();
      //expect(instance).to.be();
    });

    it('should have the property pWorkpackage (base name: "pWorkpackage")', function() {
      // uncomment below and update the code to test the property pWorkpackage
      //var instance = new TempApi.Project();
      //expect(instance).to.be();
    });

    it('should have the property pDeliverable (base name: "pDeliverable")', function() {
      // uncomment below and update the code to test the property pDeliverable
      //var instance = new TempApi.Project();
      //expect(instance).to.be();
    });

    it('should have the property pAbstract (base name: "pAbstract")', function() {
      // uncomment below and update the code to test the property pAbstract
      //var instance = new TempApi.Project();
      //expect(instance).to.be();
    });

    it('should have the property pDescription (base name: "pDescription")', function() {
      // uncomment below and update the code to test the property pDescription
      //var instance = new TempApi.Project();
      //expect(instance).to.be();
    });

  });

}));
