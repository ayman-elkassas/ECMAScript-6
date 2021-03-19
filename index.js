//how to make banner comment - ctrl+shift+p and select banner h3

/*
.########..######..##.....##....###.....######...######..########..####.########..########.....#######.
.##.......##....##.###...###...##.##...##....##.##....##.##.....##..##..##.....##....##.......##.....##
.##.......##.......####.####..##...##..##.......##.......##.....##..##..##.....##....##.......##.......
.######...##.......##.###.##.##.....##..######..##.......########...##..########.....##.......########.
.##.......##.......##.....##.#########.......##.##.......##...##....##..##...........##.......##.....##
.##.......##....##.##.....##.##.....##.##....##.##....##.##....##...##..##...........##.......##.....##
.########..######..##.....##.##.....##..######...######..##.....##.####.##...........##........#######.
*/
// todo:first topic
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

let name = "ayman";
console.log(name);
//todo:name is undefined if not assign any value

let firstName = "ayman";
lastName = "elkassas";
//todo: but best practise each variable has let as declare

// * constant:
const interestRate = 0.3;
// ! can not change const var => interestRate=1;
console.log(interestRate);

// * primitive types:
let fname = "ayman"; // todo:string literal
let age = 30; // todo:number literal
let isApproved = false; // todo:Boolean literal
let lname = undefined;
let selectedColor = null;

// * dynamic typing
console.log(typeof name);

// * reference type (object-array-function)
// * Objects (reference type)
let person = {
  name: "ayman",
  age: 25,
};

console.log(person.name);

//* Arrays
let selectedColors = ["red", "blue"];
selectedColors[2] = "yellow";
console.log(selectedColors[2]);

//* Functions
// performing function
function greet() {
  console.log("Function");
}

function sum(x, y) {
  return x + y;
}

greet();
sum(5, 6);

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
let type = points > 100 ? "gold" : "silver";
console.log(type);

// any value is true (false || 1 is 1), (1 || 2 is 1)
// false || 2 || 1 is 2 first true is selected

// * SWAP
let a = 1,
  b = 2;
console.log(a, b);
b = [a, (a = b)][0];
console.log(a, b);

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

// for .. in -> for object as key, value
for (let key in person) {
  console.log(key, person[key]);
}

let colors = ["red", "blue"];
// for .. of -> should be an array
for (let color of colors) {
  console.log(color);
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
  draw: function () {
    console.log("google");
  },
  create() {
    console.log("facebook");
  },
};

obj.draw();
obj.create();

//* Dynamic Nature of Objects
const circle = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};

circle.color = "red";
circle.draw = function () {};

// to delete prop in object
delete circle.color;

console.log(circle);

// * Constructor Property
//todo:Factory function as a class (return object)
function createCircle(radius) {
  return {
    radius,
    draw() {
      console.log("draw");
    },
  };
}

const circleObject = createCircle(1);

