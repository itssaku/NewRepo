//Genertors in Javascript

//Array is of 1B size , we wont like to store it'
//Generator allows us to generate an array whenever u have to acces it , instead of storing it i.e. generator on the fly


function *generator(){
    let i=1;  //1st element hai
    let count=5

   /* yield 1;
    yield 2;
    yield 3;
    yield 4;
    */

    while(i<=count){
        yield i++;  //generate array element
    }

   /*
    while(true){  //Infinite arrayis generated
        yield i++;
    }
    */


}

const gen=generator();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

