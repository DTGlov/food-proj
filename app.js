const nav = document.querySelector('.nav-responsive');
const bars = document.querySelector('.bars');



bars.addEventListener('click', () => {
    if (nav.classList.contains('hidden')) {
        nav.classList.remove('hidden')
    } else {
        nav.classList.add('hidden')
    } 
})
