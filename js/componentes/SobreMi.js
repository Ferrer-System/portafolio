export class SobreMi {
    render() {
        const section = document.createElement('section');
        section.id = "sobre-mi";
        section.innerHTML = `
            <h2>Sobre mí</h2>
            <div class="card" style="max-width:800px; margin:0 auto;">
                <p><strong>Soy Francisco, desarrollador backend especializado en Java y Spring Boot, enfocado en el desarrollo de APIs robustas y sistemas escalables. Me gusta abordar problemas complejos con soluciones claras, aplicando principios de código limpio y buenas prácticas de desarrollo.</strong></p>
                <p><strong>He trabajado en proyectos donde implemento lógica de negocio, manejo de bases de datos y arquitecturas tipo microservicios, buscando siempre eficiencia y mantenibilidad. Mi formación combina aprendizaje autodidacta y entrenamiento intensivo en Generation México, lo que me permitió adaptarme a entornos de trabajo colaborativos.</p>
                <p><strong>Me motiva seguir creciendo como desarrollador, aportar valor en cada proyecto y formar parte de equipos donde la calidad del código, la comunicación y la mejora continua sean una prioridad.</strong></p>
                <p><em>"Creo en el código limpio, el trabajo en equipo y la mejora continua"</em></p>
            </div>
        `;
        return section;
    }
}