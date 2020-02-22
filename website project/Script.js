//variables
const menuIcon=document.querySelector("#menu-icon");
const slideoutMenu=document.querySelector("#slideout-menu");
const searchIcon=document.querySelector("#search-icon");
const searchBox=document.querySelector("#search-box");
const about=document.querySelector("#about");
const home=document.querySelector("#home");
const recipes=document.querySelector("#recipes");


//search Button and menu drop down
searchIcon.addEventListener('click',function(){
if(searchBox.style.top=="72px"){
    searchBox.style.top="24px";
    searchBox.style.pointerEvents="none";
}
else{
    searchBox.style.top="72px";
    searchBox.style.pointerEvents="auto";
}
});

menuIcon.addEventListener('click',function(){
    if(slideoutMenu.style.opacity=="1"){
        slideoutMenu.style.opacity="0";
        slideoutMenu.style.pointerEvents="none";
    }
    else{
        slideoutMenu.style.opacity="1";
        slideoutMenu.style.pointerEvents="auto";
    }
});

