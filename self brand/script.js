const container = document.querySelector('.content');
let isScrolling = false;

document.addEventListener('mousemove', (e) => {
    if (!isScrolling) {
        window.requestAnimationFrame(() => {
            const maxScroll = container.scrollWidth - window.innerWidth;
            const mouseX = e.clientX / window.innerWidth;
            const scrollX = mouseX * maxScroll;
            container.style.transform = `translateX(-${scrollX}px)`;
            isScrolling = false;
        });
    }
    isScrolling = true;
});

window.addEventListener('resize', () => {
    // Ensure proper scrolling on resize
    const maxScroll = container.scrollWidth - window.innerWidth;
    container.style.transform = `translateX(0px)`;
});
