

//Arrow functions

//add two numbers

const add=(a,b)=>{

    return a + b;

}


const factorial=(n)=>{

    if(n<0) return "Invalid Input";

    else if (n==0 || n==1 ) return 1;

    else return n * factorial(n-1);

}


//fibonacci series : n is the no of  terms of fibo


const fibonacci =(n)=>{
    if(n<0)  return "Invalid Input";

    else if(n==0 || n==1) return n;

    else return fibonacci(n-1) + fibonacci(n-2);
}

//all basic functions

const calculate =(a,b,operation)=>{

    switch(operation){
       case 'add': return a + b;
       case "subtract": return a - b;
       case "multiply": return a * b;
       default : "Invalid operation"; //anything else than above  cases

    }

}

console.log("Addition is :", add(2,3));

console.log("Factorial is :" ,factorial(5));

console.log("Fibonacci is :",fibonacci(10));

console.log("Add: ",calculate(5,6,'add'));