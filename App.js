/* alert('Hello Yashowardhan') 
Shows Alert Modal
*/
/* _______________________________________________________________________________ */

//Type Conversion
/* Most of the operator and function automatically Convert the values the right type
 */
/* let value = true;
alert(typeof value) // displays the type of value */

//String Conversion
/* value = String(value)
alert(typeof value); */

//Numeric Conversion
/* IN mathematical functios and expressions numeric conversiion happens automatically */

/* alert('6' / '2'); */ //string automatically converted to numbers
/* 
let str = "123";
alert(typeof str);
str = Number(str);
alert(typeof str) */

/* alert(Number('123')); // displays 123

alert(Number('1234yash')); // displays Nan

alert(Number(true)); // displays 1

alert(Number(false)) // displays 0 */

/* alert(Number(null)); */

/* _______________________________________________________________________________ */

//Boolean Conversions
/* Happens in Logical  Expressions 
Conversion rules:Values that are intuitively empty like 0,null,NaN,Undefined become false
everything else is true
*/

/* alert(Boolean(1)); //true */

/* alert(Boolean(0));  // false */

/* alert(Boolean('Hello')); //true */

/* alert(Boolean('')); //false */

/* _______________________________________________________________________________ */
/* For Loop */

/* 

for (begin; condition; step)
{
  //body of for
}
 

*/

/*
Genral AlgoRithm for this
Run Begin
-> (if condition is true -> run body and run step)
-> (if condition is true -> run body and run step)
-> (if condition is true -> run body and run step)

 Begin executes once, and then it iterates.
 After each condition test, body and step are executed.
*/

/* 

for (;;) {
  // repeats without limits
} 

*/

/* break directive

It stops the loop and passes controll to the first line after the loop

*/

/* continue directive

it is lighter version of break,whole loop is not stoped but the current iteration is stopped.forces the loop to start new one if condition allows


*/
/* prompt('Hello') */
/* 
alert('Hello');
[1, 2].forEach(alert); */

/* _______________________________________________________________________________ */
/*Operators */

/* An operand – is what operators are applied to. For instance, in the multiplication of 5 * 2 there are two operands: the left operand is 5 and the right operand is 2. Sometimes, people call these “arguments” instead of “operands”.

An operator is unary if it has a single operand. For example, the unary negation - reverses the sign of a number: */

/* let x = 1;
x = -x;
alert(x) */

/* The following math operations are supported:

Addition +,
Subtraction -,
Multiplication *,
Division /,
Remainder %,
Exponentiation **. */

/* 

alert(5 % 2); // modulus % gives remainder
alert(2 ** 3); //exponentiation
alert(4 ** (1 / 2));  //exponentiation 

*/

//String concatenation with binary +
/* 
let s = 'Hello' + 'Yashowardhan'
alert(s); 
*/

// Note that if any of the operands is a string, then the other one is converted to a string too.

/* alert('1' + 2); // gives 12
alert(2 + 2 + '1') //gives 41
alert('1' + 2 + 2) //gives 122 */

/* The binary + is the only operator that supports strings in such a way.  */


/*
The plus + exists in two forms: the binary form that we used above and the unary form.

The unary plus or, in other words, the plus operator + applied to a single value, doesn’t do anything to numbers. But if the operand is not a number, the unary plus converts it into a number. 
*/

/*
let x = 1
alert(+x); // gives 1

alert(+true); //gives 1 
*/

/* let a = "2";
let b = "3";
alert(a + b); */ //return 23

// to use 2 & 3 as numbers
/* alert(+a + +b); */ // returns 2+3=5

//longer variant

/* alert(Number(a) + Number(b)); */ //  returns 2+3=5


//Increment & Decrement
/* 

'++' Increment increase value by 1
'--'  Decrement decreases value by 1 
When the operator goes after the variable, it is in “postfix form
The “prefix form” is when the operator goes before the variable: 

Prefix:increments and then returns the value
Postfix:increments but returns old value

If we’d like to increase a value and immediately use the result of the operator, we need the prefix form.
If we’d like to increment a value but use its previous value, we need the postfix form:


see example below
*/

/* let c = 11;
let count = ++c;
alert(count); // returns 12

 */

/*
let c = 11;
let count = c++;
alert(count); //returns 11 

*/

/* 

let counter = 0;
counter++
alert(counter); // prints 1;
++counter;
alert(counter); //prints 2;
 
*/

//Comma/',' Operator
/* 
let a = (1 + 2, 3 + 4);

alert(a); //prints 7 */
/* 
alert(2 == 1); */


