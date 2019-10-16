document.addEventListener('scroll', function (e) {
    const proficiencySection = document.querySelector('.proficiency');
    const proficiencySectionRect =  proficiencySection.getBoundingClientRect();
    const proficiencyCircles = document.querySelectorAll('.proficiency__circle');

    if (proficiencySectionRect.top < document.documentElement.clientHeight / 2) {
        Array.from(proficiencyCircles).forEach(circle => circle.style.animation = 'progress 1.5s ease-out forwards');
    }
});
