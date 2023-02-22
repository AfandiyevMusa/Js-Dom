"use strict";

let num1 = document.querySelector(".container .inputs .num1")
let num2 = document.querySelector(".container .inputs .num2")

let toplama = document.querySelector(".container .buttons .toplama")
let cixma = document.querySelector(".container .buttons .cixma")
let vurma = document.querySelector(".container .buttons .vurma")
let bolme = document.querySelector(".container .buttons .bolme")

let netice = document.querySelector(".container .netice input")

function containsOnlyNumbers(str) {
    return /^\d+$/.test(str);
}

toplama.addEventListener("click", function(){
    netice.value = ""
    let num1Value = parseFloat(num1.value);
    let num2Value = parseFloat(num2.value);
    if(num1Value == "" || num2Value == ""){
        alert("input bosh ola bilmez!")
        return;
    }else
     if((num1Value != "" && containsOnlyNumbers(num1Value) != true) || (num2Value != "" && containsOnlyNumbers(num2Value) != true)){
        alert("inputa reqem daxil edilmelidir")
        return;
    }
    
    let result = num1Value + num2Value
    netice.value = result
    num1.value = "";
    num2.value = "";
})

cixma.addEventListener("click", function(){
    netice.value = ""
    let num1Value = parseFloat(num1.value);
    let num2Value = parseFloat(num2.value);
    if(num1Value == "" || num2Value == ""){
        alert("input bosh ola bilmez!")
        return;
    }else
     if((num1Value != "" && containsOnlyNumbers(num1Value) != true) || (num2Value != "" && containsOnlyNumbers(num2Value) != true)){
        alert("inputa reqem daxil edilmelidir")
        return;
    }
    
    let result = num1Value - num2Value
    netice.value = result
    num1.value = "";
    num2.value = "";
})

vurma.addEventListener("click", function(){
    netice.value = ""
    let num1Value = parseFloat(num1.value);
    let num2Value = parseFloat(num2.value);
    if(num1Value == "" || num2Value == ""){
        alert("input bosh ola bilmez!")
        return;
    }else
     if((num1Value != "" && containsOnlyNumbers(num1Value) != true) || (num2Value != "" && containsOnlyNumbers(num2Value) != true)){
        alert("inputa reqem daxil edilmelidir")
        return;
    }
    
    let result = num1Value * num2Value
    netice.value = result
    num1.value = "";
    num2.value = "";
})

bolme.addEventListener("click", function(){
    netice.value = ""
    let num1Value = parseFloat(num1.value);
    let num2Value = parseFloat(num2.value);
    if(num2Value == 0){
        alert("0a bolme yoxdur")
        return;
    }else
    if((num1Value != "" && containsOnlyNumbers(num1Value) != true) || (num2Value != "" && containsOnlyNumbers(num2Value) != true)){
        alert("inputa reqem daxil edilmelidir")
        return;
    }else if(num1Value == "" || num2Value == ""){
        alert("input bosh ola bilmez!")
        return
    }
    
    let result = num1Value / num2Value
    netice.value = result
    num1.value = "";
    num2.value = "";
})