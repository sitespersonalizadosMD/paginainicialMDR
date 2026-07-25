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
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");

menuToggle.addEventListener("click", () => {

    mobileMenu.classList.toggle("active");

    if (mobileMenu.classList.contains("active")) {

        menuToggle.innerHTML = "✕";

        document.body.style.overflow = "hidden";

    } else {

        menuToggle.innerHTML = "☰";

        document.body.style.overflow = "auto";

    }

});

mobileMenu.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.remove("active");

        menuToggle.innerHTML = "☰";

        document.body.style.overflow = "auto";

    });

});
const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");

        const count = +counter.innerText;

        const increment = target / 100;

        if(count < target){

            counter.innerText = `${Math.ceil(count + increment)}`;

            setTimeout(updateCounter,20);

        }else{

            counter.innerText = target + "+";

        }

    }

    updateCounter();

});
