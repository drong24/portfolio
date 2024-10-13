

// adds fade in animation for about section when site is loaded
window.addEventListener('load', () => {
    const aboutSection = document.getElementById('about');
    addFadeInAnimation(aboutSection);
})
// adds fade in animation when a section enters the viewport
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('.fade_in'); // target all "fade_in" sections
    sections.forEach(section => {
        addFadeInAnimation(section);
    });
});

// used by scroll and load event listeners to add fade in animation
function addFadeInAnimation(element) {
    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = element.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;
    
    if (elementTop < windowHeight && elementBottom > 0) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
    } else {
        element.style.opacity = '0';
        element.style.transform = 'translateY(50px)';
    }
}