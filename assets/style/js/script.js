var typed = new Typed(".text", { // Ganti 'typed' dengan 'Typed'
    strings: ["Welcome to my website!", "I provide premium app services and game top-ups.", "I am passionate about delivering fast, secure, and reliable digital solutions."],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
    showCursor: true,
    cursorChar: "|"
});

document.querySelectorAll(".tab-btn").forEach(button => {
    button.addEventListener("click", () => {
        // Hapus kelas aktif dari semua tombol
        document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));

        // Tambahkan kelas aktif ke tombol yang diklik
        button.classList.add("active");

        // Sembunyikan semua konten tab
        document.querySelectorAll(".tab-content").forEach(content => content.classList.remove("active"));

        // Tampilkan konten tab yang sesuai
        const target = document.querySelector(button.getAttribute("data-target"));
        target.classList.add("active");
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    });

    const elements = document.querySelectorAll('.animate');
    elements.forEach((el) => observer.observe(el));
});

// Pilih tombol toggle dan elemen navbar
const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

// Tambahkan event listener untuk tombol toggle
menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("active"); // Toggle kelas 'active'
});

// Tutup menu saat klik di luar menu
document.addEventListener("click", (e) => {
    if (!navbar.contains(e.target) && !menuToggle.contains(e.target)) {
        navbar.classList.remove("active");
    }
});


let lastScrollTop = 0; // Menyimpan posisi scroll terakhir

// Deteksi arah scroll
window.addEventListener("scroll", () => {
    const st = window.pageYOffset || document.documentElement.scrollTop;

    // Jika scroll ke bawah
    if (st > lastScrollTop) {
        document.body.setAttribute("data-scroll-direction", "down");
    } else {
        document.body.setAttribute("data-scroll-direction", "up");
    }
    lastScrollTop = st <= 0 ? 0 : st; // Jangan biarkan negatif
});

document.addEventListener('DOMContentLoaded', () => {
        const loaderWrapper = document.querySelector('.loader-wrapper');
        const content = document.querySelector('.content');

        // Timer untuk memastikan loader tampil selama 3 detik
        setTimeout(() => {
            loaderWrapper.style.transition = 'opacity 0.5s ease';
            loaderWrapper.style.opacity = '0';

            // Setelah animasi fade-out selesai, tampilkan konten
            setTimeout(() => {
                loaderWrapper.style.display = 'none'; // Sembunyikan loader
                content.style.display = 'block'; // Tampilkan konten
                content.style.opacity = '1'; // Fade-in konten
            }, 500); // Durasi yang sama dengan transisi fade-out loader
        }, 3000); // Waktu 3 detik untuk loader
    });
