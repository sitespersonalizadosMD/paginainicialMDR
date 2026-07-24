const navbar = document.getElementById("navbar");

window.addEventListener("scroll", ()=>{

    if(window.scrollY > 50){

        navbar.classList.add("scrolled");

    }

    else{

        navbar.classList.remove("scrolled");

    }

});
const faqs = document.querySelectorAll(".faq-item");

faqs.forEach(faq => {

    faq.querySelector(".faq-question").addEventListener("click", () => {

        faq.classList.toggle("active");

    });

});
