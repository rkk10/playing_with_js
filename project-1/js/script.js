

var header = document.querySelector('.head');
var section = document.querySelector('.sec');
var footer = document.querySelector('.foot');

header.addEventListener('click', () => {
    if ( header.classList.contains == 'click-header' )
        return;

    header.classList.add('click-header');
});

section.addEventListener('click', () => {
    if (section.classList.contains == 'click-section')
        return;

    section.classList.add('click-section');
});


footer.addEventListener('click', () => {
    if (footer.classList.contains == 'click-footer')
        return;

    footer.classList.add('click-footer');
});

