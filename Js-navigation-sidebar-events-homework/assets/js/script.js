"use strict";


let closeIcon = document.querySelector(".close-icon");
let openIcon = document.querySelector(".open-icon");

let navigation = document.querySelector(".navigation-top")

openIcon.addEventListener("click",function(){
    navigation.classList.remove("sidebar-top")
    closeIcon.classList.remove("d-none");
    openIcon.classList.add("d-none")
})

closeIcon.addEventListener("click",function(){
    navigation.classList.add("sidebar-top")
    closeIcon.classList.add("d-none")
    openIcon.classList.remove("d-none")
})




let leftIcon = document.querySelector(".left-icon");
let rightIcon = document.querySelector(".right-icon");

let navigationRight = document.querySelector(".navigation-right");


leftIcon.addEventListener("click",function(){
    navigationRight.classList.remove("sidebar-right")
    leftIcon.classList.add("d-none")
    rightIcon.classList.remove("d-none")
})

rightIcon.addEventListener("click",function(){
    navigationRight.classList.add("sidebar-right")
    rightIcon.classList.add("d-none")
    leftIcon.classList.remove("d-none")
})




let upIcon = document.querySelector(".up-icon")
let downIcon = document.querySelector(".down-icon")

let navigationBottom = document.querySelector(".navigation-bottom")


upIcon.addEventListener("click",function(){
    navigationBottom.classList.remove("sidebar-bottom");
    downIcon.classList.remove("d-none");
    upIcon.classList.add("d-none")
})

downIcon.addEventListener("click",function(){
    navigationBottom.classList.add("sidebar-bottom")
    downIcon.classList.add("d-none")
    upIcon.classList.remove("d-none")
})