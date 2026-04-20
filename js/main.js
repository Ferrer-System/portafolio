import { Header } from './componentes/Header.js';
import { Hero } from './componentes/Hero.js';
import { SobreMi } from './componentes/SobreMi.js';
import { Proyectos } from './componentes/Proyectos.js';
import { Habilidades } from './componentes/Habilidades.js';
import { Blog } from './componentes/Blog.js';
import { Contacto } from './componentes/Contacto.js';
import { Footer } from './componentes/Footer.js';

// Detectar tema del sistema + localStorage
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const savedTheme = localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light');
document.documentElement.setAttribute('data-theme', savedTheme);

const app = document.getElementById('app');

// Instanciamos cada componente
const header = new Header();
const hero = new Hero();
const sobreMi = new SobreMi();
const proyectos = new Proyectos();
const habilidades = new Habilidades();
const blog = new Blog();
const contacto = new Contacto();
const footer = new Footer();

// Montamos en el DOM
app.append(
    header.render(),
    hero.render(),
    sobreMi.render(),
    proyectos.render(),
    habilidades.render(),
    blog.render(),
    contacto.render(),
    footer.render()
);

// Smooth scroll para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === "#") return;
        const target = document.querySelector(targetId);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ========================================
// BOTÓN FLOTANTE "VOLVER ARRIBA"
// ========================================

// Crear el botón flotante
const scrollTopBtn = document.createElement('button');
scrollTopBtn.id = 'scrollTopBtn';
scrollTopBtn.innerHTML = '↑↑';
scrollTopBtn.setAttribute('aria-label', 'Volver arriba');
document.body.appendChild(scrollTopBtn);

// Función para mostrar/ocultar el botón según el scroll
function toggleScrollTopButton() {
    const btn = document.getElementById('scrollTopBtn');
    if (window.scrollY > 300) {
        btn.classList.add('visible');
    } else {
        btn.classList.remove('visible');
    }
}

// Función para volver arriba suavemente
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Escuchar evento de scroll
window.addEventListener('scroll', toggleScrollTopButton);

// Escuchar click en el botón
scrollTopBtn.addEventListener('click', scrollToTop);

// Verificar estado inicial
toggleScrollTopButton();