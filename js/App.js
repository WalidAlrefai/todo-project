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
