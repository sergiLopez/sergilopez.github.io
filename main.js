
//SCROLL NAVBAR

const links = document.querySelectorAll(".scroll_to");
listItems = document.querySelectorAll(".menu-burger a")

links.forEach(item => {
    item.addEventListener("click", function(e) {
        for (let i = 0; i < listItems.length; i++) {
            listItems[i].style.display = "none"
            menuBurger.classList.remove('active');
        }
        e.preventDefault();
        const el = document.getElementById(item.getAttribute("data-link"));
        el.scrollIntoView({behavior:"smooth",block: "start"})
    }) 
})

const button = document.querySelector(".work-button")

button.addEventListener("click", function(e){
    e.preventDefault();
    const section = document.getElementById("about")
    section.scrollIntoView({behavior: "smooth", block: "start"})

})

//MOBILE RESPONSIVE
menuBurger = document.querySelector(".menu-burger");
burgerButton = document.querySelector(".burger");

burgerButton.addEventListener("click", () =>{
    
    if(menuBurger.classList.contains('active')){
        menuBurger.classList.remove('active');
        for (let i = 0; i < listItems.length; i++) {
            listItems[i].style.display = "none"
        }
    
    }else{
        menuBurger.classList.add('active');
        for (let i = 0; i < listItems.length; i++) {
            listItems[i].style.display = "block"
        }
    }
})



//SCROLL REVEAL

ScrollReveal().reveal('.flex-container-item', {duration: 3000, origin: 'bottom', distance: '200px'});
ScrollReveal().reveal('.flex-container-item-who',  {duration: 3000, origin: 'bottom', distance: '200px'});
ScrollReveal().reveal('#form',  {duration: 3000, origin: 'bottom', distance: '100px'});

ScrollReveal().reveal('#card1',  {rotate: {x:1, y:100}, duration: 2000});
ScrollReveal().reveal('#card2',  {rotate: {x:1, y:100}, duration: 2000,delay: 200});
ScrollReveal().reveal('#card3',  {rotate: {x:1, y:100}, duration: 2000, delay: 400});
ScrollReveal().reveal('#card4',  {rotate: {x:1, y:100}, duration: 2000, delay: 600});