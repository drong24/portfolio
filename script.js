

// adds fade in animation for about section when site is loaded
window.addEventListener('load', () => {
    const aboutSection = document.getElementById('about');
    aboutSection.style.opacity = '1';
    aboutSection.style.transform = 'translateY(0)';
})
// adds fade in animation when a section enters the viewport
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.fade_in'); // target all "fade_in" sections
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top; // get the position of the section relative to the viewport
        const sectionBottom = section.getBoundingClientRect().bottom; // get the position of the section's bottom relative to the viewport
        const windowHeight = window.innerHeight;

        // check if ANY part of the section is in the viewport
        if (sectionTop < windowHeight && sectionBottom > 0) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        } else {
            section.style.opacity = '0';
            section.style.transform = 'translateY(50px)';
        }
    });
});