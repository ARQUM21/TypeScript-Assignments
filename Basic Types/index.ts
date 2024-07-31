// let userName: string = "Arqum";
// let userAge: number = 21;
// let userFavDishes: string[] = ["briyani"];
// let userIsMarried: boolean = false;
// console.log("userAge=>",userAge);
// console.log("userName=>", userName);


// interface user{
//     firstName: string;
//     lastName: string;
//     age: number | string;
//     cnic?: number;
//     subject: string[];
//     favNumber: number[];
// }

// const user : user ={
//    firstName: "arqum",
//    lastName: "tariq",
//    age: "21",
//    subject: ["english", "urdu"],
//    favNumber: [21, 22],
// }


function  greet( name: string){
    console.log(`hello, ${name}`)

}

greet("heloo0 Arqum");


function welcome(name:string): string{
    return `hello ${name}`
}

const msg : string = welcome("M.Arqum");

console.log(msg);

