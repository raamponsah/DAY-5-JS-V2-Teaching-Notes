// alert("Hello, ma nigga")
// prompt("What is your name?")
// confirm("Are you sure you want to delete this?")

// variables: old way var
// new word: let or const

// let age = 34;
// console.log(age)

// age = 1100;

// console.log(age)

// const age =43;
// console.log(age)

// age=100;

// console.log(age)

// let password = "secret";

// if(password != "secret"){
//     console.log("Welcome")
// }else{
//     console.log("Invalid Login")
// }

// let numberOfRooms = '34';

// if('numberOfRooms' == 34){
//     console.log("It is true")
// }

// // triple equals is strict
// if(numberOfRooms === 34){
//     console.log("It is true")
// }else{
//     console.log("It is false")
// }

// checking Types of data types

// console.log(typeof numberOfRooms)

// Coercion
// console.log(typeof(parseInt(numberOfRooms)))


// Loops


// Loop 1: for loop

// for(let a=5; a<10; a++){
//     console.log(`I am on step ${a}`)
// }

// for(let b=0; b<=23; b++){
//     console.log(`I am stepping on ${b}`)
// }

// While
// let x = 0;
// while(x<10){
//     console.log(`I am on step ${x}`);
//     x++;
// }


// Do While
// let y = 0;

// do{
//     console.log(`I am on step ${y}`);

// }while(y<10){
//     y++;
// }


// Arrays

// let names =             ["John", "Jane", "James", "Jill", "Jack"];
// zero based index =       [0]     [1]     [2]     [3]     [4]
// console.log(names)
// console.log(names[0]) // John
// console.log(names[2]) // James
// console.log(names[3])  // Jill

// let countries =       [ "Kenya", "Ghana", "Belgium", "Israel", "Canada" ]
// // zero based index =     [0]     [1]     [2]     [3]     [4]

// // Array Length
// console.log(countries.length)

// let fruits = ["Mango", "Melons", "Guava", "Banana", "Apple", "Orange", "Pineapple", "Grapes", "Watermelon", "Strawberry", "Pears", "Peaches", "Lemon", "Lime", "Cherry", "Blueberry", "Raspberry", "Blackberry", "Cranberry", "Papaya", "Avocado", "Plum", "Apricot", "Pomegranate", "Kiwi", "Pear", "Peach", "Nectarine", "Mango", "Melons", "Guava", "Banana", "Apple", "Orange", "Pineapple", "Grapes", "Watermelon", "Strawberry", "Pears", "Peaches", "Lemon", "Lime", "Cherry", "Blueberry", "Raspberry", "Blackberry", "Cranberry", "Papaya", "Avocado", "Plum", "Apricot", "Pomegranate", "Kiwi", "Pear", "Peach", "Nectarine", "Mango", "Melons", "Guava", "Banana", "Apple", "Orange", "Pineapple", "Grapes", "Watermelon", "Strawberry", "Pears", "Peaches", "Lemon", "Lime", "Cherry", "Blueberry", "Raspberry", "Blackberry", "Cranberry", "Papaya", "Avocado", "Plum", "Apricot", "Pomegranate", "Kiwi", "Pear", "Peach", "Nectarine", "Mango", "Melons", "Guava", "Banana", "Apple", "Orange", "Pineapple", "Grapes", "Watermelon", "Strawberry", "Pears", "Peaches", "Lemon", "Lime", "Cherry", "Blueberry", "Raspberry", "Blackberry", "Cranberry", "Papaya", "Avocado", "Plum", "Apricot", "Pomegranate", "Kiwi", "Pear", "Peach", "Nectarine", "Mango", "Melons", "Guava", "Banana", "Apple", "Orange", "Pineapple", "Grapes", "Watermelon", "Strawberry", "Pears", "Cassava"]

// console.log(fruits.length)

// for(let a=0;a<fruits.length;a++){
//     console.log(fruits[a])
// }



// const cars = ["Tesla","Toyota","Ford","Benz", "Lamborghini", "Volks Wagon", "Mustang","Range Rover","BMW","JEEP","Hyundai","Suzuki"]

// console.log(cars.length)

// for(let a=0;a<cars.length;a++){
//     console.log(cars[a])
// }

                // cities[0]    cities[1]   cities[2]   cities[3]   cities[4]   cities[5]   cities[6]   cities[7]   cities[8]   cities[9]
// const cities = ["Takoradi",     "Accra",    "Kumasi", "Sunyani",    "Accra", "Wa", "Bolgatanga","Cape Coast","Bawku", "Axim"]
// console.log(cities.length)

// for(let a=0;a<cities.length;a++){

//     if(cities[a] == "Accra"){
//         console.log("i HAVE FOUND IT!")
//         break;
//     }else{
//     console.log(cities[a])
//     }

// }



// FOREACH




// let a=0;

// while(a<iceCreamFlavors.length){
//     console.log(iceCreamFlavors[a])
//     a++;
// }



const  iceCreamFlavors = ["Chocolate","Vanilla","Banana","Strawberry","Cookies and Cream","Mint", "Mango", "Pistachio", "Coffee", "Rum Raisin", "Rocky Road", "Neopolitan", "Pralines and Cream", "Mocha Almond Fudge", "Butter Pecan", "Peanut Butter", "Peppermint Stick", "Cake Batter", "Mint Chocolate Chip", "Cookie Dough", "Chocolate Chip Cookie Dough"]
console.log(iceCreamFlavors.length)

for(let a=iceCreamFlavors.length-1; a>-1; a--){
    console.log(iceCreamFlavors[a])
}


// iceCreamFlavors.forEach(function(flavor){