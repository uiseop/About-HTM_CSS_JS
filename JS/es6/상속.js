class Vehicle{
    constructor(){
        this.passengers = []
        console.log("Vehicle created")
    }
    addPassenger(p){
        this.passengers.push(p)
    }
}

class Car extends Vehicle{
    constructor(){
        super()
        console.log("Car created");
    }
    deployAirbags(){
        console.log("BWOOSH!!");
    }
}

const v = new Vehicle();
v.addPassenger("Fank")
v.addPassenger("Judy")
console.log(v.passengers);

const c = new Car()
c.addPassenger("Alice")
console.log(c.passengers);
c.deployAirbags()