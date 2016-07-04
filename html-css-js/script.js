
var allDiv = document.getElementsByTagName("div");


for (let el of allDiv) {
    el.addEventListener('click', () => {
        if (el.classList.contains != 'my-active-event') {
            el.classList.add('my-active-event');
        }
    });


}