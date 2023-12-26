function sayHello (name, age, eyeColor="brown") {

    console.log(`hello! ${name}, you are ${age} years old, your eyes are ${eyeColor}`);
}
sayHello("adi", 27, "brown")
sayHello("adi", 27)

function shekelToDollar (shekel, dollar){
console.log(`${shekel} israeli shekel is equal to ${dollar} dollar `);
}
shekelToDollar (1, 3.63)

function change (usd) {
    return usd * 3.63;
}
// change(50)
console.log(`50 dollar = ${change(50)} shekel`);

function change2 (ils) {
    console.log(ils * 0.28);

}
change2 (1)

function familyAge (myAge) {
    console.log(`my age is: ${myAge}, my mothers age is: ${myAge*2}, my fathers age is: ${myAge*2*1.2}`);

}
familyAge (27)

function myAge () {
    let myAge = 27
   return myAge
}
function motherAge (myAge) {
    console.log(myAge*2);
}

motherAge(myAge())

function myfunk () {

}
const myfunk2 = () =>{
    
}