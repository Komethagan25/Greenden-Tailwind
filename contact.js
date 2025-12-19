// side navbar menu

let menu_icon=document.getElementById("menu_icon")
let sidenav=document.getElementById("sidenav")
let close_nav=document.getElementById("close_nav")


menu_icon.addEventListener("click",function(){
    sidenav.style.right=0

})
close_nav.addEventListener("click",function(){
    sidenav.style.right="-50%"
})