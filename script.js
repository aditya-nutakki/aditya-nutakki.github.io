//conosole.log("Made by Aditya Nutakki");


let burger = document.querySelector(".burger");
let mobile_navbar = document.querySelector("#mobile-navbar");
let lines = document.getElementsByClassName("line");

let dropped = false;


function call(){
    collapse();
    dropped = false;
}

function expand(){

    
    
    lines[0].style.cssText = "margin-bottom:-10px;transform:rotate(-45deg)";

    lines[1].style.cssText = "opacity : 0";

    lines[2].style.cssText = "margin-bottom:-4px;transform:rotate(45deg)";
    
    mobile_navbar.classList.add("visible-mobile-navbar");

}

function collapse(){
    
    
    lines[0].style.cssText = "opacity : 1";
    lines[1].style.cssText = "transform:rotate(0deg)";    
    lines[2].style.cssText = "margin-bottom:0px;transform:rotate(0deg)";
    
        mobile_navbar.classList.remove("visible-mobile-navbar");

    
}


burger.addEventListener("click" , ()=>{
    
    // FOR ANIMATING BURGER
//    
//    lines[0].style.cssText = "margin-bottom:-10px;transform:rotate(-45deg)";
//
//    lines[1].style.cssText = "opacity : 0";
//
//    lines[2].style.cssText = "margin-bottom:-3px;transform:rotate(45deg)";
//    
    
    
    // FOR GETTING USER-ACTIONS
    
      if (dropped == false){
        expand();
        dropped = true;
    }
    else{
        call();
    }
    
    
    
    
})







