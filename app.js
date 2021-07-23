const nav = document.querySelector(".navbar");
const open = document.querySelectorAll(".open-nav");
const shadow = document.querySelector(".shadow-bg");

//open mobile menu
open.forEach((item) => {
    item.addEventListener("click", () => {
     nav.classList.toggle("toggle-nav");
     shadow.classList.toggle("toggle-nav");
    })
  })


  
//slider
const prevBtn = document.querySelectorAll(".prev-btn");
const nextBtn = document.querySelectorAll(".next-btn");

prevBtn.forEach((btn)=>{
  btn.addEventListener("click", ()=>{
    const currentSlide = document.querySelector(".current-slide","active");  
    const prevSlide = currentSlide.previousElementSibling;  
    
    if(prevSlide == null){
      return;
    }
    else{
      currentSlide.classList.remove("current-slide","active");
      prevSlide.classList.add("current-slide", "active");
    }
     
  })
})

nextBtn.forEach((btn)=>{
  btn.addEventListener("click", ()=>{
    const currentSlide = document.querySelector(".current-slide","active");
    const nextSlide = currentSlide.nextElementSibling;
      
    if (nextSlide == null){
      return;
    } 
    else{
      currentSlide.classList.remove("current-slide","active");
      nextSlide.classList.add("current-slide", "active");      
    }   

  })
})




