"use strict";

var yourName =prompt("Please enter your Name");
var yourGender = prompt("What is your gender");
var yourAge = prompt("What is your age");

if(yourAge <= 0){
    alert("Your age is wrong")
}

var welcomingMassage=confirm( "Do you want to skip the welcoming massages?!")
if(!welcomingMassage){
    if(yourGender.toLocaleLowerCase()=="male"){
        alert("Welcom Mr " + yourName);
    }else if(yourGender.toLocaleLowerCase() == "female"){
        alert("Welcom Ms "+ yourName);
    }else{
        alert("Welcome " + yourName)
    }
}else{
    console.log("User skipped the welcom massage")
}



//new task
var yourAnswer =[]

var satisfiedServices =prompt("Are you satisfied about our services?");
var encounterProblem = prompt ("Did you encounter any problem while dealing with us?");
var adviseAnyone = prompt("Do you advise anyone to deal with us?");

function arrayToPush(arrays,answer){
    if ( answer.toLowerCase()== "yes" || answer.toLowerCase()=="no") {
        arrays.push(answer)
    }else{
        arrays.push("invalid")
    }
}

arrayToPush(yourAnswer,satisfiedServices);
arrayToPush(yourAnswer,encounterProblem);
arrayToPush(yourAnswer,adviseAnyone);

function printArray(arr){
    for(let i = 0 ; i <= arr.length -1 ; i++){
        console.log(arr[i]);
    }
}
printArray(yourAnswer);
