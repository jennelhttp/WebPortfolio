document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".enlarge-image");
    const modal = new bootstrap.Modal(document.getElementById("imageModal"));
    const modalImage = document.getElementById("modalImage");
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");

    images.forEach(img => {
        img.addEventListener("click", function () {
            modalImage.src = img.src;
            modalTitle.textContent = img.alt;
            modalDescription.textContent = img.getAttribute("data-desc");
            modal.show();
        });
    });
});
