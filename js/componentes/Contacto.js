export class Contacto {
    render() {
        const section = document.createElement('section');
        section.id = "contacto";
        section.innerHTML = `
            <h2>Contáctame</h2>
            <div class="contact-form card">
                <form id="formContact">
                    <input type="text" id="nombreContacto" placeholder="Tu nombre" required>
                    <input type="email" id="emailContacto" placeholder="Tu email" required>
                    <textarea id="mensajeContacto" rows="4" placeholder="¿En qué puedo ayudarte?" required></textarea>
                    <button type="submit" class="btn" id="btnEnviar">
                        Enviar mensaje
                    </button>
                    <div id="mensajeEstado" style="margin-top:1rem; text-align:center; padding:0.5rem; border-radius:5px;"></div>
                </form>
                <div style="text-align:center; margin-top:1.5rem; padding-top:1rem; border-top:1px solid #eee;">
                    <p><strong>ortizdionicio993@gmail.com</strong></p>
                    <p>Disponible para proyectos freelance</p>
                </div>
            </div>
        `;
        
        this.setupForm(section);
        return section;
    }

    setupForm(section) {
        const form = section.querySelector('#formContact');
        const btn = section.querySelector('#btnEnviar');
        const estado = section.querySelector('#mensajeEstado');
        
        if (!form) return;
        
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const nombre = section.querySelector('#nombreContacto').value.trim();
            const email = section.querySelector('#emailContacto').value.trim();
            const mensaje = section.querySelector('#mensajeContacto').value.trim();
            
            // Validar campos
            if (!nombre || !email || !mensaje) {
                this.mostrarEstado(estado, 'Por favor, completa todos los campos', 'error');
                return;
            }
            
            if (!this.validarEmail(email)) {
                this.mostrarEstado(estado, 'Por favor, ingresa un email válido', 'error');
                return;
            }
            
            // Enviando...
            const textoOriginal = btn.textContent;
            btn.disabled = true;
            btn.textContent = 'Enviando...';
            
            try {
                // Usar FormSubmit.co
                const formData = new FormData();
                formData.append('name', nombre);
                formData.append('email', email);
                formData.append('message', mensaje);
                formData.append('_subject', `Mensaje de ${nombre} - Portafolio`);
                formData.append('_captcha', 'false');
                formData.append('_template', 'table');
                
                const response = await fetch('https://formsubmit.co/ajax/ortizdionicio993@gmail.com', {
                    method: 'POST',
                    body: formData
                });
                
                const data = await response.json();
                
                if (data.success === 'true' || response.ok) {
                    this.mostrarEstado(estado, '¡Mensaje enviado con éxito! Te responderé pronto.', 'success');
                    form.reset();
                } else {
                    throw new Error('Error al enviar');
                }
            } catch (error) {
                console.error('Error:', error);
                // Fallback: abrir mailto
                const mailtoLink = `mailto:ortizdionicio993@gmail.com?subject=${encodeURIComponent(`Mensaje de ${nombre} - Portafolio`)}&body=${encodeURIComponent(`Nombre: ${nombre}\nEmail: ${email}\n\nMensaje:\n${mensaje}`)}`;
                
                const confirmar = confirm('No se pudo enviar automáticamente. ¿Quieres abrir tu correo para enviar el mensaje manualmente?');
                if (confirmar) {
                    window.location.href = mailtoLink;
                    this.mostrarEstado(estado, 'Se abrirá tu cliente de correo para que envíes el mensaje.', 'warning');
                } else {
                    this.mostrarEstado(estado, 'Escríbeme directamente a: ortizdionicio993@gmail.com', 'warning');
                }
            } finally {
                btn.disabled = false;
                btn.textContent = textoOriginal;
                
                // Limpiar mensaje después de 6 segundos
                setTimeout(() => {
                    if (estado.innerHTML) {
                        estado.innerHTML = '';
                        estado.style.background = '';
                    }
                }, 6000);
            }
        });
    }
    
    validarEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
    
    mostrarEstado(elemento, mensaje, tipo) {
        elemento.innerHTML = mensaje;
        
        if (tipo === 'success') {
            elemento.style.background = '#d4edda';
            elemento.style.color = '#155724';
            elemento.style.border = '1px solid #c3e6cb';
        } else if (tipo === 'error') {
            elemento.style.background = '#f8d7da';
            elemento.style.color = '#721c24';
            elemento.style.border = '1px solid #f5c6cb';
        } else {
            elemento.style.background = '#fff3cd';
            elemento.style.color = '#856404';
            elemento.style.border = '1px solid #ffeeba';
        }
    }
}