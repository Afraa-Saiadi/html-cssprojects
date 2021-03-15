/*var , let, const

let age = 30;
age = 32;

console.log(age);*/

// string, number, boolean, null, undefined 

/*const name = "john";
const age =30;
const raiting = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

console.log(typeof isCool);*/

//concatenation
/*const name = "john";
const age =30;

console.log("My name is " + name + " and I am " + age)
//template string
console.log(`my name is ${name} and i am ${age}`)
const hello =` my name is ${name} and i am ${age}`
console.log(hello);*/

//const s = 'hello world!';


//console.log(s.length)

//console.log(s.toUpperCase())

//console.log(s.toLowerCase())

//console.log(s.substring(0, 5).toUpperCase())
//console.log(s.split(''))
//const s = 'technology, computer, it, code';

//console.log (s.split(', '))

//arrays  -var multiple value

/*const fruits = ['apple', 'peer'];
fruits[2] = 'banana'
fruits.push('mango');
fruits.unshift('sttrawberry');
fruits.pop();

console.log(Array.isArray('fruits'));
console.log(fruits)
console.log(fruits[1])*/


/*const person ={
    firstName:'john',
    lastName:'Doe',
    age: 30,
    hobbies:['music', 'sports'],
    address:{
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}
console.log(person.firstName)
console.log(person.address.city)

const { firstName, lastName, address:{ city}}= person;
console.log(city);

person.email = 'john@gmail.com';

console.log(person);*/

/*const todos =[
    {
        id: 1,
        text: 'take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'meeting',
        isCompleted: true
    },
    {
        id: 3,
        text: 'dentist',
        isCompleted: false
    }
];*/
//console.log(todos);
//console.log(todos[1])

/*const todoJSON = JSON.stringify(todos);
console.log(todoJSON)*/

//for
//for(let i =0; i<=10; i++) {
    //console.log(i)
   // console.log(`for loop number: ${i}`);
//}

//while
/*let i = 0;
while(i<10){
    console.log(`while loop number: ${i}`);
    i++;
}*/
/*for(let todo of todos) {
    //console.log(todo.id);

}*/
// forEach, map, filter
/*todos.forEach(function(todo) {
    console.log(todo.text);
});*/
/*const todoText = todos.map(function(todo) {
    return todo.text;
});
console.log(todoText);*/

/*const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted===true;
}).map(function(todo){
    return todo.text;
})
console.log(todoCompleted);*/

/*const x =20;

if(x ===10) {
    console.log('x is 10');
} else if(x > 10) {
    console.log('x is bigger than 10');
}
    else
    {console.log('x is lesss than 10');
}*/

/*const x = 11;

const color = x > 10 ?'red' : 'blue';

switch(color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue' :
            console.log('color is blue');
            break;
    default :
        console.log('color is not red or blue');
        break;

} */

/*function addNumbs(num1, num2){
    console.log(num1 + num2);
}
addNumbs(4,5);
addNumbs();
const addNums = num1 => num1 +5;

console.log(addNums(5));*/

//constructor function
/*function person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dod = new Date(dob);
    this.getBirthYear = function(){
        return this.dob.getBirthYear();
    }
}

//instantiate object
const person1 = new person('john', 'doe', '4-3-1980');
const person2 = new person('Mary', 'Smith', '4-3-1985');


console.log(person1);
console.log(person1.dob.getFullYear());

person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`
}


//class
class person {
    constructor(firstName, lastName, dob){
        this.firstName = firstName;
        this.lastName = lastName;
        this.dod = new Date(dob);   
    }
}

getFullName() {
    return `${this.firstName} ${this.lastName}`
}*/


//console.log(window);
//alert(1);

//const head = document.getElementenById('my-html');
//console.log(document.getElementenById('head'));
//console.log(document.querySelector(h1));


//const items = document.querySelectorAll('.items');
//console.log(document.getElementsByClassName('item'));
//items.forEach((item)=> console.log(item));

//const ul = document.querySelector('.items');
//ul.firsElementtChild.textContent = 'hello';

//const btn = document.querySelector('.btn');
//btn.style.background = 'red';
//document.querySelector('.items').lastElementChild.innerHTML = '<h1>hello</h1>';

