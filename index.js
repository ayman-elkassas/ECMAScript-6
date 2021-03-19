//how to make banner comment - ctrl+shift+p and select banner h3

/*
.####.##....##.########.########...#######..########..##.....##..######..########.####..#######..##....##
..##..###...##....##....##.....##.##.....##.##.....##.##.....##.##....##....##.....##..##.....##.###...##
..##..####..##....##....##.....##.##.....##.##.....##.##.....##.##..........##.....##..##.....##.####..##
..##..##.##.##....##....########..##.....##.##.....##.##.....##.##..........##.....##..##.....##.##.##.##
..##..##..####....##....##...##...##.....##.##.....##.##.....##.##..........##.....##..##.....##.##..####
..##..##...###....##....##....##..##.....##.##.....##.##.....##.##....##....##.....##..##.....##.##...###
.####.##....##....##....##.....##..#######..########...#######...######.....##....####..#######..##....##
*/

//todo:comment
// !alert
/* 
    multi line
*/
// console.log("Hello World")

/*
.########.....###.....######..####..######...######.
.##.....##...##.##...##....##..##..##....##.##....##
.##.....##..##...##..##........##..##.......##......
.########..##.....##..######...##..##........######.
.##.....##.#########.......##..##..##.............##
.##.....##.##.....##.##....##..##..##....##.##....##
.########..##.....##..######..####..######...######.
*/

// * variables:

let name = 'ayman';
console.log(name)
    //todo:name is undefined if not assign any value

let firstName = 'ayman';
lastName = "elkassas";
//todo: but best practise each variable has let as declare

// * constant:
const interestRate = 0.3
    // ! can not change const var => interestRate=1;
console.log(interestRate)

// * primitive types:
let fname = 'ayman'; // todo:string literal
let age = 30; // todo:number literal
let isApproved = false; // todo:Boolean literal
let lname = undefined;
let selectedColor = null;

// * dynamic typing
console.log(typeof name);

// * reference type (object-array-function)
// * Objects (reference type)
let person = {
    name: 'ayman',
    age: 25
}

console.log(person.name)

//* Arrays
let selectedColors = ['red', 'blue']
selectedColors[2] = "yellow"
console.log(selectedColors[2])

//* Functions
// performing function
function greet() {
    console.log("Function")
}

function sum(x, y) {
    return x + y
}

greet();
sum(5, 6)

/*
..#######..########..########.########.....###....########..#######..########...######.
.##.....##.##.....##.##.......##.....##...##.##......##....##.....##.##.....##.##....##
.##.....##.##.....##.##.......##.....##..##...##.....##....##.....##.##.....##.##......
.##.....##.########..######...########..##.....##....##....##.....##.########...######.
.##.....##.##........##.......##...##...#########....##....##.....##.##...##.........##
.##.....##.##........##.......##....##..##.....##....##....##.....##.##....##..##....##
..#######..##........########.##.....##.##.....##....##.....#######..##.....##..######.
*/

// * Operators

// Lose Equality == value only
// Strict Equality === type and value
// ternary operator
let points = 110;
let type = points > 100 ? 'gold' : 'silver';
console.log(type);

// any value is true (false || 1 is 1), (1 || 2 is 1)
// false || 2 || 1 is 2 first true is selected

// * SWAP
let a = 1,
    b = 2;
console.log(a, b)
b = [a, a = b][0]
console.log(a, b)

/*
..######...#######..##....##.########.########...#######..##..........########.##........#######..##......##
.##....##.##.....##.###...##....##....##.....##.##.....##.##..........##.......##.......##.....##.##..##..##
.##.......##.....##.####..##....##....##.....##.##.....##.##..........##.......##.......##.....##.##..##..##
.##.......##.....##.##.##.##....##....########..##.....##.##..........######...##.......##.....##.##..##..##
.##.......##.....##.##..####....##....##...##...##.....##.##..........##.......##.......##.....##.##..##..##
.##....##.##.....##.##...###....##....##....##..##.....##.##..........##.......##.......##.....##.##..##..##
..######...#######..##....##....##....##.....##..#######..########....##.......########..#######...###..###.
*/

