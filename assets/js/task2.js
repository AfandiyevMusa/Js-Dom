"use strict";

let input = document.querySelector("#products .container input");
let button = document.querySelector("#products .container .changeb");
let list = document.querySelector("#products .container .list .list-group")


button.addEventListener("click", function(){
    let inputValue = input.value;

    if(inputValue == ""){
        alert("input bosh ola bilmez!")
        return;
    }

    var allLI = document.querySelectorAll("#products li")

    for (const eachli of allLI) {
        if(eachli.innerText == inputValue){
            input.value="";
            alert("bu artiq daxil edilib!")
            return
        }
    }

    var li = document.createElement("li");
    li.className = "list-group-item my-1 eachli"
    li.innerText = inputValue;
    list.append(li)
    input.value = "";
    var deleteButton = document.createElement("i");
    deleteButton.className = "fa-solid fa-x dbutton"
    li.append(deleteButton);

    let deleted = document.querySelectorAll("i");
    for (let i = 0; i < deleted.length; i++) {
        deleted[i].addEventListener("click", function(){
            deleted[i].parentElement.style.display = "none";
        })
    }

    let deleteAllButton = document.querySelector("#products .container .deleteAllB")
    deleteAllButton.addEventListener("click", function(){
        list.innerHTML = "";
    })
})