let container=document.getElementById("container");


// nav.style.width="100vw";
// nav.style.height="10vh";
// nav.style.background="gray";
// nav.style.cssText="width: 100vw; height: 10vh; background: gray"





// create a function to build a dynamic navigation
(function createNav(){
    let navCont=document.getElementById("nav__bar");
    let nav=document.createElement("nav");
    let navList=document.createElement("ul");
    let sections=document.getElementsByClassName("sections");
    for(section of sections){
        let listItem=document.createElement("li");
        let link=document.createElement("a");
        link.textContent=section.firstElementChild.textContent;
        link.href=`#${section.id}`
        navList.appendChild(listItem)
        listItem.appendChild(link)
        nav.appendChild(navList)
        // nav.classList.add("nav__cont")
        nav.id="nav__cont";
    }
    navCont.appendChild(nav);
})();

// call or invoke the function 
// createNav();
// Imediatly Invoked Function Expression (IIFE)
(function x(){})();

