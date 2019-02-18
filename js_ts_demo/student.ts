import { Person } from './person';

export class Student { 
    private firstName : string;
    private lastName : string;
    age : number;
    // constructor(firstName : string, lastName : string , age : number){
    constructor(user : Person){
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.age = user.age;
    }
    getFullName(){
        return this.firstName + " "  + this.lastName;
    }
}

export const MAGIC_NUMBER = Math.floor(Math.random() * 10);

export function add(num1, num2) {
    console.log(MAGIC_NUMBER);
}