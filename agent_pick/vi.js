function showImage(src) {
    const imageDisplay = document.getElementById('image-display');
    const displayedImage = document.getElementById('displayed-image');

    displayedImage.src = src; // Gán đường dẫn hình ảnh được chọn
    imageDisplay.style.display = 'flex'; // Hiển thị div chứa hình ảnh lớn
}

function closeImage() {
    const imageDisplay = document.getElementById('image-display');
    imageDisplay.style.display = 'none'; // Ẩn div chứa hình ảnh lớn
}
