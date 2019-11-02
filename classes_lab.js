// # Class Exercises

// (1 - 8 are the same as on the previous lab, but creating classes using ES6 syntax instead of constructor functions)

// ## Question 1

// a. Write a class called `Person` that has 3 properties: a first name, a last name and a middle name. Create 2 instances of a `Person`. Print one of their first names.
class Person {
    constructor(firstName, lastName, middleName){
        this.firstName = firstName;
        this.lastName = lastName;
        this.middleName = middleName;
    }

    fullName(){
        return  `${this.firstName} ${this.middleName} ${this.lastName}`;
    }

}
let person1 = new Person("kevin","wong","j");
let person2 = new Person("farrah","rios","isabelle");
console.log(person2.firstName);

// b. Write a method in `Person` called `fullName` that will return a formatted string of an instance's full name. Call this method on both the instances you created in part a.
console.log(person1.fullName());
console.log(person2.fullName());

// ## Question 2

// a. Create a class called `Book` that has properties `title`, `author` and `rating`. Create some instances of `Book`.
class Book {
    constructor (title, author, rating){
        Object.assign(this, {title, author, rating});
    }

    isGood(){
        if(this.rating >= 7){
          return true;
        } else {
          return false;
        }
    }
}
let book1 = new Book("Sapiens: A Brief History of Humankind","Yuval Noah Harari", 9.2);
let book2 = new Book("Radical Candor: How to Get What You Want by Saying What You Mean","Kim Scott", 8.4);

// b. Add a method to `Book` called `isGood` that returns `true` if its rating is greater than or equal to 7
console.log(book1.isGood());
console.log(book2.isGood());

// ## Question 3

// a. Create a `Dog` class with four properties: `name (string), breed (string), mood (string), and hungry (boolean)`.
class Dog {
    constructor(name, breed, mood, hungry){
        Object.assign(this,{name, breed, mood, hungry});
        // this.name = name;
        // this.breed = breed;
        // this.mood = mood;
        // this.hungry = hungry;
    }

    playFetch(){
        this.hungry = true;
        this.mood = "playful";
        return "Ruff!";
    }

    feed(){
        if(this.hungry === true){
            this.hungry = false;
            return "Woof!"
        } else{
            return "The dog doesn't look hungry..";
        }
    }

    toString(){
        return "Dog's name is " + this.name + ". Dog's breed is " + this.breed + ". Dog's mood is " + this.mood + ". Is the dog hungry? " + this.hungry;
    }
}

let dog1 = new Dog("Milo","Yorkie","happy", false);
let dog2 = new Dog("Hero","Collie","excited", true);

// b. Add a method called `playFetch`. It should set the dog's `hungry` property to `true`, set its mood property to `playful`, and log "Ruff!"
console.log(dog1.playFetch());
console.log(dog1);

// c. Add a method called `feed`. If the dog is hungry, it should set `hungry` to `false` and print "Woof!" If the dog is not hungry, it should log "The dog doesn't look hungry"
console.log(dog1.feed());
console.log(dog1);
console.log(dog2.feed());
console.log

// d. Add a method called `toString` that returns a description of the dog:
console.log(dog1.toString());
console.log(dog2.toString());

// ## Question 4

// There are three common scales that are used to measure temperature: Celsius, Fahrenheit, and Kelvin:

// C = (F - 32) / 1.8
// F = 1.8 * C + 32
// K = C + 273

// a. Make an object called `freezingPoint` that has three properties: `celsius`, `fahrenheit`, and `kelvin`. Give them all values equal to the freezing point of water.
let freezingPoint = {
    celsius: 0,
    fahrenheit: 32,
    kelvin: 273
}


// b. Make a class called `Celsius` that has one property: `celsius`, and two methods `getFahrenheitTemp`, and `getKelvinTemp`.
class Celsius {

    constructor(celsius){
        this.celsius = celsius;
    }
    getFahrenheitTemp(){
        return 1.8 * this.celsius + 32;
    }
    getKelvinTemp(){
        return this.celsius + 273;
    }

    isBelowFreezing(){
        if(this.celsius < freezingPoint["celsius"]){
            return true;
        } else {
            return false;
        }
    }
}

// ```js
let outsideTempt = new Celsius(10.0)
console.log(outsideTempt.celsius) //returns 10.0
console.log(outsideTempt.getKelvinTemp()) //returns 283.0
console.log(outsideTempt.getFahrenheitTemp()) //returns 50.0
// ```

// c. Give `Celsius` a method called `isBelowFreezing` that returns a `Bool` (true if the temperature is below freezing).
console.log("outsideTempt below freezing? " + outsideTempt.isBelowFreezing());
let temp1 = new Celsius(-5.0);
console.log("temp 1 below freezing? " + temp1.isBelowFreezing());

// ## Question 5

// a. Create a class called `Movie` that has properties for `name`, `year`, `genre`, `cast`, and `description`. Create an instance of your `Movie`
class Movie {
    constructor(name, year, genre, cast, description) {
        this.name = name;
        this.year = year;
        this.genre = genre;
        this.cast = cast;
        this.description = description;
    }
    blurb(){
        return `Lion King came out in ${this.year}. The plot is: ${this.description}`
    }
}
let movieOne = new Movie("Lion King", "1994", "Animation", "Simba, Mufasa, Scar, Nala", "A Lion cub crown prince is tricked by a treacherous uncle into thinking he caused his father's death and flees into exile in despair, only to learn in adulthood his identity and his responsibilities.");

