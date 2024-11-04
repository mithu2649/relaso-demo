// Smooth scrolling function with offset
function smoothScroll(selector, navbarSelector) {
    document.querySelectorAll(selector).forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default anchor click behavior

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            // Get the navbar height to set the scroll offset
            const navbarHeight = document.querySelector(navbarSelector).offsetHeight + 100;

            // Calculate the scroll position
            const scrollPosition = targetElement.getBoundingClientRect().top + window.scrollY - navbarHeight;

            // Smoothly scroll to the target position
            window.scrollTo({
                top: scrollPosition,
                behavior: 'smooth'
            });
        });
    });
}

// Back to Top Button functionality
function backToTop(buttonId) {
    const backToTopButton = document.getElementById(buttonId);

    // Show the button when scrolling down
    window.addEventListener('scroll', function () {
        // Check if the user has scrolled down more than 300 pixels
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'block'; // Show the button
        } else {
            backToTopButton.style.display = 'none'; // Hide the button
        }
    });

    // Scroll back to top when the button is clicked
    backToTopButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}
