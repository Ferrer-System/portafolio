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
                
                 <div class="about-header">
                        
                        <h3>Backend Developer</h3>
                        <div class="tech-badges">
                            <span class="badge">Java</span>
                            <span class="badge">Spring Boot</span>
                            <span class="badge">Microservicios</span>
                            <span class="badge">API REST</span>
                        </div>
                    </div>
                    
                    <div class="about-content">
                        <div class="highlight-box">
                            <span class="quote-icon"></span>
                            <p>Especialista en construir APIs robustas y sistemas escalables con Java y Spring Boot</p>
                        </div>
                        
                        <div class="story-grid">
                            <div class="story-item">
                                <div class="story-icon"></div>
                                <h4>Mi enfoque</h4>
                                <p>Problemas complejos → Soluciones claras. Código limpio y buenas prácticas siempre.</p>
                            </div>
                            
                            <div class="story-item">
                                <div class="story-icon"></div>
                                <h4>Mi experiencia</h4>
                                <p>Lógica de negocio, bases de datos y arquitectura de microservicios con foco en eficiencia.</p>
                            </div>
                            
                            <div class="story-item">
                                <div class="story-icon"></div>
                                <h4>Mi formación</h4>
                                <p>Autodidacta + Bootcamp intensivo en Generation México. Aprendizaje continuo.</p>
                            </div>
                            
                            <div class="story-item">
                                <div class="story-icon"></div>
                                <h4>Mi motivación</h4>
                                <p>Crecimiento constante, aportar valor y equipos donde la calidad y comunicación importan.</p>
                            </div>
                        </div>
                        
                        <div class="philosophy-quote">
                            <span class="quote-mark"></span>
                            <p>Creo en el código limpio, el trabajo en equipo y la mejora continua</p>
                            <span class="quote-mark"></span>
                        </div>
                    </div>

                <div class="contact-info">
                    <span>ortizdionicio993@gmail.com</span>
                    <span>Toluca, Estado de México</span>
                </div>
                <div class="social-links">
                    <a href="https://github.com/Ferrer-System" target="_blank">GitHub</a>
                    <a href="https://www.linkedin.com/in/francisco-ortiz-dionicio/" target="_blank">LinkedIn</a>
                </div>
            </div>
        `;
        return section;
    }
}