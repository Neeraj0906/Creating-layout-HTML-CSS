// function hello(n1,n2){
//     let sum = n1+n2;
//     console.log("Good Night");
//     console.log(sum);
// }
// console.log("Good morning");

// hello(4,4);

// //Type2

// let sayAge = (age) =>{
//     if (age === undefined){
//         console.log("provide value");
//     }else{
//         console.log("the age is " ,age);
//     }
// }

// sayAge(22);
// sayAge();

//Type3--->IIFE

// (function sayMyname(){
//     console.log("My name is shiva");
// })();


// (function sayMyname(name){
//     console.log("My name is",name);
// })(" shiva");



//Anonymous Function
// let mycity = function(city){
//     console.log(city);
// };

// mycity("Mumbai");
// mycity();

// function understandingReturn(){
//     let sub =10-5;
//     // console.log(sub);
//     return sub;
// }
// let output = understandingReturn();
// console.log(output + 100);
// // understandingReturn();

//--------------------------------------------------//

//Loops
//variable
//condition
//increment

// for(let a=0;a<5;a++){
//     console.log(a,"for loop");
// }

// //while loop
// let a=0
// while(a<5){
//     console.log(a,"while loop")
//     a++;
// }


//objects

// let array =[{
//     name:"Neeraj"},
//     {name :"Thegu"},
//     {name:"Mithun"},
//     {name:"Rohit"},
//     {age:22},];

// let n = array.length;

// for(let a=0;a<n;a++){
//     let objectElement = array[a];
    
//     if(objectElement.name === undefined){
//         console.log("FOO");
//     }else{
//         console.log(objectElement);
//         }
// }

//2Darray

let twoDarray=[[1,2,3],[2,3,4],[3,4,5]];

let n = twoDarray.length;

for(let a=0;a<n;a++){
    let elementarray =twoDarray[a];
    let length =elementarray.length;

    for(let b=0;b<length;b++){
        let innerElement = elementarray[b];
        console.log(innerElement);
    }
    console.log("---------------------");
}