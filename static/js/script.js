function toggleAllImages(button) {
    const product = button.parentNode;
    const images = product.querySelectorAll('.gallery-image');
    images.forEach(img => {
        img.style.display = img.style.display === 'none' ? 'block' : 'none';
    });
}

function openImageModal(imageElement) {
    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    const modalThumbnails = document.getElementById('modal-thumbnails');

    // Show modal
    modal.style.display = 'flex';

    // Set the clicked image as the main image
    modalImage.src = imageElement.src;

    // Clear previous thumbnails
    modalThumbnails.innerHTML = '';

    // Create thumbnails for all images in the same product
    const productGallery = imageElement.parentNode;
    const images = productGallery.querySelectorAll('.gallery-image');

    images.forEach(img => {
        const thumbnail = document.createElement('img');
        thumbnail.src = img.src;
        thumbnail.onclick = function() {
            modalImage.src = img.src; // Update main image on thumbnail click
        };
        modalThumbnails.appendChild(thumbnail);
    });
}

function closeModal() {
    const modal = document.getElementById('image-modal');
    modal.style.display = 'none';
}

function showContactInfo(infoId) {
    const info = document.getElementById(infoId);
    info.style.display = info.style.display === 'none' ? 'block' : 'none';
}

function toggleDetails(detailsId) {
    const details = document.getElementById(detailsId);
    details.style.display = details.style.display === 'none' ? 'block' : 'none';
}
//read more function
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }