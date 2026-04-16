export class Hero {
    render() {
        const section = document.createElement('section');
        section.id = "inicio";
        section.className = "hero";
        section.innerHTML = `
            <div class="hero-img">
                <!-- ACTUALIZAR: Cambiar src por tu foto personal -->
                <img src="./img/ferrer.jpeg" alt="Mi foto simpática">
            </div>
            <div class="hero-content">
                <h1>Francisco Ortiz Dionicio</h1>
                <p class="tagline">"Convierto problemas complejos en soluciones Java elegantes"</p>
                <div class="contact-info">
                    <!-- ACTUALIZAR: Email, ubicación y teléfono reales -->
                    <span>📧 ortizdionicio993@gmail.com</span>
                    <span>📍 Toluca, Estado de México</span>
                </div>
                <div class="social-links">
                    <!-- ACTUALIZAR: Reemplazar # por tus enlaces reales -->
                    <a href="https://github.com/Ferrer-System" target="_blank"> GitHub</a>
                    <a href="https://www.linkedin.com/in/francisco-ortiz-dionicio/" target="_blank"> LinkedIn</a>
                </div>
            </div>
        `;
        return section;
    }
}