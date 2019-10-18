function init() {
    linksClickHandler();
    animateProficiencySection();
    startAnimate(700);
}

function linksClickHandler() {
    const allLinks = document.querySelectorAll('a');
    const aboutSection = document.querySelector('.about');

    for (let i = 0; i < allLinks.length; i++) {
        allLinks[i].addEventListener('click', function(e) {
            e.preventDefault();

            if (this.classList.contains('scroll')) {
                aboutSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
}

function animateProficiencySection() {
    document.addEventListener('scroll', function(e) {
        startAnimate((document.documentElement.clientHeight / 2) - 200);
    });
}

function startAnimate(height) {
    const proficiencySection = document.querySelector('.proficiency');
    const proficiencySectionRect =  proficiencySection.getBoundingClientRect();
    const proficiencyCircles = document.querySelectorAll('.proficiency__circle');

    if (proficiencySectionRect.top < height) {
        Array.from(proficiencyCircles).forEach(circle => circle.style.animation = 'progress 1.5s ease-out forwards');
    }
}

window.addEventListener('load', init);
