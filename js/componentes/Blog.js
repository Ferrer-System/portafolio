export class Blog {
    render() {
        const section = document.createElement('section');
        section.id = "blog";
        section.innerHTML = `
            <h2>Blog / Artículos</h2>
            <p style="text-align:center;"><strong>Actualizar al menos 1 vez por semana</strong> (yo, Carlos, lo haré semanalmente)</p>
            <div class="grid">
                ${this.articulo(
                    "Cómo optimizar consultas JPA en Spring Boot",
                    "2025-03-20",
                    "Aprende a evitar n+1 queries y mejorar rendimiento con @EntityGraph..."
                )}
                ${this.articulo(
                    "Mi experiencia en Generation: de novato a junior Java",
                    "2025-03-10",
                    "Comparto mi viaje, retos y cómo logré mi primer empleo como dev..."
                )}
                ${this.articulo(
                    "Comparativa: Maven vs Gradle para proyectos Spring",
                    "2025-02-28",
                    "Ventajas, desventajas y cuál elegir según el tamaño del equipo..."
                )}
            </div>
            <p style="text-align:center; margin-top:1rem;"><strong>Nota:</strong> Estos son artículos de ejemplo. <em>Yo los actualizaré semanalmente con nuevo contenido</em>.</p>
        `;
        return section;
    }

    articulo(titulo, fecha, resumen) {
        return `
            <div class="card">
                <h3>${titulo}</h3>
                <p class="blog-date">${fecha}</p>
                <p>${resumen}</p>
                <a href="#" class="btn" style="background:gray;">Leer más →</a>
            </div>
        `;
    }
}