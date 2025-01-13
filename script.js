document.addEventListener('DOMContentLoaded', function () {
    // Select the toggle button and additional gallery
    const toggleGalleryButton = document.getElementById('toggle-gallery');
    const additionalGallery = document.querySelector('.additional-gallery');

    // Add event listener to the button
    toggleGalleryButton.addEventListener('click', function () {
        if (additionalGallery.classList.contains('d-none')) {
            // Show the hidden gallery
            additionalGallery.classList.remove('d-none');
            additionalGallery.style.maxHeight = '500px'; // Smoothly expand
            toggleGalleryButton.textContent = 'See Less';
        } else {
            // Hide the gallery
            additionalGallery.style.maxHeight = '0'; // Smoothly collapse
            setTimeout(() => {
                additionalGallery.classList.add('d-none');
            }, 500); // Match the transition duration
            toggleGalleryButton.textContent = 'See More';
        }
    });
});
