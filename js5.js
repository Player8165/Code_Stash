console.log("This is jsavascript");

function greet(name, greettext = "Greetings fromm JS"){
    console.log(greettext + " " + name );
    console.log(name + " is a good player");
}

function sum(a,b,c){
    let d = a + b + c;
    return d;
}

let name = "Player";
let name1 = "Piro";
let name2 = "Nothing";
let name3 = "Noob"
let greettext = "GM"

greet(name, greettext);
greet(name1, greettext);
greet(name2, greettext);
greet(name3);

let returnVal = sum(6,4,9);
console.log(returnVal);

