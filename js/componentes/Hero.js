export class Hero {
    render() {
        const section = document.createElement('section');
        section.id = "inicio";
        section.className = "hero";
        section.innerHTML = `
            <div class="hero-visual">
                <div class="hero-blur-bg"></div>
                <div class="hero-img-wrapper">
                    <div class="hero-silhouette"></div>
                    <img class="hero-img-full" src="./img/francisco.jpeg" alt="Francisco Ortiz - Backend Developer">
                    <div class="hero-img-overlay"></div>
                </div>
            </div>
            <div class="hero-content">
                <h1>Francisco Ortiz Dionicio</h1>
                <p class="tagline">"Convierto problemas complejos en soluciones Java elegantes"</p>
                <div class="contact-info">
                    <span>📧 ortizdionicio993@gmail.com</span>
                    <span>📍 Toluca, Estado de México</span>
                </div>
                <div class="social-links">
                    <a href="https://github.com/Ferrer-System" target="_blank">🔗 GitHub</a>
                    <a href="https://www.linkedin.com/in/francisco-ortiz-dionicio/" target="_blank">💼 LinkedIn</a>
                </div>
            </div>
        `;
        return section;
    }
}