

window.addEventListener('scroll', () => {
    let aboutY = document.getElementById("about");
    let projectsY = document.getElementById("projects");
    let scrollTop = window.scrollY; 
    const links = document.querySelectorAll('nav > ul > li > a');

    //console.log(window.scrollY);
    //console.log(document.getElementById("about").offsetTop);
    if (scrollTop >= aboutY.offsetTop && scrollTop < projectsY.offsetTop) {
        links[0].classList.add("active");
        links[1].classList.remove("active");
    }
    if (scrollTop >= projectsY.offsetTop) {
        links[1].classList.add("active");
        links[0].classList.remove("active");
    }
});

