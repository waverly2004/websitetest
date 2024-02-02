const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".link-list");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("hamburger_active");
    navMenu.classList.toggle("link-list_active");
});

document.querySelectorAll(".nav-item").forEach(n => n.addEventListener("click",() => {
    hamburger.classList.remove("hamburger_active");
    navMenu.classList.remove("link-list_active");
}))



const navHome = document.querySelector(".nav-home");
const navWork = document.querySelector(".nav-work");
const homeSection = document.querySelector("#home");

const homeOptions = {
    rootMargin: "-35px 0px 0px 0px"
}

const homeObserver = new IntersectionObserver(function(
    entries, homeObserver
    ) { entries.forEach(entry => {
            if (!entry.isIntersecting) {
                navHome.classList.remove("underlined");
                navHome.classList.add("underline");
                navWork.classList.remove("underline");
                navWork.classList.add("underlined");
            }
            else {
                navHome.classList.remove("underline");
                navHome.classList.add("underlined");
                navWork.classList.remove("underlined");
                navWork.classList.add("underline");
            }
        });
}, 
homeOptions);

homeObserver.observe(homeSection); 