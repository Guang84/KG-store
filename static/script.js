let currentImageIndex = 0; // Global variable to keep track of the current image index

// Function to open the modal and show the clicked image
function openImageModal(image) {
    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    
    modalImage.src = image.src; // Set the modal image to the clicked image
    modal.style.display = 'block'; // Show the modal
}

// Function to view all images in a modal
function viewAllImages(images) {
    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    const modalThumbnails = document.getElementById('modal-thumbnails');

    currentImageIndex = 0; // Reset index
    modalThumbnails.innerHTML = ''; // Clear previous thumbnails

    // Set the initial image in the modal
    modalImage.src = images[currentImageIndex];

    // Create thumbnails
    images.forEach((src, index) => {
        const img = document.createElement('img');
        img.src = src;
        img.className = 'thumbnail';
        img.onclick = function() {
            currentImageIndex = index; // Update current index
            modalImage.src = src; // Change the displayed image
        };
        modalThumbnails.appendChild(img);
    });

    modal.style.display = 'block'; // Show modal
}

// Function to close the modal
function closeModal() {
    const modal = document.getElementById('image-modal');
    modal.style.display = 'none'; // Hide the modal
}

// Function to change the displayed image in the modal
function changeImage(direction) {
    const modalImage = document.getElementById('modal-image');
    const thumbnails = document.querySelectorAll('#modal-thumbnails img');
    currentImageIndex += direction;

    // Wrap around if we go out of bounds
    if (currentImageIndex < 0) {
        currentImageIndex = thumbnails.length - 1; // Go to last image
    } else if (currentImageIndex >= thumbnails.length) {
        currentImageIndex = 0; // Go to first image
    }

    modalImage.src = thumbnails[currentImageIndex].src; // Update the displayed image
}

// Function to show contact info
function showContactInfo(infoId) {
    const info = document.getElementById(infoId);
    info.style.display = (info.style.display === 'none') ? 'block' : 'none'; // Toggle display
}

// Function to show specifications
function showSpecs(specsId) {
    const specs = document.getElementById(specsId);
    specs.style.display = (specs.style.display === 'none') ? 'block' : 'none'; // Toggle display
}
