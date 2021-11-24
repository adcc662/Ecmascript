
//----------replace
const string = "JavaScript es maravilloso con JavaScript puedo crear el futuro de la web";
const replaceString = string.replace("JavaScript", "Python");
console.log(replaceString);

const replaceString2 = string.replaceAll('JavaScript', 'Python');
console.log(replaceString2);


//----------------show
class Message {
    #show(val){
        console.log(val);
    };
    get #add(val){
        ...
    }
}

const message = new Message();
message.show('hola');


//----Promise Any
/**Este metodo lo que hce es que pasa la primera promesa que se resuelva */
const promise1 = new Promise((resolve, reject) => reject("1"));
const promise2 = new Promise((resolve, reject) => resolve("2"));
const promise3 = new Promise((resolve, reject) => resolve("3"));

Promise.any([promise1,promise2,promise3])
    .then(response => console.log(response));

//----------WeakRef
/**Este metodo permite tener una referencia debil sobre otro elementos 
 * para que el garbage collector no lo elimine.
*/

class anyClass {
    constructor(element){
        this.ref = new WeakRef(element);
    }
    {...}
}

//--------------------------Operadores
let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse);

let isTrue = true;
let isFalse = false;
console.log(isTrue ||= isFalse);

let isTrue = undefined;
let isFalse = false;
console.log(isTrue ??= isFalse);







