document.addEventListener("DOMContentLoaded", function () {
  // Get elements
  const modal = document.getElementById("videoModal");
  const btn = document.getElementById("openVideoBtn");
  const span = document.getElementsByClassName("close")[0];

  btn.onclick = function () {
    if (window.getComputedStyle(modal).display === "none") {
      // Set display to block (or flex/inline-block depending on your layout)
      gsap.set(modal, { display: "flex" });
      gsap.fromTo(
        ".modal-content",
        {
          scale: 0.5,
          transformOrigin: "0% 100%", // Bottom-left corner
        },
        {
          scale: 1,
          duration: 0.2,
          ease: "power2.out", // Smooth ease-out effect
        }
      );
    }
  };

  span.onclick = function () {
    if (window.getComputedStyle(modal).display === "flex") {
      // Set display to block (or flex/inline-block depending on your layout)
      gsap.fromTo(
        ".modal-content",
        {
          scale: 1,
          transformOrigin: "0% 100%", // Bottom-left corner
        },
        {
          scale: 0.6,
          duration: 0.05,
          ease: "power2.out", // Smooth ease-out effect
          onComplete: function () {
            gsap.set(modal, { display: "none" });
          },
        }
      );
    }
  };
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});
