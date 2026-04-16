export class Contacto {
    render() {
        const section = document.createElement('section');
        section.id = "contacto";
        section.innerHTML = `
            <h2>Contáctame</h2>
            <div class="contact-form card">
                <form id="formContact">
                    <input type="text" placeholder="Tu nombre" required>
                    <input type="email" placeholder="Tu email" required>
                    <textarea rows="4" placeholder="Escribeme algo..."></textarea>
                    <button type="submit" class="btn">Enviar mensaje</button>
                    <p style="font-size:0.8rem; margin-top:1rem;"></p>
                </form>
                <div style="text-align:center; margin-top:1rem;">
                    <!-- ACTUALIZAR: Email y teléfono reales -->
                    <p><strong>ortizdionicio993@gmail.com</strong> |  +52 729-3285-777</p>
                    <p><a href="#">GitHub</a>  |  <a href="#">LinkedIn</a></p>
                </div>
            </div>
        `;

        const form = section.querySelector('#formContact');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                alert('Gracias por escribirme, te responderé pronto');
                form.reset();
            });
        }
        return section;
    }
}