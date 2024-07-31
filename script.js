
// highlights nav to scroll location
window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY; 
    /*
    let about = document.getElementById("about");
    let projects = document.getElementById("projects");
    let skills = document.getElementById("skills");
    let education = document.getElementById("education");
    let contact = document.getElementById("contact");

    const links = document.querySelectorAll('nav > ul > li > a');
    */

    changeActiveNav(scrollTop);
    addSlideAnimation(scrollTop);

});

// changes active nav item depending on scroll location
function changeActiveNav(scrollTop) {
    let about = document.getElementById("about");
    let projects = document.getElementById("projects");
    let skills = document.getElementById("skills");
    let education = document.getElementById("education");
    let contact = document.getElementById("contact");
    const links = document.querySelectorAll('nav > ul > li > a');

    if (scrollTop >= about.offsetTop && scrollTop < projects.offsetTop) {
        links[0].classList.add("active");
        links[1].classList.remove("active");
        links[2].classList.remove("active");
        links[3].classList.remove("active");
        links[4].classList.remove("active");
    }
    if (scrollTop >= projects.offsetTop && scrollTop < skills.offsetTop) {
        links[0].classList.remove("active");
        links[1].classList.add("active");
        links[2].classList.remove("active");
        links[3].classList.remove("active");
        links[4].classList.remove("active");
    }
    if (scrollTop >= skills.offsetTop && scrollTop < education.offsetTop) {
        links[0].classList.remove("active");
        links[1].classList.remove("active");
        links[2].classList.add("active");
        links[3].classList.remove("active");
        links[4].classList.remove("active");
    }
    if (scrollTop >= education.offsetTop && scrollTop < contact.offsetTop) {
        links[0].classList.remove("active");
        links[1].classList.remove("active");
        links[2].classList.remove("active");
        links[3].classList.add("active");
        links[4].classList.remove("active");
    }
    if (scrollTop >= contact.offsetTop) {
        links[0].classList.remove("active");
        links[1].classList.remove("active");
        links[2].classList.remove("active");
        links[3].classList.remove("active");
        links[4].classList.add("active");
    }
}

// adds slide animation for projects
function addSlideAnimation(scrollTop) {
    projects = document.querySelector(".project_list").children;
    for (let i = 0; i < projects.length; i++) {
        let bgOpacity = Math.min(Math.max((scrollTop - projects[i].offsetTop + 700) * 0.001, 0), 0.25);
        projects[i].style = `margin-left: max(calc( ${projects[i].offsetTop}px - ${scrollTop}px - 400px), 0px);
        background-color: rgba(0, 0, 0, ${bgOpacity});`;        
    }
}
