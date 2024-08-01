
window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY; 

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
        let bgOpacity = Math.min(Math.max((scrollTop - projects[i].offsetTop + 700) * 0.002, 0), 1);
        let projectMarginL = Math.min(Math.max(projects[i].offsetTop - scrollTop - 200, 0), 300);
        projects[i].style = `opacity: ${bgOpacity};
        margin-left: ${projectMarginL}px;`;   
    }
}