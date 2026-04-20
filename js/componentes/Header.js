export class Header {
    render() {
        const header = document.createElement('header');
        header.innerHTML = `
            <nav class="navbar">
                <div class="logo">Mi Portafolio</div>
                <div class="menu-hamburger" id="hamburger">☰</div>
                <ul class="nav-links" id="navLinks">
                    <li><a href="#inicio">Inicio</a></li>
                    <li><a href="#sobre-mi">Sobre mí</a></li>
                    <li><a href="#proyectos">Proyectos</a></li>
                    <li><a href="#habilidades">Habilidades</a></li>
                    <li><a href="#blog">Blog</a></li>
                    <li><a href="#contacto">Contacto</a></li>
                </ul>
                <button id="themeToggle">${document.documentElement.getAttribute('data-theme') === 'dark' ? '🌙' : '☀️'}</button>
            </nav>
        `;

        // Menú hamburguesa
        const hamburger = header.querySelector('#hamburger');
        const navLinks = header.querySelector('#navLinks');
        if (hamburger) {
            hamburger.addEventListener('click', () => {
                navLinks.classList.toggle('active');
            });
        }

        // Toggle tema
        const themeBtn = header.querySelector('#themeToggle');
        themeBtn.addEventListener('click', () => {
            const current = document.documentElement.getAttribute('data-theme');
            const newTheme = current === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            themeBtn.textContent = newTheme === 'dark' ? '🌙' : '☀️';
        });

        return header;
    }
}