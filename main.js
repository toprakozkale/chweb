// GSAP Kaydı
gsap.registerPlugin(ScrollTrigger);

// Sayfa Yüklendiğinde Başlangıç Animasyonları
window.addEventListener('load', () => {
    // Hero Animasyonu
    const tl = gsap.timeline();

    tl.from(".header-animate", {
        y: -100,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out"
    })
        .from(".hero-content > *", {
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out"
        }, "-=0.8");

    // İstatistikler (Stats) Animasyonu
    gsap.from(".stat-item", {
        scrollTrigger: {
            trigger: ".stat-item",
            start: "top 90%",
            toggleActions: "play none none none"
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out"
    });

    // Sütunlar (Pillars) Animasyonu - Düzeltilmiş
    const pillarCards = document.querySelectorAll(".pillar-card");
    if (pillarCards.length > 0) {
        gsap.set(".pillar-card", { opacity: 1, y: 0 }); // Başlangıçta görünür yap

        gsap.from(".pillar-card", {
            scrollTrigger: {
                trigger: "#pillars",
                start: "top 80%",
                toggleActions: "play none none none",
                // markers: true // Debug için, gerekirse yorum satırından çıkar
            },
            y: 80,
            opacity: 0,
            duration: 1,
            stagger: 0.25,
            ease: "power4.out",
            clearProps: "all" // Animasyon bitince değerleri temizle
        });
    }

    // CTA (Action Panel) Animasyonu
    gsap.from(".cta-animate", {
        scrollTrigger: {
            trigger: ".cta-animate",
            start: "top 85%",
            toggleActions: "play none none none"
        },
        scale: 0.95,
        opacity: 0,
        duration: 1,
        ease: "expo.out"
    });

});

// Yumuşak Kaydırma (Smooth Scroll)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