/* _______________________________________________________________________________ */
/*Functions */
/* A variable declared inside a function is only visible inside that function.called local variable */
/* Variables declared outside of any function is called global varibale */
/* let userName = 'John'

function showMessage ()
{
  userName = "bob";
  let message = 'Hello ' +  userName;
  alert(message);
}

alert(userName);
showMessage();
alert(userName); */


/* _______________________________________________________________________________ */
/*Variables */

/* let user = 'Yash'
  , age = 21
  , message = "Hello"
  
const c = 2;

alert(c); */


//Function expression

/* let sayHII = function ()
{
  alert('Say HII');

}
alert(sayHII()); */

/* alert(1/0) // returns infinity */

/* A BigInt value is created by appending n to the end of an integer: */

/* 
In JavaScript, there are 3 types of quotes.

Double quotes: "Hello".
Single quotes: 'Hello'.
Backticks: `Hello`.
Double and single quotes are “simple” quotes. There’s practically no difference between them in JavaScript.

Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string by wrapping them in ${…}, for example:

/* If a variable is declared, but not assigned, then its value is undefined: */

/* alert(typeof 10n); */

/* _______________________________________________________________________________ */
/*Logical Operators */

/*
let a = "";
let b = "";
let c = "Yash";
alert(a || b || c); 
*/

/* true || alert('not printed'); */
/* false || alert('hii'); */
//___________________________________________________________________________________
//Objects

/* let fruit = prompt("Which fruit you wanna buy", "apple");

let bag = {
  [fruit]:5
}
alert(bag.apple); */

/* let user = {
  name: 'Yashowarhan',
  age: 30,
  isAdmin:true
}

for (let k in user)
{
  alert(k);
  console.log(user[k])
} */

/* arr = [1, 2, 3, 4, 5,];
console.log(arr);
arr.push(6);
arr.pop();
console.log(arr.shift());
arr.unshift(0)
  */
//splice
/* let arr = ['Hello', 'am', 'Yashowardhan'];
console.log(arr);
arr.splice(1, 1); //starting from the index 1 it removed 1 element
console.log(arr); //["Hello", "Yashowardhan"]
 */

/* let array = ['lets ', 'study', 'Javascript', 'Rightnow'];
console.log(array);
array.splice(0, 3, 'Doing', 'Nothing');
console.log(array); */
/* 
let arr = ["I", "study", "JavaScript", "right", "now"];
console.log(arr);
arr.splice(2, 0, "complex", "language");
console.log(arr) */

/* let arr = [1, 2, 3, 4, 5];
console.log(arr); // [1, 2, 3, 4, 5]
arr.splice(-1, 0, 6, 7);
console.log(arr); // [1, 2, 3, 4, 6, 7, 5]

 */

/* let arr = ["t", "e", "s", "t"];
console.log(arr);
console.log(arr.slice(0, 3)); // ["t", "e", "s"]
 */

/* let arr = [1, 2];
console.log(arr); //[1, 2]
console.log(arr.concat(3, 4)); // accept values as argument [1, 2, 3, 4]
console.log(arr.concat([5, 6], [7, 8])); // Accept array as argument[1, 2, 5, 6, 7, 8] */

/* let arr = [1, 2];
let arr1 = {
  0: 'Hello',
  1:'Yashowardhan'
}
console.log(arr.concat(arr1));
/*  [1, 2, {…}]
0: 1
1: 2
2: {0: "Hello", 1: "Yashowardhan"} 
*/
/*____________________________________________________________________________________________________________________*/
//Iterate: forEach
//The arr.forEach method allows to run a function for every element of the array
/* [1, 2, 3, 4].forEach((item,index,array) => {
  print = `Item ${item} is present at index:${index} in Array:${array} `;
  console.log(print);
}) */

/* ___________________________________________________________________________________________________________________ */
//Searching an Array
/* 
let arr = [1, 2, 3, 'Hii', 'Yashowardhan', 4];
console.log(arr.indexOf('Yashowardhan', 0)); // 4
console.log(arr.lastIndexOf('Hii')); // 3 ,looks from right ot left
console.log(indexOf(null)); // -1
console.log(arr.includes(1)); //returns true */

/* ___________________________________________________________________________________________________________________ */
//Searching an Array
//find:looks for the single(first) element which makes the function return true
/* let users = [
  { id: 1, name: 'John', surname: 'Mclane' },
  { id: 2, name: 'Walter', surname: 'White' },
  {id:3,name:'Yashowardhan',surname:'Dole'}
]

let yash = users.find(iterator => iterator.surname == 'Dole')
console.log(yash.name, yash.id); */

