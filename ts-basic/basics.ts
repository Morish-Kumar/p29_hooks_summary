// primitives - number, string, boolean
// more complex type - arrays, objects
// function types, parameters

// primitive - 
// number - 
let age: number;
age = 21.2


let username: string = 'morish'

let isInstructor: boolean =  true


// more complex type - 
// array
let hobbies: string[] = ["Sport","cricket" ,"football" ]

// object
// let person = {name: "Morish", age: 23}
let person: {
    name:string;
    age: number;
}
person = {
    name:"morish", 
    age: 34
}


// type interference
// let course = "react"
// course = 12132 

// using union type - union type allow more than one type to be used in a single variable

let course: string | number | boolean = "react"
course = 23
course = true


// type alias - helps to avoid duplication
type Person = {
    name: string;
    age: number;
}

let about: Person
about = {
    name: "morish",
    age: 32
}



// function and function type

function add(a: number, b: number){ // type with agruments
    return a + b
}

function add1(a: number, b: number): number{ // type with return
    return a + b
}

function printOutput(value: any){ // void return type
    console.log(value)
}


// generics

// function insertAtBeginning(array: any, value: any){
//     const newArray = [value, ...array]
//     return newArray
// }


// const demoArray = [1,2,3]
// const updatedArray = insertAtBeginning(demoArray, -1) // [-1,1,2,3]

// conerting insertAtBeginning function nto generic function``
function insertAtBeginning<T>(array: T[], value: T){
    const newArray = [value, ...array]
    return newArray
}


const demoArray = [1,2,3]
const updatedArray = insertAtBeginning(demoArray, -1) // [-1,1,2,3]