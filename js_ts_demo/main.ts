// import { Student } from './student';
// var x : any  = "Some String";

// x = 10;


// ES2015 / ES6

// Template String Syntax (back-tick)
// - inline variables
// - multiline string

// var fname = "Foo";

// console.log(`Hello ${fname}!`);




// Destructuring : Objects / Arrays

// var arr = ["Foo", "Bar", "Bam"];
// var [a1, , a3] = arr;

// console.log(a3);        // Bam


// var obj = {
//     drawText : function(text){console.log("Drawing " + text)},
//     drawCircle : function(r){console.log(Math.PI * r * r)}
// }

// var {drawText : dt} = obj;

// dt("Sample String");


// var obj = {
//     name : "Foo",
//     friends : ["Bam", "Bas"],
//     address : {
//         city : "Chennai",
//         country : "INDIA"
//     }
// }

// var { friends : [bam, bas] , address : {city, country} } = obj;

// var [bam, bas] = friends;
// var {city, country} = address;


//block scoping
// - let
// - const

// function demo(arr){
//     if(arr.length > 2){
//         let flash = "FLASHING";
//         console.log(load);          // ?
//     }else{
//         let load = "LOADING";
//     }
// }
// demo([2,3,4,5])

// const x = "Some String";
// x = "Sample";

// const obj = Object.freeze({
//     name : "Foo"
// });

// obj.name = "Bar";

// console.log(obj.name);  // ?

// const x = 12;


// Rest (Gather) & Spread Operator (...)

// let arr = [3,4,5];

// let arr1 = [1,2, ...arr, 6,7];

// console.log(arr1);


// function demo( ...args){
//     console.log(args[0]);       //?
// }
// // demo("foo");
// // demo("foo", "bar");
// demo("foo", "bar", "bas");


//Arrow functions ( => )

// ES5 

// let arr = [1, 2, 3, 4, 5];

// let newArr = arr.map(function (value, index) {
//     console.log(value);
//     return value * 2;
// })

// console.log(newArr);

// ES6
// let tripleArr = arr.map(value => value * 3); 

// let tripleArr = arr.map((value, index) => {
//     console.log("VALUE : " , index);
//     return value;
// });
// console.log(tripleArr)


// let obj = {
//     firstName : "Foo",
//     lastName : "Bar",
//     getFullName : function(){
//         var that = this;
//         var nestedFunc = function(){
//             return that.firstName + " "+ that.lastName;
//         }
//         return nestedFunc();
//     }
// }

// let obj = {
//     firstName : "Foo",
//     lastName : "Bar",
//     getFullName : function(){
//         var nestedFunc = () => {
//             return this.firstName + " "+ this.lastName;
//         }
//         return nestedFunc();
//     }
// }

// console.log(obj.getFullName()); 



// Context Binding

// let person = {
//     fname : "Foo",
//     sayHello : function(){
//         return "Hello " + this.fname;
//     }
// }

// console.log(person.sayHello());

// let bar = {
//     fname : "Bar"
// }

// let boundFunc = person.sayHello.bind(bar);          // Call, apply 

// console.log(boundFunc());



// Classes 

// class Person {}
// interface Person {}


// import * as all from './student';
// import { Person } from './person';

// let obj : Person = {
//     firstName : "Foo",
//     lastName : "Bar",
//     age : 34
// }

// var foo = new all.Student(obj);
// console.log(foo.getFullName());
// console.log("NUMBER : " , all.MAGIC_NUMBER);
// console.log(all.add(4,6));


//ES7 Feature

//Decorators : 04 Usages
    // - class
        // - @Component() - for creating Component
        // - @Directive() - for creating Directive
        // - @Pipe() - for creating Pipe
        // - @Injectable() - for creating Services
        // - @NgModule() - for creating Modules
    // - method
        // - @HostBinding()
    // - parameter
        // - @Inject()
    // - property
        // - @Input()
        // - @Output()


    // Component , Directives , Pipes , Services , Modules










//npm install -g typescript
//tsc -v
//tsc main.ts
//node main.js