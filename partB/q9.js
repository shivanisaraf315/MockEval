function displayCar(){
    console.log("Car Selected")
}
function displayTruck(){
    console.log("Truck selected")
}
function displayBike(){
    console.log("bike selected")
}
function vehicleInfo(vehicleCategory,callbackFn){
    callbackFn();
}
vehicleInfo("Car",displayCar);
vehicleInfo("Truck",displayTruck);
vehicleInfo("Bike",displayBike);