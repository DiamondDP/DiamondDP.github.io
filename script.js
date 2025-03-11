// CUSTOM CURSOR
document.addEventListener("DOMContentLoaded", () => {
    const cursor = document.querySelector(".custom-cursor");

    document.addEventListener("mousemove", (e) => {
        cursor.style.top = `${e.clientY}px`;
        cursor.style.left = `${e.clientX}px`;
        cursor.style.opacity = "1"; // Make cursor visible on movement
    });

    // Detect hover over any clickable elements
    document.addEventListener("mouseover", (e) => {
        if (e.target.matches("a, button, input, textarea, select, [role='button']")) {
            cursor.classList.add("clickable-hover");
        }
        
        // Add enlargement effect for specific elements with a specific id
        if (e.target.id === "cursor-enlarge") {
            cursor.classList.add("clickable-hover");
        }
    });

    document.addEventListener("mouseout", (e) => {
        if (e.target.matches("a, button, input, textarea, select, [role='button']")) {
            cursor.classList.remove("clickable-hover");
        }

        // Remove enlargement effect when leaving the target element
        if (e.target.id === "cursor-enlarge") {
            cursor.classList.remove("clickable-hover");
        }
    });

    // Fade out when leaving the window
    document.addEventListener("mouseleave", () => {
        cursor.style.opacity = "0";
    });

    // Fade in when re-entering the window
    document.addEventListener("mouseenter", () => {
        cursor.style.opacity = "1";
    });
});


// CAROUSEL
let slides = document.querySelectorAll('.slide');
let progress = document.querySelector('.progress');
let currentIndex = 0;
const slideInterval = 5000; // 1000 = 1 second

function showSlide(index) {
    // Update the transform property of the slides to slide them horizontally
    const slidesContainer = document.querySelector('.slides');
    slidesContainer.style.transform = `translateX(-${index * 100}%)`; // Move the slides left

    // Reset progress animation
    progress.style.transition = 'none';
    progress.style.width = '0%';
    setTimeout(() => {
        progress.style.transition = `width ${slideInterval}ms linear`;
        progress.style.width = '100%';
    }, 50);
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

// Initialize
showSlide(currentIndex);
setInterval(nextSlide, slideInterval);

// IMAGE MODAL
// IMAGE MODAL
var modal = document.querySelector('.image-modal');
var closeButton = document.querySelector('.close-btn');
var modalImage = document.querySelector('.modal-image');
var overlay = document.querySelector('.overlay');

// When the user clicks on the close button, close the modal and hide the overlay
closeButton.onclick = function() {
    closeModal();
}

// Function to close the modal
function closeModal() {
    modal.style.opacity = '0'; // Fade out the modal
    modal.style.transform = 'translate(-50%, -50%) scale(0)'; // Scale it down
    overlay.style.opacity = '0'; // Fade out the overlay

    // After the transition ends, hide the modal and overlay completely
    setTimeout(function() {
        modal.style.display = 'none'; // Hide the modal
        overlay.style.display = 'none'; // Hide the overlay
    }, 300); // Match the duration of the transition
}

// Function to open the modal and display the clicked image with customizable scale
function openImageModal(clickedImage, scaleVar) {
    var imageSrc = clickedImage.src;
    modalImage.src = imageSrc; // Set the src of the modal image to the clicked image's src
    modal.style.display = 'block'; // Show the modal
    overlay.style.display = 'block'; // Show the overlay

    // Trigger the fade-in and scaling transition
    setTimeout(function() {
        modal.style.opacity = '1'; // Fade in the modal
        modal.style.transform = `translate(-50%, -50%) scale(${scaleVar})`; // Apply custom scale value
        overlay.style.opacity = '1'; // Fade in the overlay
    }, 10); // A small delay to ensure the display property change is applied first
}

// Add event listener for the Escape key press to close the modal
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') { // Check if the Escape key is pressed
        closeModal();
    }
});

// Add event listener for clicks on the overlay to close the modal
overlay.addEventListener('click', function(event) {
    // Check if the click happened outside the modal image
    if (!modalImage.contains(event.target)) {
        closeModal();
    }
});


// OTHERS
$('#spanYear').html(new Date().getFullYear());