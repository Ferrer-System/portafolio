export class Proyectos {
    render() {
        const section = document.createElement('section');
        section.id = "proyectos";
        section.innerHTML = `
            <h2>Mis proyectos</h2>
            <div class="grid">
                ${this.card(
                    'API de Gestión de Tareas',
                    'Backend REST con Spring Boot y JWT. Manejo de usuarios, tareas y roles. Desafío: implementar seguridad sin errores. Lo solucioné con Spring Security + filtros personalizados.',
                    'Java, Spring, JWT, MySQL'
                )}
                ${this.card(
                    'E-commerce en Java',
                    'Plataforma de ventas con carrito de compras. Mi contribución: lógica de inventario y pasarela de pagos simulada. Reto: concurrencia al actualizar stock → usé synchronized y optimismo con versiones.',
                    'Java, JDBC, HTML, CSS'
                )}
                ${this.card(
                    'Dashboard IoT (colaborativo)',
                    'Visualización de sensores en tiempo real. Colaboré en el backend WebSocket y la API REST. Aprendí a manejar alta concurrencia.',
                    'Java, Spring Boot, WebSocket, React'
                )}
            </div>
            <p style="text-align:center; margin-top:1rem;">Todos mis códigos están en <strong>GitHub</strong> — ¡revisa los repositorios!</p>
        `;
        return section;
    }

    card(title, desc, tech) {
        return `
            <div class="card project-card">
                <div class="card-content">
                    <h3>${title}</h3>
                    <div class="card-description">
                        <p>${desc}</p>
                        <p class="tech-stack"><strong>Tecnologías:</strong> ${tech}</p>
                    </div>
                </div>
                <div class="card-buttons">
                    <a href="#" class="btn" target="_blank">Código GitHub</a>
                    <a href="#" class="btn btn-secondary" target="_blank">Demo</a>
                </div>
            </div>
        `;
    }
}