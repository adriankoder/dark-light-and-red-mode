import {teamswitshfunction} from "./teamswitshtoggle.js"
import {hamburgertoggle} from "./hamburger.js"
//get a element from html
//add a addventlicner


const hamburgerimg = document.querySelector("#hamburger")
console.log(hamburgerimg)
hamburgerimg.addEventListener("click", function(){
    hamburgertoggle("active","hidden")
})
const teamswitshbutton = document.querySelector ("#teamswitsh")
console.log(teamswitshbutton)
teamswitshbutton.addEventListener("click", function(){
    teamswitshfunction("light","darkMode","redMode")
})