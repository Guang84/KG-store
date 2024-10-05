// Function to toggle product information display
function toggleInfo(infoId) {
    const infoDiv = document.getElementById(infoId);
    infoDiv.style.display = infoDiv.style.display === 'none' ? 'block' : 'none';
}

// Function to toggle all images for a product
function toggleAllImages(productType) {
    const imageGallery = document.getElementById(productType + '-image-gallery');
    const images = imageGallery.getElementsByTagName('img');
    const isShowingAll = [...images].every(image => image.style.display === 'block');

    for (let img of images) {
        img.style.display = isShowingAll ? 'none' : 'block';
    }
    
    const button = document.querySelector(`button[onclick="toggleAllImages('${productType}')"]`);
    button.innerText = isShowingAll ? 'View All Images' : 'Hide Images';
}

// Function to show contact information
// Function to toggle contact information display
function showContactInfo(infoId) {
    const contactDiv = document.getElementById(infoId);
    contactDiv.style.display = contactDiv.style.display === 'none' ? 'block' : 'none';
}

// Call functions on page load
window.onload = function() {
    // You can initialize other parts here if needed
};


// Call functions on page load
window.onload = function() {
    toggleInfo('desktop-info'); // Initialize the display
    toggleInfo('laptop-info'); // Initialize the display
};

// Function to open the modal
function openModal(imageSrc) {
    document.getElementById("image-modal").style.display = "block";
    document.getElementById("modal-image").src = imageSrc;
    document.getElementById("caption").innerHTML = imageSrc.split('/').pop(); // Caption as the image name
}

// Function to close the modal
function closeModal() {
    document.getElementById("image-modal").style.display = "none";
}
