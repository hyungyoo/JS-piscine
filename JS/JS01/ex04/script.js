document.addEventListener('scroll', (event) => {
    const trans = Math.round(1000 * (window.scrollY / 4200)) / 1000;
    document.documentElement.style.opacity = 1 - trans;
})