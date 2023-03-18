function myFunction() {
    return "hello world";
}

function higherOrderFunction(callback) {
    callback();

    return callback;
}

/*function aHigherOrderFn(callback) {
    console.log("hello world");
}*/

const aHigherOrderFn = (callback) => {
    console.log('hello world');
    callback();
}

aHigherOrderFn (()=> {
    console.log("our callback");
})

/*const myNumbers = [1, 2, 3] 
const squared = myNumbers.map((number) => {
    return number * number;
});*/

//short-hand of the above (syntatic sugar)
const squared = myNumbers.map((number) => number * number);

console.log(squared);
// [1, 4, 9]
console.log(myNumbers);
// [1, 2, 3]

const data = [
    {
        name: "Butters",
        age: 3,
        type: "dog"
    },
    {
        name: "Lizzy",
        age: 2,
        type: "lizard"
    },
    {
        name: "K10",
        age: 6,
        type: "cat"
    },

]

//use bracket notation to access first pet age
console.log(data[0].age);

//all names
const names = pets.map((pet) => pet.name)
console.log(names);


/*
[] square brackets
<> angle brackets
{} curly braces
() parenthesis

native HTML elements lowercase
custom JSX starts with cap letter
*/

const Hello = (props) => {
    console.log("props", props);
    return (
        <div>
            Hello {props.firstName} {props.lastName}
        </div>

    )
}

function HelloStudents() {
    const students = ['Jim', 'Dionte', 'Krista'];

    return (
        <div>
           
           {students.map((name) => (
                <Hello name={firstName} />
           ))}
   
        </div>

        <div>
         <Hello firstName="Krista" lastName="Frietas" />
        </div>
    )
}
