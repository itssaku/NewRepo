// Parent class
/*
class Vehicle {
    constructor(brand, color) {
        this.brand = brand;
        this.color= color;
    }

    start() {
        console.log(`${this.brand} ${this.color} is starting.`);
    }
}

// Child class inheriting from Vehicle
class Car extends Vehicle {
    constructor(brand, color, doors) {
        super(brand, color); // Call the parent constructor
        this.doors = doors;
    }

    honk() {
        console.log(`${this.brand} ${this.color} is honking!`);
    }
}

// Usage
const myCar = new Car('Toyota', 'blue', 4);
const vehicle = new Vehicle("TATA","White")
myCar.start(); // "Toyota Corolla is starting."
myCar.honk();  // "Toyota Corolla is honking!"

vehicle.start(); 
vehicle.honk(); 
*/
/*

class Animal {
    constructor(name,color){
        this.name=name
        this.color=color
    }

    run(){
        console.log(this.name + " is running !")
    }

    shout(){
        console.log(this.name + " is shouting !")
    }
}

class Monkey extends Animal {

    eatBanana(){
        console.log(this.name + " is eating banana")
    }
}


const ani = new Animal ("Puppy", "White");  //Animal class ka obj 

const monk= new Monkey ("Monny", "Brown");  //Monkey class ka obj 


monk.shout()
monk.run()
monk.eatBanana()

ani.shout()
ani.run()
ani.eatBanana() //will throw an error

*/


//Inheritance in Javascript

//parent class
class Animal {
    constructor(name,color){
       this.name=name
       this.color=color
    }

    //functions
    run(){
       console.log(this.name + " is Running!")
    }

    shout(){
        console.log(this.name + " is Shouting!")
    }
}

//Child class which  extends parent class Animal
class Monkey extends Animal{

    eatBanana(){
        console.log(this.name + " Is Eating Bananas !")
    }

}


const ani = new Animal("Puppy","White");  //obj of Animal

const monk = new Monkey("Monny"," Brown");   //obj of Monkey

monk.shout();
monk.run();
monk.eatBanana();

ani.shout();
ani.run();
ani.eatBanana(); //error
