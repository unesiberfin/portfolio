// Array of your photography image paths
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