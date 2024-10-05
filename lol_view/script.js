document.addEventListener('DOMContentLoaded', function() {
    // Chọn tất cả các icon
const icons = document.querySelectorAll('.icon');

// Lặp qua từng icon và thêm sự kiện click
icons.forEach(icon => {
    icon.addEventListener('click', function() {
        // Lấy đường dẫn hình ảnh từ thuộc tính data-image
        const imageSrc = this.getAttribute('data-image');

        // Cập nhật ảnh trong phần tử general1
        const generalImage = document.querySelector('.general-image');
        generalImage.src = imageSrc;

        // Cập nhật tiêu đề và mô tả nếu cần
        const generalTitle = document.querySelector('.general1 h2');
        const generalDescription = document.querySelector('.general1 p');

        const iconText = this.querySelector('p').textContent;

        if (iconText === "Sát Thủ") {
            generalTitle.textContent = "AKALI";
            generalDescription.textContent = "Sát thủ đơn độc";
        } else if (iconText === "Đấu Sĩ") {
            generalTitle.textContent = "YASUO";
            generalDescription.textContent = "Kẻ Bất Dung Thứ";
        } else if (iconText === "Pháp Sư") {
            generalTitle.textContent = "LUX";
            generalDescription.textContent = "Tiểu Thư Ánh Sáng";
        } else if (iconText === "Xạ Thủ") {
            generalTitle.textContent = "JINX";
            generalDescription.textContent = "Khẩu Pháo Nổi Loạn";
        } else if (iconText === "Hỗ Trợ") {
            generalTitle.textContent = "THRESH";
            generalDescription.textContent = "Cai Ngục Xiềng Xích";
        } else if (iconText === "Đỡ Đòn") {
            generalTitle.textContent = "LEONA";
            generalDescription.textContent = "Bình Minh Rực Rỡ";
        }
    });
});

});


const icons = document.querySelectorAll('.icon-tab--tab-item');

// Lặp qua từng icon và thêm sự kiện click
icons.forEach(icon => {
    icon.addEventListener('click', function() {
        // Lấy đường dẫn video từ thuộc tính data-video
        const videoSrc = this.getAttribute('data-video');

        // Cập nhật video trong phần tử
        const videoElement = document.querySelector('.game-video1'); // Sửa lại để chỉ lấy phần tử video chính xác
        videoElement.src = videoSrc;

        // Tải lại video
        videoElement.load();
    });
});

const championList = document.querySelector('.champion-list');
const champions = document.querySelectorAll('.champion');
const championWidth = 500 + 20; // Chiều rộng của hình ảnh cộng với khoảng cách
let currentIndex = 0;

// Hiển thị tất cả hình ảnh trên desktop
if (window.innerWidth > 768) {
    champions.forEach((champion, index) => {
        champion.style.display = 'block'; // Hiển thị tất cả hình ảnh trên desktop
    });
} else {
    // Ẩn tất cả hình ảnh, chỉ hiển thị hình đầu tiên trên điện thoại
    champions.forEach((champion, index) => {
        champion.style.display = index === currentIndex ? 'block' : 'none';
    });
}

// Cuộn ngang và chuyển đổi hình ảnh
document.getElementById('prev').addEventListener('click', () => {
    if (window.innerWidth > 768) {
        championList.scrollBy({
            top: 0,
            left: -championWidth,
            behavior: 'smooth'
        });
    } else {
        champions[currentIndex].style.display = 'none'; // Ẩn hình ảnh hiện tại
        currentIndex = (currentIndex - 1 + champions.length) % champions.length; // Giảm chỉ số
        champions[currentIndex].style.display = 'block'; // Hiển thị hình ảnh mới
    }
});

document.getElementById('next').addEventListener('click', () => {
    if (window.innerWidth > 768) {
        championList.scrollBy({
            top: 0,
            left: championWidth,
            behavior: 'smooth'
        });
    } else {
        champions[currentIndex].style.display = 'none'; // Ẩn hình ảnh hiện tại
        currentIndex = (currentIndex + 1) % champions.length; // Tăng chỉ số
        champions[currentIndex].style.display = 'block'; // Hiển thị hình ảnh mới
    }
});

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('[data-toggle="modal"]').forEach(button => {
        button.addEventListener('click', function() {
            document.querySelector('.RiotBar-RsoModal').style.display = 'flex'; // Hiển thị modal
        });
    });
    

    // Đóng modal khi nhấn vào nút đóng
    document.querySelector('.close-icon').addEventListener('click', function() {
        document.querySelector('.RiotBar-RsoModal').style.display = 'none'; // Ẩn modal
    });

    // Ẩn modal khi click bên ngoài nội dung
    document.querySelector('.RiotBar-RsoModal').addEventListener('click', function(event) {
        if (event.target === this) {
            this.style.display = 'none'; // Ẩn modal
        }
    });
});

