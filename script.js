/* =========================
   AJBC - SCRIPT PRINCIPAL
   Mejora UX sin alterar diseño
========================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       1. MENÚ ACTIVO SEGÚN SCROLL
    ========================= */
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll("#main-nav a");

    function activarMenu() {
        let scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 120;
            const sectionId = section.getAttribute("id");

            if (
                scrollY >= sectionTop &&
                scrollY < sectionTop + sectionHeight
            ) {
                navLinks.forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("href") === `#${sectionId}`) {
                        link.classList.add("active");
                    }
                });
            }
        });
    }

    window.addEventListener("scroll", activarMenu);

    /* =========================
       2. ANIMACIÓN SUAVE AL SCROLL
    ========================= */
    const elementos = document.querySelectorAll(
        ".inicio-texto, .inicio-imagen, .card, .nosotros-texto, .nosotros-logo"
    );

    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                }
            });
        },
        { threshold: 0.15 }
    );

    elementos.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(20px)";
        el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        observer.observe(el);
    });

});