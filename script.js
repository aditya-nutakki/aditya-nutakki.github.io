var page_width = window.innerWidth;


// DROPDOWN HOVERED CHANGED TO CLICK IN THE MOBILE VIEW


var drop = document.querySelector(".drop");
var drop_li = document.querySelector(".drop li");

var dropdown = document.querySelector("#parent-dropdown");

var dropdown_li = document.querySelector("#parent-dropdown a");
var only_dropdown = document.querySelector("#dropdown");


var dropdown_ul = document.querySelector("#parent-dropdown ul"); 



if (page_width > 788){
    
    dropdown_li.addEventListener("mouseover" , ()=>{
    dropdown_ul.classList.add("nav-ul");
        only_dropdown.classList.add("dropped");

        
    })
    
    dropdown.addEventListener("mouseleave" , ()=>{
        dropdown_ul.classList.remove("nav-ul");
        only_dropdown.classList.remove("dropped");

    })
    
}


else{
    
    dropdown_li.addEventListener("click" , ()=>{
        drop.classList.add("drop-mobile");
        drop.classList.toggle("drop-active");
        dropdown_ul.classList.toggle("nav-ul-mobile");
        drop_li.classList.toggle("drop-li-active");
        only_dropdown.classList.toggle("dropped-mobile");

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



// STICKY NAV BAR 

var main_nav = document.querySelector("#main-nav");
console.log(main_nav);

var nav_height = document.querySelector("#navbar").offsetHeight;
console.log(nav_height);


var img = document.querySelector("#navbar img");

window.addEventListener("scroll" , ()=>{
    
    var yOffset = window.pageYOffset;
    
//    console.log(yOffset);

    if (yOffset > nav_height){
//        console.log("something should happen");
        
        main_nav.classList.add("main-active");
        img.classList.add("img-active");
        burger.classList.add("burger-drop-active");

        nav.classList.add("navlinks-active");  
        
        window.addEventListener("resize" , ()=>{
            
            var width = window.innerWidth;
            
            if (width > 788){
                console.log("navlinks-active should be used");

                nav.classList.add("navlinks-active");  
                nav.classList.remove("navlinks-active-mini");
                }
            
            else{
                console.log("navlinks-active-mini should be used");
                nav.classList.add("navlinks-active-mini");
                nav.classList.remove("navlinks-active");
            }
            
        }) 
            
        }
    
    else{
       main_nav.classList.remove("main-active" , "navlinks-active-mini");
       nav.classList.remove("navlinks-active");
       img.classList.remove("img-active");
       burger.classList.remove("burger-drop-active");
        }
  
})



// OUR-OFFERINGS SECTION

var info_circle = document.querySelectorAll(".info-circle");
var info_content  = document.querySelectorAll(".info-content");
var info_img = document.querySelectorAll(".info-img");


function expand_content_mobile(index){
    info_img[index].classList.toggle("info-img-trans");
    info_circle[index].classList.toggle("info-visible");
    info_content[index].classList.toggle("info-content-visible");
}




function expand_content_desktop(index){

        info_img[index].classList.add("info-img-trans");
        info_circle[index].classList.add("info-visible");
        info_content[index].classList.add("info-content-visible");
    
    info_circle[index].addEventListener("mouseleave" , ()=>{
        info_img[index].classList.remove("info-img-trans");
        info_circle[index].classList.remove("info-visible");
        info_content[index].classList.remove("info-content-visible");
        
    })
    
}






console.log(page_width);

//
//if (page_width > 1064){
//
//for (let i = 0 ; i<info_circle.length ; i++){
//
//    
//    expand_content_mobile(i);
//    
//
//    }
//
//}
//
//
//else{
//    for (let i = 0 ; i<info_circle.length ; i++){
//        expand_content_mobile(i);
//    }
//}
//
//