// * CONSTRUCTOR FUNCTION
function CircleObj(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

const another = new CircleObj(1);

//* Object Destructuring Assignment

const personObject={
    name5:'ayman elkassas',
    age5:25,
    gender5:'male'
}

let {name5,age5,gender5='Unknown'}=personObject
console.log(name5,age5,gender5)

//* Object Literals
const myVar= 'key'
const myObject={
    myProp:'myValue',
    [myVar]:5
}

console.log(myObject)


// * Functions are objects is a js concept

// CircleObj.name
// CircleObj.length
// CircleObj.toString()
// CircleObj.constructor
// CircleObj.call({},1)
// CircleObj.apply({},[1,2,3])

const Circle1 = new Function(
  "radius",
  `
    this.radius=radius;
    this.draw=function() {
        console.log('draw')
    }`
);

const newCircle = new Circle1(1);
//newCircle is an object

// * Values vs. ref types

// todo: Primitives are copied by their value
// todo: Objects are copied by their reference

let num = 10;
function increase(number) {
  number.value++;
}

// increase(num)

// console.log(num)
// num is 10 ? because primitives are copied by value

let numObj = { value: 10 };
increase(numObj);
console.log(numObj);
//wil become 11 not 10

// * Enumerating Props of an object
for (const key in circle) {
  if (Object.hasOwnProperty.call(circle, key)) {
    const element = circle[key];
    console.log(element);
  }
}

for (const key of Object.keys(circle)) {
  console.log(key);
}

//entries get keys as a first 0, value as a second 1
for (const iterator of Object.entries(circle)) {
  console.log(iterator);
}

if ("radius" in circle) console.log("yes");

// * Cloning an object

//first long method

let anotherOne = {};
for (const key in circle) {
  if (Object.hasOwnProperty.call(circle, key)) {
    anotherOne[key] = circle[key];
  }
}

// second short method
let clone = Object.assign(
  {
    color: "red",
  },
  circle
);

// todo: third quick method using ! spread operator !
// ...circle get value inside object without json body {}
let clone2 = { ...circle };

console.log(anotherOne, clone, clone2);

// * Math
// Math.random()
// Math.round()
// Math.max([1,5,10,8])

// * String
// String Primitive
const message = " This is a first message ";

// String Object
const anotherString = new String("Hi");

// * Template Literals
// To write on multi line code as string
// can use dynamic data in template literals
let temp = `This is my ${2 + 5}
first ${message}`;

// * Date
let date = new Date();
date.toDateString();

/*
....###....########..########.....###....##....##..######.
...##.##...##.....##.##.....##...##.##....##..##..##....##
..##...##..##.....##.##.....##..##...##....####...##......
.##.....##.########..########..##.....##....##.....######.
.#########.##...##...##...##...#########....##..........##
.##.....##.##....##..##....##..##.....##....##....##....##
.##.....##.##.....##.##.....##.##.....##....##.....######.
*/

// * Arrays vs. Sets
let numbers = [3222, 4];
let sets=new Set([3,4, 5]); // object set
console.log(numbers,sets)
// * Adding
// todo:Add from
//End
numbers.push(5, 6);
//Begging
numbers.unshift(1, 2);
//add in specific pos as last example (any pos with index)
// splice(start_index,0(num of delete),elements...)
numbers.splice(numbers.length, 0, "a", "b");
console.log(numbers);

//* Find elements (primitives)
let findArr = [1, 2, 3, 1, 4, 5, 6];
console.log(findArr.indexOf("a"));
// if not found return -1
console.log(findArr.lastIndexOf(1));
console.log(findArr.includes(3));

//find return the first element achieve true
let minOf = findArr.find(function (element) {
  return element > 3;
});

//* Find elements (reference types -> objects)
const courses = [
  { id: 1, name: "Statistical" },
  { id: 2, name: "Physics" },
  { id: 3, name: "Programming" },
];

const course = courses.find(function (course) {
  return (course.name = "Programming");
});

const courseIndex = courses.findIndex(function (course) {
  return (course.name = "Programming");
});

console.log(course, courseIndex);

//* Arrow Functions
// remove function keyword and make after (params) a fat arrow =>
// ! hint if function with single params you can remove ()
// ! hint and if function with one line can remove return and body {}
const courseArrowFunction = courses.find((course) => {
  return (course.name = "Physics");
});

// update with hints
const courseArrowFunctionUpdate = courses.find(
  (course) => (course.name = "Physics")
);

console.log(courseArrowFunctionUpdate);

// * Removing elements
const numsRemove = [1, 2, 3, 4];

//todo: Remove from
//End
// const last=numsRemove.pop()
// console.log(last)

//Begging
// const firstNum=numsRemove.shift()
// console.log(firstNum)

//Middle
// const MiddleNum=numsRemove.splice(2,2)
// console.log(numsRemove)

/*
.########.##.....##.##....##..######..########.####..#######..##....##..######.
.##.......##.....##.###...##.##....##....##.....##..##.....##.###...##.##....##
.##.......##.....##.####..##.##..........##.....##..##.....##.####..##.##......
.######...##.....##.##.##.##.##..........##.....##..##.....##.##.##.##..######.
.##.......##.....##.##..####.##..........##.....##..##.....##.##..####.......##
.##.......##.....##.##...###.##....##....##.....##..##.....##.##...###.##....##
.##........#######..##....##..######.....##....####..#######..##....##..######.
*/

//* Function declaration vs. Expressions
//Function declaration

walk();

function walk() {
  console.log("walk");
}

// Function Expression
// 1- Named Function Expression
let run = function run() {
  console.log("run");
};
run();

// 2- Anonymous Function Expression
let harry = function () {
  console.log("harry");
};

harry();

// passing declare function
let fast = harry;

fast();

// * Hoisting
// The main different between function declaration and exp.
// Function declaration can call before declare as walk(), But why it that?
// todo: reason ? because js engine before execute code move all
// todo: function declaration on the top
// Function Anonymous can not call before declare (reference error)

// * Arguments
function summation(){
    // console.log(arguments)
    let total=0
    for (const val of arguments) {
        total+=val
    }

    return total

    // return a+b
}

console.log(summation(1,2,5,54))

// hint: can remove all params if not used in func as a,b in summation

// * Rest parameters -> that use spread operator and must be in last (...args)

// error (factor, ...arg,x), the right way (factor, x, ...arg)
function product(factor,...arg){
    // arg is an array of arguments
    // reduce is an accumulate function
    return arg.reduce((a,b)=>a*b+factor)
}

// first param is factor and next is array of args
console.log(product(.5,1,2,5))

//without ... spread operator return the first argument only but with ... return
// array of arguments

//* Default Parameters
function minus(a,factor=3){
    // arg is an array of arguments
    // reduce is an accumulate function
    return a-factor
}

console.log(minus(5))

//* Getter and setter, try catch error handling
const personName={
    fname:'ayman',
    lname:'ayman',
    get fullName(){
        return `${personName.fname} ${personName.lname}`
    },
    set fullName(value){
        if(typeof value !=='string')
            throw new Error('Value is not a string')
        const parts=value.split(' ')
        this.fname=parts[0]
        this.lname=parts[1]
    }
}

try{
    personName.fullName=null
}
catch(e){
    console.log(e)
}

console.log(personName.fullName)

//* var vs. let

let array=[5,7,5]

// should use let => var is accessible outside scope of any {} except function

// var => function-scoped, define in window object
// ES6 (ES2015): let, const => block=scoped, not define in window object

for (var index = 0; index < array.length; index++) {
    const element = array[index];
}

console.log(index)

//* This keyword

// method => obj
// function -> global (window,global)

function Video(title){
    this.title=title
    console.log(this)
}

const v=new Video('b')

// new keyword create {} an empty object and inside function this ref to this obj

const audio={
    title:'a',
    tags:['a','b'],
    showTags(){
        this.tags.forEach(tag=>{
            console.log(this.title,tag);
        })
    }
}

audio.showTags()

// * Change the value of this

function playVideo(a,b){
    console.log(this,a,b)
}

playVideo.call({name:'ayman'},a,b)
playVideo.apply({name:'ayman'})
const fn=playVideo.bind({name:'ayman'})
fn()
playVideo()

/*
....###.....######..##....##.##....##..######.
...##.##...##....##..##..##..###...##.##....##
..##...##..##.........####...####..##.##......
.##.....##..######.....##....##.##.##.##......
.#########.......##....##....##..####.##......
.##.....##.##....##....##....##...###.##....##
.##.....##..######.....##....##....##..######.
*/

// * Callbacks, Promises, Async Await

let posts=[
    {title:'first post',body:'this is first post'},
    {title:'second post',body:'this is second post'},
    {title:'third post',body:'this is third post'},
]

//todo:callbacks

function getPosts(){
    setTimeout(()=>{
        let output='';
        posts.forEach((post, index) => {
            output+=`<li>${post.title}</li>`
        })

        console.log(output)
    },1000)
}

function createPostCallback(post,callback){
    setTimeout(()=>{
        posts.push(post);
        callback();
    },2000)
}

createPostCallback({title:'post four',body:'this is post four'},getPosts)

// todo: Promise -> resolve (go to then()), reject (go to catch())
// promise is an interface not class

function createPostPromise(post){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post);

            const error=false;
            if(!error){
                resolve();
            }
            else{
                reject('Error:Something went wrong')
            }
        },2000)
    })
}

createPostPromise({title:'post five',body:'this is post five'})
    .then(getPosts)
    .catch(err=>console.log(err))

// promise.all
const promise1=Promise.resolve('Hello world')
const promise2=2
const promise3=new Promise((resolve,reject)=>setTimeout(resolve,2000,'GoodBye'))

Promise.all([promise1, promise2, promise3]).then(values=>console.log(values))

//todo: Async Await
// most use for await for fetch api

async function init(){
    await createPostPromise({title:'post six',body:'this is post six'})
    .then(getPosts)
    .catch(err=>console.log(err))
}

init()
