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
            <div class="card">
                <h3>${title}</h3>
                <p>${desc}</p>
                <p><strong>Tecnologías:</strong> ${tech}</p>
                <!-- ACTUALIZAR: Reemplazar # por enlaces reales de GitHub y Demo -->
                <a href="#" class="btn" target="_blank">Código GitHub</a>
                <a href="#" class="btn" style="background:gray;">Demo</a>
            </div>
        `;
    }
}