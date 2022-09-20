class SuperHero {
    constructor(name, power){
        this.name = name;
        this.power = power;
    }
    getPower(){
        return this.power? this.power : "I have no power";
    }
    goForGrocery(budget){
        return this.power && budget > 1000? this.getPower() : "Price is too high I cant't buy"

    }

}

const batman = new SuperHero ("batman", "Deep tweak");


console.log(batman.goForGrocery(00));