//filter:returns array of matching elements which make function return true
/* 
let users = [
  {id: 1, name: "John"},
  {id: 2, name: "Pete"},
  {id: 3, name: "Mary"}
];
let someUsers = users.filter(item => {
  
    console.log(item.id);
    console.log(item.name);
  
});

someUsers.filter(i => {
  console.log(i.name);
})
 */

/*____________________________________________________________________________________________________________________*/
/*Document Object Model  */

/* function sayHII()
{
  alert('Hello');

}
window.sayHII(); */
/* 
document.body.style.background = 'red';

alert(location.href);

if (confirm("Go To Google?")) {
  location.href = "https://www.google.com/"
} */
/*____________________________________________________________________________________________________________________*/
/*Async Js */
/* 
function loadScript(src,callback)
{
  let script = document.createElement('script');
  script.src = src;
  script.onload = ()=>{callback(script)}
  document.head.append(script);
}

loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', function (script) {
  alert(`Cool, the script ${script.src} is loaded`);
  alert( _ ); // function declared in the loaded script
}); */
//let x = 4;
/*____________________________________________________________________________________________________________________*/
/*Exploring ECMA Script 6 */
/* 
var is funtion scoped
let is blocked scoped
*/
/* function func(randomize) {
  
  if (!randomize) {
       var x = Math.random();
        
       
    }
  console.log(x);
}
func(false)
 */

// const :must be initalized,value cannot be changed,create immutable varibales

/* 
const foo = 123;
console.log(foo);
foo = 456; // gives error:assignment to constant variable 
*/

// for-fo is an expception for const because it creates storage space for variable per loop iteration //

/* 
for (const x of ['a', 'b', 'c', 'd', 'e'])
{
  console.log(x)  
} 
*/

/* Block scoping via let and const 
Both let and const create variables that are block-scoped – they only exist within the innermost block that surrounds them. The following code demonstrates that the const-declared variable tmp only exists inside the block of the if statement: */

/* const pitfall = {
  name: 'yash',
  age:'25'
}
pitfall.surname = 'dole'
for (keys in pitfall)
{
  console.log(pitfall[keys]);
} */

/* ES6 template literals can span multiple lines: */
//multiline strings in es5

/* var HTML5  = `\
    <!doctype html>\n\
    <html>\n\
    <head>\n\
        <meta charset="UTF-8">\n\
        <title></title>\n\
    </head>\n\
    <body>\n\
    </body>\n\
    </html` */


/* const arr = ['a', 'b', 'c', 'd', 'e']
    
for (const [index, elem] of arr.entries())
{
  console.log(index + ' ' + elem);
} */
//es5
/* function logAllArguments()
{
  for (var i = 0; i < arguments.length; i++)
  {
    console.log(arguments[i])  
  }
}
logAllArguments(1, 2, 3); */
//es6
/* function logAllArgumentsES6(a,...args) {
  console.log(a)
  for (const argument of args) {
    
    console.log(argument);
  }
    
}
logAllArgumentsES6(4,5,6,7,8) */

//Spread Operator

/* const x = [1, 2, 3,];
const y = [4, 5, 6];
const z = [7, 8, 9];
const xyz = [...x, ...y, ...z];
for (const [index, element] of xyz.entries())
{
  console.log(`Index:${index}  of  element: ${element}`)
}

const obj = {
  name: 'Yashowardhan',
  surname: 'Dole',
  email: 'xyz@xyz.com',
  address: '221B Baker Street',
  
}
for (const [key, value] of Object.entries(obj))
{
  console.log(`${key}:${value}`)
}
 */

//ES5 APPLy
/* console.log(Math.max.apply(null,[1,11,22,222,3333,55555]))
//ES6
console.log(Math.max(...[1, 2, 3, 11, 100, 1001]));

//Array.Prototype.push

const arr1 = ['a','b']
const arr2 = ['c', 'd']

//es5 way to append all arguments as element to receiver(arr1)
arr1.push.apply(arr1, arr2);
for (item of arr1) {
  console.log(item)
}

const arr3 = ['e','f']
const arr4 = ['g','h']

arr3.push(...arr4);

console.log('arr3 Elements are')
for (const [index, item] of arr3.entries())
{
  console.log(` At ${index} index item ${item} is present`)
} */

//Object.Assign

/* const obj = { foo: 123 };
Object.assign(obj, { foo1: 456 });
console.log(JSON.stringify(obj)) */

//Constructor in Javascript

