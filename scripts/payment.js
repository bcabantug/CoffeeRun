//IIFE to start up
(function (window) {
  "use strict";
  var FORM_SELECTOR = "[data-payment=\"form\"]";
  var App = window.App;
  var Truck = App.Truck;
  var DataStore = App.DataStore;
  var FormHandler = App.FormHandler;
  var myTruck = new Truck("paid", new DataStore());
  window.myTruck = myTruck;
  var formHandler = new FormHandler(FORM_SELECTOR);

  formHandler.addSubmitHandler(myTruck.submitPayment.bind(myTruck));
  console.log(formHandler);
  //
})(window);
