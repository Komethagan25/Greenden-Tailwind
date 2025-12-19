// side navbar menu

let menu_icon=document.getElementById("menu_icon")
let sidenav=document.getElementById("sidenav")
let close_nav=document.getElementById("close-nav")


menu_icon.addEventListener("click",function(){
    sidenav.style.right=0

})
close_nav.addEventListener("click",function(){
    sidenav.style.right="-50%"
})

// product search function
let productcontainer=document.getElementById("product-container")
let search=document.getElementById("Search")
let productlist=productcontainer.querySelectorAll("div")

   search.addEventListener("keyup",function(){
    let enteredvalue=event.target.value.toUpperCase()

        for(count=0; count<productlist.length; count=count+1)
        {
            let productname=productlist[count].querySelector("h1").textContent

            if(productname.toUpperCase().indexOf(enteredvalue)<0)
            {
                productlist[count].style.display="none"
            }
            else{
                productlist[count].style.display="block"
            }

        }
   })