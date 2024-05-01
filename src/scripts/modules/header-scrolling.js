const header = document.querySelector('.header')
let headerHeight = 0
const isHeaderScrolled = () => window.pageYOffset > headerHeight;

function addScrollStatus() {
    isHeaderScrolled() ? header.classList.add('scrolled') : header.classList.remove('scrolled')
}

window.addEventListener('load', () => {
    headerHeight = header.clientHeight
    addScrollStatus()
})
window.addEventListener('scroll', addScrollStatus)