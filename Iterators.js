//It is used to traverse the array
//It can also be done by for loop
//It uses Iterator Protocol
//Here , everytime it returns a value and and done or not(pura traverse hua ki nahi)

//Create an Array
/*
const myArray=["Apple","Orange","Watermelon","Chickoo"];
console.log(myArray);




function fruitsIterator(values){   //function named fruitsIterator which takes array  as an input
    let nextIndex=0;  //let 

    //this function returns an object
    return{

        //object has a next function

        next: function(){
        
            if(nextIndex < values.length){
                 
                //we will return an obj
                return{
                    value: values[nextIndex++],
                    done: false // traverse karna baki hai
                }
            }

            else{
                 //we will return an obj
                return{
                done: true //traverse ho gaya hai 
                }
            }
        }
    }
}

//USING Iterators to traverse the myArray
const fruits=fruitsIterator(myArray);  //craetes an iterator to traverse
console.log(fruits.next());  //just returns the object with value and done 
console.log(fruits.next());
console.log(fruits.next());
console.log(fruits.next());
console.log(fruits.next());

console.log(fruits.next().value);  //just returns the value
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);

*/


//Iterators

/*
const myArray=["Sakshi","Purva","Vedant","Yash","Anuraj"];
console.log(myArray);

//Using Iterators for traversing the myArray

//Create a function

function Iterators (values){

    let nextIndex=0;

    return {
        next: function(){


            if(nextIndex<values.length){

                return{
                    value:values[nextIndex++],
                    done: false
                }
            }

            else{

                return{
                    done: true
                }
            }
        }
    }

}


const cousins=Iterators(myArray);

console.log(cousins.next());
console.log(cousins.next());
console.log(cousins.next());
console.log(cousins.next());
console.log(cousins.next());
console.log(cousins.next());

console.log(cousins.next().value);
console.log(cousins.next().value);
console.log(cousins.next().value);
console.log(cousins.next().value);
console.log(cousins.next().value);
console.log(cousins.next().value);
*/

//Iterators 

const myArray=["Tomato","Potato","Chilli","Cabbage"];
console.log(myArray);

//crete a  normal function
function Iterator(values){  

    let nextIndex=0;


    return{

        next:function(){

            if(nextIndex<values.length){
                return{
                    value:values[nextIndex++],
                    done:false
                }
            }

            else{
                return{
                    done: true
                }
            }

        }
    }

}


//Using Iterator

const veggies=Iterator(myArray);

console.log(veggies.next());
console.log(veggies.next());
console.log(veggies.next());
console.log(veggies.next());
console.log(veggies.next());