//class decalration
/* class Person
{
  constructor(name,surname,id)
  {
    this.name = name;
    this.surname = surname;
    this.id = id


  }
  describe()

  {
    console.log(`My Name is ` +this.name)
    console.log(`My SurName is ` + this.surname)
    console.log(`My id is:` +this.id)
  }
}
const p = new Person('Yashowardhan','Dole','007')
p.describe();
console.log(`Class Defination Type` + typeof Person) */

//class Expressions
/* 
const Individual = class Person
{
  constructor(name,surname,id)
  {
    console.log('**********IN Class Expression*************')
    this.name = name;
    this.surname = surname;
    this.id = id


  }
  describe()

  {
    console.log(`My Name is ` +this.name)
    console.log(`My SurName is ` + this.surname)
    console.log(`My id is:` + this.id)
    console.log('Class Name is:' +Person.name)
  }
}
const p1 = new Individual('Yashowardhan','Dole','007')
p1.describe();
console.log(`Class Defination Type` + typeof Person) */
//array destructuring
/* const array = [11, 22, 33, 44, 55, 66];
const [a, b, c,...rest] = array;
console.log(a, b, c);
console.log(rest);
 */
/* 
const [a = 1, b = 2] = [5];
console.log(a); //5
console.log(b); //2 */

//Swaping variables

/* let a = 'Yashowardhan';
let b = 'Dole';
console.log(`name:${a} Surname:${b}`);
console.log('************SWAP*****************');
[a, b] = [b, a];
console.log('Variable a has: '+a + ' Variable b has: '+b) */
/* 
({ a, b } = { a: 1, b: 2 });
console.log(a, b)

const userObject = {
  name: 'Yashowardhan',
  surname: 'Dole',
  phone:1231231231,
}

const { name, surname, phone } = userObject
console.log(name, surname, phone)

const foo = {
  p: 42,
  q:43,
}
const { p: bell, q: bar } = foo;
console.log(bell, bar); */

//Unpacking fields from objects passed as a function parameter

/* const student = {
  roll_number: '1',
  name: 'Yashowardhan',
  surname: 'Dole',
  Grade: 'A++',
  
}
for (const [key, value] of Object.entries(student))
{
  console.log(`${key}:${value}`)
}
function displayStudentData({ roll_number, name, surname, Grade }) {
 console.log(`${name} ${surname} roll_number: ${roll_number} Grade:${Grade}` )
}
console.log(displayStudentData(student))
 */

/* const student = {
  name: 'Yashowardhan',
  education: [
    {
      school: 'BSM',
      higherSecondarySchool: 'Garware',
      diploma: 'MIT',
      engineering: 'VIT'
    },
    
  ],
  resume: 'www.xyx.com',
  
} */
//destructuring the above object

/* const {
  name: nameofStudent,
  education: [{
    school: schoolName,
    higherSecondarySchool: HSC,
    diploma: MIT,
    engineering:VIT,
    
  }
  ],
  resume:resumeLink
} = student

console.log('Student Name: ' + nameofStudent);
console.log('School Name: ' + schoolName);
console.log('HSC School: ' + HSC);
console.log('Diploma College: ' + MIT);
console.log('Engineering: ' + VIT)

//destructure the following
const people = [{
  name: 'abc',
  family: {
    mother: 'Sara',
    father: 'Richard',
    sister:'Jessa'
  },
  age:25
},
{
  name: 'def',
  family: {
    mother: 'Noarh',
    father: 'christopher',
    brother: 'Jonathan',
    sister:'debra'
  },
  age:40
},
{
  name: 'Walter',
  family: {
    father: 'Hartwell',
    sister: 'Jessica',
    
  },
  age:50
}
]
for (const { name: n, family: { father: f, mother: m, sister: s }, } of people)
{
  console.log('Name: ' + n + ', Fathername: ' +f+ ' ,Mothername: ' + m + ' ,Sistername: ' + s)
} */

/* foo();

function foo()
{
  console.log('bar');
}

function x() {
  console.log(x)
  var x=3

} */

//Arrays
/* 
const arr = [1, 2, 3, 4, 5];
console.log(arr.length); */

/* let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
array1 = array1.concat('a', 'b')
array2.push(8);
console.log(array1)
console.log(array2)

let myArray = new Array('1', '2', '3')
myArray = myArray.concat('a', 'b', 'c')
console.log(myArray)

let first = myArray.shift();
console.log(first)

myArray.unshift('0');
console.log(myArray)

 */

/* ASYNCHRONUS JAVASCRIPT*/

const button = document.querySelector('button'); 
button.addEventListener('click', () => { 
  alert('Hello You Clicked Me')

   const paraElement = document.createElement('p');
   paraElement.textContent = "Paragraph Added"
   document.body.appendChild(paraElement)

 
})



