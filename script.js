
// highlights nav to scroll location
window.addEventListener('scroll', () => {
    let aboutY = document.getElementById("about");
    let educationY = document.getElementById("education");
    let projectsY = document.getElementById("projects");
    let skillsY = document.getElementById("skills");
    let scrollTop = window.scrollY; 
    const links = document.querySelectorAll('nav > ul > li > a');

    //console.log(window.scrollY);
    //console.log(document.getElementById("about").offsetTop);
    if (scrollTop >= aboutY.offsetTop && scrollTop < educationY.offsetTop) {
        links[0].classList.add("active");
        links[1].classList.remove("active");
        links[2].classList.remove("active");
        links[3].classList.remove("active");
    }
    if (scrollTop >= educationY.offsetTop && scrollTop < projectsY.offsetTop) {
        links[0].classList.remove("active");
        links[1].classList.add("active");
        links[2].classList.remove("active");
        links[3].classList.remove("active");
    }
    if (scrollTop >= projectsY.offsetTop && scrollTop < skillsY.offsetTop) {
        links[0].classList.remove("active");
        links[1].classList.remove("active");
        links[2].classList.add("active");
        links[3].classList.remove("active");
    }
    if (scrollTop >= skillsY.offsetTop) {
        links[0].classList.remove("active");
        links[1].classList.remove("active");
        links[2].classList.remove("active");
        links[3].classList.add("active");
    }
});