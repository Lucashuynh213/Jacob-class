const house1 = {
    size: 3000,
    bedRooms: 5,
    bathRooms: 4,
    lightsOn: true,
    toggleLights: () => {
        house1.lightsOn = !house1.lightsOn;
    }
}

const house2 = {
    size: 3000,
    bedRooms: 5,
    bathRooms: 4
}
class House {
    constructor(size, bedRooms, bathRooms){
        this.size = size;
        this.bathRooms = bathRooms;
        this.bedRooms = bedRooms;
        this.lightsOn = false;
    }

    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }
}

// let house3 = new House ()
// console.log(house1);
// house1.toggleLights();
// console.log(house1);

class Person {
    personInfo(name, age){
        this.name = name;
        this.age = age;
    }
    sayhello() {
       console.log(`Hi my name is ${this.name}.`);
    }
    haveBirthday() {
        this.age = this.age +1;
    }
}
const lucas = new Person('Lucas', 28);
console.log(lucas);
lucas.sayhello();
lucas.haveBirthday();
console.log(lucas)