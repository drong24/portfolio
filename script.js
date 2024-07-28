
// highlights nav to scroll location
window.addEventListener('scroll', () => {
    let about = document.getElementById("about");
    let projects = document.getElementById("projects");
    let skills = document.getElementById("skills");
    let education = document.getElementById("education");
    let contact = document.getElementById("contact");
    let scrollTop = window.scrollY; 
    const links = document.querySelectorAll('nav > ul > li > a');

    //console.log(window.scrollY);
    //console.log(document.getElementById("about").offsetTop);
    if (scrollTop >= about.offsetTop && scrollTop < projects.offsetTop) {
        links[0].classList.add("active");
        links[1].classList.remove("active");
        links[2].classList.remove("active");
        links[3].classList.remove("active");
        links[3].classList.remove("active");
    }
    if (scrollTop >= projects.offsetTop && scrollTop < skills.offsetTop) {
        links[0].classList.remove("active");
        links[1].classList.add("active");
        links[2].classList.remove("active");
        links[3].classList.remove("active");
        links[3].classList.remove("active");
    }
    if (scrollTop >= skills.offsetTop && scrollTop < education.offsetTop) {
        links[0].classList.remove("active");
        links[1].classList.remove("active");
        links[2].classList.add("active");
        links[3].classList.remove("active");
        links[3].classList.remove("active");
    }
    if (scrollTop >= education.offsetTop && scrollTop < contact.offsetTop) {
        links[0].classList.remove("active");
        links[1].classList.remove("active");
        links[2].classList.remove("active");
        links[3].classList.add("active");
        links[3].classList.remove("active");
    }
    if (scrollTop >= contact.offsetTop) {
        links[0].classList.remove("active");
        links[1].classList.remove("active");
        links[2].classList.remove("active");
        links[3].classList.remove("active");
        links[3].classList.add("active");
    }
});