// 1. Navbar Efek Scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 50);
});

// 2. Scroll Reveal Animation (Muncul Saat Di-Scroll)
const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
            
            // Jika itu progress bar, jalankan animasinya
            const bar = entry.target.querySelector('.skill-per');
            if(bar) {
                const targetWidth = bar.getAttribute('data-width');
                bar.style.width = targetWidth;
            }
        }
    });
}, observerOptions);

// Menerapkan animasi ke semua card dan section
document.querySelectorAll('.skill-card, .contact-container').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "all 0.8s ease-out";
    observer.observe(el);
});

// 3. Smooth Scroll untuk Navigasi
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetID = this.getAttribute('href');
        window.scrollTo({
            top: document.querySelector(targetID).offsetTop - 70,
            behavior: 'smooth'
        });
    });
});

// 4. Fitur Klik Sosmed (Alert Sederhana)
document.querySelectorAll('.social-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        const platform = e.currentTarget.querySelector('i').className;
        console.log(`Mengalihkan ke: ${platform}`);
    });
});