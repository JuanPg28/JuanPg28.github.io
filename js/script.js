window.addEventListener("load", () => {
    document.querySelector(".main").classList.remove("hidden");
    document.querySelector(".home-section").classList.add("active");
    /*Cargar Pagina*/

    document.querySelector(".page-loader").classList.add("fade-out");
    setTimeout(() => {
        document.querySelector(".page-loader").style.display = "none";
    },600);
});

/*Navegador*/

const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", () => {
    hideSection();
    toggleNavbar();
    document.body.classList.toggle("hide-scrolling");
});
function hideSection() {
    document.querySelector("section.active").classList.toggle("fade-out");
}
function toggleNavbar() {
    document.querySelector(".header").classList.toggle("active");
}

/*Active*/

document.addEventListener("click", (e) => {
    if(e.target.classList.contains("link-item") && e.target.hash !== "") {
        document.querySelector(".overlay").classList.add("active");
        navToggler.classList.add("hide");
        if(e.target.classList.contains("nav-item")){
            toggleNavbar();
        }
        else {
            hideSection();
            document.body.classList.add("hide-scrolling");
        }
        setTimeout(() => {
            document.querySelector("section.active").classList.remove("active", "fade-out");
            document.querySelector(e.target.hash).classList.add("active");
            window.scrollTo(0,0);
            document.body.classList.remove("hide-scrolling");
            navToggler.classList.remove("hide");
            document.querySelector(".overlay").classList.remove("active");
        },500);
    }
});

/*Las Pestañas Experiencia y Educacion*/

const tabsContainer = document.querySelector(".about-tabs"),
aboutSection = document.querySelector(".about-section");

tabsContainer.addEventListener("click", (e) => {
    if(e.target.classList.contains("tab-item") && !e.target.classList.contains("active")){
        tabsContainer.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const target = e.target.getAttribute("data-target");
        aboutSection.querySelector(".tab-content.active").classList.remove("active");
        aboutSection.querySelector(target).classList.add("active");
    }
});


/*Portafolio Ventana Emergente*/

document.addEventListener("click", (e) => {
    if(e.target.classList.contains("view-project-btn")){
        togglePortafolioPopup();
        document.querySelector(".portafolio-popup").scrollTo(0,0);
        portafolioItemDetails(e.target.parentElement);
    }
})
function togglePortafolioPopup() {
    document.querySelector(".portafolio-popup").classList.toggle("open");
    document.body.classList.toggle("hide-scrolling");
    document.querySelector(".main").classList.toggle("fade-out");
}

document.querySelector(".pp-close").addEventListener("click", togglePortafolioPopup);

document.addEventListener("click", (e) => {
    if(e.target.classList.contains("pp-inner")) {
        togglePortafolioPopup();
    }
})

function portafolioItemDetails(portafolioItem) {
    document.querySelector(".pp-thumbnail video").src = 
    portafolioItem.querySelector(".portafolio-item-thumbnail video").src;

    document.querySelector(".pp-header h3").innerHTML =
    portafolioItem.querySelector(".portafolio-item-title").innerHTML;

    document.querySelector(".pp-body").innerHTML =
    portafolioItem.querySelector(".portafolio-item-details").innerHTML;
}

