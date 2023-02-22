"use strict";

// let elems = document.getElementsByTagName("h1");
// for (const item of elems) {
//     console.log(item)
// }

// let elems = document.getElementsByClassName("header");
// console.log(elems);

// let elems = document.getElementById("products");
// let pElem = document.querySelector("#products .item p")
// console.log(pElem);
// console.log(pElem.innerHTML);

// let thirdSpan = document.querySelector("#products span:nth-child(3)");
// console.log(thirdSpan);
// console.log(thirdSpan.innerHTML);
// pElem.style.backgroundColor = "red";

// let spans = document.querySelectorAll("#products span");

// for (const item of spans) {
//     if(item.innerText == "Bye5"){
//         console.log(item.innerHTML);
//     }
// }

// let h1 = document.querySelector("h1")
// console.log(h1);
// h1.className = "test";

// let button = document.querySelector("#products .container button")
// let h1 = document.querySelector("#products .container h1");

// button.onclick =function() {
//     alert("salam");
// }

// button.addEventListener("click", function(){
//     button.style.backgroundColor = "black";
//     h1.style.color = "red"
// })

// let btnOn = document.querySelector("#products .container .on")
// let btnOff = document.querySelector("#products .container .off")
let h1 = document.querySelector("#products .container h1");
let change = document.querySelector("#products .container-edit .change")
let bulb = document.querySelector("#products .icon i")
let body = document.querySelector("body")

// btnOn.addEventListener("click", function(){
//     h1.classList.add("active");
//     if(h1.classList.contains("deactive")){
//         h1.classList.remove("deactive");
//     }
// })

// btnOff.addEventListener("click", function(){
//     h1.classList.add("deactive");
//     if(h1.classList.contains("active")){
//         h1.classList.remove("active");
//     }
// })

// change.addEventListener("click", function(){
//     bulb.classList.add("bulb-on")
//     body.classList.add("active-body")
// })

// change.addEventListener("click", function(){
//     if (bulb.classList.contains("bulb-on") && body.classList.contains("active-body")) {
//         bulb.classList.remove("bulb-on")
//         body.classList.remove("active-body")
//     } else {
//         bulb.classList.add("bulb-on")
//         body.classList.add("active-body")
//     }
// })

// bulb.addEventListener("mouseover", function(){
//     if (bulb.classList.contains("bulb-on") && body.classList.contains("active-body")) {
//         bulb.classList.remove("bulb-on")
//         body.classList.remove("active-body")
//     } else {
//         bulb.classList.add("bulb-on")
//         body.classList.add("active-body")
//     }
// })

let input = document.querySelector("#products .container input");
let button = document.querySelector("#products .container button");
let list = document.querySelector("#products .container .list .list-group")

// button.addEventListener("click", function(){
//     console.log(input.value)
//     input.value = "";
// })

button.addEventListener("click", function(){
    let inputValue = input.value;

    if(inputValue == ""){
        alert("input bosh ola bilmez!")
        return;
    }

    let allLI = document.querySelectorAll("#products li")

    for (const eachli of allLI) {
        if(eachli.innerText == inputValue){
            input.value="";
            alert("bu artiq daxil edilib!")
            return
        }
    }

    let li = document.createElement("li");
    li.className = "list-group-item my-1"
    li.innerText = inputValue;
    list.append(li)
    input.value = "";
})








