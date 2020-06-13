var page_width = window.innerWidth;


// DROPDOWN HOVERED CHANGED TO CLICK IN THE MOBILE VIEW


var drop = document.querySelector(".drop");
var drop_li = document.querySelector(".drop li");

var dropdown = document.querySelector("#parent-dropdown");

var dropdown_li = document.querySelector("#parent-dropdown a");


var dropdown_ul = document.querySelector("#parent-dropdown ul"); 



if (page_width > 788){
    
    dropdown_li.addEventListener("mouseover" , ()=>{
    dropdown_ul.classList.add("nav-ul");
    
        
    })
    
    dropdown.addEventListener("mouseleave" , ()=>{
        dropdown_ul.classList.remove("nav-ul");
    })
    
}


else{
    
    dropdown_li.addEventListener("click" , ()=>{
        drop.classList.add("drop-mobile");
        drop.classList.toggle("drop-active");
        dropdown_ul.classList.toggle("nav-ul-mobile");
        drop_li.classList.toggle("drop-li-active");
})
    
}

// BURGER EXPANSION WHEN IN MOBILE VIEW

var nav = document.querySelector("#navlinks");
var burger = document.querySelector("#burger");
var lines = burger.children;

function expand(){
    
    nav.classList.add("nav0-active");
    nav.classList.remove("nav0-disable");
    
    
    lines[0].style.cssText = "opacity : 0";
    lines[1].style.cssText = "margin-bottom:-4px;transform:rotate(-45deg)";
    lines[2].style.cssText = "margin-bottom:0px;transform:rotate(45deg)";

}

function collapse(){
    
    nav.classList.add("nav0-disable");
    nav.classList.remove("nav0-active");

    
    lines[0].style.cssText = "opacity : 1";
    lines[1].style.cssText = "transform:rotate(0deg)";    
    lines[2].style.cssText = "margin-bottom:0px;transform:rotate(0deg)";
}

let dropped = false;

function call(){
    collapse();
    dropped = false;
}



burger.addEventListener("click" ,()=>{
    
    console.log("Clicked something");
        
    if (dropped == false){
        expand();
        dropped = true;
    }
    else{
        call();
    }
    
});








