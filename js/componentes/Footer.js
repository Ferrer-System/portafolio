export class Footer {
    render() {
        const footer = document.createElement('footer');
        footer.className = 'footer';
        footer.innerHTML = `
            <p>© 2026 - Francisco Ortiz Dionicio</p>
            <p>Este sitio usa HTTPS  | <span id="lastUpdate">Última actualización: marzo 2026</span></p>
        `;
        return footer;
    }
}