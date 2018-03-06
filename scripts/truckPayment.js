(function (window){
  "use strict";
  var App = window.App || {};

  function Truck(truckId, db){
    this.truckId = truckId;
    this.db = db;
  }

  Truck.prototype.submitPayment = function (payment){
    

    console.log("Payment has been added for " + payment.cardnumber);
    this.db.add(payment.cardnumber, payment);

  };

  // Truck.prototype.deliverOrder = function (customerId){
  //   console.log("Delivering order for " + customerId);
  //   this.db.remove(customerId);
  // };

  Truck.prototype.printOrders = function(){
    var customerIdArray = Object.keys(this.db.getAll());

    console.log("Truck #" + this.truckId + "has pending orders: ");
    customerIdArray.forEach(function (id){
      console.log(this.db.get(id));
    }.bind(this));
  };

  App.Truck = Truck;
  window.App = App;


})(window);