// b. Create an method inside `Movie` called `blurb` that returns a formatted string describing the movie.
// Ex: "Borat came out in 2006. It was an odd film starring Sacha Baron Cohen as a man named Borat who was visiting America from Kazakhstan."
console.log(movieOne.blurb());



// ## Question 6

// Write a class Vector that represents a vector in two-dimensional space.
// It takes two number arguments: `x` and `y` parameters, which it should be saved to properties of the same name.

// Give the Vector prototype two methods, `plus` and `minus`, that take another vector as an argument and
// returns a new vector that has the sum or difference of the two vectors’ (the one in `this` and the parameter) x and y values.

// Add a method `getLength` to the prototype that computes the length of the vector ;
// that is, the distance of the point (x, y) from the origin (0, 0).(a^2 + b^2 = c^2)

// [Vectors at mathisfun.com](https://www.mathsisfun.com/algebra/vectors.html)

class Vector {
    constructor( x, y){
        this.x = x;
        this.y = y;
    }

    plus(vector){
        return new Vector(this.x + vector.x, this.y + vector.y);
    }

    minus(vector){
        return new Vector(this.x - vector.x, this.y - vector.y);
    }

    getLength(length){
        length = Math.sqrt(this.x**2 + this.y**2);
        return length;
    }
}

// ```js
var v1 = new Vector(1, 2);
var v2 = new Vector(2, 3)
console.log(v1.plus(v2));
// // => Vector {x: 3, y: 5}
console.log(v1.minus(v2));
// // => Vector {x: -1, y: -1}

var v3 = new Vector(3, 4)
console.log(v3.getLength());
// // => 5
// ```



// ## Question 7

// a. Write a class called `Cylinder` that has properties `radius` and `height`.  Create an instance of a Cylinder.

// b. Add an instance method `getVolume` that returns the [volume](https://www.mathopenref.com/cylindervolume.html)

// c. Add an instance method `getSurfaceArea` that returns the [surface area](https://www.mathopenref.com/cylinderareamain.html)
class Cylinder {
    constructor(radius, height){
        Object.assign(this, {radius, height});
    }

    getVolume(){
        return (Math.PI * this.radius**2 * this.height).toFixed(2);
    }

    getSurfaceArea(){
        return ((2*Math.PI*this.radius**2) + (2*Math.PI*this.radius*this.height)).toFixed(2);
    }
}
let cylinder1 = new Cylinder (3, 5);
console.log(cylinder1.getVolume());
console.log(cylinder1.getSurfaceArea());

// ## Question 8

// [Dates in JavaScript](https://www.digitalocean.com/community/tutorials/understanding-date-and-time-in-javascript#targetText=The%20Date%20object%20is%20a,the%20current%20date%20and%20time.)

// a. Write a class called `Post` that has properties `datePosted`, `user`, and `text`.  Create an array of `Post` objects.
class Post {
    constructor (datePosted, user, text){
        Object.assign(this, {datePosted, user, text});
    }

    postToday(){
        let today = new Date();
        if (this.datePosted.getDate() === today.getDate()){
            return true;
        } else {
            return false;
        }
    }
}
let postObjs = [
    new Post(new Date(2019,10,21), "corey", "Who's ready for some JAVASCRIPT"),
    new Post(new Date(2019,10,22), "kevin", "I love javascripting"),
    new Post(new Date(2019,10,23), "farrah", "I also love javascripting"),
]
// b. Create an instance method that returns whether or not the post was made today.
console.log("Posted today? " + postObjs[0].postToday());
console.log("Posted today? " + postObjs[1].postToday());
// c. Filter your array of `Post` objects to only include posts made today.
console.log(postObjs.filter( (el) => el.postToday()));
// ## Question 9

// a. Make a class called `Car` with properties `make` and `model`.  Create an instance of a `Car`

// b. Make a class called `Bike` with properties `gears` and `hasBell`.  Create an instance of `Bike`

// c. Give each class a static method called `numberOfWheels` that returns the number of wheels (2 for bikes, 4 for cars).  Why does it make sense for this to be a static method instead of an instance method?

// ## Question 10

// a. Make a class called `Vehicle` with properties `color` and `name`.  Give it a method called `makeSound` which logs "WHHOOSSSH" to the console

// b. Modify your `Car` and `Bike` classes from Question 7 to extend the `Vehicle` class.

class Vehicle{
    constructor(color, name){
        this.color = color;
        this.name = name;
    }

    makeSound() {
        console.log("WHHOOSSSH");
    }
}

class Car extends Vehicle {
    constructor(color, name, make, model){
        super(color,name);
        this.make = make;
        this.model = model;
    }

    static numberOfWheels(){
        return 4;
    }
}
let car = new Car("RS7 Sportback Coupe","Audi"); 

class Bike extends Vehicle {
    constructor(color, name, gears, hasBell){
        super(color, name);
        this.gears = gears;
        this.hasBell = hasBell;
    }
    static numberOfWheels(){
        return 2;
    }
}
let bike = new Bike("gears","hasBell");

// c. Create a new `Bike` instance that has a `color` of "green" and `name` "Bikey McBikeface"
let bikeyMcBikeFace = new Bike("green", "bikeyMcBikeFace", "gears", "hasBell");
console.log(bikeyMcBikeFace);


// d. Create a new `Car` instance that has a `color` of "red" and `name` "Carry McCarface"
let carryMcCarface = new Car("red", "Carry McCarface", "WRX STi", "Subaru");
console.log(carryMcCarface);