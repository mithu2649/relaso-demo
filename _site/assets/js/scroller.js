function setupScroller(buttonClass, direction) {
    document.querySelectorAll(buttonClass).forEach(btn => {
        btn.addEventListener('click', function () {
            const scrollBtnsContainer = this.closest('.scroll-btns-container');
            const section = scrollBtnsContainer.parentElement.nextElementSibling;

            if (section && section.classList.contains('posts-container')) {
            
                let scrollAmount = window.innerWidth <= 600 ? 150 : 600;

                if (direction === 'next') {
                    section.scrollTo({
                        left: section.scrollLeft + scrollAmount,
                        behavior: 'smooth'
                    });
                } else if (direction === 'previous') {
                    section.scrollTo({
                        left: section.scrollLeft - scrollAmount,
                        behavior: 'smooth'
                    });
                }
            } else {
                console.error('The next sibling is not a posts-container');
            }
        });
    });
}