// if .. else
// if .. elseif .. else
// switch case

/*
.##........#######...#######..########...######.
.##.......##.....##.##.....##.##.....##.##....##
.##.......##.....##.##.....##.##.....##.##......
.##.......##.....##.##.....##.########...######.
.##.......##.....##.##.....##.##..............##
.##.......##.....##.##.....##.##........##....##
.########..#######...#######..##.........######.
*/

// for(let i=0;i<5;i++){
//     console.log(i)
// }

// while(cond){
//     st
//     inc
// }

// do .. while

// for .. in
for (let key in person) {
    console.log(key, person[key])
}

let colors = ['red', 'blue']
    // for .. of -> should be an array
for (let color of colors) {
    console.log(color)
}

// break and continue

/*
..#######..########........##.########..######..########..######.
.##.....##.##.....##.......##.##.......##....##....##....##....##
.##.....##.##.....##.......##.##.......##..........##....##......
.##.....##.########........##.######...##..........##.....######.
.##.....##.##.....##.##....##.##.......##..........##..........##
.##.....##.##.....##.##....##.##.......##....##....##....##....##
..#######..########...######..########..######.....##.....######.
*/

//Basics

let obj = {
    isVisible: true,
    draw: function() {
        console.log('google')
    },
    create() {
        console.log('facebook')
    },
}

obj.draw()
obj.create()

//* Dynamic Nature of Objects
const circle = {
    radius: 1,
    draw() {
        console.log('draw')
    }
}

circle.color = 'red'
circle.draw = function() {}

// to delete prop in object
delete circle.color

console.log(circle)

// * Constructor Property
//todo:Factory function as a class (return object)
function createCircle(radius) {
    return {
        radius,
        draw() {
            console.log('draw')
        }
    }
}

const circleObject = createCircle(1);

// * CONSTRUCTOR FUNCTION
function CircleObj(radius) {
    this.radius=radius;
    this.draw=function() {
        console.log('draw')
    }
}

const another=new CircleObj(1)

// * Functions are objects is a js concept

// CircleObj.name
// CircleObj.length
// CircleObj.toString()
// CircleObj.constructor
// CircleObj.call({},1)
// CircleObj.apply({},[1,2,3])

const Circle1=new Function('radius',`
    this.radius=radius;
    this.draw=function() {
        console.log('draw')
    }`
)

const newCircle=new Circle1(1)
//newCircle is an object

// * Values vs. ref types

// todo: Primitives are copied by their value
// todo: Objects are copied by their reference

let num=10;
function increase(number) {
    number.value++
}

// increase(num)

// console.log(num)
// num is 10 ? because primitives are copied by value

let numObj={value:10}
increase(numObj)
console.log(numObj)
//wil become 11 not 10

// * Enumerating Props of an object
for (const key in circle) {
    if (Object.hasOwnProperty.call(circle, key)) {
        const element = circle[key];
        console.log(element)
    }
}

for (const key of Object.keys(circle)) {
    console.log(key)
}

//entries get keys as a first 0, value as a second 1
for (const iterator of Object.entries(circle)) {
    console.log(iterator)
}

if('radius' in circle) console.log('yes')

// * Cloning an object

//first long method

let anotherOne={}
for (const key in circle) {
    if (Object.hasOwnProperty.call(circle, key)) {
        anotherOne[key] = circle[key];
    }
}

// second short method
let clone=Object.assign({
    color:'red'
},circle)

// todo: third quick method using ! spread operator !
// ...circle get value inside object without json body {}
let clone2={...circle}

console.log(anotherOne,clone,clone2)

// * Math
// Math.random()
// Math.round()
// Math.max([1,5,10,8])

// * String
// String Primitive
const message=' This is a first message '

// String Object
const anotherString =new String('Hi')

// * Template Literals
// To write on multi line code as string
// can use dynamic data in template literals
let temp=`This is my ${2+5}
first ${message}`;

// * Date
let date=new Date();
date.toDateString()