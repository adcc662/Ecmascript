function newFunction(name,age,country){
    var name = name || 'david';
    var age = age || 32;
    var country = country || 'US';
    console.log(name,age,country);

}

//es6

function newFunction2(name='oscar',age=24,country='MX'){
    console.log(name,age,country);
};

newFunction2();
newFunction2('Ricardo', 23, 'CO');

let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world;
console.log(epicPhrase);
//es6
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);


let lorem = "lorem quiero escribir una frase única \n"+
"otra frase.";

//es6
 let lorem2 = `otra frase epica que necesitamos
 ahora esta es otra frase
 `;
console.log(lorem);
console.log(lorem2);

let person = {
    'name' : 'John',
    'age' : 24,
    'country': 'MX'
};
console.log(person.name,person.age);

//es6
let { name,age,country } = person;
console.log(name,age);
//------------------------------------Arreglos y funciones-----------------------

let team1 = ['Ricardo', 'Estefania', 'Nicole'];
let team2 = ['Manuel' ,'Angel' ,'Lucia'];
let education = ['David' ,...team1 ,...team2];
console.log(education);

//--------------------------------
{
    var globalVar = 'Global var';
}

{

    let globalLet = 'Global let';
    console.log(globalLet);
}
console.log(globalVar);

//-----------------------------------------------
const a = 'b';
a = 'a';
//------------------------------------------------
let name = 'David'
let age = 24;

obj = {name:name,age:age};
//es6
obj2 = {name,age};
console.log(obj2)
//-------------------------------------------------
//Arrow functions
const names = [
    {name:'David', age:24},
    {name:'Omar', age:20}
]

let listOfNames = names.map(function(item){
    console.log(item.name);
})

let listOfNames2 = names.map(item => console.log(item.name));

const listOfNames4 = (name,age,country) => {
//code
};

const listOfNames3 = name =>{

}

const square = num => num * num;

//Promesas
const helloPromise = () => {
    return new Promise((resolve, reject) => {
    if (true) {
        resolve('Hey!')
    } else {
        reject('Ups!!')
        
    }
    });
}

helloPromise()
    .then(response => console.log(response))
    .then(() => console.log('hola'))
    .catch(error => console.log(error));
//-------------------------------------------
//-------Clases-----------
class Calculator{
    constructor(){
        this.valueA = 0;
        this.valueB = 0;
    }
    sum(valueA,valueB){
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new Calculator();
console.log(calc.sum(2,2));

//-------------------modulos-------------------
import { hello } from './module';
hello();

//-------------------generators---------------
function* helloWorld() {
    if (true) {
        yield 'Hello, ';
    }

    if (true) {
        yield 'World'
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);

