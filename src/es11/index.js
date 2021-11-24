//-------------------Dynamic Import-------------------
const button = document.getElementById('btn');

button.addEventListener("click", async function() {
    const module = await import("./file.js");
    module.hello();
});

const aBigNumber = 9007199254740991n;
const anotherBigNumber = BigInt(9007199254740991);
console.log(aBigNumber);
console.log(anotherBigNumber);

///-----------Promise all settled------------------>
//Nos devolverá la promesa que se resuelve después de que todas las promesas dadas
//se cumplan
const promise1 = new Promise((resolve, reject) => reject("reject"));
const promise2 = new Promise((resolve, reject) => resolve("resolve"));
const promise3 = new Promise((resolve, reject) => resolve("resolve 1"));

Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response));

//---------------Global this--------->
console.log(window);
console.log(globalThis);

//------null------>
/*Es un operador que nos retorna su operando del lado derecho 
cuando el de su lado izquierdo es nulo o indefinido*/
const foo = null ?? 'default string';
console.log(foo);

/** optional chaining '?' */
const user = {};
console.log(user?.profile?.email);

if (user?.profile?.email) {
    console.log('email');
}else{
    console.log('fail');
}
