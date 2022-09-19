//class basically a template or a blueprint of an object.
// for example Car is a blueprint or class of a brand or object tesla(represent a car brand).

//ES6 
class Car {
    constructor (brand, model, color){
        this.brand = brand;
        this.model = model;
        this.color = color;
    }
}

const tesla = new Car("tesla",'anymodel', "black");

console.log(tesla);

//ES5 or less

function Bike (brand, model, color) {
    this.brand = brand;
    this.model = model;
    this.color = color;
}
const honda = new Bike("Honda",'anymodel', "black");

console.log(honda);