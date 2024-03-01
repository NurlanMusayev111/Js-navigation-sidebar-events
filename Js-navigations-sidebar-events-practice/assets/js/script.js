"use strict";


//let h1 = document.querySelector("h1");

// console.log(h1.closest(".product").children);


//let item1 = document.querySelector(".item1");

// console.log(item1.parentNode.parentNode.nextElementSibling.firstElementChild);

//let salam = document.querySelector(".salam");

//console.log(salam.nextElementSibling.lastElementChild);


// let btns = document.querySelectorAll("button");
// let h1 = document.querySelector("h1");


// btns.forEach(btn => {
//     btn.addEventListener("click",function(){
//         this.nextElementSibling.style.backgroundColor = "red"
//     })
// });


// document.addEventListener("keydown",function(e){
//     if(e.keyCode == 13){
//         document.querySelector("body").style.backgroundColor = "black"
//     }
// })



// let sideBar = document.querySelector(".sidebar");

// let openIcon = document.querySelector(".open-icon");

// let closeIcon = document.querySelector(".close-icon");


// openIcon.addEventListener("click",function(){
//     sideBar.classList.remove("move-sidebar")
//     openIcon.classList.add("d-none");
//     openIcon.previousElementSibling.classList.remove("d-none")
// })

// closeIcon.addEventListener("click",function(){
//     sideBar.classList.add("move-sidebar");
//     closeIcon.classList.add("d-none");
//     closeIcon.nextElementSibling.classList.remove("d-none")
// })


// let sendBtn = document.querySelector(".send");
// let warning = document.querySelector(".warning");


// sendBtn.addEventListener("mouseover",function(){
//     warning.classList.remove("btn-warning");
//     warning.classList.add("btn-success")
// })

// sendBtn.addEventListener("mouseout",function(){
//     warning.classList.remove("btn-success")
//     warning.classList.add("btn-warning")
// })


// let input = document.querySelector("input");

// input.addEventListener("keydown",function(){
//     console.log("Nurlan");
// })


// console.log(document.querySelector("a").hasAttribute("href"));

// document.querySelector("a").setAttribute("href","trabzonspor");


let googleBtn = document.querySelector(".google");
let youtubeBtn = document.querySelector(".youtube");

let a = document.querySelector("a")

googleBtn.addEventListener("click",function(){
    a.setAttribute("href","https://www.google.com/");
    a.innerText = "Go to google"
})

youtubeBtn.addEventListener("click",function(){
    a.setAttribute("href","https://www.youtube.com/")
    a.innerText = "Go to youtube"
})

