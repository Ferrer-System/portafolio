export class SobreMi {
    render() {
        const section = document.createElement('section');
        section.id = "sobre-mi";
        section.innerHTML = `
            <h2>Sobre mí</h2>
            <div class="card" style="max-width:800px; margin:0 auto;">
                <p><strong>Yo soy Francisco</strong>, desarrollador backend apasionado por Java y Spring Boot. Desde que escribí mi primera línea de código, me di cuenta de que <strong>me encanta</strong> resolver problemas lógicos y construir sistemas robustos.</p>
                <p>Mi historia comenzó con cursos online, luego entré a <strong>Generation México</strong> donde me formé intensivamente en desarrollo Java. Ahora busco un equipo donde pueda aportar mi creatividad y seguir aprendiendo.</p>
                <p><strong>Lo que me motiva:</strong> crear soluciones que impacten positivamente a las personas y automatizar procesos complejos de forma limpia.</p>
                <p><em>"Creo en el código limpio, el trabajo en equipo y la mejora continua"</em></p>
            </div>
        `;
        return section;
    }
}