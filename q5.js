// You need to write a function that takes a name as input and returns a promise that resolves with a greeting
// message. The function should greet the person using their name, with a message in the format "Hello, {name}!".
// For example, if the input to the function is "Mithun", the promise should resolve with the string "Hello, Mithun!".


// function greetperson(name) {
//     return new Promise ((reslove,reject)=>{
//         const greeting = `hello ${name}!`
//         reslove(greeting);
//     });
// }

// greetperson("aditya").then((message)=>{
//     console.log(message);
// })
// .catch((Error)=>{
//     console.log(Error);
// })

function greetperson(name) {
    return new Promise((resolve) => {
    const greeting = `hello ${name}!`;
        resolve(greeting);
    });
}

greetperson("aditya").then((message)=>{
    console.log(message);
})