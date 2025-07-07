const navLinks = document.querySelectorAll('nav a');
const sections = document.querySelectorAll('section');

navLinks.forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        if (!href.startsWith('#')) return;

        e.preventDefault();

        navLinks.forEach(link => link.classList.remove('active'));
        this.classList.add('active');

        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const offsetTop = targetElement.offsetTop - 120;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

function toggleMobileMenu() {
    const menu = document.getElementById('navMenu');
    menu.classList.toggle('active');
}

window.addEventListener('scroll', function () {
    const nav = document.querySelector('nav');
    let current = '';

    if (window.scrollY > 100) {
        nav.style.background = 'linear-gradient(135deg, #1a1a1a 0%, #2c2c2c 100%)';
    } else {
        nav.style.background = 'linear-gradient(135deg, #2c2c2c 0%, #404040 100%)';
    }

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 140;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    navLinks[0].classList.add('active');
});