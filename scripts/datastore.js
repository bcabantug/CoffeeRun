//IIFE for module
(function(window){
  "use strict";
  //checks to see if the App property is present to assign, or create new object if not present
  var App = window.App || {};

  function Datastore(){
    //console.log("running the Datastore function");
    this.data = {};
  }
  //function is accessible everytime an instance is created/ function is accessible
  Datastore.prototype.add = function (key, val){
    this.data[key] = val;
  };

  //function to get individual datra
  Datastore.prototype.get = function (key){
    return this.data[key];
  };
  //function to return multiple data
  Datastore.prototype.getAll = function(){
    return this.data;
  };

  Datastore.prototype.remove = function(key){
    delete this.data[key];
  };

  App.Datastore = Datastore;
  window.App = App;

})(window);
