window.addEventListener('scroll', () => {
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const revealTop = el.getBoundingClientRect().top;
        if (revealTop < windowHeight - 150) {
            el.classList.add('active');
        }
    });
});



const photos = [
    "images/photo1.jpg", 
    "images/photo2.jpg", 
    "images/photo3.jpg",
    "images/photo4.jpg"
];

let currentIndex = 0;

// Function to open the popup
function openGallery() {
    const modal = document.getElementById("photo-modal");
    modal.style.display = "flex"; // Using flex to center content
    document.body.style.overflow = "hidden"; // Prevent background scrolling
}

// Function to close the popup
function closeGallery() {
    const modal = document.getElementById("photo-modal");
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // Re-enable scrolling
}

// Function to navigate through photos
function changePhoto(step) {
    currentIndex += step;
    
    // Loop back to start/end
    if (currentIndex >= photos.length) currentIndex = 0;
    if (currentIndex < 0) currentIndex = photos.length - 1;
    
    // Update the image source
    const modalImg = document.getElementById("modal-img");
    modalImg.src = photos[currentIndex];
}

// Close modal if user clicks outside the image
window.onclick = function(event) {
    const modal = document.getElementById("photo-modal");
    if (event.target == modal) {
        closeGallery();
    }
}

// scoroll to top
const topBtn = document.getElementById("backToTop");

// When the user scrolls down 300px from the top, show the button
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
}

// Scroll to top logic
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // This creates the "flowy" smooth scroll
    });
}



//hamburger menu

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-links');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});