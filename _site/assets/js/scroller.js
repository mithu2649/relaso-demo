function setupScroller(buttonClass, direction) {
    document.querySelectorAll(buttonClass).forEach(btn => {
        btn.addEventListener('click', function () {
            // Traverse to the closest .scroll-btns-container
            const scrollBtnsContainer = this.closest('.scroll-btns-container');

            // Find the sibling .posts-container
            const section = scrollBtnsContainer.parentElement.nextElementSibling;

            // Check if it's indeed the posts-container
            if (section && section.classList.contains('posts-container')) {
                console.log(section); // Now you have the posts-container

                let scrollAmount = 600; // Change this value to adjust scroll distance

                // Calculate new scroll position based on direction
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
