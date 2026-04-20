export class SobreMi {
  render() {
    const section = document.createElement("section");
    section.id = "sobre-mi";
    section.innerHTML = `
            <h2>Sobre mí</h2>
            <div class="about-container">
                <div class="about-card">
                    <!-- Tarjeta de presentación principal -->
                    <div class="about-hero">
                        <div class="about-icon"></div>
                        <p class="skills-showcase">Desarrollador backend apasionado por la construcción de sistemas sólidos y eficientes.</p>
                    </div>

                    <!-- Grid de habilidades destacadas -->
                    <div class="skills-showcase">
                        
                        <div class="skill-showcase-item">
                            <div class="skill-icon"></div>
                            <div class="skill-text">Trabajo en equipo</div>
                        </div>

                        <div class="skill-showcase-item">
                            <div class="skill-icon"></div>
                            <div class="skill-text">Comunicación efectiva</div>
                        </div>

                        <div class="skill-showcase-item">
                            <div class="skill-icon"></div>
                            <div class="skill-text">Arquitectura escalable</div>
                        </div>

                        <div class="skill-showcase-item">
                            <div class="skill-icon"></div>
                            <div class="skill-text">Buenas prácticas</div>
                        </div>
                        
                        <div class="skill-showcase-item">
                            <div class="skill-icon"></div>
                            <div class="skill-text">Resolución de problemas</div>
                        </div>
                        
                        <div class="skill-showcase-item">
                            <div class="skill-icon"></div>
                            <div class="skill-text">Aprendizaje continuo</div>
                        </div>
                    </div>

                    <!-- Párrafos estilizados -->
                    <div class="about-paragraphs">
                        <div class="paragraph-card">
                            <span class="paragraph-icon"></span>
                            <div class="paragraph-content">
                                <p>Trabajo principalmente con <strong>Java y Spring Boot</strong>, diseñando <strong>APIs seguras, estructuradas y escalables</strong> bajo buenas prácticas de desarrollo.</p>
                            </div>
                        </div>

                        <div class="paragraph-card">
                            <span class="paragraph-icon"></span>
                            <div class="paragraph-content">
                                <p>Me interesa crear <strong>soluciones completas</strong>, por lo que también integro tecnologías frontend para ofrecer <strong>productos funcionales y bien estructurados</strong>.</p>
                            </div>
                        </div>

                        <div class="paragraph-card highlight-card">
                            <span class="paragraph-icon"></span>
                            <div class="paragraph-content">
                                <p>Me encuentro en <strong>constante aprendizaje</strong>, enfocado en mejorar mis habilidades en <strong>arquitectura de software y desarrollo fullstack</strong>.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        `;
    return section;
  }
}
