'use strict'
//Step 5 & 6 of activity - this includes the vehicle class as a module
const VehicleModule = require("./vehicle")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

// Step 6  of activity
// Step 7 - see constructor in declaration
// Step 8 - super keyword is included
// Step 9 - properties are included
// Step 10 - methods with psuedo logic included
class Car extends VehicleModule.Vehicle {
    constructor(make, model, year, color, mileage, maximumPassengers, passenger,numberOfWheels, maximumSpeed, fuel, scheduleService) {
        super(make, model, year, color, mileage);

        this.maximumPassengers = maximumPassengers;
        this.passenger = passenger;
        this.numberOfWheels = numberOfWheels;
        this.maximumSpeed = maximumSpeed;
        this.fuel = fuel;
        this.scheduleService = scheduleService;
    }
    
    loadPassenger(num){
        if (this.passenger < this.maximumPassengers)
            `then availableRoom` == true
         }

    start(){
        if (this.fuel > 0){
            `then start` == true
        }}

    scheduleService(mileage){
        if (mileage > 30000) {
         `time for maintenance` == true
        }
        }

    }

const a28 = new Car ("Mecury", "Sedan", 1965, "black", 2000, 5, 0, 4, 160, 10, false)

// testing code by using console.log below 
console.log(a28)  // returns object class as it has been instansiated.

console.log(a28.typeOfVehicle(4))  // returns the result of the method inherited from parent class Vehicle to see if vehicle module was imported properly
