export class Footer {
    render() {
        const footer = document.createElement('footer');
        footer.className = 'footer';
        footer.innerHTML = `
            <p>© 2026 - Francisco Ortiz | Hecho con y Java | Mejora continua: <strong>pido feedback a mentores y compañeros</strong> para seguir creciendo.</p>
            <p>Este sitio usa HTTPS (rutas relativas) | <span id="lastUpdate">Última actualización: marzo 2026</span></p>
            <p><strong>Instrucciones para mí:</strong> Actualizar manualmente: contacto, fechas, proyectos nuevos, enlaces de GitHub/LinkedIn y artículos del blog semanalmente.</p>
        `;
        return footer;
    }
}